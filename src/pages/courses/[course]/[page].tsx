import A from "@components/blog/post/a";
import Code from "@components/blog/post/code";
import Pre from "@components/blog/post/pre";
import CoursesLayout from "@components/courses/layout";
import { getFolderContents } from "@pages/api/courses/folder";
import { getRepositoryFolders } from "@pages/api/courses/repository";
import axios from "axios";
import { imageUrl } from "config";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CourseMeta, CourseModule } from "types";
import { getNextLesson, getPreviousLesson, prettifyName } from "utils";

type Course = {
	source: MDXRemoteProps;
	meta: CourseMeta;
	page: string;
};

export default function CoursePage({ source, meta, page }: Course) {
	const lessonVideo = meta.modules
		.flatMap((module) => module.lessons.map((lesson) => lesson))
		.find((lesson) => lesson.name === page)?.video;

	const module = meta.modules.find((mod) =>
		mod.lessons.find((lesson) => lesson.name == page)
	) as CourseModule;

	const [isOpen, setIsOpen] = useState(false);

	const nextLesson = getNextLesson(meta, module, page);
	const previousLesson = getPreviousLesson(meta, module, page);

	const [videos, setVideos] = useState<{ name: string; duration: number }[]>(
		[]
	);
	useEffect(() => {
		meta.modules?.forEach((module) => {
			module.lessons?.forEach((lesson) => {
				if (!lesson.video) return;
				if (typeof window === "undefined") return;

				const video = document.createElement("video");
				video.src = `https://github.com/Arafa-Tech-Foundation/Courses/raw/main/${meta.name}/static/${lesson.video}`;

				video.onloadedmetadata = () => {
					if (videos.find((video) => video.name == lesson.video))
						return;
					setVideos((videos) => [
						...videos,
						{
							name: lesson.video,
							duration: Math.round(video.duration),
						},
					]);
				};
			});
		});
	}, []);

	return (
		<>
			<NextSeo
				title={prettifyName(meta.name) + " | " + prettifyName(page)}
			/>
			<CoursesLayout
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				meta={meta}
				videos={videos}
			>
				<div className="flex flex-col justify-center items-center">
					{lessonVideo && (
						<video
							src={`https://github.com/Arafa-Tech-Foundation/Courses/raw/main/${meta.name}/static/${lessonVideo}`}
							className="max-h-[calc(100vh-100px)] h-full"
							controls
						/>
					)}
					<article className="prose mx-auto my-8">
						<MDXRemote
							{...source}
							components={{
								a: (props) => <A {...props} />,
								pre: (props) => <Pre {...props} />,
								code: (props) => <Code {...props} />,
							}}
						/>
						<div className="flex flex-col-reverse w-full gap-4 my-8 justify-center sm:flex-row">
							{previousLesson && (
								<Link
									className="btn btn-primary flex-1"
									href={`/courses/${meta.name}/${
										previousLesson.name || ""
									}`}
								>
									Previous Lesson:{" "}
									{prettifyName(previousLesson.name || "")}
								</Link>
							)}
							{nextLesson && (
								<Link
									className="btn btn-primary flex-1"
									href={`/courses/${meta.name}/${nextLesson.name}`}
									// onClick={nextPage}
								>
									Next Lesson: {prettifyName(nextLesson.name)}
								</Link>
							)}
						</div>
					</article>
				</div>
			</CoursesLayout>
		</>
	);
}

export async function getStaticProps({
	params,
}: {
	params: { course: string; page: string };
}) {
	const url = `https://raw.githubusercontent.com/Arafa-Tech-Foundation/Courses/main/${params.course}/${params.page}.mdx`;
	const res = await axios.get(url, {
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
		},
	});

	const metaUrl = `https://raw.githubusercontent.com/Arafa-Tech-Foundation/Courses/main/${params.course}/.metadata.json`;
	const metaRes = await axios.get(metaUrl, {
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
		},
	});

	const meta: CourseMeta = metaRes.data;

	// replace relative image paths with absolute paths
	const markdown = res.data.replaceAll('src="./', `src="${imageUrl}`);

	const source = await serialize(markdown);

	return {
		props: {
			source,
			meta,
			page: params.page,
		},
		revalidate: 3600,
	};
}

export async function getStaticPaths() {
	const courses = await getRepositoryFolders();

	const files = courses.map(async (course) => {
		return getFolderContents(course);
	});

	const pages = await Promise.all(files);

	// compile the courses into a flat array of paths
	const paths = courses.flatMap((course, index) => {
		return pages[index]
			.map((page) => {
				if (!page.endsWith(".mdx")) return;
				return {
					// remove filetype to prevent overlap in url
					params: { course, page: page.replace(".mdx", "") },
				};
			})
			.filter((page) => page !== undefined);
	});

	return {
		paths,
		fallback: false,
	};
}
