import { BubbleTitle } from "./3 steps";
import { sections } from "./data";

export default function Learn() {
	return (
		<div className="flex flex-col">
			<BubbleTitle title="Learn" />

			<div className="flex flex-1 items-center flex-col lg:flex-row">
				<div className="flex flex-col gap-8">
					{sections.map((section) => (
						<div key={section.description} className="space-y-4">
							{section.icon}
							<h2 className="font-semibold h3 uppercase tracking-[0.2em]">
								{section.title}
							</h2>
							<p className="max-w-[60ch] font-light">
								{section.description}
							</p>
						</div>
					))}
				</div>
				<img
					src="/logos/kody/main.png"
					className="max-w-[400px] object-contain"
				/>
			</div>
		</div>
	);
}
