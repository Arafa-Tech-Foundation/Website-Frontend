import Section from "@components/section";

const testimonials = [
	{
		name: "John Doe",
		title: "Best Coding Education",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, tortor nisl aliquam lorem, eu aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, tortor nisl aliquam lorem, eu aliquam nisl nunc vel lorem.",
	},
	{
		name: "John Doe",
		title: "Best Coding Education",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, tortor nisl aliquam lorem, eu aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, tortor nisl aliquam lorem, eu aliquam nisl nunc vel lorem.",
	},
	{
		name: "John Doe",
		title: "Best Coding Education",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, tortor nisl aliquam lorem, eu aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, tortor nisl aliquam lorem, eu aliquam nisl nunc vel lorem.",
	},
	{
		name: "John Doe",
		title: "Best Coding Education",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, tortor nisl aliquam lorem, eu aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, tortor nisl aliquam lorem, eu aliquam nisl nunc vel lorem.",
	},
	{
		name: "John Doe",
		title: "Best Coding Education",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, tortor nisl aliquam lorem, eu aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, tortor nisl aliquam lorem, eu aliquam nisl nunc vel lorem.",
	},
	{
		name: "John Doe",
		title: "Best Coding Education",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, tortor nisl aliquam lorem, eu aliquam nisl nunc vel lorem. Sed euismod, nunc vel tincidunt lacinia, tortor nisl aliquam lorem, eu aliquam nisl nunc vel lorem.",
	},
];

export default function Testimonials() {
	return (
		<Section>
			<div className="items-end justify-between sm:flex">
				<div className="max-w-xl">
					<h2 className="text-3xl font-bold sm:text-4xl text-primary">
						Read Trusted Reviews From Students
					</h2>
					<p className="mt-8 max-w-lg">
						Discover how Arafa Tech is empowering underprivileged
						students to achieve their technology goals. Read
						testimonials from satisfied customers about their
						experience with our coding workshops, mentorship
						program, and community support.
					</p>
				</div>
				<a href="/reviews" className="btn btn-primary">
					Read all reviews
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="ml-3 h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M14 5l7 7m0 0l-7 7m7-7H3"
						/>
					</svg>
				</a>
			</div>
			<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{testimonials.map((testimonial, i) => (
					<Testimonial
						key={i}
						title={testimonial.title}
						description={testimonial.description}
						name={testimonial.name}
					/>
				))}
			</div>
		</Section>
	);
}

function Testimonial({
	title,
	description,
	name,
	key,
}: {
	title: string;
	description: string;
	name: string;
	key: number;
}) {
	return (
		<blockquote className="flex h-full flex-col justify-between bg-base-200 rounded-lg p-12">
			<div>
				<div className="rating">
					<input
						type="radio"
						name={`rating-${key}`}
						className="mask mask-star-2 bg-secondary"
					/>
					<input
						type="radio"
						name={`rating-${key}`}
						className="mask mask-star-2 bg-secondary"
						// checked
					/>
					<input
						type="radio"
						name={`rating-${key}`}
						className="mask mask-star-2 bg-secondary"
					/>
					<input
						type="radio"
						name={`rating-${key}`}
						className="mask mask-star-2 bg-secondary"
					/>
					<input
						type="radio"
						name={`rating-${key}`}
						className="mask mask-star-2 bg-secondary"
					/>
				</div>
				<div className="mt-4">
					<h3 className="text-xl font-bold text-primary sm:text-2xl">
						{title}
					</h3>
					<p className="mt-4 text-gray-600">{description}</p>
				</div>
			</div>
			<footer className="mt-8 text-gray-500">- {name}</footer>
		</blockquote>
	);
}
