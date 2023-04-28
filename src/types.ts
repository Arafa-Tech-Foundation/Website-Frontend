type CourseMeta = {
	name: string;
	instructor: string;
	type: "essential" | "application";
	languages: string[];
	level: string;
	modules: CourseModule[];
	title: string;
	description: string;
	minutes: number; // in minutes (not seconds) :0
	skills: string[];
};

type BlogMatter = {
	title: string;
	description: string;
	author: string;
	date: number; // unix
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

// this is a type that is used in the course page to read the meta data of the markdown file
type Matter = {};

export type { CourseMeta, CourseModule, Matter, Shape, Lesson, BlogMatter };
