import Section from "@components/section";
import { NextSeo } from "next-seo";
import GhostText from "../ghostText";

export default function Sponsor() {
	return (
		<>
			<NextSeo title="Hackathon" />
			<GhostText content="Sponsors" intensity="low" />
		</>
	);
}
