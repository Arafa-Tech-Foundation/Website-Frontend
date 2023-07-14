import HomeLayout from "@components/layout";
import Section from "@components/section";

import { NextSeo } from "next-seo";

export default function Donate() {
	return (
		<>
			<NextSeo title="Donate" />
			<HomeLayout>
				<Section>
					<div className="flex gap-16 max-w-2xl mx-auto">
						<div className="flex flex-col gap-8 prose">
							<h1 className="text-3xl font-semibold text-center mb-0">
								Donate to Arafa Tech
							</h1>
							<p className="text-gray-400 mb-4">
								Support Arafa Tech's mission of empowering
								underprivileged students through coding
								education by making a donation today. As a
								501(c)(3) non-profit organization, we are
								committed to providing free coding courses and
								mentorship to students who lack access to these
								opportunities. Your generous contribution will
								directly fund the expansion and enhancement of
								our educational programs, allowing us to reach
								more students and equip them with the technical
								skills necessary for the future.
								<br /> <br />
								By donating to Arafa Tech, you become an
								integral part of our active community dedicated
								to making a positive impact. Your support
								enables us to organize engaging events,
								workshops, and hackathons where students can
								collaborate, learn, and network with like-minded
								individuals. Additionally, your contribution
								helps us facilitate mentorship programs, where
								students receive guidance and support from
								experienced professionals in the tech industry.
								Join us in transforming lives and shaping the
								future by donating to Arafa Tech today.
								Together, we can make a difference and provide
								underprivileged students with the tools they
								need to succeed in the ever-evolving world of
								technology.
								<br /> <br />
								Use the link below to donate to Arafa Tech.
								Thank you for your support!
							</p>
							<a
								href="https://givebutter.com/arafa-tech-foundation"
								className="btn btn-primary"
							>
								Donate to Arafa Tech
							</a>
						</div>
					</div>
				</Section>
			</HomeLayout>
		</>
	);
}
