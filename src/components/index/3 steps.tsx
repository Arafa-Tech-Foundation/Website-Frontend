import Section from "@components/section";
import Learn from "./learn";
import Develop from "./develop";
import Succeed from "./succeed";

const sections = [1, 2, 3];

export default function ThreeSections() {
	return (
		<Section>
			<div className="flex gap-10 sticky">
				<div className="block sticky top-[25%] h-[500px] self-start">
					Easy As
					<div className="flex flex-col justify-between h-full">
						{sections.map((section, index) => (
							<div
								key={section.toString()}
								className="flex flex-col justify-center items-center"
							>
								{index == sections.length - 1 && (
									<div className="bg-primary-content w-1 h-full" />
								)}

								<div className="flex items-center gap-4">
									<div className="flex items-center justify-center w-16 h-16 rounded-full text-primary-content bg-gradient-to-r from-primary to-secondary shadow-[0_0px_20px_-2.5px_hsl(var(--p))]">
										{index + 1}
									</div>
								</div>
								{/* Add a line connecting to the next circle */}
								{index == 0 && (
									<div className="bg-primary-content w-1 h-full self-stretch" />
								)}
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="text-center text-lg ">
						Why Arafa Tech?
					</h2>
					<div className="flex flex-col gap-20">
						<Learn />
						<Develop />
						<Succeed />
					</div>
				</div>
			</div>
		</Section>
	);
}
