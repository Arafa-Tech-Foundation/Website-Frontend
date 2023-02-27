type CourseMeta = {
	course: string;
	type: string;
	languages: string[];
	level: string;
	order: string[];
	title: string;
	description: string;
	minutes: number; // in minutes (not seconds) :0
};

type Matter = {};

export type { CourseMeta, Matter };
