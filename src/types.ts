type CourseMeta = {
	course: string;
	type: string;
	languages: string[];
	level: string;
	modules: CourseModule[];
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

type Shape = {
	x: number;
	y: number;
	slowVelX: number;
	slowVelY: number;
	defaultVelX: number;
	defaultVelY: number;
	velX: number;
	velY: number;
	geom: string;
	length: number;
	id: number;
};

type Matter = {};

export type { CourseMeta, CourseModule, Matter, Shape };
