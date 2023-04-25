import {
	faBell,
	faMagnifyingGlass,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BubbleTitle } from "./3 steps";

export default function Learn() {
	return (
		<div className="flex flex-col">
			<BubbleTitle title="Learn" />

			<div className="flex flex-1">
				<div className="flex flex-col gap-8">
					{sections.map((section) => (
						<div key={section.description} className="space-y-4">
							<FontAwesomeIcon
								icon={section.icon}
								size="3x"
								className="text-primary"
								/* TODO: Make the icon background gradient */
							/>
							<h2 className="font-semibold h3 uppercase tracking-[0.2em]">
								{section.title}
							</h2>
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
				<span className="text-gradient text-shadow-sm font-bold">
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
				<span className="text-gradient text-shadow-sm font-bold">
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
				<span className="text-gradient text-shadow-sm font-bold">
					Holder
				</span>
			</>
		),
		description:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 2",
		icon: faBell,
	},
];
