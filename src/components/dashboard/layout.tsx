import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
// import { useRouter } from "next/router";

export default function DashboardLayout({
	children = null,
}: {
	children?: React.ReactNode;
}) {
	const { data: session, status } = useSession();
	// const router = useRouter();
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
	if (session == null && status === "unauthenticated") {
		signIn("discord");
		return null;
	}

	return (
		<>
			<aside className="drawer drawer-mobile">
				<input
					id="sidebar-drawer"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content">
					{/* <Header /> */}
					<main className="px-8 w-full">{children}</main>
				</div>

				<div className="drawer-side">
					<label
						htmlFor="sidebar-drawer"
						className="drawer-overlay"
					></label>
					<section className="min-h-screen bg-base-200 min-w-[225px] max-h-screen top-0 sticky">
						<nav className="h-full border-r">
							<nav
								className="h-full text-sm flex flex-col font-medium"
								aria-label="Main Navigation"
							>
								<div className="flex items-center justify-between lg:justify-center">
									<div className="block lg:none flex-1" />

									<img
										src="/logo.png"
										alt="V-Core"
										className="w-[100px] py-4"
									/>

									<div className="flex items-center justify-end flex-1">
										<label
											htmlFor="sidebar-drawer"
											className="btn btn-square btn-ghost drawer-button lg:hidden mr-4"
										>
											<FontAwesomeIcon icon="x" />
										</label>
									</div>
								</div>

								{navItems.map((item) => (
									<Link href={item.href}>
										<FontAwesomeIcon icon={item.icon} />
										
									</Link>
								))}

								<div className="flex flex-1 flex-col justify-end">
									<div className="flex text-lg items-center px-4 py-4 transition cursor-pointer group justify-between">
										<span className="mr-4">
											{session?.user.name}
										</span>
										<div className="flex justify-center">
											<button
												onClick={() => {
													Cookies.remove(
														"authorization"
													);
													router.push("/");
												}}
												className="btn btn-outline btn-sm"
											>
												<FaDoorOpen size={20} />
											</button>
										</div>
									</div>
								</div>
							</nav>
						</nav>
					</section>
				</div>
			</aside>
			<main>{children}</main>
		</>
	);
}

const navItems: {
	label: string;
	href: string;
	icon: IconProp;
}[] = [
	{
		label: "Dashboard",
		href: "/dashboard",
		icon: "home",
	},
	{
		label: "Servers",
		href: "/servers",
		icon: "server",
	},
	{
		label: "Settings",
		href: "/settings",
		icon: "cog",
	},
];
