import Post from "@components/blog/post/post";
import HomeLayout from "@components/layout";
import { BlogMatter } from "types";

const matter: BlogMatter = {
	title: "Arafa Tech Mentorship Program",
	tags: [],
	avatar: "",
	author: "",
	date: 0,
	background:
		"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
	link: "/mentorship",
	type: "mentorship",
	slug: "mentorship",
};

export default function Workshops() {
	return (
		<HomeLayout title="Mentorship Program">
			<Post matter={matter}>
				<p>
					At Arafa Tech, we believe in the power of mentorship to
					transform lives and empower individuals with the skills and
					knowledge needed to thrive in the tech industry. Our
					mentorship program is designed to connect underprivileged
					students with experienced professionals who can provide
					guidance, support, and valuable insights as they embark on
					their coding journey. We look for students interested in
					coding, engineering, and technology who are passionate about
					learning and growing their skills.
				</p>
				<div className="mt-4 px-6 py-6 rounded-lg text-center bg-neutral md:py-12 md:px-12 lg:py-8 lg:px-16  xl:items-center">
					<div>
						<h2 className="mt-3 text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-3xl sm:leading-9">
							Join the Mentorship Program
						</h2>
						<p className="max-w-3xl mt-3 text-lg leading-6 text-gray-200">
							Unlock your coding potential with Arafa Tech's
							transformative mentorship program for students.
						</p>
					</div>
					<div className="mt-8 sm:w-full sm:max-w-md xl:ml-8">
						<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLScr07oxVs-KV0b0Y4pl33M4fckP-jYI1p24hgyZtcnnlLeSUA/viewform?usp=sf_link"
								className="btn btn-primary w-full"
							>
								Apply Now
							</a>
						</div>
					</div>
				</div>
				<h2>What Can I Expect from this Program?</h2>
				<p>
					<b>Experienced Mentors:</b> Our mentors are industry
					professionals with a wealth of knowledge and experience in
					various areas of technology. They are passionate about
					giving back to the community and are dedicated to helping
					students succeed.
				</p>
				<p>
					<b>Personalized Guidance:</b> Each student in our mentorship
					program is paired with a mentor who will provide
					personalized guidance tailored to their individual needs and
					goals. Whether you are a beginner or looking to advance your
					skills, our mentors will work closely with you to create a
					learning plan and provide ongoing support.
				</p>
				<p>
					<b>Project Feedback:</b> As part of the mentorship program,
					you will have the opportunity to showcase your coding
					projects and receive valuable feedback from your mentor.
					This feedback will help you improve your skills, gain
					insights into best practices, and refine your coding
					techniques.
				</p>
				<p>
					<b>Career Development:</b> Our mentors are not only focused
					on technical skills but also on helping you navigate the
					path to a successful career in the tech industry. They can
					provide advice on job search strategies, assist with resume
					and cover letter reviews, conduct mock interviews, and offer
					guidance on professional development.
				</p>
				<p>
					<b>Networking Opportunities:</b> Through our mentorship
					program, you will have the chance to expand your
					professional network by connecting with like-minded
					individuals in the tech industry. Networking events and
					community activities will provide you with valuable
					connections and potential future collaborations.
				</p>
				<h2>How Does the Mentorship Program Work?</h2>
				<p>
					<b>Application and Matching</b>: To join our mentorship
					program, you will need to complete an application form where
					you can provide information about your coding experience,
					goals, and areas of interest. We will carefully review your
					application and match you with a mentor who best aligns with
					your needs.
				</p>
				<p>
					<b>Initial Meeting:</b> Once you have been paired with a
					mentor, you will have an initial meeting to get to know each
					other better. During this meeting, you can discuss your
					goals, expectations, and establish a plan for your
					mentorship journey.
				</p>
				<p>
					<b>Ongoing Mentorship:</b> Your mentor will provide
					guidance, support, and resources to help you progress in
					your coding skills. You can schedule regular check-ins, ask
					questions, seek advice, and discuss your projects and
					challenges.
				</p>
				<p>
					<b>Project Feedback and Review:</b> As you work on coding
					projects, your mentor will provide feedback to help you
					improve and grow. They will offer constructive criticism,
					suggest alternative approaches, and share their expertise to
					enhance your coding abilities.
				</p>
				<p>
					<b>Career Support:</b> Your mentor will assist you in
					exploring potential career paths in the tech industry. They
					can help you identify job opportunities, review your
					application materials, and provide insights into industry
					trends and requirements.
				</p>
				<h2>What Do We Look for in Mentorship Program Applicants?</h2>
				<p>
					At Arafa Tech, we believe in providing equal opportunities
					to all aspiring coders. We welcome applications from
					individuals who are passionate about learning and are
					committed to their personal and professional growth. While
					we do not have strict eligibility criteria, there are a few
					qualities and attributes that we value in our mentorship
					program applicants:
				</p>
				<p>
					<b>Dedication and Motivation:</b> We look for applicants who
					are motivated to learn and have a genuine interest in coding
					and technology. A strong dedication to self-improvement and
					a willingness to put in the effort to achieve your goals are
					key qualities we seek.
				</p>
				<p>
					<b>Openness to Feedback:</b> Being open to receiving
					feedback and a willingness to learn from mentors is crucial
					for growth. We value applicants who are receptive to
					constructive criticism and actively seek ways to improve
					their coding skills.
				</p>
				<p>
					<b>Commitment to Learning:</b> Learning to code requires
					consistent effort and practice. We seek applicants who are
					committed to investing time and effort in their coding
					education, attending mentorship sessions, and actively
					engaging in their learning journey.
				</p>
				<p>
					<b>Collaborative Mindset:</b> The tech industry thrives on
					collaboration and teamwork. We value applicants who possess
					a collaborative mindset and are willing to contribute to the
					success of the mentorship community by sharing their
					knowledge, experiences, and perspectives with others.
				</p>
				<p>
					<b>Curiosity and Problem-Solving Skills:</b> Coding involves
					solving problems and thinking creatively. We look for
					applicants who exhibit curiosity, critical thinking skills,
					and an eagerness to explore innovative solutions to
					challenges.
				</p>
				<p>
					Please note that we do not require any former experience for
					admission into this program. We welcome students of all
					skill levels to apply and join our mentorship program.{" "}
					<br /> <br />
					If you possess these qualities and are ready to embark on an
					exciting coding journey with the support of experienced
					mentors, we invite you to apply for our mentorship program
					and take the next step towards realizing your full coding
					potential.
				</p>
				<h2>How to Join the Mentorship Program</h2>
				<p>
					To join the Arafa Tech Mentorship Program, please fill out
					the application form on our website. We review applications
					on a rolling basis and strive to match students with mentors
					as quickly as possible.
					<br /> <br />
					We are excited to welcome you to our mentorship program and
					support you on your coding journey. Together, we will
					empower you with the skills, knowledge, and confidence to
					succeed in the ever-evolving world of technology.
					<br /> <br />
					Join us today and begin the next step in your programming
					adventure!
				</p>
				<a href="https://docs.google.com/forms/d/e/1FAIpQLScr07oxVs-KV0b0Y4pl33M4fckP-jYI1p24hgyZtcnnlLeSUA/viewform?usp=sf_link">
					Take me to the application form
				</a>
			</Post>
		</HomeLayout>
	);
}
