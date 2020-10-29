import { Fragment } from 'react';

function Layout({ children }) {
	return (
		<Fragment>
			<nav className="w-full h-12 bg-red-500 shadow-lg fixed left-0 top-0 overflow-hidden">
				<div className="overtel absolute"></div>
			</nav>
			<main className="w-full pt-12">
				<div className="container mx-auto px-4">{children}</div>
			</main>
			<footer className="w-full"></footer>
		</Fragment>
	);
}

export default Layout;
