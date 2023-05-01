import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({
	children,
	width,
}: {
	children: React.ReactNode;
	width?: string;
}) => {
	return (
		<div
			style={{ width }}
			className="inline-flex items-center justify-center"
		>
			{children}
		</div>
	);
};

const Carousel = ({ children }: { children: React.ReactNode }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const updateIndex = (index: number) => {
		const len = React.Children.count(children);
		if (index < 0) {
			index = len - 1;
		}
		if (index > len - 1) {
			index = 0;
		}
		setActiveIndex(index);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1),
	});

	useEffect(() => {
		const interval = setInterval(() => {
			if (!isPaused) updateIndex(activeIndex + 1);
		}, 3500);
		return () => interval && clearInterval(interval);
	});

	return (
		<div className="flex items-center space-x-5">
			<button
				onClick={() => updateIndex(activeIndex - 1)}
				name="Previous testimonial"
				className="hidden w-12 h-12 rounded-full background-gradient lg:flex"
			>
				<div className="w-[90%] m-auto h-[90%] flex justify-center items-center bg-neutral rounded-full">
					<svg
						width="20"
						viewBox="0 0 24 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM24 7L1 7V9L24 9V7Z"
							fill="white"
						/>
					</svg>
				</div>
			</button>
			<div
				{...handlers}
				className="relative flex w-full flex-col overflow-hidden"
			>
				<div
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
					style={{ transform: `translateX(-${activeIndex * 100}%)` }}
					className="w-full whitespace-nowrap transition-transform duration-500"
				>
					{React.Children.map(children, (child) => {
						return React.cloneElement(child as any, {
							width: "100%",
						});
					})}
				</div>
				<div className="mx-auto my-5 flex gap-3">
					{Array.from({ length: React.Children.count(children) }).map(
						(_, j) => (
							<button
								name={`Testimonial ${j + 1}`}
								className={clsx(
									"h-3 w-3 rounded-full",
									activeIndex === j
										? "!bg-primary"
										: "bg-gray-700"
								)}
								onClick={() => updateIndex(j)}
							/>
						)
					)}
				</div>
			</div>
			<button
				onClick={() => updateIndex(activeIndex + 1)}
				name="Next testimonial"
				className="hidden w-12 h-12 rounded-full background-gradient lg:flex"
			>
				<div className="w-[90%] m-auto h-[90%] flex justify-center items-center bg-neutral rounded-full">
					<svg
						width="20"
						viewBox="0 0 24 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.29289L17.3431 0.928932C16.9526 0.538408 16.3195 0.538408 15.9289 0.928932C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM0 9H23V7H0V9Z"
							fill="white"
						/>
					</svg>
				</div>
			</button>
		</div>
	);
};

export default Carousel;
