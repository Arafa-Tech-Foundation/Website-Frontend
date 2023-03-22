import HomeLayout from "@components/layout";
import Hero from "@components/index/hero";
import React from "react";
import UnderConstruction from "@components/underConstruction";
import ThreeSections from "@components/index/3 steps";

export default function Home() {
	return (
		<HomeLayout>
			<Hero />
			<ThreeSections />
			<UnderConstruction />
		</HomeLayout>
	);
}
