import HomeLayout from "@components/layout";
import Hero from "@components/index/hero";
import React from "react";
import Shapes from "@components/index/shapes";

export default function Home() {
	return (
		<HomeLayout>
			<Hero>
				<Shapes />
			</Hero>
		</HomeLayout>
	);
}
