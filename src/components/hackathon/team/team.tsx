// import clsx from "clsx";zx
import { teamData } from "./data";
import Section from "@components/section";
// FINISH MARQUEE EFFECT
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
		<div className="flex background-glass lg:max-w-[350px] py-4 shadow-lg px-5 rounded-[45px]">
			<div className="w-1/2 text-white p-2 rounded-xl w-fit">
				{image}
			</div>
			<div className="flex flex-col">

			<h3 className="mt-6 font-bold h4 uppercase tracking-[0.2em]">
				{title1} <span className="text-glow">{title2}</span>
			</h3>
			<p className="max-w-[60ch] font-light">{description}</p>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<Section>
			<div>
				<div className="text-center uppercase h1 tracking-[0.2em] mb-10">
					The Team
				</div>
				<div className="flex gap-5">
					{teamData.map((card) => (
						<Card key={card.title} {...card} />
					))}
				</div>
			</div>
		</Section>
	);
}
