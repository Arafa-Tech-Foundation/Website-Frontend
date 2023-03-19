import HomeLayout from "@components/layout";
import UnderConstruction from "@components/underConstruction";
import { NextSeo } from "next-seo";

export default function BlogPost() {
	return (
		<>
			<NextSeo title="BLOG TITLE HERE" />
			<HomeLayout>
				<UnderConstruction />
			</HomeLayout>
		</>
	);
}
