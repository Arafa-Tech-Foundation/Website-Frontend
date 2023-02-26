import axios from "axios";

export async function getRepositoryFolders(): Promise<string[]> {
	const res = await axios.get(
		"https://api.github.com/repos/Arafa-Tech-Foundation/Courses/contents"
	);

	if (res.status !== 200) {
		throw new Error("Failed to fetch courses");
	}

	const directories = res.data.filter((item: any) => item.type === "dir");

	return directories.map((item: any) => item.name);
}
