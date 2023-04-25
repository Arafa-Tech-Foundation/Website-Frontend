import axios from "axios";
import { CourseMeta } from "types";

export async function getCourse(course: string): Promise<CourseMeta[]> {
	return (
		await axios.get(
			`https://raw.githubusercontent.com/Arafa-Tech-Foundation/Courses/main/${course}/.metadata.json`
		)
	).data;
}
