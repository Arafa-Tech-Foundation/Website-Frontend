import Carousel, {
	CarouselItem,
} from "@components/index/testimonials/carousel";
import Section from "@components/section";
import { testimonialData } from "./data";

function Item({
	text,
	name,
	title,
}: {
	text: string;
	name: string;
	title: string;
}) {
	return (
		<div className="background-glass w-[90%] mx-auto max-w-[700px] py-10 shadow-lg p-6 rounded-[45px]">
			<p className="font-light whitespace-normal">"{text}"</p>
			<h3 className="h4 mt-5 text-glow">{name}</h3>
			<h3 className="h6">{title}</h3>
		</div>
	);
}

export default function Testimonials() {
	const testimonialMap = testimonialData
		.map((_, index) => {
			// maps the array into arrays of 2
			return index % 2 === 0
				? testimonialData.slice(index, index + 2)
				: null;
		})
		.filter((quote) => quote !== null);

	return (
		<Section>
			<h1 className="text-center uppercase h2 tracking-[0.2em] mb-10">
				How we've helped others
			</h1>

			<div className="mx-auto mt-16 flex max-w-6xl items-start">
				<Carousel>
					{testimonialMap.map((quote, index) => (
						<CarouselItem key={index}>
							<div className="flex flex-col lg:flex-row gap-10">
								{quote && quote[0] && <Item {...quote[0]} />}
								{quote && quote[1] && <Item {...quote[1]} />}
							</div>
						</CarouselItem>
					))}
				</Carousel>
			</div>
		</Section>
	);
}
