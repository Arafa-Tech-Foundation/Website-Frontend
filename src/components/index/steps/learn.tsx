import { sections } from "./data";
import StepLayout from "./layout";

export default function Learn() {
	return (
		<StepLayout title="Learn" number={1}>
			<div className="flex flex-1 items-center flex-col lg:flex-row pb-8">
				<div className="flex flex-col lg:flex-row gap-8">
					{sections.map((section) => (
						<div key={section.description} className="space-y-4">
							{section.icon}
							<h2 className="h3 lowercase text-white">
								learn.
								<span className="text-glow">
									{section.title}
								</span>
							</h2>
							<p className="max-w-[60ch] font-light">
								{section.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</StepLayout>
	);
}
