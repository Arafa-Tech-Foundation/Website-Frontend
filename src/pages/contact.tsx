import HomeLayout from "@components/layout";
import { NextSeo } from "next-seo";
import Contact from "@components/contact";
import Faq from "@components/contact/faq";

export default function ContactPage() {
	return (
		<>
			<NextSeo title="Contact" />
			<HomeLayout>
				<Contact />
				<Faq />
			</HomeLayout>
		</>
	);
}
