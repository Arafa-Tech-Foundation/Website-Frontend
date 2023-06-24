import Post from "@components/blog/post/post";
import HomeLayout from "@components/layout";
import Link from "next/link";
import { BlogMatter } from "types";

const matter: BlogMatter = {
	title: "Welcome to the Arafa Tech Workshops!",
	tags: [],
	avatar: "",
	author: "",
	date: 0,
	background:
		"https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
	link: "/workshops",
	type: "workshops",
	slug: "workshops",
};

export default function Workshops() {
	return (
		<HomeLayout title="Workshops">
			<Post matter={matter}>
				<p>
					At Arafa Tech, we believe in the power of hands-on learning
					and practical application of coding skills. Our workshops
					are designed to provide participants with immersive and
					interactive experiences, allowing them to delve deeper into
					specific areas of interest and enhance their programming
					abilities. Whether you are a beginner looking to get started
					or an experienced coder aiming to broaden your skill set,
					our workshops offer something for everyone.
				</p>

				<h2>Upcoming Workshops</h2>

				<div className="bg-neutral rounded-lg shadow px-8 py-6 hover:-translate-y-1 transition-transform">
					<span>June 27, 2023</span>
					<h3 className="mt-2">
						Introduction to Web Development: Building a Portfolio
					</h3>
					<p>
						Our Introduction to Web Development workshop is designed
						to provide participants with a comprehensive overview of
						the fundamental concepts and technologies used in web
						development. The workshop will cover the basics of HTML,
						CSS, and JavaScript, as well as the process of building
						a website from scratch. By the end of the workshop, you
						will have a solid understanding of how websites work and
						the ability to create your own web pages.
					</p>
					<Link
						href="/blog/introduction_to_web_development_build_a_simple_portfolio"
						className="text-primary hover:no-underline group flex items-center space-x-2"
					>
						Learn More
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150"
						>
							<path
								fillRule="evenodd"
								d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
								clipRule="evenodd"
							/>
						</svg>
					</Link>
				</div>

				<h3> What can you expect from our workshops?</h3>
				<p>
					<b>Expert-Led Sessions:</b> Our workshops are led by
					experienced instructors who are passionate about sharing
					their knowledge and expertise. They will guide you through
					the workshop, providing valuable insights, practical tips,
					and answering your questions along the way.
					<br /> <br />
					<b>In-Depth Exploration:</b> Each workshop focuses on a
					specific topic or technology, allowing you to dive deep into
					its concepts and applications. You'll gain a comprehensive
					understanding of the subject matter and learn how to apply
					it effectively in real-world scenarios.
					<br /> <br />
					<b>Hands-On Projects: </b>We believe that learning by doing
					is the best way to solidify your understanding of coding
					concepts. Our workshops provide hands-on projects and coding
					exercises, giving you the opportunity to apply what you've
					learned and build practical skills.
					<br /> <br />
					<b>Collaborative Environment:</b> Our workshops foster a
					collaborative learning environment where you can engage with
					fellow participants, share ideas, and work together on
					projects. Collaborating with others will not only enhance
					your coding abilities but also expand your professional
					network.
					<br /> <br />
					<b>Flexible Formats:</b> We offer workshops in various
					formats to accommodate different learning preferences and
					schedules. Participate in online workshops from the comfort
					of your own home. Additionally, we offer both short
					intensive workshops and longer workshop series, allowing you
					to tailor your learning experience to your needs.
					<br /> <br />
					Stay tuned for updates on our workshop schedule and
					registration details. Join our friendly community of
					learners, expand your coding skills, and embark on the next
					step of your programming adventure with Arafa Tech!
					<br /> <br />
					To register for upcoming workshops or for any inquiries,
					please send us a message through our Contact page. We look
					forward to hearing from you and welcoming you to our
					workshops.
				</p>
			</Post>
		</HomeLayout>
	);
}
