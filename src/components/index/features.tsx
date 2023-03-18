import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPeopleGroup,
	faPersonChalkboard,
	faEarthAmericas,
	faBookAtlas,
	faGraduationCap,
	faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";
import Section from "@components/section";

export default function Features() {
	const featureCards = [
		{
			title: "Coding Education for All",
			description:
				"Join our friendly community committed to providing coding education and mentorship to underprivileged students. Learn valuable technical skills, expand your network, and make new friends.",
			icon: faPeopleGroup,
		},
		{
			title: "Mentorship: The Key to Success",
			description:
				"Our mentorship initiative pairs experienced tech professionals with underprivileged students, providing guidance and support to succeed in the tech industry. Join us and benefit from valuable mentorship opportunities.",
			icon: faPersonChalkboard,
		},
		{
			title: "Real-World Projects and Challenges",
			description:
				"Gain real-world experience by working on projects and challenges that simulate real-world scenarios. Join us and develop valuable skills to prepare for a successful career in tech.",
			icon: faEarthAmericas,
		},
		{
			title: "Innovative Curriculum",
			description:
				"Our innovative curriculum is designed to keep pace with the rapidly changing tech industry. Learn the latest technologies and tools in demand by employers and take your career to the next level.",
			icon: faBookAtlas,
		},
		{
			title: "Scholarship Programs",
			description:
				"We offer scholarships to help underprivileged students pursue higher education in tech-related fields. These scholarships can cover tuition, fees, and other expenses associated with attending a college or university.",
			icon: faPiggyBank,
		},
		{
			title: "Outreach Programs",
			description:
				"Partnering with schools and community organizations to bring coding education to underprivileged students who may not have access to these resources otherwise. This can include after-school programs, summer camps, and other outreach initiatives.",
			icon: faGraduationCap,
		},
	];

	return (
		<Section>
			<div className="flex flex-col items-center">
				<h1 className="text-4xl font-bold mb-4 text-center">
					Empowering the Future
				</h1>
				<p className="mb-9 text-center max-w-[80ch]">
					Unleash your coding potential with our innovative curriculum
					and mentorship programs. Join our community to gain
					real-world experience through exciting projects and
					challenges and achieve your tech goals.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7 lg:gap-4 max-w-7xl mx-auto place-items-center">
					{featureCards.map((feature) => (
						<div
							key={feature.title}
							className="lg:min-h-[350px] rounded-md drop-shadow-lg bg-gradient-to-r from-[#614ab6b4] to-[#2b2664] p-5 transform hover:translate-y-[-0.5rem] transition"
						>
							<div className="text-center">
								<FontAwesomeIcon
									icon={feature.icon}
									className="h-[4rem] mt-7"
								/>
							</div>
							<h2 className="text-2xl font-semibold mt-5">
								{feature.title}
							</h2>
							<div className="h-[0.2rem] bg-white w-[20%] rounded my-4"></div>
							<p className="text-sm">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
