import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPeopleGroup,
	faPersonChalkboard,
	faEarthAmericas,
	faBookAtlas,
} from "@fortawesome/free-solid-svg-icons";

export default function Features() {
	const featureCards = [
		{
			title: "Coding Education for All",
			description:
				"Join our friendly community committed to providing coding education and mentorship to underprivileged students. Learn valuable technical skills, expand your network, and make new friends.",
			icon: (
				<FontAwesomeIcon
					icon={faPeopleGroup}
					className="h-[4rem] mt-7"
				/>
			),
		},
		{
			title: "Mentorship: The Key to Success",
			description:
				"Our mentorship initiative pairs experienced tech professionals with underprivileged students, providing guidance and support to succeed in the tech industry. Join us and benefit from valuable mentorship opportunities.",
			icon: (
				<FontAwesomeIcon
					icon={faPersonChalkboard}
					className="h-[4rem] mt-7"
				/>
			),
		},
		{
			title: "Real-World Projects and Challenges",
			description:
				"Gain real-world experience by working on projects and challenges that simulate real-world scenarios. Join us and develop valuable skills to prepare for a successful career in tech.",
			icon: (
				<FontAwesomeIcon
					icon={faEarthAmericas}
					className="h-[4rem] mt-7"
				/>
			),
		},
		{
			title: "Innovative Curriculum",
			description:
				"Our innovative curriculum is designed to keep pace with the rapidly changing tech industry. Learn the latest technologies and tools in demand by employers and take your career to the next level.",
			icon: (
				<FontAwesomeIcon icon={faBookAtlas} className="h-[4rem] mt-7" />
			),
		},
	];

	const cards = featureCards.map((feature) => (
		<div className="lg:min-h-[470px] rounded-md drop-shadow-lg bg-gradient-to-r from-[#614ab6b4] to-[#2b2664] p-5 transform hover:translate-y-[-1rem] transition duration-500 ease-in-out">
			<div className="text-center">{feature.icon}</div>
			<h2 className="text-[1.5rem] font-semibold mt-5">
				{feature.title}
			</h2>
			<div className="h-[0.2rem] bg-white w-[20%] rounded-md mt-7"></div>
			<p className="text-sm mt-2 py-4">{feature.description}</p>
		</div>
	));

	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-3 ">
			<h1 className="text-4xl font-bold mb-4 text-center">
				Empowering the Future
			</h1>
			<p className="mb-9 text-center w-[80%]">
				Unleash your coding potential with our innovative curriculum and
				mentorship programs. Join our community to gain real-world
				experience through exciting projects and challenges and achieve
				your tech goals.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 lg:gap-4 max-w-7xl mx-auto place-items-center">
				{cards}
			</div>
		</div>
	);
}
