import HomeLayout from "@components/layout";
import Section from "@components/section";
import { getCourse } from "@pages/api/courses/[course]";
import { getCourseList } from "@pages/api/courses/list";
import { GetStaticPathsResult } from "next";
import { NextSeo } from "next-seo";
import { CourseMeta } from "types";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faCertificate,
	faCheck,
	faGlasses,
	faIdCardAlt,
	faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

export default function Courses({ course }: { course: CourseMeta }) {
	const prettyCourseName =
		course.name.charAt(0).toUpperCase() + course.name.substring(1);
	// each lesson is 30 minutes
	const courseHours = course.modules.reduce(
		(acc, module) => acc + module.lessons.reduce((acc) => acc + 0.5, 0),
		0
	);
	return (
		<>
			<NextSeo title={prettyCourseName} />
			<HomeLayout>
				<Section className="mt-20 mb-40">
					<div className="flex gap-8">
						<div className="flex flex-col justify-center gap-4">
							<h1 className="text-3xl font-bold">
								{prettyCourseName}
							</h1>

							<h2 className="uppercase font-bold">
								Course Outline
							</h2>

							<ol className="list bg-gray-100 px-4 py-2 rounded-lg">
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

							<h2 className="uppercase  font-bold">
								You Will Get
							</h2>
							<div className="flex flex-col gap-4">
								<div className="flex gap-4">
									<FontAwesomeIcon
										icon={faGlasses}
										className="text-primary"
										size="xl"
									/>
									<p>Basic understanding of {course.name}</p>
								</div>
								<div className="flex gap-4">
									<FontAwesomeIcon
										icon={faCertificate}
										className="text-primary"
										size="xl"
									/>
									<p>
										Familiarity with the {course.name}{" "}
										ecosystem{" "}
									</p>
								</div>
								<div className="flex gap-4">
									<FontAwesomeIcon
										icon={faBriefcase}
										className="text-primary"
										size="xl"
									/>
									<p>
										Ability to build {course.name} projects
									</p>
								</div>
							</div>

							<NextLink
								className="btn btn-primary mt-4"
								href={`/courses/${course.name}/${course.modules[0].lessons[0].name}`}
							>
								Get Started
							</NextLink>
						</div>
						<div className=" bg-neutral text-gray-300 px-8 py-12 flex-1 rounded-lg">
							<h2 className="uppercase  font-bold">
								Code With Kody!
							</h2>
							<h1 className="h1 text-white font-bold">
								{course.title}
							</h1>

							<p className="mt-4">{course.description}</p>
							<div className="flex gap-4 mt-4 ">
								<div className="flex items-center justify-center gap-2">
									<FontAwesomeIcon
										icon={faStopwatch}
										className="text-primary"
										size="xl"
									/>
									<p>
										{courseHours} hour
										{courseHours != 1 && "s"},{" "}
										{course.modules
											.map(
												(module) =>
													module.lessons.length
											)
											.reduce((a, b) => a + b)}{" "}
										lessons
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
										<span className="font-semibold">
											{" "}
											{course.instructor}
										</span>
									</p>
								</div>
							</div>
							<h2 className="font-bold text-white mt-8 text-lg">
								This Course is for you
							</h2>
							<p className="mt-1">
								Join our Python course today! Designed for
								beginners, our course will teach you the
								fundamentals of Python in a practical and
								engaging way. With the guidance of our
								experienced instructors and the support of a
								vibrant community, you'll develop the skills you
								need to pursue a career in tech.
							</p>

							<div className="mt-8 bg-neutral-card text-white rounded-lg px-2 py-4">
								<h2 className="uppercase text-center font-bold">
									What you will learn
								</h2>
								{course.skills.map((skill) => (
									<div
										key={skill}
										className="flex items-center gap-4 p-2"
									>
										<FontAwesomeIcon
											icon={faCheck}
											className="text-primary"
											size="xl"
										/>
										<p>{skill}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</Section>
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
		revalidate: 3600,
	};
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
	const courses = await getCourseList();

	return {
		paths: courses.map((course) => ({ params: { course: course.name } })),
		fallback: "blocking",
	};
}
