import HomeLayout from "@components/layout";
import UnderConstruction from "@components/underConstruction";
import { NextSeo } from "next-seo";

export default function Course() {
	return (
		<>
			<NextSeo title="Course Title Here" />
			<HomeLayout>
				<UnderConstruction />
			</HomeLayout>
		</>
	);
}
