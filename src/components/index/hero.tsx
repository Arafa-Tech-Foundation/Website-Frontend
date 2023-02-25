import Section from "@components/section";

export default function Hero() {
	return (
		<Section>
			{/* <div className="flex items-center">
				<div className="flex flex-col gap-4">
					<h1 className="text-4xl font-bold text-primary">
						Learn To Code
					</h1>
					<p className="text-lg">
						Arafa Tech is a non-profit organization that provides
						coding education and mentorship to underprivileged
						students, empowering them with technology skills for the
						future.
					</p>
					<button className="btn btn-wide btn-primary">
						Get Started
					</button>
				</div>
				<img
					src="https://www.programmingsimplified.org/code.png"
					alt="hero"
					className="rounded-lg w-1/2"
				/>
			</div> */}
			<div className="flex flex-col justify-center items-center gap-4 py-40">
				<div className="flex flex-col lg:flex-row justify-center gap-4 text-7xl font-bold">
					<h1>Learn.</h1>
					<h1>Develop.</h1>
					<h1>Succeed.</h1>
				</div>
				<p className="w-full max-w-xl text-center">
					Arafa Tech is a non-profit organization that provides coding
					education and mentorship to underprivileged students,
					empowering them with technical skills for the future.
				</p>
				<button className="btn btn-wide btn-primary">Get Started</button>
			</div>
		</Section>
	);
}
