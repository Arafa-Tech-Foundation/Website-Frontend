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

export default function Courses() {
	return (
		<div className="min-h-screen flex flex-col items-center mt-9">
			<h1 className="text-[2.5rem] font-bold text-center py-3">
				Programming Languages Taught
			</h1>
			<p className="mt-5">Courses we offer at all levels</p>
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
				<FontAwesomeIcon icon={faJs} className="icon h-[3.5rem] mx-2" />
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

			<button className="mt-9 border-white border-solid border-2 p-2 hover:bg-[#a48cff] hover:text-[#160b3e] rounded-md">
				Learn More
			</button>
		</div>
	);
}
