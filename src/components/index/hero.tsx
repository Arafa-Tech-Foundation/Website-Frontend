import Section from "@components/section";
import { signIn } from "next-auth/react";

export default function Hero() {
	return (
		<Section>
			<div className="flex flex-col items-center gap-8 py-20">
				<h1 className="text-[20vw] text-center md:text-6xl lg:text-7xl xl:text-8xl  leading-none select-none tracking-tightest font-extrabold flex flex-col md:flex-row">
					<span
						data-content="Learn."
						className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:bg-white/5 before:bg-clip-text before:backdrop-blur-sm before:text-transparent before:animate-gradient-background-1 "
					>
						<span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end animate-gradient-foreground-1 text-shadow">
							Learn.
						</span>
					</span>
					<span
						data-content="Develop."
						className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:bg-white/5 before:bg-clip-text before:backdrop-blur-sm before:text-transparent before:animate-gradient-background-2"
					>
						<span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end animate-gradient-foreground-2 text-shadow">
							Develop.
						</span>
					</span>
					<span
						data-content="Succeed."
						className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:bg-white/5 before:bg-clip-text before:backdrop-blur-sm before:text-transparent before:animate-gradient-background-3"
					>
						<span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end animate-gradient-foreground-3 text-shadow">
							Succeed.
						</span>
					</span>
				</h1>

				<p className="text-lg sm:text-md md:text-lg lg:text-xl xl:text-2xl w-full max-w-4xl text-center">
					Arafa Tech is a non-profit organization that provides coding
					education and mentorship to underprivileged students,
					empowering them with technical skills for the future.
				</p>
				<button
					className="btn btn-wide btn-primary"
					onClick={() => {
						signIn("discord", { callbackUrl: "/courses" });
					}}
				>
					Get Started
				</button>
			</div>
		</Section>
	);
}
