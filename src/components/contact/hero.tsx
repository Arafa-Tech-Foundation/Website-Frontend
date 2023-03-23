import ContactCard from "./card";

export default function ContactHero() {
	return (
		<>
			<section className="my-4">
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-4xl font-bold">Contact Us</h1>
					<p>
						Have any questions or suggestions? We'd love to hear
						from you!
					</p>
				</div>
				<div>
					<ContactCard />
				</div>
			</section>
		</>
	);
}
