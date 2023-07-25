import Section from "@components/section";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { CourseMeta } from "types";

export default function CoursesView({
	title,
	courses,
}: {
	title: string;
	courses: CourseMeta[];
}) {
	return (
		<Section id="courses" className="bg-neutral text-gray-400 pt-40">
			<div className="max-w-xl mx-auto text-center mb-20">
				<h1 className="h-large font-semibold text-white">{title}</h1>
			</div>

			<div className="container grid grid-cols-3 my-4 mx-auto gap-6">
				{courses.map((course, i) => (
					<Link
						href={`/courses/${course.name}`}
						key={course.name}
						className={clsx(
							i === 0 && "col-span-2",
							i === 3 && "col-span-2",
							i === 4 && "col-span-2",
							"bg-neutral-card p-8 border-gray-500/30 border-[0.0625rem] rounded-lg",
							"hover:bg-primary-500/10 transition-colors",
							"flex flex-col gap-4"
						)}
					>
						<img
							className="w-12 h-12 mb-4"
							src={`https://raw.githubusercontent.com/Arafa-Tech-Foundation/Courses/main/${course.name}/static/icon.svg`}
							alt="Icon"
						/>
						<div className="mb-4">
							<div>
								<h2 className="h3 text-white font-bold">
									{course.title}
								</h2>
								<p className="text-sm">{course.description}</p>
							</div>
						</div>
						<h5 className="text-primary group h5 mt-auto flex gap-2 items-center">
							Let's see the course
							<FontAwesomeIcon
								className="group-hover:translate-x-1 transition-transform"
								icon={faChevronRight}
							/>
						</h5>
					</Link>
				))}
			</div>
		</Section>
	);
}
