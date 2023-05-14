import HomeLayout from "@components/layout";
import { NextSeo } from "next-seo";
import Contact from "@components/contact/hero";

export default function ContactPage() {
	return (
		<>
			<NextSeo title="Contact" />
			<HomeLayout>
				<Contact />
			</HomeLayout>
		</>
	);
}
