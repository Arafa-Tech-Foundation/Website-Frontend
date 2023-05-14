import { BlogMatter } from "types";
import { getRepositoryFolders } from "./repository";
import axios from "axios";
import matter from "gray-matter";

export async function BlogMatters(): Promise<BlogMatter[]> {
	const posts = await getRepositoryFolders();

	const matters = await Promise.all(
		posts.map(async (post) => {
			const { data } = await axios.get(
				`https://raw.githubusercontent.com/Arafa-Tech-Foundation/Blog/main/${post}/post.mdx`
			);

			const matterResult = matter(data);

			return { ...matterResult.data, slug: post } as BlogMatter;
		})
	);

	return matters;
}
