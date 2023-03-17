import HomeLayout from "@components/layout";
import UnderConstruction from "@components/underConstruction";
import { NextSeo } from "next-seo";

export default function Contact() {
	return (
		<>
			<NextSeo title="Contact" />
			<HomeLayout>
				<UnderConstruction />
			</HomeLayout>
		</>
	);
}
