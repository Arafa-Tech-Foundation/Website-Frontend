import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiscord,
	faGithub,
	faInstagram,
	faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
	return (
		<>
			<footer aria-label="Site Footer pt-8">
				<div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
						<div className="col-span-2">
							<h1 className="font-bold text-black mb-2 h1">
								Arafa Tech Foundation
							</h1>
							<h2 className="max-w-lg">
								We are a 501(c)(3) non-profit organization that
								is dedicated to providing free technical
								education.
							</h2>
							<ul className="flex gap-6 mt-8 text-gray-700">
								{icons.map((icon) => (
									<li key={icon.href}>
										<a
											href={icon.href}
											rel="noreferrer"
											target="_blank"
											className="transition hover:opacity-80"
										>
											<span className="sr-only">
												{icon.name}
											</span>
											<FontAwesomeIcon
												icon={icon.icon}
												className="w-7 h-7 "
											/>
										</a>
									</li>
								))}
							</ul>
							<a
								href="https://vercel.com/?utm_source=arafa-tech-foundation&utm_campaign=oss"
								target="_blank"
							>
								<img
									src="https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg"
									alt="Vercel Banner"
									className="mt-4"
								/>
							</a>
						</div>
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
							<div>
								<h3 className="font-bold">Services</h3>
								<nav
									aria-label="Footer Navigation - Services"
									className="mt-6"
								>
									<ul className="space-y-4 text-sm">
										<li>
											<Link
												href="/courses"
												className="transition hover:opacity-75"
											>
												Courses
											</Link>
										</li>
										<li>
											<Link
												href="/mentorship"
												className="transition hover:opacity-75"
											>
												Mentorship
											</Link>
										</li>
										<li>
											<Link
												href="/workshops"
												className="transition hover:opacity-75"
											>
												Workshops
											</Link>
										</li>

										<li>
											<a
												href="https://arafa-tech.notion.site/Arafa-Tech-Opportunities-57a3c033a1994747aeaceb70cb5f2b1e?pvs=4"
												className="transition hover:opacity-75"
											>
												Volunteer
											</a>
										</li>
									</ul>
								</nav>
							</div>
							<div>
								<h3 className="font-bold">Organization</h3>
								<nav
									aria-label="Footer Navigation - Organization"
									className="mt-6"
								>
									<ul className="space-y-4 text-sm">
										<li>
											<Link
												href="/leadership"
												className="transition hover:opacity-75"
											>
												Leadership
											</Link>
										</li>
										<li>
											<Link
												href="/blog"
												className="transition hover:opacity-75"
											>
												Blog
											</Link>
										</li>
										<li>
											<Link
												href="/legal"
												className="transition hover:opacity-75"
											>
												Legal
											</Link>
										</li>
									</ul>
								</nav>
							</div>
							<div>
								<h3 className="font-bold">Links</h3>
								<nav
									aria-label="Footer Navigation - Company"
									className="mt-6"
								>
									<ul className="space-y-4 text-sm">
										<li>
											<Link
												href="/contact"
												className="transition hover:opacity-75"
											>
												Contact
											</Link>
										</li>
										<li>
											<Link
												href="/donate"
												className="transition hover:opacity-75"
											>
												Donate
											</Link>
										</li>
										<li>
											<Link
												href="/faq"
												className="transition hover:opacity-75"
											>
												FAQs
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className="flex py-6 px-16 bg-gray-100 flex-col space-y-2 lg:flex-row justify-start text-sm">
				<p>
					© {new Date().getFullYear()}. Arafa Tech Foundation, a
					501(c)(3) non-profit. All rights reserved. EIN: 92-2523850
				</p>
			</div>
		</>
	);
}

const icons = [
	{
		name: "Discord",
		icon: faDiscord,
		href: "/discord",
	},
	{
		name: "Instagram",
		icon: faInstagram,
		href: "https://www.instagram.com/arafatechfoundation/",
	},
	{
		name: "TikTok",
		icon: faTiktok,
		href: "https://www.tiktok.com/@arafatechfoundation",
	},
	{
		name: "GitHub",
		icon: faGithub,
		href: "https://github.com/Arafa-Tech-Foundation",
	},
];
