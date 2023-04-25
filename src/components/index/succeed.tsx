import { BubbleTitle } from "./3 steps";

export default function Succeed() {
	return (
		<div className="flex flex-col">
			<BubbleTitle title="Succeed" />

			<div className="flex flex-col lg:flex-row">
				<img src="/logos/kody/main.png" className="max-w-[350px]" />
				<div className="text-right">
					<h3 className="h3 uppercase tracking-[0.2em] mb-3 mt-1">
						<span className="text-glow">succeed</span> with our
						community
					</h3>
					<p className="py-5 mb-5">
						Thrive with your coding skills by building a strong
						foundation through our courses, receiving experienced
						guidance, and participating in hands-on projects that
						prepare you for real-world challenges.
					</p>
					<button className="btn btn-primary btn-wide">
						Join Us!
					</button>
				</div>
			</div>
		</div>
	);
}
