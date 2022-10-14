import { Link } from 'react-router-dom';
import logo from './../images/logo.svg';
import { motion } from 'framer-motion';

const headerVariants = {
	initial: {
		y: '-100vh',
	},
	animate: {
		y: 0,
		transition: {
			delay: 0.5,
			duration: 0.5,
			type: 'spring',
		},
	},
};

const logoVariants = {
	initial: {
		x: '-100vw',
	},
	animate: {
		x: 0,
		transition: {
			delay: 1,
		},
	},
};

const Header = () => {
	return (
		<div className="container">
			<motion.div
				className="header"
				variants={headerVariants}
				initial="initial"
				animate="animate"
			>
				<Link to="/">
					<motion.img src={logo} variants={logoVariants} />
				</Link>
				<h1>Quotes Circle</h1>
			</motion.div>
		</div>
	);
};

export default Header;
