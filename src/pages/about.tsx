import Post from "@components/blog/post/post";
import HomeLayout from "@components/layout";
import { BlogMatter } from "types";
const matter: BlogMatter = {
	title: "About Us",
	tags: [],
	avatar: "",
	author: "",
	date: 0,
	background:
		"https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
	link: "/about",
	type: "About",
	slug: "about",
};

export default function About() {
	return (
		<HomeLayout title="About Us">
			<Post matter={matter}>
				<p>
					At Arafa Tech, we are on a mission to empower students and
					aspiring developers to build the future through coding
					education and mentorship. As a 501(c)(3) non-profit
					organization, our focus is on providing accessible and
					comprehensive coding resources to individuals from diverse
					backgrounds, enabling them to embrace the world of
					technology and create positive change within our community.
				</p>

				<h2>Our Mission</h2>
				<p>
					Our primary goal is to empower students with the knowledge
					and skills they need to thrive in the rapidly evolving tech
					industry. We believe that coding is not just a technical
					skill but also a gateway to creativity, problem-solving, and
					innovation. By offering coding courses, workshops, and
					mentorship programs, we aim to foster a supportive
					environment that encourages growth and learning.
				</p>
				<h2>Learn to Code and Build Your Future</h2>
				<p>
					Whether you are a complete beginner or an experienced coder
					looking to enhance your skills, Arafa Tech provides a
					nurturing environment for you to learn and grow. Our coding
					courses cover a wide range of topics, catering to students
					of all skill levels. You'll have the opportunity to work on
					your own projects, allowing you to apply what you've learned
					in a practical and meaningful way.
				</p>
				<h2>Join Our Vibrant Community</h2>
				<p>
					Arafa Tech is more than just an educational platform; it's a
					close-knit community of like-minded individuals passionate
					about technology. By participating in our Discord server,
					hackathons, workshops, and networking events, you'll have
					the chance to collaborate, share ideas, and expand your
					horizons. Our community thrives on the spirit of
					collaboration, empowerment, and creating a positive impact.
				</p>
				<h2>Comprehensive Range of Services</h2>
				<p>
					Our commitment to supporting your journey into the world of
					coding extends beyond educational resources. We offer a
					range of services tailored to meet your needs:
				</p>
				<p>
					<b>Coding Courses:</b> Explore our diverse range of coding
					courses, carefully designed to help you build a strong
					foundation and advance your programming skills.
					<br />
					<br />
					<b>Mentorship Program:</b> Connect with experienced mentors
					who will guide you on your coding journey, providing
					invaluable insights and personalized support.
					<br />
					<br />
					<b>Workshops:</b> Attend our workshops, where you can delve
					into various computer science topics, gain practical
					knowledge, and interact with experts in the field.
					<br />
					<br />
					<b>Volunteer Opportunities:</b> Join our team of passionate
					volunteers and contribute to creating a better future for
					our community. Your dedication can make a significant
					impact!
				</p>

				<p>
					At Arafa Tech Foundation, we believe that coding education
					and mentorship can transform lives and open doors to
					countless opportunities. So, whether you're a student, a
					professional seeking to upskill, or someone looking to give
					back, join our dev family today and be a part of our
					thriving community of skilled developers. Together, we will
					shape a better future through the power of coding. Unite
					with us, and let's code a brighter tomorrow!
				</p>
			</Post>
		</HomeLayout>
	);
}
