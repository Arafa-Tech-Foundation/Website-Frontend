import Section from "@components/section";
import { useState } from "react";

export default function Community() {
	const [message, setMessage] = useState("");
	return (
		<Section>
			<h1 className="text-center uppercase h2 tracking-[0.2em] mb-20">
				Community
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="">
					<img
						src="/images/discord.png"
						className="drop-glow w-[450px] mx-auto"
					/>
				</div>
				<div className="flex flex-col gap-10 w-[90%] mt-10 lg:my-0 mx-auto lg:w-full">
					<div className="space-y-4">
						<h2 className="font-semibold h3 uppercase tracking-[0.2em]">
							Place holder
						</h2>
						<p className="max-w-[60ch] font-light">
							Place holder Join our friendly community committed
							to providing coding education and mentorship to
							underprivileged students. Learn valuable technical
							skills, expand your network, and make new friends.
						</p>
					</div>
					<div className="space-y-4">
						<h2 className="font-semibold h3 uppercase tracking-[0.2em]">
							Place holder
						</h2>
						<p className="max-w-[60ch] font-light">
							Join our friendly community committed to providing
							coding education and mentorship to underprivileged
							students. Learn valuable technical skills, expand
							your network, and make new friends.{" "}
						</p>
					</div>
					<div className="space-y-4">
						<h2 className="font-semibold h3 uppercase tracking-[0.2em]">
							Send your message
						</h2>
						<textarea
							className="input input-bordered background-glass w-full min-h-[100px] p-5"
							value={message}
							placeholder="Your message"
							onChange={(e) => setMessage(e.target.value)}
						/>
						{/* Lets get visual effects / blinking effect */}
					</div>
				</div>
			</div>
		</Section>
	);
}
