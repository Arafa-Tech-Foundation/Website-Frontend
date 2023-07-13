import { NextSeo } from "next-seo";
import { Disclosure, Transition } from "@headlessui/react";
import { faqData } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Card({
	title,
	description,
	hr,
}: {
	title: string;
	description: string;
	hr: JSX.Element;
}) {
	return (
		<div className="py-2 min-w-full">
			<Disclosure>
				{({ open }) => (
					<>
						<FontAwesomeIcon
							icon={faCaretRight}
							className={open ? "rotate-90 transform fa-lg px-5 py-1" : "fa-lg px-5 py-1" }
							
						/>
						<Disclosure.Button className="text-large lg:text-3xl md:text-xl tracking-widest nowrap">
							{title}
						</Disclosure.Button>
						<Transition
							enter="transition-all ease-in-out duration-500"
							enterFrom="opacity-0 translate-y-6"
							enterTo="opacity-100 translate-y-0"
							leave="transition-all ease-in-out duration-300"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Disclosure.Panel className={"h4 mt-4 ml-12"}>
								{description}
							</Disclosure.Panel>
						</Transition>
						{hr}
					</>
				)}
			</Disclosure>
		</div>
	);
}

export default function FAQ() {
	return (
		<>
			<h1 className="text-center uppercase h1 tracking-[0.2em] mb-10">
				FAQ
			</h1>
			<NextSeo title="Hackathon" />
			<div className="flex flex-col items-start gap-5 w-100%">
				{faqData.map((accor) => (
					// Unsure of what the error is check
					<Card key={accor.title} {...accor} />
				))}
			</div>
		</>
	);
}

const icons = [
	{
		name: "Caret-right",
		icon: faCaretRight,
	},
];
