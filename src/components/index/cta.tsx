import Section from "@components/section";
import { useState } from "react";

export default function Cta() {
	const [email, setEmail] = useState("");
	return (
		<Section className="bg-base-200">
			<div className="mx-auto max-w-lg text-center">
				<h2 className="text-2xl font-bold text-primary md:text-3xl">
					Ready To Learn?
				</h2>
				<p className="hidden text-gray-500 sm:mt-4 sm:block">
					Join the Arafa Tech community and start your journey in
					technology. Experience hands-on coding education,
					mentorship, and community support. Transform your future
					today. Get ready to learn!
				</p>
			</div>
			<div className="mx-auto mt-8 max-w-xl">
				<div className="flex flex-col gap-4 sm:flex-row ">
					<div className="sm:flex-1">
						<label htmlFor="email" className="sr-only">
							Email
						</label>
						<input
							type="email"
							placeholder="Email address"
							className="input input-bordered w-full"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<a
						href={`/register?email=${email}`}
						className="btn btn-primary gap-2 w-full sm:w-auto"
					>
						Register
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
			</div>
		</Section>
	);
}
