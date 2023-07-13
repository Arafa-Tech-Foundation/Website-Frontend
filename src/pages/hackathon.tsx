import HomeLayout from "@components/layout";
import Section from "@components/section";
import { NextSeo } from "next-seo";
import Hero from "@components/hackathon/hero";
import About from "@components/hackathon/about/about";
import Sponsor from "@components/hackathon/sponsors/sponsor";
import FAQ from "@components/hackathon/faq/faq";
import Speakers from "@components/hackathon/speakers/speakers";
import Team from "@components/hackathon/team/team";

// Fix maraquee effect
// Configure Mobile sizing (and breakpoints)
// Mobile sizing messing with dropdown menu
// Fix FAQ errors 

export default function HackathonPage() {
	return (
		<>
			<NextSeo title="Hackathon"/>
			<HomeLayout>
				<Section className="text-white">
					<Hero />
					<About />
					<Sponsor />
					<FAQ />
					<Speakers />
					{/* <Team /> */}
				</Section>
			</HomeLayout>
		</>
	);
}
