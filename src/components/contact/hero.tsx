import Section from "@components/section";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function ContactHero() {
	return (
		<>
			<NextSeo title="Contact Us" />
			<Section className="my-4">
				<div className="container px-6 py-12 mx-auto">
					<div>
						<p className="font-medium text-primary ">Contact us</p>

						<h1 className="mt-2 font-semibold h1">
							We’d love to hear from you
						</h1>

						<p className="mt-3 text-gray-500 ">
							Our friendly team is always here to chat.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2">
						<div className="p-4 rounded-lg bg-neutral md:p-6 ">
							<span className="inline-block p-1 text-primary rounded-lg">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-7 h-7"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
									/>
								</svg>
							</span>

							<h2 className="mt-4 text-base font-medium text-white ">
								Email Us
							</h2>
							<p className="mt-2  text-gray-500 ">
								Speak to our friendly team.
							</p>
							<a
								href="mailto:help@arafa.tech"
								className="mt-2  text-primary hover:underline"
							>
								help@arafa.tech
							</a>
						</div>

						<div className="p-4 rounded-lg bg-neutral md:p-6 ">
							<span className="inline-block p-1 text-primary rounded-lg ">
								<FontAwesomeIcon
									color="currentColor"
									icon={faDiscord}
									size="xl"
								/>
							</span>

							<h2 className="mt-4 text-base font-medium text-white ">
								Chat to support
							</h2>
							<p className="mt-2  text-gray-500 ">
								Find us on Discord.
							</p>
							<Link
								href="/discord"
								className="mt-2  text-primary hover:underline"
							>
								Join the community
							</Link>
						</div>

						<div className="p-4 rounded-lg bg-neutral md:p-6 ">
							<span className="inline-block p-1 text-primary rounded-lg  ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-7 h-7"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
									/>
								</svg>
							</span>

							<h3 className="h5 mt-4 font-medium text-white ">
								Send a pigeon
							</h3>
							<p className="mt-2 text-gray-500 ">
								We are always expecting those
							</p>
							<a
								href="mailto:help@arafa.tech"
								className="mt-2 text-primary hover:underline"
							>
								Send a pigeon... Or email us
							</a>
						</div>

						<div className="p-4 rounded-lg bg-neutral md:p-6 ">
							<span className="inline-block p-1 text-primary rounded-lg  ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									className="w-7 h-7"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
									/>
								</svg>
							</span>

							<h2 className="mt-4 text-base font-medium text-white ">
								Call us
							</h2>
							<p className="mt-2  text-gray-500 ">
								We’re here to help.
							</p>
							<a
								href="tel:7025307389"
								className="mt-2  text-primary hover:underline"
							>
								+1 (702) 530-7389
							</a>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
}
