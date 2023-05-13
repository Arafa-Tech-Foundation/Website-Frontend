import HomeLayout from "@components/layout";
import { NextSeo } from "next-seo";
import { members } from "@components/team/data";

function Member({
	name,
	title,
	profile,
}: {
	name: string;
	title: string;
	profile: string;
}) {
	return (
		<div className="flex flex-col items-center">
			<img
				className="object-cover w-20 h-20 mb-2 rounded-full shadow"
				src={profile}
				alt="Person"
			/>
			<div className="flex flex-col items-center">
				<p className="text-lg font-bold">{name}</p>
				<p className="text-sm">{title}</p>
			</div>
		</div>
	);
}

export default function Team() {
	return (
		<>
			<NextSeo title="Meet The Team" />
			<HomeLayout>
				<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
						<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
							Under Construction
						</p>
						<p className="text-base text-gray-700 md:text-lg">
							Sed ut perspiciatis unde omnis iste natus error sit
							voluptatem accusantium doloremque laudantium.
						</p>
					</div>
					<div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
						{members.map((m) => (
							<Member {...m} />
						))}
					</div>
				</div>
			</HomeLayout>
		</>
	);
}
