import clsx from "clsx";

export default function Angle({ className }: { className?: string }) {
	return (
		<svg
			className={clsx("fill-white", className)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 160"
		>
			<path fill-opacity="1" d="M0,32L1440,128L1440,0L0,0Z"></path>
		</svg>
	);
}
