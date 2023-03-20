import clsx from "clsx";
import Link from "next/link";
import { CourseMeta } from "types";

export default function CoursesView({
	title,
	description,
	courses,
}: {
	title: string;
	description: string;
	courses: CourseMeta[];
}) {
	return (
		<section className="my-4">
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-4xl font-semibold">{title}</h1>
				<p className="my-2">{description}</p>
			</div>

			<div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-4 mx-auto gap-6">
				{courses.map((courseMeta) => (
					<Link
						key={courseMeta.course}
						className={clsx(
							"col-span-1 border-primary flex flex-col justify-center items-center h-[300px]",
							"p-5 rounded-xl relative from-[#4a4a54] to-[#272733] bg-gradient-to-r",
							"hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
						)}
						href={`/courses/${courseMeta.course}/${courseMeta.modules?.[0]?.lessons?.[0]?.name}`}
					>
						<img
							className="w-12 grayscale"
							src={`https://raw.githubusercontent.com/Arafa-Tech-Foundation/Courses/main/${courseMeta.course}/static/icon.svg`}
							alt="Icon"
						/>
						<div className="w-full flex absolute bottom-0 p-4 items-center justify-between">
							<div>
								<h2 className="text-lg font-bold">
									{courseMeta.title}
								</h2>
								<p className="text-sm">
									{courseMeta.description}
								</p>
							</div>
							<h3 className="whitespace-nowrap font-semibold pl-2">
								{Math.round(courseMeta.minutes / 60)}{" "}
								{Math.round(courseMeta.minutes / 60) > 1
									? "Hours"
									: "Hour"}
							</h3>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
