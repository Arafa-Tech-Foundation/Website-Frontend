import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { CourseMeta } from "types";
import matter from "gray-matter";
import axios from "axios";
import { imageUrl } from "config";
import { getRepositoryFolders } from "@pages/api/courses/repository";
import { getFolderContents } from "@pages/api/courses/folder";
import CoursesLayout from "@components/courses/layout";

type Course = {
	source: MDXRemoteProps;
	meta: CourseMeta;
};

export default function CoursePage({ source, meta }: Course) {
	return (
		<CoursesLayout meta={meta}>
			<MDXRemote {...source} />
		</CoursesLayout>
	);
}

export async function getStaticProps({
	params,
}: {
	params: { course: string; page: string };
}) {
	const url = `https://raw.githubusercontent.com/Arafa-Tech-Foundation/Courses/main/${params.course}/${params.page}.md`;

	const res = await axios.get(url);

	// replace relative image paths with absolute paths
	const markdown = res.data.replaceAll('src="./', `src="${imageUrl}`);

	const { content, data } = matter(markdown);

	// TODO: add code highlighting plugin
	const source = await serialize(content);

	return {
		props: {
			source,
			page: data,
		},
	};
}

export async function getStaticPaths() {
	const courses = await getRepositoryFolders();

	const files = courses.map(async (course) => {
		return getFolderContents(course);
	});

	const pages = await Promise.all(files);

	// complile the courses into a flat array of paths
	const paths = courses.flatMap((course, index) => {
		return pages[index].map((page) => ({
			// remove filetype to prevent overlap in url
			params: { course, page: page.replace(".md", "") },
		}));
	});

	return {
		paths,
		fallback: false,
	};
}
