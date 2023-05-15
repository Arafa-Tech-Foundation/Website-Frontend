import AllPosts from "@components/blog/index/all";
import RecentPosts from "@components/blog/index/recent";
import HomeLayout from "@components/layout";
import { BlogMatters } from "@pages/api/blog/matter";
import { NextSeo } from "next-seo";
import { BlogMatter } from "types";

export default function Blog({ posts }: { posts: BlogMatter[] }) {
	return (
		<>
			<NextSeo title="Blog" />
			<HomeLayout>
				<RecentPosts posts={posts.slice(0, 3)} />
				<AllPosts posts={posts} />
			</HomeLayout>
		</>
	);
}

export async function getStaticProps() {
	const blogs = await BlogMatters();

	return {
		props: {
			posts: blogs,
		},
		// revalidate: 3600,
	};
}
