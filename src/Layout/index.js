import { Fragment } from 'react';
import Header from './Header';
import Rappi from '../assets/brands/rappi.png';
import Uber from '../assets/brands/eats.png';
import Didi from '../assets/brands/food.png';

function Layout({ children }) {
	return (
		<Fragment>
			<nav className="main-nav-header w-full fixed left-0 top-0 overflow-hidden shadow-lg border-4 border-black">
				<div className="whitespace-no-wrap floating-text absolute text-white w-full text-2xl font-bold px-20">
					<p className="inline-block mr-32">
						Servicio a Domicilio 8365.9989 y 8349.77.51
					</p>
					<p className="inline-block">
						Servicio a Domicilio 8365.9989 y 8349.77.51
					</p>
				</div>
				<div className="whitespace-no-wrap floating-text absolute text-white w-full text-2xl font-bold px-20">
					<p className="inline-block mr-32">
						Servicio a Domicilio 8365.9989 y 8349.77.51
					</p>
					<p className="inline-block">
						Servicio a Domicilio 8365.9989 y 8349.77.51
					</p>
				</div>
			</nav>
			<Header />
			<main className="main-content-container w-full">{children}</main>
			<footer className="w-full the-main-footer border-4 border-black">
				<div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-white text-xl tracking-wide font-bold py-5 px-10">
					<div className="flex justify-center">
						<p className="m-0">@venetopizza_</p>
					</div>
					<div className="flex justify-center">
						<p className="m-0">@venetomty</p>
					</div>
					<div className="flex justify-center">
						<img className="rappi-logo" src={Rappi} alt="Rappi" />
					</div>
					<div className="flex justify-center">
						<img className="uber-logo" src={Uber} alt="Uber Eats" />
					</div>
					<div className="flex justify-center">
						<img className="didi-logo" src={Didi} alt="Didi Food" />
					</div>
				</div>
			</footer>
		</Fragment>
	);
}

export default Layout;
