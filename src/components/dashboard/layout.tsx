import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBars, faBell, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DashboardLayout({
	children = null,
	title,
}: {
	children?: React.ReactNode;
	title?: string;
}) {
	const { data: session, status } = useSession();
	const router = useRouter();
	if (status === "loading") {
		// TODO: show full loading page
		return (
			<div className="flex justify-center items-center h-screen w-screen">
				<div role="status">
					<svg
						aria-hidden="true"
						className="mr-2 w-16 h-16 animate-spin fill-primary"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	}
	if (status === "unauthenticated") {
		signIn("discord");
		return null;
	}

	return (
		<>
			<div className="drawer drawer-mobile">
				<input
					id="sidebar-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content">
					<header className="py-2 px-4 sm:p-6 mb-2 flex sticky top-0 z-[999] bg-base-200 border-b border-secondary">
						<div className="flex justify-start items-center flex-1">
							<label
								htmlFor="sidebar-drawer"
								className="btn btn-square btn-ghost drawer-button lg:hidden mr-4"
							>
								<FontAwesomeIcon icon={faBars} size="2x" />
							</label>
						</div>
						<div className="flex justify-center items-center flex-1 lg:hidden">
							<div className="flex justify-center items-center">
								<img
									src="/logos/transparent/main.png"
									className="max-w-[4em]"
									alt=""
								/>
								<h1 className="text-2xl ml-2 hidden sm:block">
									Arafa Tech
								</h1>
							</div>
						</div>
						{title && (
							<div className="justify-center items-center flex-1 hidden lg:flex">
								<div className="flex justify-center items-center">
									<h1 className="text-2xl ml-2 hidden sm:block">
										{title}
									</h1>
								</div>
							</div>
						)}
						<div className="flex justify-end items-center flex-1 gap-4">
							<button className="btn btn-primary btn-square btn-sm">
								<FontAwesomeIcon icon={faBell} />
							</button>
							<div>
								<img
									src={session?.user?.image ?? "/logo.png"}
									alt={
										session?.user?.name +
										"'s profile picture"
									}
									className="avatar avatar-sm mr-2 rounded-full w-8"
								/>
								<h3 className="hidden sm:inline">
									{session?.user?.name}
								</h3>
							</div>
						</div>
					</header>
					<main className="px-8 w-full">{children}</main>
				</div>

				<aside className="drawer-side">
					<label
						htmlFor="sidebar-drawer"
						className="drawer-overlay"
					></label>
					<section className="min-h-screen bg-base-200 min-w-[225px] max-h-screen top-0 sticky">
						<nav className="h-full border-r border-secondary">
							<nav
								className="h-full text-sm flex flex-col font-medium px-4"
								aria-label="Main Navigation"
							>
								<div className="flex items-center justify-between lg:justify-center">
									<div className="block lg:none flex-1" />
									<div className="flex justify-center items-center gap-4">
										<img
											src="/logos/transparent/main.png"
											className="max-w-[4em]"
											alt=""
										/>
										<h1 className="text-xl py-8">
											Arafa Tech
										</h1>
									</div>

									<div className="flex justify-end items-center flex-1">
										<label
											htmlFor="sidebar-drawer"
											className="btn btn-square btn-ghost drawer-button lg:hidden"
										>
											<FontAwesomeIcon icon={faX} />
										</label>
									</div>
								</div>

								{navItems.map((item) => (
									<Link
										href={item.href}
										className={clsx(
											"flex text-lg items-center rounded px-4 py-2 transition cursor-pointer group hover:bg-base-300",
											router.pathname === item.href &&
												"bg-primary hover:!bg-primary-focus text-primary-content"
										)}
									>
										<FontAwesomeIcon icon={item.icon} />
										{item.label}
									</Link>
								))}
							</nav>
						</nav>
					</section>
				</aside>
			</div>
		</>
	);
}

const navItems: {
	label: string;
	href: string;
	icon: IconProp;
}[] = [
	{
		label: "Home",
		href: "/dashboard",
		icon: "home",
	},
	{
		label: "Courses",
		href: "/dashboard/courses",
		icon: "book",
	},
	{
		label: "Shop",
		href: "/dashboard/shop",
		icon: "store",
	},
	{
		label: "Settings",
		href: "/dashboard/settings",
		icon: "cog",
	},
	{
		label: "Discord",
		href: "https://discord.gg/HQvTe2pHym",
		icon: "discord",
	},
];
