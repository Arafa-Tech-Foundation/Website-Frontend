interface GhostTextProps {
	content: string;
	intensity: "low" | "high";
}

export default function GhostText({ content, intensity }: GhostTextProps) {
	return (
		<div
			className={`flex flex-col uppercase text-center before:content-[attr(data-content)] after:content-[attr(data-content)]  after:text-outline before:text-outline after:text-base-100 before:text-base-100 after:text-opacity-90 before:text-opacity-90 before:translate-y-16 after:-translate-y-16 text-space tracking-[0.2em] ${
				intensity == "high"
					? "text-5xl lg:text-7xl lg:before:translate-y-12 lg:after:-translate-y-12 before:translate-y-16 after:-translate-y-16"
					: "text-2xl lg:text-4xl lg:before:translate-y-11 lg:after:-translate-y-11 before:translate-y-16 after:-translate-y-16"
			}`}
			data-content={content}
		>
			<span className="z-10">{content}</span>
		</div>
	);
}
