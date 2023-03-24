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
							arafa.tech.foundation@gmail.com
						</span>
						!
					</p>
					<button
						className="btn btn-md w-48 btn-primary mt-3"
						onClick={() =>
							(window.location.href =
								"mailto:arafa.tech.foundation@gmail.com")
						}
					>
						Email Us
					</button>
				</div>

				<div className="rounded-md flex flex-col text-center justify-center items-center max-w-sm w-full">
					<h1 className="font-2xl font-bold mt-3">Phone</h1>
					<p className="my-3 max-h-16 h-full">
						You can also get in touch with us over the phone by
						dialing <br />{" "}
						<span className="font-bold">(702) 530-7389</span>!
					</p>
					<button
						className="btn btn-md w-48 btn-primary mt-3"
						onClick={() =>
							(window.location.href = "tel:7025307389")
						}
					>
						Call Us
					</button>
				</div>
			</section>
		</>
	);
}
