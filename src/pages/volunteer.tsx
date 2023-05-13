import HomeLayout from "@components/layout";
import Section from "@components/section";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import { useState } from "react";

const filters = [
	"All",
	"Development",
	"Design",
	"Marketing",
	"Social Media",
	"Other",
];

const jobs = [
	{
		title: "Web Developer",
		subTitle: "SDFSDF",
		description: `UI/UX Designers are in charge of designing front end architecture and user interfaces for our platforms. As a designer, this role offers you the opportunity to develop creative solutions to our user’s experiences with us.

What are we looking for?
• Strong understanding of branding, web design, and graphic design• Access to and ability to use digital design software (ex. Figma, Canva, etc.)• Minimal understanding of marketing strategy• Ability to communicate effectively both verbally and in writing• Good organization and time management skills• Communicate and collaborate regularly with team members and supervisors• Attend all required meetings• Adhere to staff and company policies• Willingness to learn and develop skills pertaining to website design
Job details

• Design front end architecture and user interfaces for our platforms• Conduct research and review designs to improve user interaction• Work collaboratively with backend developers and project managers• Adhere to the School Simplified’s brand guidelines• Attend all required meetings and adhere to staff regulations• Dedicate at least 3 hours per week to the position (Note: time commitment fluctuates depending on frequency of projects and requests)`,
		type: "Development",
		link: "/volunteer/apply/development/1",
	},
	{
		title: "Web Developer",
		subTitle: "SDFSDF",
		description: `UI/UX Designers are in charge of designing front end architecture and user interfaces for our platforms. As a designer, this role offers you the opportunity to develop creative solutions to our user’s experiences with us.

What are we looking for?
• Strong understanding of branding, web design, and graphic design• Access to and ability to use digital design software (ex. Figma, Canva, etc.)• Minimal understanding of marketing strategy• Ability to communicate effectively both verbally and in writing• Good organization and time management skills• Communicate and collaborate regularly with team members and supervisors• Attend all required meetings• Adhere to staff and company policies• Willingness to learn and develop skills pertaining to website design
Job details

• Design front end architecture and user interfaces for our platforms• Conduct research and review designs to improve user interaction• Work collaboratively with backend developers and project managers• Adhere to the School Simplified’s brand guidelines• Attend all required meetings and adhere to staff regulations• Dedicate at least 3 hours per week to the position (Note: time commitment fluctuates depending on frequency of projects and requests)`,
		type: "Development",
		link: "/volunteer/apply/development/2",
	},
	{
		title: "UX Designer",
		subTitle: "SDFSDF",
		description: `UI/UX Designers are in charge of designing front end architecture and user interfaces for our platforms. As a designer, this role offers you the opportunity to develop creative solutions to our user’s experiences with us.

What are we looking for?
• Strong understanding of branding, web design, and graphic design• Access to and ability to use digital design software (ex. Figma, Canva, etc.)• Minimal understanding of marketing strategy• Ability to communicate effectively both verbally and in writing• Good organization and time management skills• Communicate and collaborate regularly with team members and supervisors• Attend all required meetings• Adhere to staff and company policies• Willingness to learn and develop skills pertaining to website design
Job details

• Design front end architecture and user interfaces for our platforms• Conduct research and review designs to improve user interaction• Work collaboratively with backend developers and project managers• Adhere to the School Simplified’s brand guidelines• Attend all required meetings and adhere to staff regulations• Dedicate at least 3 hours per week to the position (Note: time commitment fluctuates depending on frequency of projects and requests)`,
		type: "Design",
		link: "/volunteer/apply/design/1",
	},
	{
		title: "UX Designer",
		subTitle: "SDFSDF",
		description: `UI/UX Designers are in charge of designing front end architecture and user interfaces for our platforms. As a designer, this role offers you the opportunity to develop creative solutions to our user’s experiences with us.

What are we looking for?
• Strong understanding of branding, web design, and graphic design• Access to and ability to use digital design software (ex. Figma, Canva, etc.)• Minimal understanding of marketing strategy• Ability to communicate effectively both verbally and in writing• Good organization and time management skills• Communicate and collaborate regularly with team members and supervisors• Attend all required meetings• Adhere to staff and company policies• Willingness to learn and develop skills pertaining to website design
Job details

• Design front end architecture and user interfaces for our platforms• Conduct research and review designs to improve user interaction• Work collaboratively with backend developers and project managers• Adhere to the School Simplified’s brand guidelines• Attend all required meetings and adhere to staff regulations• Dedicate at least 3 hours per week to the position (Note: time commitment fluctuates depending on frequency of projects and requests)`,
		type: "Design",
		link: "/volunteer/apply/design/2",
	},
	{
		title: "Marketing Manager",
		subTitle: "SDFSDF",
		description: `UI/UX Designers are in charge of designing front end architecture and user interfaces for our platforms. As a designer, this role offers you the opportunity to develop creative solutions to our user’s experiences with us.

What are we looking for?
• Strong understanding of branding, web design, and graphic design• Access to and ability to use digital design software (ex. Figma, Canva, etc.)• Minimal understanding of marketing strategy• Ability to communicate effectively both verbally and in writing• Good organization and time management skills• Communicate and collaborate regularly with team members and supervisors• Attend all required meetings• Adhere to staff and company policies• Willingness to learn and develop skills pertaining to website design
Job details

• Design front end architecture and user interfaces for our platforms• Conduct research and review designs to improve user interaction• Work collaboratively with backend developers and project managers• Adhere to the School Simplified’s brand guidelines• Attend all required meetings and adhere to staff regulations• Dedicate at least 3 hours per week to the position (Note: time commitment fluctuates depending on frequency of projects and requests)`,
		type: "Marketing",
		link: "/volunteer/apply/marketing/1",
	},
	{
		title: "Marketing Manager",
		subTitle: "SDFSDF",
		description: `UI/UX Designers are in charge of designing front end architecture and user interfaces for our platforms. As a designer, this role offers you the opportunity to develop creative solutions to our user’s experiences with us.

What are we looking for?
• Strong understanding of branding, web design, and graphic design• Access to and ability to use digital design software (ex. Figma, Canva, etc.)• Minimal understanding of marketing strategy• Ability to communicate effectively both verbally and in writing• Good organization and time management skills• Communicate and collaborate regularly with team members and supervisors• Attend all required meetings• Adhere to staff and company policies• Willingness to learn and develop skills pertaining to website design
Job details

• Design front end architecture and user interfaces for our platforms• Conduct research and review designs to improve user interaction• Work collaboratively with backend developers and project managers• Adhere to the School Simplified’s brand guidelines• Attend all required meetings and adhere to staff regulations• Dedicate at least 3 hours per week to the position (Note: time commitment fluctuates depending on frequency of projects and requests)`,
		type: "Marketing",
		link: "/volunteer/apply/marketing/2",
	},
	{
		title: "Social Media Manager",
		subTitle: "SDFSDF",
		description: `UI/UX Designers are in charge of designing front end architecture and user interfaces for our platforms. As a designer, this role offers you the opportunity to develop creative solutions to our user’s experiences with us.

What are we looking for?
• Strong understanding of branding, web design, and graphic design• Access to and ability to use digital design software (ex. Figma, Canva, etc.)• Minimal understanding of marketing strategy• Ability to communicate effectively both verbally and in writing• Good organization and time management skills• Communicate and collaborate regularly with team members and supervisors• Attend all required meetings• Adhere to staff and company policies• Willingness to learn and develop skills pertaining to website design
Job details

• Design front end architecture and user interfaces for our platforms• Conduct research and review designs to improve user interaction• Work collaboratively with backend developers and project managers• Adhere to the School Simplified’s brand guidelines• Attend all required meetings and adhere to staff regulations• Dedicate at least 3 hours per week to the position (Note: time commitment fluctuates depending on frequency of projects and requests)`,
		type: "Social Media",
		link: "/volunteer/apply/social-media/1",
	},
	{
		title: "Social Media Manager",
		subTitle: "SDFSDF",
		description: `UI/UX Designers are in charge of designing front end architecture and user interfaces for our platforms. As a designer, this role offers you the opportunity to develop creative solutions to our user’s experiences with us.

What are we looking for?
• Strong understanding of branding, web design, and graphic design• Access to and ability to use digital design software (ex. Figma, Canva, etc.)• Minimal understanding of marketing strategy• Ability to communicate effectively both verbally and in writing• Good organization and time management skills• Communicate and collaborate regularly with team members and supervisors• Attend all required meetings• Adhere to staff and company policies• Willingness to learn and develop skills pertaining to website design
Job details

• Design front end architecture and user interfaces for our platforms• Conduct research and review designs to improve user interaction• Work collaboratively with backend developers and project managers• Adhere to the School Simplified’s brand guidelines• Attend all required meetings and adhere to staff regulations• Dedicate at least 3 hours per week to the position (Note: time commitment fluctuates depending on frequency of projects and requests)`,
		type: "Social Media",
		link: "/volunteer/apply/social-media/2",
	},
];

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
					<div className="flex rounded-xl items-center gap-4 justify-center background-glass w-fit px-4 py-2 mx-auto">
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
				</Section>
				<Section>
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
							<p className="text-lg">{job.description}</p>
						</div>
					</div>
				</Section>
			</HomeLayout>
		</>
	);
}
