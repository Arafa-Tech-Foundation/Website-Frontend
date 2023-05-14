import Link from "next/link";
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
				<a
					className="flex items-center text-gray-700 group"
					href={matter.link || "#"}
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						className="avatar rounded-full w-10 h-10"
						src={matter.avatar}
						alt="Profile Photo"
					/>
					<div className="ml-2">
						<p className="text-sm font-semibold text-white group-hover:!text-primary">
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
				<hr />
			</div>
			<div className="mt-6 w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
				<a
					className="flex items-center text-gray-700 group"
					href={matter.link || "#"}
					rel="noopener noreferrer"
					target="_blank"
				>
					<img
						className="avatar rounded-full w-10 h-10"
						src={matter.avatar}
						alt="Profile Photo"
					/>
					<div className="ml-2">
						<p className="text-sm font-semibold text-white group-hover:!text-primary">
							{matter.author}
						</p>
						<p className="text-sm text-gray-500">
							{new Date(matter.date * 1000).toDateString()}
						</p>
					</div>
				</a>

				<div className="mt-8 px-6 py-6 rounded-lg text-center bg-gray-800 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
					<div className="xl:w-0 xl:flex-1">
						<h2 className="text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
							Ready to make a difference?
						</h2>
						<p className="max-w-3xl mt-3 text-lg leading-6">
							Connect with like-minded individuals, stay updated
							on our latest projects, and make a real impact
						</p>
					</div>
					<div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
						<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
							<Link
								href="/discord"
								className="btn btn-primary w-full"
							>
								Join The Community
							</Link>
						</div>
					</div>
				</div>
				<div>
					<p className="mt-3 text-sm text-gray-300">
						Want to contribute a blog post?{" "}
						<a
							href="https://github.com/Arafa-Tech-Foundation/Blog"
							className="font-medium text-primary hover:text-secondary"
						>
							Let us know!
						</a>
					</p>
				</div>
			</div>
		</article>
	);
}
