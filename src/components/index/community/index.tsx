import Section from "@components/section";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Testimonial from "../testimonial";

export default function Community() {
	return (
		<Section className="border-t border-b text-black py-32 border-gray-300 bg-gray-100">
			<div className="text-center mb-20 sm:mb-40 max-w-4xl mx-auto">
				<h3 className="uppercase mb-2">Community</h3>
				<h1 className="h-large font-extrabold mb-8">
					Collaborate, empower, and create positive change within our
					community
				</h1>
				<Link className="text-primary group h4" href="/discord">
					Join our Discord server
					<FontAwesomeIcon
						className="ml-2 group-hover:translate-x-2 transition-transform"
						icon={faChevronRight}
					/>
				</Link>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-32 mx-auto items-center mb-24 sm:mb-48 ">
				<motion.div
					initial={{ x: 20, opacity: 0 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.2, delay: 0.3 }}
					className="flex flex-col gap-10 w-[90%] mt-10 lg:my-0 mx-auto lg:w-full"
				>
					<div className="space-y-4">
						<h2 className="font-bold h1">Participate in events</h2>
						<p className="h4 text-gray-500">
							Join our friendly community for coding education,
							mentorship, networking, and more!
						</p>
					</div>
					<div className="grid grid-cols-2 gap-4">
						{[
							"Hackathons",
							"Workshops",
							"Events",
							"Mentorship",
							"Coding Challenges",
							"Q/As",
						].map((item) => (
							<div className="flex items-center gap-2">
								<FontAwesomeIcon
									icon={faCheck}
									className="w-5 h-5"
									color="#00ff00"
								/>
								<p className="font-light">{item}</p>
							</div>
						))}
					</div>
				</motion.div>
				<motion.div
					initial={{ x: 10, y: 10, opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
					transition={{ duration: 0.2, delay: 0.5 }}
				>
					<img
						className="mx-auto rounded-lg"
						src="/images/code.svg"
					/>
				</motion.div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-32 mx-auto items-center mb-24 sm:mb-48">
				<motion.div
					initial={{ x: 10, y: 10, opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
					transition={{ duration: 0.2, delay: 0.5 }}
					className="flex justify-start"
				>
					<iframe
						src="https://discord.com/widget?id=1071904870644338739&theme=dark"
						height="500"
						frameBorder="0"
						sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
						className="w-[90%] max-w-[450px] mx-auto rounded-lg"
					></iframe>
				</motion.div>
				<div className="flex flex-col gap-10 w-[90%] mt-10 lg:my-0 mx-auto lg:w-full">
					<motion.div
						initial={{ x: -20, opacity: 0 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.2, delay: 0.3 }}
						className="space-y-4"
					>
						<h2 className="font-bold h1">Meet new people</h2>
						<p className="h4 text-gray-500">
							Expand your horizons and embrace new connections by
							joining our community of like-minded individuals
						</p>
					</motion.div>
				</div>
			</div>

			<div className="text-center mb-20">
				<Link className="text-primary group h4" href="/discord">
					Join our Discord server to learn more
					<FontAwesomeIcon
						className="ml-4 group-hover:translate-x-2 transition-transform"
						icon={faChevronRight}
					/>
				</Link>
			</div>

			<Testimonial
				quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quo officiis distinctio id? Incidunt asperiores commodi sed temporibus qui fuga magni delectus eaque?"
				name="John Doe"
				title="Founder of CodeDay"
				image="https://avatars.githubusercontent.com/u/59715513?v=4"
			/>
		</Section>
	);
}
