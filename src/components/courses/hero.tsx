import Angle from "@components/angle";
import Section from "@components/section";
import {
	faArrowDown,
	faArrowRight,
	faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Hero() {
	function handleClick() {
		const element = document.getElementById("courses");
		if (!element) return;
		element.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<>
			<Section className="text-center max-w-3xl mx-auto mb-20 sm:mb-40">
				<Link
					href={"/workshops"}
					className="hidden mx-auto sm:flex text-left mb-8 gap-5 w-fit group items-center rounded-full border border-gray-500 px-8 py-4"
				>
					<FontAwesomeIcon
						className="bg-primary text-white p-3 rounded-full"
						icon={faTerminal}
					/>
					<div>
						<h3 className="font-semibold">
							Introducing Arafa Tech Mentorship Program
						</h3>
						<h5 className="text-gray-500">
							Join our mentorship program and learn from the best
						</h5>
					</div>
					<FontAwesomeIcon
						className="group-hover:translate-x-1 transition-transform"
						icon={faArrowRight}
					/>
				</Link>
				<h2 className="text-gray-800 h4 font-semibold mb-4">
					Arafa Tech Courses
				</h2>
				<h1 className="h-huge font-bold text-black mb-4">
					Learn to code with Arafa Tech
				</h1>

				<p className="h4 mb-4">
					Arafa Tech Foundation offers 100% free courses for our
					community, by our community. We bring together content
					creators, educators, and learners in one community to teach
					practical software engineering skills.
				</p>

				<div>
					<button
						onClick={handleClick}
						className="text-primary group h5"
					>
						Let's see the courses
						<FontAwesomeIcon
							className="ml-2 group-hover:translate-y-1 transition-transform"
							icon={faArrowDown}
						/>
					</button>
				</div>
			</Section>
			<div className="bg-neutral">
				<Angle />
			</div>
		</>
	);
}
