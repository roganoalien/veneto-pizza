import { useState } from 'react';
import Box from '../assets/pizzakit.png';
import BoxHover from '../assets/pizzakit_hover.png';
import PizzaIcon from '../assets/pizza-icon.png';
import FakeHr from '../assets/fake-hr.png';

function BoxKit() {
	const [boxImage, setBoxImage] = useState(Box);

	const handleChange = () => {
		if (boxImage === Box) {
			setBoxImage(BoxHover);
		} else {
			setBoxImage(Box);
		}
	};

	return (
		<section className="box-kit-section w-full pb-16 relative">
			<div className="container mx-auto flex flex-wrap items-center justify-center pt-16 pb-8 px-10 lg:px-20">
				<article
					onMouseEnter={handleChange}
					onMouseLeave={handleChange}
					className="pizzakit w-full lg:w-6/12 mb-5 sm:mb-0 px-20 sm:px-32 md:px-56 lg:px-10 flex items-center justify-center"
				>
					<img src={boxImage} alt="Pizza Kit" />
				</article>
				<article className="w-full lg:w-6/12 flex flex-col items-center justify-center text-white tracking-widest font-bold">
					<h2 className="text-4xl text-center leading-tight">
						¡Ordena tu Pizza Kit!
					</h2>
					<p className="text-white text-center text-xl mt-2 leading-tight">
						Disfruta de una deliciosa <br /> pizza creada porti.
					</p>
					<img className="mt-6" src={PizzaIcon} alt="Pizza" />
					<p className="text-white text-center font-medium mt-6 text-sm">
						Incluye:Masa precocida,Salsa detom ate,queso, <br />
						1-2 ingredientes para pizza,aderezo de chipotle,chile
						seco
					</p>
				</article>
			</div>
			<div
				className="absolute left-0 bottom-0 w-full the-fake-hr with-z-1"
				style={{ background: `url(${FakeHr})` }}
			></div>
		</section>
	);
}

export default BoxKit;
