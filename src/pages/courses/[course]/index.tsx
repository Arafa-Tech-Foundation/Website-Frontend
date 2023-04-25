import HomeLayout from "@components/layout";
import Section from "@components/section";
import UnderConstruction from "@components/underConstruction";
import { getCourse } from "@pages/api/courses/[course]";
import { getCourseList } from "@pages/api/courses/list";
import { GetStaticPathsResult } from "next";
import { NextSeo } from "next-seo";
import { CourseMeta } from "types";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardAlt, faStopwatch } from "@fortawesome/free-solid-svg-icons";

export default function Courses({ course }: { course: CourseMeta }) {
	const prettyCourseName =
		course.name.charAt(0).toUpperCase() + course.name.substring(1);
	return (
		<>
			<NextSeo title={prettyCourseName} />
			<HomeLayout>
				<Section>
					<div className="flex">
						<div className="flex flex-col justify-center gap-4">
							<h1 className="text-3xl font-bold">
								{prettyCourseName}
							</h1>

							<h2 className="uppercase text-gradient font-bold">
								Course Outline
							</h2>

							<ol className="list bg-base-300 px-4 py-2 rounded">
								{course.modules.map((module) => (
									<li key={module.name}>
										<NextLink
											href={`/courses/${course.name}/${module.lessons[0].name}`}
											className="hover:underline"
										>
											{module.name}
										</NextLink>
									</li>
								))}
							</ol>

							{/* <h3 className="uppercase text-gradient font-bold">
								You Will Get
							</h3>	 */}

							<NextLink
								className="btn btn-primary"
								href={`/courses/${course.name}/${course.modules[0].lessons[0].name}`}
							>
								Get Started
							</NextLink>
						</div>
						<div className="px-4 py-2">
							<h2 className="uppercase text-gradient font-bold">
								Code With Kody!
							</h2>
							<h1 className="text-5xl font-bold">
								{course.type === "essential"
									? "Introduction to"
									: "Advanced"}
								{` ${prettyCourseName}`}
							</h1>

							<p className="mt-4">{course.description}</p>
							<div className="flex gap-4 mt-4">
								<div className="flex items-center justify-center gap-2">
									<FontAwesomeIcon
										icon={faStopwatch}
										className="text-primary"
										size="xl"
									/>
									<p>
										{course.minutes / 60} hour
										{course.minutes / 60 != 1 && "s"}
									</p>
								</div>
								<div className="flex items-center justify-center gap-2">
									<FontAwesomeIcon
										icon={faIdCardAlt}
										className="text-primary"
										size="xl"
									/>
									<p>
										Instructed by
										<span className="text-gradient font-semibold">
											{" "}
											{"Hazim O. Arafa"}
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</Section>
				<UnderConstruction />
			</HomeLayout>
		</>
	);
}

export async function getStaticProps({
	params,
}: {
	params: { course: string };
}) {
	const course = await getCourse(params.course as string);

	return {
		props: {
			course,
		},
	};
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
	const courses = await getCourseList();

	return {
		paths: courses.map((course) => ({ params: { course: course.name } })),
		fallback: "blocking",
	};
}
