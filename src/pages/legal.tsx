import HomeLayout from "@components/layout";
import Section from "@components/section";
import { NextSeo } from "next-seo";

export default function Legal() {
	return (
		<>
			<NextSeo title="Legal" />
			<HomeLayout>
				<Section />
			</HomeLayout>
		</>
	);
}
