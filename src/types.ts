export type CourseMeta = {
	name: string;
	instructor: string;
	type: "essential" | "application";
	languages: string[];
	level: string;
	modules: CourseModule[];
	title: string;
	description: string;
	skills: string[];
};

export type BlogMatter = {
	title: string;
	tags: string[];
	avatar: string;
	background: string;
	type: string;
	author: string;
	link: string;
	date: number; // unix
	slug?: string;
};

export type CourseModule = {
	name: string;
	lessons: Lesson[];
};

export type Lesson = {
	name: string;
	video: string;
};

export type Shape = {
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

export type StaffMember = {
	title: string;
	name: string;
	avatar: string;
	role: string;
	boardMember: boolean;
	boardTitle: string;
	founder: boolean;
	links: {
		linkedIn?: string;
		github?: string;
		website?: string;
	};
};

// this is a type that is used in the course page to read the meta data of the markdown file
export type Matter = {};
