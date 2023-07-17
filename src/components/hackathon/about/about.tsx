import clsx from "clsx";
import { cardData } from "./data";
import Section from "@components/section";
import Link from "next/link";
import GhostText from "../ghostText";

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

export default function About() {
	return (
		<Section>
			<GhostText content="About the hackathon" intensity="low" />
			<div
				className={clsx(
					"flex justify-between",
					"flex-wrap gap-8",
					"flex-col lg:flex-row"
				)}
			>
				{cardData.map((card) => (
					<Card key={card.title} {...card} />
				))}
			</div>
		</Section>
	);
}
