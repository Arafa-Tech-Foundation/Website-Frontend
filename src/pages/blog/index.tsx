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

export async function getStaticProps(context) {
	return {
		props: {}, // will be passed to the page component as props
		revalidate: 3600,
	};
}
