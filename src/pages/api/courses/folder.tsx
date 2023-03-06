import axios from "axios";

export async function getFolderContents(folder: string): Promise<string[]> {
	const res = await axios.get(
		`https://api.github.com/repos/Arafa-Tech-Foundation/Courses/contents/${folder}?ref=main`, {headers: {
			Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
		}}
	);

	if (res.status !== 200) {
		throw new Error("Failed to fetch courses");
	}
	const files = res.data.filter(
		// filter out metadata files
		(item: any) => item.type === "file" && !item.name.startsWith(".")
	);
	return files.map((item: any) => item.name);
}
