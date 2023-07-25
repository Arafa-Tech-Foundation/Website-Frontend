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
				"w-full flex justify-center items-center py-16 pl-4 lg:px-4 relative",
				className
			)}
		>
			<div className="w-full max-w-7xl container mx-auto px-6">{children}</div>
		</section>
	);
}
