import Section from "@components/section";
import Develop from "./develop";
import Learn from "./learn";
import Succeed from "./succeed";

export default function ThreeSections() {
	return (
		<Section>
			<div className="max-w-[1400px] w-[90%] mx-auto flex gap-10">
				<div className="w-full">
					<h2 className="text-left text-glow text-lg uppercase tracking-[0.2em] font-semibold">
						Why Arafa Tech?
					</h2>
					<h1 className="h0 mt-3 font-semibold">
						It's as simple as...
					</h1>
					<div className="flex flex-col gap-5 mt-14">
						<Learn />
						<Develop />
						<Succeed />
					</div>
				</div>
			</div>
		</Section>
	);
}
