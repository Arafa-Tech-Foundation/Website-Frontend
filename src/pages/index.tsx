import Cta from "@components/index/cta";
import Hero from "@components/index/hero";
import Programs from "@components/index/programs";
import Testimonials from "@components/index/testimonials";
import HomeLayout from "@components/layout";

export default function Home() {
	return (
		<HomeLayout>
			<Hero />
			<Programs />
			<Testimonials />
			<Cta />
		</HomeLayout>
	);
}
