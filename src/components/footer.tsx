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
		<footer
			aria-label="Site Footer"
			className="bg-base mt-auto shadow-[0_5px_300px_-100px_hsl(var(--p))] border-primary relative bottom-0 w-full"
		>
			<div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div>
						<div className="font-bold mb-2">
							<img
								src="/logos/transparent/main.png"
								className="w-16"
								alt="arafa tech's logo"
							/>
							Arafa Tech
						</div>
						<h1 className="text-center leading-none select-none tracking-tight font-extrabold flex flex-row gap-2">
							<span
								data-content="Learn."
								className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:text-center before:bg-white/5 before:bg-clip-text before:backdrop-blur-sm before:text-transparent before:animate-gradient-background-1 "
							>
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end animate-gradient-foreground-1 text-shadow-footer">
									Learn.
								</span>
							</span>
							<span
								data-content="Develop."
								className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:text-center before:bg-white/5 before:bg-clip-text before:backdrop-blur-sm before:text-transparent before:animate-gradient-background-2"
							>
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end animate-gradient-foreground-2 text-shadow-footer">
									Develop.
								</span>
							</span>
							<span
								data-content="Succeed."
								className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:text-center before:bg-white/5 before:bg-clip-text before:backdrop-blur-sm before:text-transparent before:animate-gradient-background-3"
							>
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end animate-gradient-foreground-3 text-shadow-footer">
									Succeed.
								</span>
							</span>
						</h1>
						<ul className="flex gap-6 mt-8 text-secondary">
							{icons.map((icon) => (
								<li key={icon.href}>
									<a
										href={icon.href}
										rel="noreferrer"
										target="_blank"
										className="transition hover:opacity-50"
									>
										<span className="sr-only">
											{icon.name}
										</span>
										<FontAwesomeIcon
											icon={icon.icon}
											className="w-6 h-6 "
										/>
									</a>
								</li>
							))}
							{/* <li>
								<a
									href="/"
									rel="noreferrer"
									target="_blank"
									className="transition hover:opacity-75"
								>
									<span className="sr-only">Twitter</span>
									<FontAwesomeIcon
										icon={faTwitter}
										className="w-6 h-6"
									/>
								</a>
							</li> */}
						</ul>
					</div>
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
						<div>
							<h3 className="font-bold text-primary">Services</h3>
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
											href="/volunteer"
											className="transition hover:opacity-75"
										>
											Volunteer
										</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div>
							<h3 className="font-bold text-primary">
								Organization
							</h3>
							<nav
								aria-label="Footer Navigation - Organization"
								className="mt-6"
							>
								<ul className="space-y-4 text-sm">
									<li>
										<Link
											href="/team"
											className="transition hover:opacity-75"
										>
											Meet the Team
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
							<h3 className="font-bold text-primary">
								Helpful Links
							</h3>
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
				<div className="flex flex-col space-y-2 lg:flex-row justify-between text-xs">
					<p>
						© {new Date().getFullYear()}. Arafa Tech Foundation, a
						501(c)(3) non-profit. All rights reserved.
					</p>
					<p>EIN: 92-2523850</p>
				</div>
			</div>
		</footer>
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
