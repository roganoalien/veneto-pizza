import { Fragment } from 'react';
import Header from './Header';
import Rappi from '../assets/brands/rappi.png';
import Uber from '../assets/brands/eats.png';
import Didi from '../assets/brands/food.png';

function Layout({ children }) {
	return (
		<Fragment>
			{/* border-4 border-black */}
			<nav className="main-nav-header w-full fixed left-0 top-0 overflow-hidden shadow-lg">
				<div className="whitespace-no-wrap text-white w-full h-full text-lg font-bold px-20 flex items-center justify-center">
					<p className="tracking-wide">
						Servicio a Domicilio 8365.9989 y 8349.77.51
					</p>
				</div>
			</nav>
			<Header />
			<main className="main-content-container w-full">{children}</main>
			<footer className="w-full the-main-footer">
				<div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-white text-xl tracking-wide font-bold py-5 px-10">
					<a
						className="flex justify-center"
						href="https://www.instagram.com/venetopizza_/?hl=es-la"
					>
						<p className="m-0">@venetopizza_</p>
					</a>
					<a
						className="flex justify-center"
						href="https://www.facebook.com/venetomty"
					>
						<p className="m-0">@venetomty</p>
					</a>
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
