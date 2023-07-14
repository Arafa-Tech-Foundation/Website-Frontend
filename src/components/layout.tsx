import { NextSeo } from "next-seo";
import Footer from "./footer";
import Header from "./header";

export default function HomeLayout({
	children,
	title,
}: {
	children?: React.ReactNode;
	title?: string;
}) {
	return (
		<div className="min-h-screen flex flex-col relative w-full">
			{title && <NextSeo title={title} />}
			<Header />
			{children}
			<Footer />
		</div>
	);
}
