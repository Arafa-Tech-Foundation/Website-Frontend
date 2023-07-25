import {
	faCodeBranch,
	faComments,
	faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardData = [
	{
		title: "Learn to code",
		description: "Learn to code and build your own projects",
		image: <FontAwesomeIcon className="h-10 w-10" icon={faCodeBranch} />,
	},
	{
		title: "Meet new people",
		description: "Expand your horizons and embrace new connections",
		image: <FontAwesomeIcon className="h-10 w-10" icon={faComments} />,
	},
	{
		title: "Enhance your skills",
		description: "Learn new skills and enhance your existing ones",
		image: <FontAwesomeIcon className="h-10 w-10" icon={faTerminal} />,
	},
];

export { cardData };
