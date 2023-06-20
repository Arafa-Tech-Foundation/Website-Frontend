import HomeLayout from "@components/layout";
import Section from "@components/section";
import { NextSeo } from "next-seo";
import clsx from "clsx";
import { legalData } from "@components/legal/data";
import { useState } from "react";

export default function Legal() {
	// Using state to change between doucments in data file
	const [document, setDocument] = useState(legalData[0]);

	const handleDocumentChange = (info: any) => {
		setDocument(info);
	};

	return (
		<>
			<NextSeo title="Legal" />
			<HomeLayout>
				<Section>
					<div className="text-white">
						<div className="flex">
							<h1 className="text-2xl text-glow font-semibold mb-10 mr-5 mt-3">
								Legal
							</h1>
							<div className="flex rounded-xl gap-4 mb-10 bg-neutral w-fit px-4 py-2 mx-auto">
								{legalData.map((info) => (
									<button
										key={info.title}
										className={clsx(
											"flex flex-col text-xl items-center hover:text-primary px-2 py-1 ",
											info.title === document.title &&
												"text-primary bg-neutral rounded-xl"
										)}
										onClick={() =>
											handleDocumentChange(info)
										}
									>
										{info.title}
									</button>
								))}
							</div>
						</div>
						<div className="whitespace-pre-wrap">
							<div className="text-5xl font-semibold mb-5">
								<h3>{document.subTitle}</h3>
							</div>
							<p
								dangerouslySetInnerHTML={{
									__html: document.description,
								}}
							></p>
						</div>
						<div className="flex">
							{documents.map((document) => (
								<a
									key={document.href}
									href={document.href}
									target="_blank"
									className="my-5 mr-5 p-2 bg-gradient-to-r from-primary to-secondary text-primary-content rounded hover:scale-105 cursor-pointer transition"
								>
									<h1 className="text-xl">
										{document.title}
									</h1>
								</a>
							))}
						</div>
					</div>
				</Section>
			</HomeLayout>
		</>
	);
}

// Old documents just appended to the bottom
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
