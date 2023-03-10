import Loading from "@components/auth/loading";
import { faBars, faBell, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn, useSession } from "next-auth/react";
import { CourseMeta, Matter } from "types";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CoursesLayout({
	children,
	meta,
	page,
}: {
	children: React.ReactNode;
	meta: CourseMeta;
	matter: Matter;
	page: string;
}) {
	const module = meta.schema.find(mod => mod.order.indexOf(page) != -1);
	if (!module) throw Error("Module not found")

	function getNextLesson() {
		let mod = module;
		if (mod!.order.indexOf(page) == mod!.order.length - 1) {
			// go to first lesson of next mod
			mod = meta.schema[meta.schema.indexOf(mod!) + 1]
			return {
				name: mod.order[mod.order.length - 1],
				module: mod.name
			}
		} else {
			return {
				name: mod!.order[mod!.order.indexOf(page) + 1],
				module: mod!.name
			}
		}
	}
	
	
	function getPreviousLesson() {
		if(meta.schema.indexOf(module!) == 0 && module!.order.indexOf(page) == 0) return null
		let mod = module;
		if (mod!.order.indexOf(page) == 0) {
			// go to last lesson of previous mod
			mod = meta.schema[meta.schema.indexOf(mod!) - 1]
			return {
				name: mod!.order[mod.order.length - 1],
				module: mod!.name
			}
		} else {
			return {
				name: mod!.order[mod!.order.indexOf(page) - 1],
				module: mod!.name
			}
		}
	}
	const { data: session, status } = useSession();
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
									src={`https://raw.githubusercontent.com/Arafa-Tech-Foundation/Courses/main/${meta.course}/static/icon.svg`}
									className="max-w-[4em]"
									alt="Course Icon"
								/>
								<h1 className="text-2xl ml-2 hidden sm:block">
									Arafa Tech
								</h1>
							</div>
						</div>
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
					<main className="p-8 w-full prose mx-auto">
						{children}
						<div className="flex flex-row w-full gap-4 justify-center">
							{getPreviousLesson() && 
								<Link
								className="btn btn-primary grow"
								href={`/courses/${meta.course}/${getPreviousLesson()?.name || ""}`}
								>
									Previous Lesson:{" "}

									{prettify(getPreviousLesson()?.name || "")}
								</Link>
							}
								<Link
								className="btn btn-primary grow"
								href={`/courses/${meta.course}/${getNextLesson().name}`}
								// onClick={nextPage}
								>
									Next Lesson:{" "}
									{prettify(getNextLesson().name)}
								</Link>
						</div>
					</main>
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
								<ul>
									{meta.schema.map(module => 
										<li>
											<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
												<input type="checkbox"/>
												<div className="collapse-title text-xl font-medium">
													{module.name}
												</div>
												<div className="collapse-content" tabIndex={0}> 
													{module.order.map((lesson, i) => <Link href={`/courses/${meta.course}/${lesson}`} className="link link-primary block">{`Lesson ${i}: ${prettify(lesson)}`}</Link>)}
												</div>
											</div>					
										</li>
									)}
								</ul>
							</nav>
						</nav>
					</section>
				</aside>
			</div>
		</>
	);
}

function prettify(str: string) {
	return str
		.split("_")
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(" ");
}
