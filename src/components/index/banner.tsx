import Section from "@components/section";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faX } from "@fortawesome/free-solid-svg-icons";
export default function Banner() {
	const [show, setShow] = useState(true);
	return (
		<div>
			{show && (
				<Section className="bg-primary bg-opacity-80 text-center text-neutral py-2">
					Remember to sign up for our workshops!
					<a href="https://arafa.tech/discord">
						<FontAwesomeIcon icon={faArrowRight} className="ml-2" />
					</a>
					<button
						onClick={() => setShow(false)}
						className="float-right"
					>
						<FontAwesomeIcon icon={faX} />
					</button>
				</Section>
			)}
		</div>
	);
}
