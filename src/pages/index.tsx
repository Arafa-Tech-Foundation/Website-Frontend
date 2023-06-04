import HomeLayout from "@components/layout";
import Hero from "@components/index/hero";
import React from "react";
import ThreeSections from "@components/index/steps/3 steps";
import Empower from "@components/index/empower";
import Services from "@components/index/services";
import Community from "@components/index/community";
import CallToAction from "@components/index/cta";
// import Testimonials from "@components/index/testimonials";
import { Client } from "@notionhq/client";
import Banner from "@components/index/banner";

export default function Home() {
	return (
		<>
			<Banner />
			<HomeLayout>
				<Hero />
				<Empower />
				<ThreeSections />
				<Services />
				<Community />
				{/* <Testimonials /> */}
				<CallToAction />
			</HomeLayout>
		</>
	);
}

export const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});
