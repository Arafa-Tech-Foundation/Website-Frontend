import {
	faBell,
	faMagnifyingGlass,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Develop() {
	return (
		<div className="flex flex-col">
			{/* <svg
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
			</svg> */}
			<div className="flex flex-1">
				<div className="flex flex-1">
					<img src="/logos/main.png" alt="Why Arafa Tech" />
				</div>
				<div className="flex flex-col gap-8">
					{sections.map((section) => (
						<div key={section.description} className="space-y-4">
							<FontAwesomeIcon
								icon={section.icon}
								size="3x"
								fill="url(#linear)"
							/>
							<h3 className="bold text-3xl ">{section.title}</h3>
							<p className="max-w-[60ch] font-light">
								{section.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
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
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 1",
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
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 2",
		icon: faBell,
	},
];
