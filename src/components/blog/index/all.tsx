import Section from "@components/section";
import Link from "next/link";
import { BlogMatter } from "types";

function Post({ background, title, date, slug, type }: BlogMatter) {
	return (
		<div className="lg:flex">
			<Link href={`/blog/${slug}`}>
				<img
					className="object-cover w-full h-56 rounded-lg lg:w-64"
					src={background}
					alt=""
				/>
			</Link>

			<div className="flex flex-col justify-between py-6 lg:mx-6">
				<div className="flex flex-col gap-4">
					<span className="uppercase text-primary text-sm">
						{type}
					</span>
					<Link
						href={`/blog/${slug}`}
						className="text-xl font-semibold hover:underline text-white "
					>
						{title}
					</Link>
				</div>

				<span className="text-sm text-gray-300">
					{new Date(date * 1000).toDateString()}
				</span>
			</div>
		</div>
	);
}

export default function AllPosts({ posts }: { posts: BlogMatter[] }) {
	return (
		<Section>
			<div className="container px-6 pb-10 mx-auto">
				<h1 className="text-2xl font-semibold capitalize lg:text-3xltext-white">
					From the blog
				</h1>
				<hr className="my-8 border-gray-700" />

				<div className="flex flex-col gap-8 md:mt-16 md:grid-cols-2">
					{posts.map((post) => (
						<Post key={post.slug} {...post} />
					))}
				</div>
			</div>
		</Section>
	);
}
