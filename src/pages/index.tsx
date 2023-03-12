import Hero from "@components/index/hero";
import Features from "@components/index/features";
import HomeLayout from "@components/layout";
import Courses from "@components/index/courses";

export default function Home() {
	return (
		<HomeLayout>
			<Hero />
			<Features />
			<Courses />
		</HomeLayout>
	);
}
