import { NextSeo } from "next-seo";
import HomeLayout from "@components/layout";
import Faq from "@components/contact/faq";
import Link from "next/link";

export default function FaqPage() {
	return (
		<>
			<NextSeo title="FAQ" />
			<HomeLayout>
				<Faq />
				<div className="flex justify-center items-center mb-16">
					<h2>Have more questions?</h2>
					<Link className="btn btn-primary ml-4" href="/contact">
						Contact us
					</Link>
				</div>
			</HomeLayout>
		</>
	);
}
