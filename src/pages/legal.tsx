import HomeLayout from "@components/layout";
import Section from "@components/section";
import { NextSeo } from "next-seo";

export default function Legal() {
	return (
		<>
			<NextSeo title="Legal" />
			<HomeLayout>
				<Section>
					<h1 className="text-3xl text-center mb-10">Legal</h1>
					<div className="grid grid-cols-3 gap-4 py-10">
						{documents.map((document) => (
							<a
								href={document.href}
								target="_blank"
								className="grid-item bg-primary text-primary-content px-4 py-2 rounded hover:scale-105 cursor-pointer"
							>
								<h1 className="text-2xl">{document.title}</h1>
							</a>
						))}
					</div>
				</Section>
			</HomeLayout>
		</>
	);
}

const documents = [
	{
		title: "Articles of Incorporation",
		href: "/documents/articles-of-incorporation.pdf",
	},
	{
		title: "Bylaws",
		href: "/documents/bylaws.pdf",
	},
	{
		title: "EIN",
		href: "/documents/ein.pdf",
	},
];
