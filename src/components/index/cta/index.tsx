import Section from "@components/section";
import Link from "next/link";

export default function CallToAction() {
	return (
		<div className="bg-neutral">
			<svg
				className="fill-white"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 160"
			>
				<path fill-opacity="1" d="M0,32L1440,128L1440,0L0,0Z"></path>
			</svg>
			<Section className="bg-neutral">
				<div className="relative flex flex-col items-center py-24 justify-center gap-8 sm:py-48 z-10">
					<h1 className="z-10 text-white h-huge text-center font-bold">
						Unite with skilled devs
					</h1>

					<p className="z-10 h3 text-gray-500">
						Join our community of developers and learn to code.
					</p>
					<div className="flex gap-4">
						<Link
							href="/discord"
							className="btn btn-primary md:btn-lg px-8"
						>
							Join Discord
						</Link>
						<Link
							href="/about"
							className="btn btn-outline md:btn-lg text-white border-gray-500"
						>
							More about us
						</Link>
					</div>
				</div>
			</Section>
		</div>
	);
}
