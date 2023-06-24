import Link from "next/link";
import StepLayout from "./layout";
import { motion } from "framer-motion";

export default function Succeed() {
	return (
		<StepLayout title="Succeed" number={3}>
			<div className="flex flex-col lg:flex-row">
				<motion.img
					initial={{ x: -10, opacity: 0 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3, delay: 0.3 }}
					viewport={{ once: true }}
					src="/logos/kody/secondary.png"
					className="w-[90%] mx-auto max-w-[350px]"
				/>
				<motion.div
					initial={{ x: 10, opacity: 0 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3, delay: 0.3 }}
					viewport={{ once: true }}
					className="text-right"
				>
					<h3 className="h3 uppercase tracking-[0.2em] mb-3 mt-1">
						<span className="text-glow">succeed</span> with our
						community
					</h3>
					<p className="py-5 mb-5">
						Thrive with your coding skills by building a strong
						foundation through our courses, receiving experienced
						guidance, and participating in hands-on projects that
						prepare you for real-world challenges.
					</p>
					<Link href="/discord" className="btn btn-primary btn-wide">
						Join Us!
					</Link>
				</motion.div>
			</div>
		</StepLayout>
	);
}
