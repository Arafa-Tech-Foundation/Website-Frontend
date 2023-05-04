import { NextSeo } from "next-seo";
import HomeLayout from "@components/layout";
import Faq from "@components/contact/faq";
import Contact from "@components/contact";

export default function FaqPage() {
	return (
		<>
			<NextSeo title="FAQ" />
			<HomeLayout>
				<Faq />
				<Contact />
			</HomeLayout>
		</>
	);
}
