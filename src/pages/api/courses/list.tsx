import axios from "axios";
import { getRepositoryFolders } from "./repository";
import { CourseMeta } from "types";

export async function getCourseList(): Promise<CourseMeta[]> {
	const courses = await getRepositoryFolders();

	const metadata = courses.map(async (course) => {
		const encodedCourse = encodeURIComponent(course);
		const url = `https://raw.githubusercontent.com/Arafa-Tech-Foundation/Courses/main/${encodedCourse}/.metadata.json`;

		const res = await axios.get(url);

		return res.data;
	});

	const data = await Promise.all(metadata);
	return data;
}
