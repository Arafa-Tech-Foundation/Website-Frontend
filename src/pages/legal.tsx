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
					<div className="flex flex-col gap-4 md:grid md:grid-cols-3">
						{documents.map((document) => (
							<a
								key={document.href}
								href={document.href}
								target="_blank"
								className="grid-item bg-gradient-to-r from-primary to-secondary text-center text-primary-content px-4 py-2 rounded hover:scale-105 cursor-pointer transition"
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
		href: "/documents/articles_of_incorporation.pdf",
	},
	{
		title: "Bylaws",
		href: "/documents/bylaws.pdf",
	},
	{
		title: "501(c)(3) Determination Letter",
		href: "/documents/501c3.pdf",
	},
	{
		title: "EIN",
		href: "/documents/ein.pdf",
	},
];
