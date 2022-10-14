import { motion } from 'framer-motion';

const AnimateSVG = () => {
	const pathVariants = {
		hidden: {
			opacity: 0,
			pathLength: 0,
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			transition: {
				duration: 2,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<div className="container">
			<motion.svg
				className="my-svg"
				viewBox="0 0 256 256"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect fill="none" height="256" width="256" />
				<motion.path
					d="M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40"
					fill="none"
					stroke="#000"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="12"
					variants={pathVariants}
					initial="hidden"
					animate="visible"
				/>
				<motion.path
					d="M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40"
					fill="none"
					stroke="#000"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="12"
					variants={pathVariants}
					initial="hidden"
					animate="visible"
				/>
			</motion.svg>
		</div>
	);
};

export default AnimateSVG;
