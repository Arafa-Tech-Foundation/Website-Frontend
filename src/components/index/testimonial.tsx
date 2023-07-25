import clsx from "clsx";

export default function Testimonial({
	quote,
	name,
	title,
	image,
	className,
}: {
	quote: string;
	name: string;
	title: string;
	image: string;
	className?: string;
}) {
	return (
		<div
			className={clsx(
				"mx-auto max-w-5xl rounded-md text-center pb-12 pt-24 px-12 text-white",
				"shadow-xl",
				className
					? className
					: "from-[#66c7b4]/80 via-[#6bc1ce]/80 to-[#6db4e8]/80 bg-gradient-to-t"
			)}
		>
			<h2 className="mb-8 h3">{quote}</h2>

			<img className="mx-auto rounded-full h-16 w-16 mb-4" src={image} />
			<h3 className="font-bold">{name}</h3>

			<p className="text-gray-100">{title}</p>
		</div>
	);
}
