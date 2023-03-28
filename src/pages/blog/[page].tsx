import HomeLayout from "@components/layout";
import { getRepositoryFolders } from "@pages/api/blog/repository";
import axios from "axios";
import { imageUrl } from "config";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import { BlogMatter } from "types";
import { prettifyName } from "utils";

type Blog = {
	source: MDXRemoteProps;
	matter: BlogMatter;
	page: string;
};

export default function BlogPost({ source, matter, page }: Blog) {
	return (
		<>
			<NextSeo title={prettifyName(page)} />
			<HomeLayout>
				<article className="prose mx-auto my-8">
					<MDXRemote {...source} />
				</article>
			</HomeLayout>
		</>
	);
}

export async function getStaticProps({
	params,
}: {
	params: { blog: string; page: string };
}) {
	const url = `https://raw.githubusercontent.com/Arafa-Tech-Foundation/Blog/main/${params.page}/post.mdx`;
	const res = await axios.get(url, {
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
		},
	});

	// replace relative image paths with absolute paths
	const markdown = res.data.replaceAll('src="./', `src="${imageUrl}`);

	const { content, data } = matter(markdown);

	const source = await serialize(content);

	return {
		props: {
			source,
			matter: data,
			page: params.page,
		},
		revalidate: 60 * 60,
	};
}

export async function getStaticPaths() {
	const blogs = await getRepositoryFolders();

	// compile the blogs into a flat array of paths
	const paths = blogs.flatMap((blog) => ({
		params: { blog, page: blog },
	}));
	console.log(paths);
	return {
		paths,
		fallback: false,
	};
}
