import HomeLayout from "@components/layout";
import UnderConstruction from "@components/underConstruction";
import { NextSeo } from "next-seo";

export default function Blog() {
	return (
		<>
			<NextSeo title="Blog" />
			<HomeLayout>
				<UnderConstruction />
			</HomeLayout>
		</>
	);
}
