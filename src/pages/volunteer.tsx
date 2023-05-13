import HomeLayout from "@components/layout";
import Section from "@components/section";
import { jobs, filters } from "@components/volunteer/data";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useState } from "react";

export default function Volunteer() {
	const [filter, setFilter] = useState(filters[0]);
	const [job, setJob] = useState(jobs[0]);

	const filteredJobs =
		filter === "All" ? jobs : jobs.filter((j) => j.type === filter);

	return (
		<>
			<NextSeo title="Volunteer" />
			<HomeLayout>
				<Section>
					<h1 className="h0 font-semibold text-center mb-8">
						Volunteer!
					</h1>
					<div className="flex rounded-xl mb-10 items-center gap-4 justify-center background-glass w-fit px-4 py-2 mx-auto">
						{filters.map((f) => (
							<button
								key={f}
								className={clsx(
									"flex flex-col items-center hover:text-primary px-2 py-1 ",
									f === filter &&
										"text-primary bg-neutral rounded-xl"
								)}
								onClick={() => setFilter(f)}
							>
								<h2 className="h5 font-semibold">{f}</h2>
							</button>
						))}
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-[90%] max-w-[1200px] mx-auto">
						<div className="background-glass rounded-xl space-y-2 whitespace-pre-wrap">
							{filteredJobs.map((j, i) => (
								<button
									key={j.title + i}
									className={clsx(
										"flex flex-col gap-2 p-4 rounded-xl w-full",
										"hover:text-white",
										j.link === job.link &&
											"background-gradient hover:text-white"
									)}
									onClick={() => setJob(j)}
								>
									<h2 className="h4 font-semibold">
										{j.title}
									</h2>
									<h3 className="h5">{j.subTitle}</h3>
								</button>
							))}
							{filteredJobs.length === 0 && (
								<div>
									<h1 className="h4 font-semibold mx-auto p-4">
										No jobs found. Check back later!
									</h1>
								</div>
							)}
						</div>
						<div className="flex flex-col gap-4">
							<h1 className="h2 font-semibold">{job.title}</h1>
							<h2 className="h3">{job.subTitle}</h2>
							<p className="text-lg whitespace-pre-wrap">
								{job.description}
							</p>

							<Link
								href={job.link}
								className="btn btn-primary w-fit"
							>
								Apply Now
							</Link>
						</div>
					</div>
				</Section>
			</HomeLayout>
		</>
	);
}
