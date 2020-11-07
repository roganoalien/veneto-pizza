import { Fragment } from 'react';
import Header from './Header';

function Layout({ children }) {
	return (
		<Fragment>
			<nav className="main-nav-header w-full fixed left-0 top-0 overflow-hidden shadow-lg border-2 border-black">
				<div className="whitespace-no-wrap floating-text first-one absolute text-white w-full text-2xl font-bold px-20">
					<p className="inline-block mr-32">
						Servicio a Domicilio 8365.9989 y 8349.77.51
					</p>
					<p className="inline-block ">
						Servicio a Domicilio 8365.9989 y 8349.77.51
					</p>
				</div>
				<div className="whitespace-no-wrap floating-text first-one absolute text-white w-full text-2xl font-bold px-20">
					<p className="inline-block mr-32">
						Servicio a Domicilio 8365.9989 y 8349.77.51
					</p>
					<p className="inline-block ">
						Servicio a Domicilio 8365.9989 y 8349.77.51
					</p>
				</div>
			</nav>
			<Header />
			<main className="main-content-container w-full">
				<div className="container mx-auto px-4">{children}</div>
			</main>
			<footer className="w-full"></footer>
		</Fragment>
	);
}

export default Layout;
