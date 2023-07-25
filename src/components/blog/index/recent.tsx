import Section from "@components/section";
import Link from "next/link";
import { BlogMatter } from "types";

function Post({
	type,
	author,
	date,
	title,
	background,
	slug,
	link,
}: BlogMatter) {
	return (
		<div>
			<Link href={`/blog/${slug}`}>
				<img
					className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
					src={background}
					alt=""
				/>
			</Link>

			<div className="mt-6">
				<span className="text-primary uppercase">{type}</span>

				<Link href={`/blog/${slug}`}>
					<h1 className="mt-2 text-xl font-semibold text-black hover:text-gray-700">
						{title}
					</h1>
				</Link>

				<div className="flex items-center justify-between mt-4">
					<div>
						<a
							href={link || "#"}
							className="text-lg font-medium text-black hover:text-primary"
						>
							{author}
						</a>

						<p className="text-sm text-gray-400">
							{new Date(date * 1000).toDateString()}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function RecentPosts({ posts }: { posts: BlogMatter[] }) {
	return (
		<Section className="!pb-0">
			<div className="container px-6 mx-auto">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-semibold capitalize lg:text-3xl">
						recent posts{" "}
					</h1>
				</div>

				<hr className="my-8 border-gray-700" />

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
					{posts.slice(0, 3).map((post) => (
						<Post key={post.slug} {...post} />
					))}
				</div>
			</div>
		</Section>
	);
}
