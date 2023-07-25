import HomeLayout from "@components/layout";
import { NextSeo } from "next-seo";
import CoursesView from "@components/courses/view";
import { getCourseList } from "@pages/api/courses/list";
import { CourseMeta } from "types";
import CallToAction from "@components/index/cta";
import Hero from "@components/courses/hero";
import Angle from "@components/angle";
import WrapUp from "@components/courses/wrapup";

export default function Courses({ courses }: { courses: CourseMeta[] }) {
	return (
		<HomeLayout>
			<NextSeo title="Courses" />
			<Hero />
			<CoursesView
				title="Unlock your coding potential today"
				courses={courses}
			/>
			<Angle className="!fill-neutral" />
			<WrapUp />
			<CallToAction angled={false} />
		</HomeLayout>
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
