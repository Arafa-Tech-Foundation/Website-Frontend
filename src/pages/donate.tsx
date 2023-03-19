import HomeLayout from "@components/layout";
import UnderConstruction from "@components/underConstruction";
import { NextSeo } from "next-seo";

export default function Donate() {
	return (
		<>
			<NextSeo title="Donate" />
			<HomeLayout>
				<UnderConstruction />
			</HomeLayout>
		</>
	);
}
