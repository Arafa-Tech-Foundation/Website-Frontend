import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPython,
	faHtml5,
	faCss3,
	faJs,
	faJava,
	faReact,
	faNodeJs,
	faAngular,
	faPhp,
	faSwift,
} from "@fortawesome/free-brands-svg-icons";
import Section from "@components/section";

export default function Courses() {
	return (
		<Section>
			<div className="flex flex-col items-center gap-4">
				<h1 className="text-6xl font-bold text-center">
					Programming Languages Taught
				</h1>
				<div className="flex w-full flex-wrap justify-evenly mt-5">
					<FontAwesomeIcon
						icon={faPython}
						className="icon h-[3.5rem] mx-2"
					/>
					<FontAwesomeIcon
						icon={faHtml5}
						className="icon h-[3.5rem] mx-2"
					/>
					<FontAwesomeIcon
						icon={faCss3}
						className="icon h-[3.5rem] mx-2"
					/>
					<FontAwesomeIcon
						icon={faJs}
						className="icon h-[3.5rem] mx-2"
					/>
					<FontAwesomeIcon
						icon={faJava}
						className="icon h-[3.5rem] mx-2"
					/>
					<FontAwesomeIcon
						icon={faReact}
						className="icon h-[3.5rem] mx-2"
					/>
					<FontAwesomeIcon
						icon={faNodeJs}
						className="icon h-[3.5rem] mx-2"
					/>
					<FontAwesomeIcon
						icon={faAngular}
						className="icon h-[3.5rem] mx-2"
					/>
					<FontAwesomeIcon
						icon={faPhp}
						className="icon h-[3.5rem] mx-2"
					/>
					<FontAwesomeIcon
						icon={faSwift}
						className="icon h-[3.5rem] mx-2"
					/>
				</div>

				<a href="/courses" className="btn btn-primary">
					Learn More
				</a>
			</div>
		</Section>
	);
}
