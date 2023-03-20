import HomeLayout from "@components/layout";
import Hero from "@components/index/hero";
import UnderConstruction from "@components/underConstruction";

export default function Home() {
	return (
		<HomeLayout>
			<Hero />
			<UnderConstruction />
		</HomeLayout>
	);
}
