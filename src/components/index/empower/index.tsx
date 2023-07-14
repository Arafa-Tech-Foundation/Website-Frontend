import clsx from "clsx";
import { cardData } from "./data";
import Section from "@components/section";
import Link from "next/link";
import { motion } from "framer-motion";

function Card({
	title,
	description,
	image,
	button,
}: {
	title: string;
	description: string;
	image: JSX.Element;
	button: string;
}) {
	const [title1, title2] = title.split("!");
	return (
		<div className="w-[90%] mx-auto lg:w-full lg:max-w-[300px]">
			<div>{image}</div>
			<h3 className="h3 tracking-widest my-4">
				{title1}
				<span className="text-glow">{title2}</span>
			</h3>
			<p>{description}</p>
			{button && (
				<Link href="/discord" className="btn btn-primary mt-4 btn-wide">
					{button}
				</Link>
			)}
		</div>
	);
}

export default function Empower() {
	return (
		<Section className="my-10">
			<motion.h1
				initial={{ y: -10, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2, delay: 0.3 }}
				viewport={{ once: true }}
				className="text-center uppercase h2 tracking-[0.2em] mb-10"
			>
				Empowering the Future
			</motion.h1>
			<div
				className={clsx(
					"flex justify-between",
					"flex-wrap gap-8",
					"flex-col lg:flex-row"
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
		</Section>
	);
}
