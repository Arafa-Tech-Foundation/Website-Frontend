import HomeLayout from "@components/layout";
import Hero from "@components/index/hero";
import React from "react";
import UnderConstruction from "@components/underConstruction";
import Why from "@components/index/why";

export default function Home() {
	return (
		<HomeLayout>
			<Hero />
			<Why />
			<UnderConstruction />
		</HomeLayout>
	);
}
