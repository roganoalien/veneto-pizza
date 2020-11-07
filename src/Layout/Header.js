import Tilt from 'react-tilt';

import HeaderImg from '../assets/header-veneto-pizza.png';
import Veneto from '../assets/veneto-main.png';
import BtnBg from '../assets/btn-bg.png';
import Pizza from '../assets/pizza-icon.png';
import FakeHr from '../assets/fake-hr.png';

function Header() {
	return (
		<section
			className="main-header flex items-center justify-center flex-col relative"
			style={{ background: `url(${HeaderImg})` }}
		>
			<Tilt
				className="flex justify-center items-center"
				options={{
					reverse: true,
					max: 20,
					perspective: 1000,
					scale: 1.05,
					speed: 300,
					transition: true,
					reset: true
				}}
			>
				<img
					className="main-logo h-auto w-8/12 md:w-8/12"
					src={Veneto}
					alt="Veneto Pizza"
				/>
			</Tilt>
			<Tilt
				className="flex justify-center items-center"
				options={{
					reverse: true,
					max: 15,
					perspective: 1000,
					scale: 1.2,
					speed: 300,
					transition: true,
					reset: true
				}}
			>
				<a
					href="https://app.vmarket.mx/?rId=4"
					className="order-btn rounded-full flex items-center justify-center px-6 py-3 mt-12"
					style={{ background: `url(${BtnBg})` }}
				>
					<img src={Pizza} alt="Pizza Icon" />
					<span className="text-white font-bold text-xl pl-10">
						Ordena en línea
					</span>
				</a>
			</Tilt>
			<div
				className="absolute left-0 bottom-0 w-full the-fake-hr"
				style={{ background: `url(${FakeHr})` }}
			></div>
		</section>
	);
}

export default Header;
