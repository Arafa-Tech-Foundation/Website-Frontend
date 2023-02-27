import Loading from "@components/auth/loading";
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
		return <Loading />;
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
