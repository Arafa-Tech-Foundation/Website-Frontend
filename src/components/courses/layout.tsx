import Loading from "@components/auth/loading";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

import { CourseMeta } from "types";
import { prettifyName } from "utils";

export default function CoursesLayout({
	children,
	isOpen,
	setIsOpen,
	videos,

	meta,
}: {
	children: React.ReactNode;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	videos: { name: string; duration: number }[];
	meta: CourseMeta;
}) {
	const { data: session, status } = useSession();
	if (status === "loading") {
		// TODO: show full loading page
		return <Loading />;
	}

	const router = useRouter();

	return (
		<>
			<header className="py-1 bg-neutral sm:py-3 px-4 flex sticky top-0 z-10 shadow-[0_5px_200px_-30px_hsl(var(--p))]">
				<Link href="/courses" className="flex items-center flex-1">
					<img
						src="/logos/transparent/main.png"
						className="max-w-[3em]"
						alt="Course Icon"
					/>
					<h1 className="text-white h3 font-bold ml-2 hidden sm:block">
						Arafa Tech
					</h1>
				</Link>
				<div className="flex justify-center items-center flex-1">
					<img
						src={`https://raw.githubusercontent.com/Arafa-Tech-Foundation/Courses/main/${meta.name}/static/icon.svg`}
						className="max-w-[3em]"
						alt="Course Icon"
					/>
				</div>

				<div className="flex justify-end items-center flex-1 gap-4">
					<div>
						{status === "unauthenticated" ? (
							<button
								className="btn btn-sm btn-primary"
								onClick={() => {
									signIn("discord");
								}}
							>
								{window.innerWidth > 768
									? "Login To Save Progress"
									: "Login"}
							</button>
						) : (
							<img
								src={session?.user?.image ?? "/logo.png"}
								alt={
									session?.user?.name ??
									"Default" + "'s profile picture"
								}
								className="avatar avatar-sm rounded-full w-8"
							/>
						)}
						<h3 className="hidden sm:inline ml-2 text-white">
							{session?.user?.name}
						</h3>
					</div>
				</div>
				<div className="absolute left-0 top-[110%]">
					<button
						className="btn bg-neutral text-white btn-square rounded-r-2xl rounded-l-none"
						onClick={() => {
							setIsOpen((isOpen: any) => !isOpen);
						}}
					>
						<FontAwesomeIcon icon={faBars} className="h-[50%]" />
					</button>
				</div>
			</header>

			<aside
				className={clsx(
					"fixed left-0 bg-gray-100 pt-5 top-0 w-[calc(100vw-75px)] overflow-y-scroll sm:w-[500px] max-w-full h-full z-40 transition duration-500 ease-[cubic-bezier(0.5, 0, 0, 1)]",
					isOpen ? "translate-x-0" : "translate-x-[-100%]"
				)}
			>
				<div className="flex justify-end">
					<button
						className="btn btn-ghost"
						onClick={() => {
							setIsOpen((isOpen: any) => !isOpen);
						}}
					>
						<FontAwesomeIcon
							icon={faArrowLeft}
							className="h-[50%]"
						/>
					</button>
				</div>

				<nav className="pb-20" aria-label="Main Navigation">
					<Link
						href="/courses"
						className="flex btn btn-sm btn-ghost text-left px-8 items-center text-black h6 font-bold ml-2 my-4"
					>
						Back to Courses
					</Link>
					{meta.modules.map((module) => (
						<section className="my-4 px-2" key={module.name}>
							<div className="rounded-lg py-2 px-2">
								<p className="text-sm font-semibold">
									{module.name.split(": ")[0]}
								</p>
								<h2 className="h3 font-bold text-black">
									{module.name.split(": ")[1]}
								</h2>
							</div>
							{module.lessons.map((lesson, i) => (
								<Link
									key={lesson.name}
									href={`/courses/${meta.name}/${lesson.name}`}
									className={clsx(
										"flex items-center hover:text-gray-500 my-1 py-2 px-2 rounded",
										router.asPath.includes(lesson.name) &&
											"bg-primary text-white hover:text-white"
									)}
									onClick={() => setIsOpen(false)}
								>
									<span className="flex-1">
										{`Lesson ${i + 1}: ${prettifyName(
											lesson.name
										)}`}
									</span>
									{lesson.video && (
										<span>
											{(() => {
												const duration = videos.find(
													(video) =>
														video.name ===
														lesson.video
												)?.duration;
												if (!duration) return "00:00";
												const date = new Date(0);
												date.setSeconds(duration);
												return date
													.toISOString()
													.substring(14, 19);
											})()}
										</span>
									)}
								</Link>
							))}
						</section>
					))}
				</nav>
			</aside>
			<main className="px-4 pb-20">{children}</main>
		</>
	);
}
