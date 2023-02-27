import CoursesView from "@components/courses/view";
import DashboardLayout from "@components/dashboard/layout";
import { getCourseList } from "@pages/api/courses/list";
import { CourseMeta } from "types";

export default function Courses({ courses }: { courses: CourseMeta[] }) {
	return (
		<DashboardLayout>
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
		</DashboardLayout>
	);
}

export async function getStaticProps() {
	const courses = await getCourseList();

	return {
		props: {
			courses,
		},
	};
}
