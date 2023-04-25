import HomeLayout from "@components/layout";
import Hero from "@components/index/hero";
import React from "react";
import UnderConstruction from "@components/underConstruction";
import ThreeSections from "@components/index/3 steps";
import Empower from "@components/index/empower";

export default function Home() {
	return (
		<HomeLayout>
			<Hero />
			<Empower />
			<ThreeSections />
			<UnderConstruction />
		</HomeLayout>
	);
}
