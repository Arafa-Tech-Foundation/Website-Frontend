import HomeLayout from "@components/layout";
import Section from "@components/section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextSeo } from "next-seo";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { notion } from ".";
import { StaffMember } from "types";

const icons = {
	linkedIn: faLinkedin,
	github: faGithub,
	website: faGlobe,
};

export default function Leadership({ staff }: { staff: StaffMember[] }) {
	return (
		<>
			<NextSeo title="Leadership" />
			<HomeLayout>
				<Section>
					<h1 className="text-4xl font-bold text-center ">
						Leadership
					</h1>
					<p className="mt-2 text-center">
						Meet the leaders behind the platform.
					</p>
					<div className="grid grid-cols-3 gap-8">
						{staff.map((staffMember) => (
							<div className="flex flex-col items-center justify-center w-full p-4 mx-auto my-4 bg-gradient rounded-lg shadow-lg ">
								<img
									className="object-cover w-32 h-32 rounded-full"
									src={staffMember.avatar}
									alt={staffMember.name}
								/>
								<div className="mt-4 text-center">
									<p className="text-lg font-medium ">
										{staffMember.name}
									</p>
									<p className="mt-2 text-sm text-gray-500">
										{staffMember.title}
									</p>
								</div>
								<div className="flex justify-center mt-4 space-x-3">
									{Object.entries(staffMember.links).map(
										([key, value]) => (
											<a
												key={key}
												href={`${value || "/"}`}
												target="_blank"
												rel="noreferrer"
												className="text-gray-500 transition duration-300 hover:text-gray-800"
											>
												<span className="sr-only">
													{key}
												</span>
												<FontAwesomeIcon
													// @ts-ignore
													icon={icons[key]}
													className="w-5 h-5"
												/>
											</a>
										)
									)}
								</div>
							</div>
						))}
					</div>
				</Section>
			</HomeLayout>
		</>
	);
}

// const staff = [
// 	{
// 		name: "Hazim O. Arafa",
// 		description:
// 			"Hazim is a software engineer and entrepreneur. He is the founder of the company and the lead developer of the platform.",
// 		title: "Founder & Chief Executive Officer",
// 		avatar: "/images/team/hazim.jpg",
// 		links: {
// 			linkedIn: "https://www.linkedin.com/in/hazim-arafa/",
// 			github: "https://github.com/HazimAr",
// 			website: "https://hazim.tech",
// 		},
// 	},
// 	{
// 		name: "Nikolas Keller Schaefer",
// 		description:
// 			"Hazim is a software engineer and entrepreneur. He is the founder of the company and the lead developer of the platform.",
// 		title: "Chief Financial Officer",
// 		avatar: "/images/team/hazim.jpg",
// 		links: {
// 			linkedIn: "https://www.linkedin.com/in/hazim-arafa/",
// 			github: "https://github.com/HazimAr",
// 			website: "https://hazim.tech",
// 		},
// 	},
// 	{
// 		name: "Param S. Patil",
// 		description:
// 			"Hazim is a software engineer and entrepreneur. He is the founder of the company and the lead developer of the platform.",
// 		title: "Chief Advancements Officer",
// 		avatar: "/images/team/hazim.jpg",
// 		links: {
// 			linkedIn: "https://www.linkedin.com/in/hazim-arafa/",
// 			github: "https://github.com/HazimAr",
// 			website: "https://hazim.tech",
// 		},
// 	},
// ];

export async function getStaticProps() {
	const result = await notion.databases.query({
		database_id: "fdbaed7b0b594b689876ba5ef7a92fb9",
	});
	const staff = result.results.map((page) => {
		// @ts-ignore
		const properties = page.properties;
		console.log();
		return {
			name: properties.Name.title[0].plain_text,
			description: properties.Description.rich_text[0].plain_text,
			title: properties.Title.rich_text[0].plain_text,
			avatar: properties.Avatar.files[0].file.url,
			links: {
				linkedIn: properties.LinkedIn.files[0].external.url,
				github: properties.Github.files[0].external.url,
				website: properties.Website.files[0].external.url,
			},
		};
	});

	// console.log(staff);
	return {
		props: {
			staff,
		},
		revalidate: 3600,
	};
}
