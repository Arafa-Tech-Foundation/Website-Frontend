import HomeLayout from "@components/layout";
import { NextSeo } from "next-seo";
import ContactHero from "@components/contact";

export default function Contact() {
	return (
		<>
			<NextSeo title="Contact" />
			<HomeLayout>
				<ContactHero />
			</HomeLayout>
		</>
	);
}
