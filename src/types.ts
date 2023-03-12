type CourseMeta = {
	course: string;
	type: string;
	languages: string[];
	level: string;
	schema: CourseModule[];
	title: string;
	description: string;
	minutes: number; // in minutes (not seconds) :0
};

type CourseModule = {
	name: string;
	lessons: Lesson[];
};

type Lesson = {
	name: string;
	video: string;
};

type Matter = {};

export type { CourseMeta, CourseModule, Matter };
