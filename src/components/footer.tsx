import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<footer
			aria-label="Site Footer"
			className="bg-base border-t border-primary"
		>
			<div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div>
						<div className="text-primary">
							<img
								src="/logos/transparent/main.png"
								className="w-16"
								alt="arafa tech's logo"
							/>
							Arafa Tech
						</div>
						<p className="max-w-xs mt-4 text-gray-500">
							Learn. Develop. Succeed.
						</p>
						<ul className="flex gap-6 mt-8 text-secondary">
							<li>
								<a
									href="/"
									rel="noreferrer"
									target="_blank"
									className="transition hover:opacity-75"
								>
									<span className="sr-only">Discord</span>

									<FontAwesomeIcon
										icon={faDiscord}
										className="w-6 h-6"
									/>
								</a>
							</li>
							<li>
								<a
									href="/"
									rel="noreferrer"
									target="_blank"
									className="transition hover:opacity-75"
								>
									<span className="sr-only">Instagram</span>
									<FontAwesomeIcon
										icon={faDiscord}
										className="w-6 h-6"
									/>
								</a>
							</li>
							<li>
								<a
									href="/"
									rel="noreferrer"
									target="_blank"
									className="transition hover:opacity-75"
								>
									<span className="sr-only">TikTok</span>
									<FontAwesomeIcon
										icon={["fab", "discord"]}
										className="w-6 h-6"
									/>
								</a>
							</li>
							<li>
								<a
									href="/"
									rel="noreferrer"
									target="_blank"
									className="transition hover:opacity-75"
								>
									<span className="sr-only">GitHub</span>
									<FontAwesomeIcon
										icon={["fab", "discord"]}
										className="w-6 h-6"
									/>
								</a>
							</li>
							<li>
								<a
									href="/"
									rel="noreferrer"
									target="_blank"
									className="transition hover:opacity-75"
								>
									<span className="sr-only">Twitter</span>
									<FontAwesomeIcon
										icon={["fab", "discord"]}
										className="w-6 h-6"
									/>
								</a>
							</li>
						</ul>
					</div>
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
						<div>
							<p className="font-medium text-primary">Services</p>
							<nav
								aria-label="Footer Navigation - Services"
								className="mt-6"
							>
								<ul className="space-y-4 text-sm">
									<li>
										<a
											href="#"
											className="transition hover:opacity-75"
										>
											Courses
										</a>
									</li>
									<li>
										<a
											href="#"
											className="transition hover:opacity-75"
										>
											Mentorship
										</a>
									</li>
									<li>
										<a
											href="#"
											className="transition hover:opacity-75"
										>
											Community
										</a>
									</li>
									<li>
										<a
											href="#"
											className="transition hover:opacity-75"
										>
											Volunteer
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<div>
							<p className="font-medium text-primary">Company</p>
							<nav
								aria-label="Footer Navigation - Company"
								className="mt-6"
							>
								<ul className="space-y-4 text-sm">
									<li>
										<a
											href="#"
											className="transition hover:opacity-75"
										>
											About
										</a>
									</li>
									<li>
										<a
											href="#"
											className="transition hover:opacity-75"
										>
											Meet the Team
										</a>
									</li>
									<li>
										<a
											href="/legal"
											className="transition hover:opacity-75"
										>
											Legal
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<div>
							<p className="font-medium text-primary">
								Helpful Links
							</p>
							<nav
								aria-label="Footer Navigation - Company"
								className="mt-6"
							>
								<ul className="space-y-4 text-sm">
									<li>
										<a
											href="#"
											className="transition hover:opacity-75"
										>
											Contact
										</a>
									</li>
									<li>
										<a
											href="#"
											className="transition hover:opacity-75"
										>
											FAQs
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<p className="text-xs ">
					© {new Date().getFullYear()}. Arafa Tech Foundation. All
					rights reserved.
				</p>
			</div>
		</footer>
	);
}
