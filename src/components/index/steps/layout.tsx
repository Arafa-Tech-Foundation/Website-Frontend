import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StepLayout({
	children,
	title,
	number,
}: {
	children: React.ReactNode;
	title: string;
	number: number;
}) {
	return (
		<div className="flex gap-10">
			<div className="relative min-w-[40px]">
				<div className="absolute inset-0 p-4 background-gradient rounded-full h-10 w-10 flex justify-center items-center">
					<span className="text-white font-semibold">{number}</span>
				</div>
				<div className="h-full w-full background-dotted"></div>
				{number === 3 && (
					<div className="absolute bg-base-100 bottom-0 gap-14 rounded-full w-10 flex flex-col justify-center items-center">
						<FontAwesomeIcon
							icon={faChevronDown}
							className="w-6 h-6"
							color="#ff9d6f"
						/>
						<span className="-rotate-90 whitespace-nowrap text-glow">
							Your future
						</span>
					</div>
				)}
			</div>
			<div className="w-full">
				<h2 className="h1 text-white mb-5">{title}</h2>
				<div>{children}</div>
			</div>
		</div>
	);
}
