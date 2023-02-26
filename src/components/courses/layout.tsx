import { CourseMeta } from "types";

export default function CoursesLayout({
	children,
	meta,
}: {
	children: React.ReactNode;
	meta: CourseMeta;
}) {
	return <div>{children}</div>;
}
