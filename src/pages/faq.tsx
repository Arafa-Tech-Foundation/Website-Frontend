import { useState } from "react";
import Header from "@components/header";
import Footer from "@components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

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

export default function FaqPage() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [searchTerm, setSearchTerm] = useState<string>("");

	const filteredFaqData = faqData.filter((item) =>
		item.question.toLowerCase().includes(searchTerm.toLowerCase())
	);

	let timeoutId: NodeJS.Timeout | null = null;

	const handleMouseEnter = (index: number) => {
		clearTimeout(timeoutId as NodeJS.Timeout);
		setActiveIndex(index);
	};

	const handleMouseLeave = () => {
		timeoutId = setTimeout(() => {
			setActiveIndex(null);
		}, 300);
	};

	return (
		<div>
			<Head>
				<title>FAQ | Arafa Tech</title>
			</Head>
			<Header />
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto">
					<h1
						className="text-5xl font-bold mb-8 text-center animate-fade-in"
						style={{ textShadow: "2px 2px #0a0909" }}
					>
						Learn more about Arafa Tech - FAQ
					</h1>

					<div className="mb-4">
						<label htmlFor="faq-search" className="sr-only"></label>
						<div className="flex">
							<input
								type="text"
								name="faq-search"
								id="faq-search"
								className="rounded-l-md flex-grow p-2 border border-gray-200"
								placeholder="Search FAQs"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								style={{ color: "black" }}
							/>
							<div className="search-icon-container">
								<FontAwesomeIcon icon={faSearch} />
							</div>
						</div>
					</div>
					<div className=" animate-fade-in">
						{filteredFaqData.map((item, index) => (
							<div
								key={index}
								className={`border-b border-gray-200 py-2 question-box ${
									activeIndex === index ? "active" : ""
								}`}
								onMouseEnter={() => handleMouseEnter(index)}
								onMouseLeave={handleMouseLeave}
							>
								<div className="flex justify-between items-center">
									<h2 className="text-lg leading-6 font-medium font-semibold">
										{item.question}
									</h2>
									<svg
										className={`${
											activeIndex === index
												? "text-black"
												: "text-gray-400"
										} w-5 h-5`}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M15.293 8.293a1 1 0 00-1.414-1.414l-3.5 3.5a1 1 0 000 1.414l3.5 3.5a1 1 0 001.414-1.414L12.414 12H18a1 1 0 100-2h-5.586l2.293-2.293z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<p
									className={`${
										activeIndex === index
											? "text-black"
											: "text-gray-500"
									} mt-2 pr-16`}
								>
									{item.answer}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
