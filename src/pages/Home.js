import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultImg from './../images/default.jpeg';
import { motion } from 'framer-motion';

const Home = () => {
	const navigate = useNavigate();
	const [image, setImage] = useState(defaultImg);

	const getImage = async () => {
		const response = await fetch('https://source.unsplash.com/random/?quote');
		const data = response.url;
		setImage(data);
	};

	useEffect(() => {
		getImage();
	}, []);

	const containerVariants = {
		hidden: {
			opacity: 0,
			x: '100vw',
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				mass: 0.4,
				damping: 8,
				when: 'beforeChildren',
				staggerChildren: 0.4,
			},
		},
		exit: {
			x: '-100vw',
			transition: {
				ease: 'easeInOut',
			},
		},
	};
	return (
		<motion.div
			className="container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<div className="hero-img">
				<img src={image} alt="" />
			</div>
			<div className="hero-text">
				<p>Generate quotes and copy within few seconds🚀</p>
				<motion.button
					onClick={() => navigate('quote')}
					className="btn"
					whileHover={{
						scale: 1.1,
					}}
					animate={{ transition: { yoyo: Infinity } }}
				>
					Generate
				</motion.button>
			</div>
		</motion.div>
	);
};

export default Home;
