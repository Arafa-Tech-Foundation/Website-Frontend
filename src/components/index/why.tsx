import Section from "@components/section";
import {
	faBell,
	faMagnifyingGlass,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Why() {
	return (
		<Section>
			<svg
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				className="svg-settings w-0 h-0"
			>
				<defs>
					<linearGradient id="linear">
						<stop
							style={{
								stopColor: "hsl(var(--p))",
							}}
							offset="0%"
						/>
						<stop
							style={{
								stopColor: "hsl(var(--s))",
							}}
							offset="100%"
						/>
					</linearGradient>
				</defs>
			</svg>
			<h2 className="text-center text-4xl mb-20">Why Arafa Tech?</h2>
			<div className="flex flex-1">
				<div className="flex gap-10">
					<div className="flex flex-col justify-between">
						{sections.map((section, index) => (
							<div
								key={section.description}
								className="flex flex-col justify-center items-center"
							>
								{index == sections.length - 1 && (
									<div className="bg-primary-content w-1 h-full" />
								)}
								{index == sections.length - 1 && (
									<div className="flex-1 bg-primary-content w-1" />
								)}
								<div className="flex items-center gap-4">
									<div className="flex items-center justify-center w-16 h-16 rounded-full text-primary-content bg-gradient-to-r from-primary to-secondary shadow-[0_0px_20px_-2.5px_hsl(var(--p))]">
										{index + 1}
									</div>
								</div>
								{/* Add a line connecting to the next circle */}
								{index == 0 && (
									<>
										<div className="bg-primary-content w-1 h-full" />
									</>
								)}
							</div>
						))}
					</div>

					<div className="flex flex-col gap-8">
						{sections.map((section) => (
							<div
								key={section.description}
								className="space-y-4"
							>
								<FontAwesomeIcon
									icon={section.icon}
									size="3x"
									fill="url(#linear)"
								/>
								<h3 className="bold text-3xl ">
									{section.title}
								</h3>
								<p className="max-w-[60ch] font-light">
									{section.description}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-1">
					<img src="/logos/main.png" alt="Why Arafa Tech" />
				</div>
			</div>
		</Section>
	);
}

const sections = [
	{
		title: (
			<>
				Learn From Our{" "}
				<span className="text-gradient text-shadow font-bold">
					Free
				</span>{" "}
				Courses
			</>
		),
		description:
			"Join our friendly community committed to providing coding education and mentorship to underprivileged students. Learn valuable technical skills, expand your network, and make new friends.",
		icon: faUser,
	},
	{
		title: (
			<>
				Place{" "}
				<span className="text-gradient text-shadow font-bold">
					Holder
				</span>
			</>
		),
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
		icon: faMagnifyingGlass,
	},
	{
		title: (
			<>
				Place{" "}
				<span className="text-gradient text-shadow font-bold">
					Holder
				</span>
			</>
		),
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
		icon: faBell,
	},
];
