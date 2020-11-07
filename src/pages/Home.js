import { Fragment } from 'react';
import Address from '../components/Address';
import BoxKit from '../components/BoxKit';
import PizzaSwipe from '../components/PizzaSwipe';

function Home() {
	return (
		<Fragment>
			<section className="container mx-auto px-4">
				<PizzaSwipe />
			</section>
			<BoxKit />
			<section className="container mx-auto px-4">
				<Address />
			</section>
		</Fragment>
	);
}

export default Home;
