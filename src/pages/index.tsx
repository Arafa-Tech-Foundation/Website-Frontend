import HomeLayout from "@components/layout";
import Hero from "@components/index/hero";
import React from "react";
import Empower from "@components/index/empower";
import Services from "@components/index/services";
import Community from "@components/index/community";
import CallToAction from "@components/index/cta";
import { Client } from "@notionhq/client";
import Banner from "@components/index/banner";

export default function Home() {
	return (
		<>
			<Banner />
			<HomeLayout>
				<Hero />
				<Empower />
				<Community />
				<Services />
				<CallToAction />
			</HomeLayout>
		</>
	);
}

export const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});
