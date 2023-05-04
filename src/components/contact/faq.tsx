import { useState } from "react";
import Section from "@components/section";

const faqData = [
	{
		question: "What is Arafa Tech?",
		answer: "Arafa Tech is a non-profit organization that provides coding education and mentorship to underprivileged students, empowering them with technical skills for the future.",
	},
	{
		question: "Who is eligible to participate in Arafa Tech's programs?",
		answer: "Arafa Tech's programs are designed for underprivileged students who may not have access to traditional coding education opportunities. We prioritize students from disadvantaged backgrounds and communities.",
	},
	{
		question: "What kind of courses does Arafa Tech offer?",
		answer: "Arafa Tech offers a range of coding courses, including web development, mobile app development, data science, and cybersecurity. Our courses are designed to provide students with the technical skills they need to succeed in the tech industry.",
	},
	{
		question: "Who teaches the courses?",
		answer: "Arafa Tech's courses are taught by experienced professionals in the tech industry, who volunteer their time to help empower the next generation of coders.",
	},
	{
		question: "How long do the courses last?",
		answer: "The duration of our courses varies depending on the program, but most courses run for 6-12 months. We also offer shorter workshops and coding bootcamps for students who may not have the time to commit to longer programs.",
	},
	{
		question:
			"Are there any prerequisites for participating in Arafa Tech's programs?",
		answer: "We do not require any specific educational background or technical skills to participate in our programs. However, students must have a strong interest in coding and a commitment to learning.",
	},
	{
		question: "How is Arafa Tech funded?",
		answer: "Arafa Tech is funded through donations and grants from individuals, organizations, and foundations who share our vision of creating opportunities for underprivileged students through coding education.",
	},
	{
		question: "How can I donate to Arafa Tech?",
		answer: "You can donate to Arafa Tech through our website or by contacting us directly. Your donation will go directly towards funding our programs and empowering underprivileged students with the technical skills they need to succeed.",
	},
	{
		question: "Can I volunteer with Arafa Tech?",
		answer: "Yes, we welcome volunteers who are passionate about coding education and empowering underprivileged students. You can apply to volunteer through our website or by contacting us directly.",
	},
	{
		question: "What is the impact of Arafa Tech's programs?",
		answer: "Since our founding, Arafa Tech has helped empower hundreds of underprivileged students with the technical skills they need to succeed in the tech industry. Our graduates have gone on to secure jobs in top tech companies and are paving the way for future generations of coders from underrepresented communities.",
	},
];

export default function Faq() {
	const [searchTerm, setSearchTerm] = useState<string>("");

	const filteredFaqData = faqData.filter((item) =>
		item.question.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Section>
			<h1
				className="text-5xl font-bold mb-8 text-center animate-fade-in"
				style={{ textShadow: "2px 2px #0a0909" }}
			>
				Frequently Asked Questions
			</h1>
			<div className="mx-auto">
				<input
					className="input input-bordered w-full mb-4"
					placeholder="Search FAQs"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>

				<div className="transition">
					{filteredFaqData.map((item, index) => (
						<div
							key={index}
							tabIndex={0}
							className="border-b py-4 collapse collapse-arrow"
						>
							<input type="checkbox" />
							<div className="collapse-title">
								<h2 className="text-xl font-bold text-primary">
									{item.question}
								</h2>
							</div>
							<div className="collapse-content">
								<p>{item.answer}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
