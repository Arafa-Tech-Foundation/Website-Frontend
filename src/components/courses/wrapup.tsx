import Testimonial from "@components/index/testimonial";
import Section from "@components/section";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function WrapUp() {
	return (
		<Section className="mb-20">
			<div className="text-center mb-10 sm:mb-20 max-w-4xl mx-auto">
				<h3 className="uppercase mb-2">Collaboration</h3>
				<h1 className="h-large font-extrabold mb-8 text-black">
					Learn in a community <br /> of like-minded people
				</h1>
				<p className="h3 text-gray-500 mb-4">
					We believe that the best way to learn is to learn together.
					That's why we have a community of like-minded people who are
					always ready to help you out.
				</p>
				<Link className="text-primary group h4" href="/discord">
					Meet our community
					<FontAwesomeIcon
						className="ml-2 group-hover:translate-x-2 transition-transform"
						icon={faChevronRight}
					/>
				</Link>
			</div>
			<Testimonial
				quote="Arafa Tech is a great place to learn and grow. I have been a part of this community for a while now and I have learned a lot from it. The community is very welcoming and helpful. I would recommend this community to anyone who wants to learn and grow."
				name="John Doe"
				title="Student"
				image="https://github.com/NikSchaefer.png"
			/>
		</Section>
	);
}
