import { CourseMeta, CourseModule } from "types";

export function getPreviousLesson(
	meta: CourseMeta,
	module: CourseModule,
	currentPage: string
) {
	if (
		meta.modules.indexOf(module!) == 0 &&
		module.lessons.findIndex((lesson) => lesson.name == currentPage) == 0
	)
		return null;
	let mod = module;
	if (module.lessons.findIndex((lesson) => lesson.name == currentPage) == 0) {
		// go to last lesson of previous mod
		mod = meta.modules[meta.modules.indexOf(mod) - 1];
		return {
			name: mod!.lessons[mod.lessons.length - 1].name,
			module: mod,
		};
	} else {
		return {
			name: mod!.lessons[
				mod.lessons.findIndex((lesson) => lesson.name == currentPage) -
					1
			].name,
			module: mod,
		};
	}
}

export function getNextLesson(
	meta: CourseMeta,
	module: CourseModule,
	currentPage: string
) {
	if (
		meta.modules.indexOf(module) == meta.modules.length - 1 &&
		module.lessons.findIndex((lesson) => lesson.name == currentPage) ==
			module.lessons.length - 1
	)
		return null;

	if (
		module.lessons.findIndex((lesson) => lesson.name == currentPage) ==
		module.lessons.length - 1
	) {
		// go to first lesson of next mod
		const mod = meta.modules[meta.modules.indexOf(module!) + 1];

		return {
			name: mod.lessons[0].name,
			module: mod,
		};
	} else {
		return {
			name: module!.lessons[
				module.lessons.findIndex(
					(lesson) => lesson.name == currentPage
				) + 1
			].name,
			module: module,
		};
	}
}

export function prettifyName(str: string) {
	return str
		.split("_")
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(" ");
}
