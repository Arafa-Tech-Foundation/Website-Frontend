import Section from "@components/section";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactCard() {
	return (
		<>
			<Section>
				<div className="flex flex-row space-x-64 my-36 justify-center items-center">
					<div className="rounded-md flex flex-col text-center justify-center items-center max-w-sm w-full">
						<FontAwesomeIcon icon={faEnvelope} />
						<p className="my-3 max-h-16 h-full">
							Need help or have a suggestion? You can shoot us an
							email at{" "}
							<span className="font-bold ">
								arafa.tech.foundation@gmail.com
							</span>
							!
						</p>
						<button
							className="btn btn-md w-48 btn-primary mt-3"
							onClick={() =>
								(window.location.href =
									"mailto:arafa.tech.foundation@gmail.com")
							}
						>
							Email Us
						</button>
					</div>
				</div>
			</Section>
		</>
	);
}
