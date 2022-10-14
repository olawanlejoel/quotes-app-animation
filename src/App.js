import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import QuotesPage from './pages/QuotesPage';
import AnimateSVG from './pages/AnimateSVG';
import Header from './components/Header';
import { AnimatePresence } from 'framer-motion';

const App = () => {
	const location = useLocation();
	return (
		<>
			<Header />
			<AnimatePresence exitBeforeEnter>
				<Routes location={location} key={location.key}>
					<Route path="/" element={<Home />} />
					<Route path="/quote" element={<QuotesPage />} />
					<Route path="/animate" element={<AnimateSVG />} />
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default App;
