import clsx from "clsx";

export default function Section({
	children,
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) {
	return (
		<section
			className={clsx(
				"w-full flex justify-center items-center py-16 px-4 relative",
				className
			)}
		>
			<div className="w-full max-w-7xl">{children}</div>
		</section>
	);
}
