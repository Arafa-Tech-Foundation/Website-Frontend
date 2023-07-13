import clsx from "clsx";
import { speakerData } from "./data";
import Section from "@components/section";

function Card({
	title,
	subtitle,
	description,
	image,
}: {
	title: string;
	subtitle: string;
	description: string;
	image: JSX.Element;
}) {
	const [title1, title2] = title.split("!");

	return (
		<div className="w-[90%] mx-auto lg:w-full lg:max-w-[400px]">
			<div className="flex py-8">
				<div className="rounded-full w-1/3 shadow-md">{image}</div>
				<div className="flex flex-col p-7">
					<h3 className="font-bold h3 tracking-widest ">
						{title1}
						<span className="text-glow">{title2}</span>
					</h3>
					<h4 className="h4 ">{subtitle}</h4>
				</div>
			</div>
			<div className="text-md">{description}</div>
		</div>
	);
}

export default function About() {
	return (
		<Section>
			<h1 className="text-center uppercase h1 tracking-[0.2em] mb-10">
				Guest Speakers
			</h1>
			<div
				className={clsx(
					"flex justify-between",
					"flex-wrap gap-6",
					"flex-col lg:flex-row"
				)}
			>
				{speakerData.map((card) => (
					<Card key={card.title} {...card} />
				))}
			</div>
		</Section>
	);
}
