import clsx from "clsx";
import { cardData } from "./data";
import Section from "@components/section";
import Link from "next/link";
import { motion } from "framer-motion";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Testimonial from "../testimonial";

function Card({
	title,
	description,
	image,
}: {
	title: string;
	description: string;
	image: JSX.Element;
}) {
	const [title1, title2] = title.split("!");
	return (
		<div className="text-center">
			<div className="w-24 h-24 text-white p-8 mx-auto bg-gradient-to-r rounded-full from-primary-500 to-primary-400 flex justify-center items-center">
				{image}
			</div>
			<h3 className="h3 my-1 font-semibold">
				{title1}
				<span className="text-primary">{title2}</span>
			</h3>
			<p className="text-gray-500 h4">{description}</p>
		</div>
	);
}

export default function Empower() {
	return (
		<Section className="my-10">
			<div className="text-center mb-10 max-w-4xl mx-auto">
				<h3 className="uppercase mb-2">Welcome</h3>
				<h1 className="h-large font-extrabold mb-8">
					We empower students to <br />
					<span className="text-primary">build the future</span>
				</h1>
				<Link className="text-primary group h4" href="/about">
					Learn more about our mission
					<FontAwesomeIcon
						className="ml-2 group-hover:translate-x-2 transition-transform"
						icon={faChevronRight}
					/>
				</Link>
			</div>
			<div
				className={clsx(
					"grid grid-cols-1 sm:grid-cols-3 gap-16",
					"mb-20"
				)}
			>
				{cardData.map((card, i) => (
					<motion.div
						initial={{ y: -20, opacity: 0 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, delay: 0.2 * i + 0.2 }}
						viewport={{ once: true }}
					>
						<Card key={card.title} {...card} />
					</motion.div>
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
