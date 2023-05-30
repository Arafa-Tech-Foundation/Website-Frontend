import HomeLayout from "@components/layout";
import Section from "@components/section";

import { NextSeo } from "next-seo";

export default function Donate() {
	return (
		<>
			<NextSeo title="Donate" />
			<HomeLayout>
				<Section>
					<div className="flex gap-16">
						<div className="h-[600px] w-[600px] bg-base-200 rounded-xl"></div>
						<div className="flex flex-col gap-8">
							<h1 className="text-3xl font-bold">
								Support Us Today!
							</h1>
							<p className="text-lg">
								Coding can be hard. Help us make that easier.
								<br />
								<br />
								Support us to keep providing coding education
								and mentorship to underprivileged students,
								empowering them with technical skills for the
								future.
								<br />
								<br />
								Here are some of the services your donation will
								go towards:
							</p>

							<div className="flex gap-4">
								<button className="btn btn-primary">
									Donate via CashApp
								</button>
								<button className="btn btn-primary">
									Donate via Patreon
								</button>
							</div>
						</div>
					</div>
				</Section>
			</HomeLayout>
		</>
	);
}
