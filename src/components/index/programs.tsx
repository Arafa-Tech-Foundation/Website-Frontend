import Section from "@components/section";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const programs: {
	title: string;
	icon: IconProp;
}[] = [
	{
		title: "Supportive Community",
		icon: "graduation-cap",
	},
	{
		title: "Courses",
		icon: "graduation-cap",
	},
	{
		title: "Hands-On Experience",
		icon: "graduation-cap",
	},
	{
		title: "Personalized Support",
		icon: "graduation-cap",
	},
	{
		title: "Collaborate",
		icon: "graduation-cap",
	},
	{
		title: "Comprehensive Education",
		icon: "graduation-cap",
	},
];

export default function Programs() {
	return (
		<Section className="bg-base-200">
			<div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
				<div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left flex flex-col gap-4">
					<h2 className="text-3xl font-bold sm:text-4xl text-primary">
						Why Choose Us?
					</h2>
					<p>
						Arafa Tech provides unique opportunities for
						underprivileged students to learn coding, with a
						hands-on approach and supportive community. Our goal is
						to create access and opportunity for all, setting us
						apart in the world of coding education.
					</p>
					<a className="btn btn-primary gap-2 w-fit" href="/register">
						Get Started
						<svg
							className="ml-3 h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</div>
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
					{programs.map((program) => (
						<Program
							key={program.title}
							title={program.title}
							icon={program.icon}
						/>
					))}
				</div>
			</div>
		</Section>
	);
}

function Program({
	title,
	icon,
	href,
}: {
	href?: string;
	title: string;
	icon: IconProp;
}) {
	return (
		<a
			className="block rounded-xl border border-neutral p-4 hover:shadow-lg"
			href={href || undefined}
		>
			<span className="inline-block rounded-lg bg-base-300 p-3">
				<FontAwesomeIcon icon={icon} />
			</span>
			<h2 className="mt-2 font-bold">{title}</h2>
		</a>
	);
}
