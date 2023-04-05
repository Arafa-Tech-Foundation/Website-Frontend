export default function ContactCard() {
	return (
		<>
			<section className="flex flex-row space-x-64 my-36 justify-center items-center">
				<div className="rounded-md flex flex-col text-center justify-center items-center max-w-sm w-full">
					<h1 className="font-2xl font-bold mt-3">Email</h1>
					<p className="my-3 max-h-16 h-full">
						Need help or have a suggestion? You can shoot us an
						email at{" "}
						<span className="font-bold ">
							support@arafa.tech
						</span>
						!
					</p>
					<button
						className="btn btn-md w-48 btn-primary mt-3"
						onClick={() =>
							(window.location.href =
								"mailto:support@arafa.tech")
						}
					>
						Email Us
					</button>
				</div>
			</section>
		</>
	);
}
