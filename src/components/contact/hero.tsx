import ContactCard from "./card";
import FaqPage from "./faq";

export default function ContactHero() {
	return (
		<>
			<section className="my-8">
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-4xl font-bold">Contact{" "}
						<span className="text-gradient text-shadow-sm font-bold">
							Us
						</span>
					</h1>
					<p>
						Have any questions or suggestions? We'd love to hear
						from you!
					</p>
				</div>
				<div>
					<ContactCard />
					<FaqPage />
				</div>
			</section>
		</>
	);
}
