import Section from "@components/section";
import { faArrowRight, faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
	return (
		<>
			<Section className="bg-neutral pb-48 text-white !items-start">
				<motion.div className="container max-w-5xl mx-auto">
					<Link
						href={"/workshops"}
						className="hidden sm:flex mb-8 gap-5 w-fit group items-center rounded-full border border-gray-500 px-8 py-4"
					>
						<FontAwesomeIcon
							className="bg-primary text-white p-3 rounded-full"
							icon={faCodeCompare}
						/>
						<div>
							<h3 className="font-semibold">
								Introducing Arafa Tech Workshops
							</h3>
							<h5 className="text-gray-500">
								Free, live, and interactive coding workshops for
								all
							</h5>
						</div>
						<FontAwesomeIcon
							className="group-hover:translate-x-1 transition-transform"
							icon={faArrowRight}
						/>
					</Link>
					<motion.h3
						initial={{ x: -20, opacity: 0 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: 0.1 }}
						viewport={{ once: true }}
						className="h3 text-gray-500 mb-2"
					>
						Arafa Tech Foundation
					</motion.h3>
					<motion.h1
						initial={{ x: -20, opacity: 0 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: 0.3 }}
						viewport={{ once: true }}
						className="h-huge font-bold mb-8"
					>
						Join our dev family
					</motion.h1>
					<motion.p
						initial={{ x: -20, opacity: 0 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, delay: 0.5 }}
						viewport={{ once: true }}
						className="h4 text-gray-100 w-[60%] mb-4"
					>
						Arafa Tech is a 501(c)(3) non-profit organization that
						provides coding education and mentorship.
					</motion.p>
					<div className="flex gap-4">
						<Link href="/discord" className="btn btn-primary px-8">
							Join us
						</Link>
						<Link
							href="/about"
							className="btn btn-outline text-white border-gray-500"
						>
							About us
						</Link>
					</div>
				</motion.div>
			</Section>

			<svg
				className="fill-neutral"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 160"
			>
				<path fill-opacity="1" d="M0,32L1440,128L1440,0L0,0Z"></path>
			</svg>
		</>
	);
}
