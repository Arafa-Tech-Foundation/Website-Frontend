import { CourseMeta } from "types";

export default function CoursesLayout({
	children,
	//@ts-ignore
	meta,
}: {
	children: React.ReactNode;
	meta: CourseMeta;
}) {
	return <div className="prose">{children}</div>;
}
