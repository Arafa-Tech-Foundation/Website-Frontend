import Link from "next/link";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

const headerLinks = [
	{
		name: "Courses",
		href: "/courses",
	},
	{
		name: "Mentorship",
		href: "/mentorship",
	},
	{
		name: "Workshops",
		href: "/workshops",
	},
	{
		name: "Volunteer",
		href: "https://arafa-tech.notion.site/Arafa-Tech-Opportunities-57a3c033a1994747aeaceb70cb5f2b1e?pvs=4",
	},
	{
		name: "Contact",
		href: "/contact",
	},
];

export default function Header() {
	// const { status } = useSession({ required: false });
	// const router = useRouter();		 const [state, setState] = useState(false)
	const [state, setState] = useState(false);

	return (
		<div className="bg-neutral text-white backdrop-blur sticky !px-0 top-0 py-2 z-10">
			<nav className="w-full md:static md:text-sm md:border-none ">
				<div className="items-center mx-auto md:flex">
					<div className="flex items-center justify-between py-3 md:py-5 md:block px-10">
						<Link className="flex items-center gap-4" href="/">
							<span className="sr-only">Home</span>
							<img
								src="/logos/transparent/main.png"
								className="max-w-[3em]"
								alt="arafa tech's logo"
							/>
							<h1 className="hidden text-xl md:block font-semibold tracking-widest uppercase">
								Arafa Tech
							</h1>
						</Link>
						<div className="md:hidden">
							<label className="text-primary swap swap-rotate">
								<input
									type="checkbox"
									onClick={(e) => {
										setState(!state);
										console.log(state);
									}}
								/>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 swap-on"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
								<FontAwesomeIcon
									size="lg"
									icon={faBars}
									className="swap-off"
								/>
							</label>
						</div>
					</div>
					<motion.div
						initial={{ y: -40, opacity: 0 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 px-8 ${
							state ? "block" : "hidden"
						}`}
					>
						<ul className="justify-end items-center space-y-6 md:space-y-0 md:flex md:space-x-6 font-semibold md:font-normal">
							{headerLinks.map((item, idx) => {
								return (
									<>
										<li
											key={idx}
											className="text-gray-300 hover:text-primary-600"
										>
											<Link
												href={item.href}
												className="block"
											>
												{item.name}
											</Link>
										</li>
										{idx !== headerLinks.length - 1 && (
											<div className="w-full h-1 border-t border-gray-200 md:hidden"></div>
										)}
									</>
								);
							})}
							<li>
								<Link
									href="/discord"
									className="btn btn-primary w-full mx-auto"
								>
									Join the Community
								</Link>
							</li>
						</ul>
					</motion.div>
				</div>
			</nav>
		</div>
	);
}
