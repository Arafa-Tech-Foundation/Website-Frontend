import HomeLayout from "@components/layout";
import Section from "@components/section";

import { NextSeo } from "next-seo";

export default function Donate() {
	return (
		<>
			<NextSeo title="Donate" />
			<HomeLayout>
				<Section>
					<div className="mx-auto prose">
						<p className="font-medium text-primary">Donation</p>
						<h1 className="h1 font-semibold mb-0">
							Donate to Arafa Tech
						</h1>
						<p>
							Support Arafa Tech's mission of empowering
							underprivileged students through coding education by
							making a donation today. As a 501(c)(3) non-profit
							organization, we are committed to providing free
							coding courses and mentorship to students who lack
							access to these opportunities. Your generous
							contribution will directly fund the expansion and
							enhancement of our educational programs, allowing us
							to reach more students and equip them with the
							technical skills necessary for the future.
						</p>
						<h2>Why Donate to Arafa Tech? </h2>
						<div className="bg-neutral p-8 rounded-md text-gray-200">
							Sponsor packages coming soon! Reach out for more
							info at{" "}
							<a
								className="text-gray-200"
								href="mailto:admin@arafa.tech"
							>
								help@arafa.tech
							</a>
						</div>
						<p>
							By donating to Arafa Tech, you become an integral
							part of our active community dedicated to making a
							positive impact. Your support enables us to organize
							engaging events, workshops, and hackathons where
							students can collaborate, learn, and network with
							like-minded individuals. Additionally, your
							contribution helps us facilitate mentorship
							programs, where students receive guidance and
							support from experienced professionals in the tech
							industry. Join us in transforming lives and shaping
							the future by donating to Arafa Tech today.
							Together, we can make a difference and provide
							underprivileged students with the tools they need to
							succeed in the ever-evolving world of technology.
							<br /> <br />
							Use the link below to donate to Arafa Tech. Thank
							you for your support!
						</p>
						<div className="not-prose px-6 pb-6 rounded-lg text-center bg-neutral md:py-12 md:px-12 lg:py-8 lg:px-16  xl:items-center">
							<div>
								<h2 className="mt-3 text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
									Donate to Arafa Tech
								</h2>
								<p className="max-w-3xl mt-3 text-lg leading-6 text-gray-200">
									Donate to Arafa Tech to empower
									underprivileged students through coding
									education and mentorship, making a positive
									impact on their lives and the tech
									industry's future.
								</p>
							</div>
							<div className="mt-8 w-full">
								<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
									<a
										href="https://docs.google.com/forms/d/e/1FAIpQLScr07oxVs-KV0b0Y4pl33M4fckP-jYI1p24hgyZtcnnlLeSUA/viewform?usp=sf_link"
										className="btn btn-primary w-full"
									>
										Donate Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</Section>
			</HomeLayout>
		</>
	);
}
