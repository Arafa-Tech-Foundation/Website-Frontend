import { BlogMatter } from "types";

export default function Post({
	matter,
	children,
}: {
	matter: BlogMatter;
	children: React.ReactNode;
}) {
	return (
		<article className="px-4 py-24 mx-auto max-w-7xl">
			<div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
				<img
					src={matter.background}
					className="object-cover w-full h-64 bg-center rounded-lg"
					alt="Kutty"
				/>
				<p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
					{matter.type}
				</p>
				<h1
					className="mb-3 text-3xl font-bold leading-tight text-white md:text-4xl"
					title={matter.title}
				>
					{matter.title}
				</h1>
				<div className="flex mb-6 space-x-2">
					{matter.tags.map((tag) => (
						<span className="bg-neutral-800 rounded-xl px-4 py-1 text-white">
							{tag}
						</span>
					))}
				</div>
				<a className="flex items-center text-gray-700" href="#">
					<img
						className="avatar rounded-full w-10 h-10"
						src={matter.avatar}
						alt="Profile Photo"
					/>
					<div className="ml-2">
						<p className="text-sm font-semibold text-white">
							{matter.author}
						</p>
						<p className="text-sm text-gray-500">
							{new Date(matter.date * 1000).toDateString()}
						</p>
					</div>
				</a>
			</div>

			<div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
				{children}
			</div>
		</article>
	);
}
