import { useState } from 'react';
import defaultImg from './../images/default.jpeg';
import copyIcon from './../images/copy.svg';
import { motion } from 'framer-motion';

const QuotesPage = () => {
	const [quote, setQuote] = useState(
		'The mind is everything. What you think you become.'
	);
	const [author, setAuthor] = useState('Buddha');
	const [isCopied, setIsCopied] = useState(false);

	const getQuote = async () => {
		const response = await fetch('https://api.quotable.io/random');
		const data = await response.json();
		setQuote(data.content);
		setAuthor(data.author);
	};

	const handleCopyClick = () => {
		navigator.clipboard.writeText(`${quote} - ${author}`);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};

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
			<div className="quote-container">
				<div className="quote-img">
					<img src={defaultImg} alt="" />
				</div>
				<div className="quote-text">
					<div className="copy-icon">
						<span onClick={handleCopyClick}>
							{isCopied ? (
								<p style={{ color: '#2bb673' }}>Copied!</p>
							) : (
								<img src={copyIcon} alt="" />
							)}
						</span>
					</div>
					<div className="quote">
						<p>{quote}</p>
						<h3>- {author}</h3>
					</div>
					<p>Click to Generate new random quotes🚀</p>
					<motion.button
						onClick={() => getQuote()}
						className="btn"
						whileHover={{
							scale: 1.1,
						}}
						animate={{ transition: { yoyo: Infinity } }}
					>
						Generate Quote
					</motion.button>
				</div>
			</div>
		</motion.div>
	);
};

export default QuotesPage;
