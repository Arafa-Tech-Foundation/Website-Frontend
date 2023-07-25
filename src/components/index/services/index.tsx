import Section from "@components/section";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Testimonial from "../testimonial";

export default function Services() {
	return (
		<Section className="py-32">
			<div className="text-center mb-10 sm:mb-20 max-w-4xl mx-auto">
				<h3 className="uppercase mb-2">Services</h3>
				<h1 className="h-large font-extrabold mb-8 text-black">
					Work with us to <br />
					build a better future
				</h1>
				<p className="h3 text-gray-500 mb-4">
					Explore our comprehensive range of services tailored to meet
					your needs, backed by expertise and a passion for delivering
					exceptional results.
				</p>
				<Link className="text-primary group h4" href="/leadership">
					Meet the team
					<FontAwesomeIcon
						className="ml-2 group-hover:translate-x-2 transition-transform"
						icon={faChevronRight}
					/>
				</Link>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-20">
				{sections.map((section) => (
					<div className="text-center flex flex-col">
						<h2 className="font-bold h3 text-black mb-2">
							{section.title}
						</h2>
						<p className="text-gray-500 mb-2">
							{section.description}
						</p>
						<Link
							className="text-primary group mt-auto"
							href={section.link}
						>
							{section.linkText}
							<FontAwesomeIcon
								className="ml-2 group-hover:translate-x-2 transition-transform"
								icon={faChevronRight}
							/>
						</Link>
					</div>
				))}
			</div>
			<Testimonial
				quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quo officiis distinctio id? Incidunt asperiores commodi sed temporibus qui fuga magni delectus eaque?"
				name="John Doe"
				title="Founder of CodeDay"
				image="https://avatars.githubusercontent.com/u/59715513?v=4"
				className="from-[#a889fe]/80 via-[#8c7ef9]/80 to-[#8c92f0]/80 bg-gradient-to-t"
			/>
		</Section>
	);
}

const sections = [
	{
		title: "Coding courses",
		description:
			"Arafa Tech offers a variety of coding courses for students of all skill levels.",
		link: "/courses",
		linkText: "Explore Courses",
	},
	{
		title: "Mentorship program",
		description:
			"Join our mentorship program to get paired with an experienced mentor",
		link: "/mentorship",
		linkText: "Apply to be a Mentee",
	},
	{
		title: "Workshops",
		description:
			"Attend our workshops to learn about a variety of topics in computer science.",
		link: "/workshops",
		linkText: "Browse Workshops",
	},
	{
		title: "Volunteer",
		description:
			"Volunteer with us to help us create a better future for our community.",
		link: "/volunteer",
		linkText: "See Opportunities",
	},
];
