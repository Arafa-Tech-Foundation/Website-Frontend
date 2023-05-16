import HomeLayout from "@components/layout";
import { NextSeo } from "next-seo";
import CoursesView from "@components/courses/view";
import { getCourseList } from "@pages/api/courses/list";
import { CourseMeta } from "types";

export default function Courses({ courses }: { courses: CourseMeta[] }) {
	return (
		<>
			<NextSeo title="Courses" />
			<HomeLayout>
				<CoursesView
					title="Essentials"
					description="Programming Basics Perfect for Everyone!"
					courses={courses.filter(
						(course) => course.type === "essential"
					)}
				/>
				<CoursesView
					title="Applications"
					description="Apply Your Knowledge and Create Something Awesome!"
					courses={courses.filter(
						(course) => course.type === "application"
					)}
				/>
			</HomeLayout>
		</>
	);
}

export async function getStaticProps() {
	const courses = await getCourseList();

	return {
		props: {
			courses,
		},
		revalidate: 3600,
	};
}
