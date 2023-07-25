import HomeLayout from "@components/layout";
import Section from "@components/section";
import { NextSeo } from "next-seo";

export default function Legal() {
	return (
		<>
			<NextSeo title="Legal Documents" />
			<HomeLayout>
				<Section className="prose mx-auto">
					<p className="font-medium text-primary ">Legal</p>
					<h1 className="h1 font-semibold mb-5">
						Arafa Tech's Legal Documents
					</h1>
					<p className="text-gray-500 mx-auto prose mb-10">
						Access important legal documents defining our
						nonprofit's structure and purpose, including Articles of
						Incorporation, Bylaws, 501(c)(3) determination letter,
						and EIN.{" "}
					</p>
					<div className="grid grid-cols-1 gap-6 mx-auto not-prose">
						{documents.map((document) => (
							<a
								key={document.href}
								href={document.href}
								target="_blank"
								className="bg-neutral text-left text-primary p-5 rounded cursor-pointer transition duration-200 ease-in-out transform hover:-translate-y-1"
							>
								<h1 className="text-2xl">{document.title}</h1>
								<p className="text-gray-500">
									{document.description}
								</p>
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
		description:
			"The Articles of Incorporation for the organization for Arafa Tech Foundation",
	},
	{
		title: "Bylaws",
		href: "/documents/bylaws.pdf",
		description:
			"The Bylaws for the organization for Arafa Tech Foundation",
	},
	{
		title: "501(c)(3) Determination Letter",
		href: "/documents/501c3.pdf",
		description:
			"The 501(c)(3) Determination Letter for the organization for Arafa Tech Foundation",
	},
	{
		title: "EIN (Employer Identification Number)",
		href: "/documents/ein.pdf",
		description: "The EIN for the organization for Arafa Tech Foundation",
	},
];
