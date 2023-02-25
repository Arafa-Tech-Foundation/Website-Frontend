import { signIn } from "next-auth/react";

export default function Hero() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 py-40">
			<div className="flex flex-col lg:flex-row justify-center gap-4 text-7xl font-bold">
				<h1>Learn.</h1>
				<h1>Develop.</h1>
				<h1>Succeed.</h1>
			</div>
			<p className="w-full max-w-xl text-center">
				Arafa Tech is a non-profit organization that provides coding
				education and mentorship to underprivileged students, empowering
				them with technical skills for the future.
			</p>
			<button
				className="btn btn-wide btn-primary"
				onClick={() => {
					signIn("discord");
				}}
			>
				Get Started
			</button>
		</div>
	);
}
