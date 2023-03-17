import HomeLayout from "@components/layout";
import UnderConstruction from "@components/underConstruction";
import { NextSeo } from "next-seo";

export default function Team() {
	return (
		<>
			<NextSeo title="Team" />
			<HomeLayout>
				<UnderConstruction />
			</HomeLayout>
		</>
	);
}
