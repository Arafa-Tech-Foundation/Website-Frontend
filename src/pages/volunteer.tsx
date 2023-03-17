import HomeLayout from "@components/layout";
import UnderConstruction from "@components/underConstruction";
import { NextSeo } from "next-seo";

export default function Volunteer() {
	return (
		<>
			<NextSeo title="Volunteer" />
			<HomeLayout>
				<UnderConstruction />
			</HomeLayout>
		</>
	);
}
