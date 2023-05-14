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
							<div
								key={staffMember.name}
								className="background-glass flex flex-col items-center justify-center w-full p-4 mx-auto my-4 rounded-lg shadow-lg "
							>
								<img
									className="object-cover w-32 h-32 rounded-full"
									src={staffMember.avatar}
									alt={staffMember.name}
								/>
								<div className="mt-4 text-center">
									<p className="text-lg font-medium text-glow">
										{staffMember.name}
									</p>
									<p className="mt-2 text-sm">
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
												className="text-gray-500 transition duration-200 hover:text-primary"
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

export async function getStaticProps() {
	const result = await notion.databases.query({
		database_id: "fdbaed7b0b594b689876ba5ef7a92fb9",
	});

	const staff = result.results
		.map((page) => {
			// @ts-ignore
			const properties = page.properties;
			const final = {
				name: properties.Name.title[0]?.plain_text || "N/A",
				position: properties.Position?.number || 0,
				description:
					properties.Description.rich_text[0]?.plain_text || "N/A",
				title: properties.Title.rich_text[0]?.plain_text || "N/A",
				avatar:
					properties.Avatar.files[0]?.file?.url || "/logos/main.png",
				links: {},
			} as any;
			const linkedIn = properties.LinkedIn.files[0];
			if (linkedIn) final.links.linkedIn = linkedIn.external.url;

			const github = properties.Github.files[0];
			if (github) final.links.github = github.external.url;

			const website = properties.Website.files[0];
			if (website) final.links.website = website.external.url;

			return final;
		})
		.sort((a, b) => a.position - b.position);

	return {
		props: {
			staff,
		},
		revalidate: 3600,
	};
}
