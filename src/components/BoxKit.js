import Box from '../assets/pizzakit.png';
import PizzaIcon from '../assets/pizza-icon.png';

function BoxKit() {
	return (
		<section className="box-kit-section w-full border-4 border-black">
			<div className="container mx-auto flex flex-wrap items-center justify-center pt-8 pb-3">
				<article className="pizzakit w-full lg:w-5/12 mb-5 sm:mb-0 px-40 sm:px-32 md:px-56 lg:px-10">
					<img src={Box} alt="Pizza Kit" />
				</article>
				<article className="w-full lg:w-7/12 flex flex-col items-center justify-center text-white tracking-widest font-bold">
					<h2 className="text-4xl">¡Ordena tu Pizza Kit!</h2>
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
		</section>
	);
}

export default BoxKit;
