import { AnimatePresence } from 'framer-motion';
import Layout from './Layout';
import Home from './pages/Home';
import './MainGlobalStyles.scss';

function App() {
	return (
		<AnimatePresence>
			<Layout>
				<Home />
			</Layout>
		</AnimatePresence>
	);
}

export default App;
