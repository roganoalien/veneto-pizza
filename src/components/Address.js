import { ReactComponent as Puesto } from '../assets/puesto.svg';
import { ReactComponent as Moto } from '../assets/moto.svg';

function Address() {
	return (
		<article className="contact-section w-full pt-20 lg:pt-32 flex flex-wrap items-end justify-center">
			<div className="w-full lg:w-4/12 flex items-end justify-center lg:justify-between order-2 lg:order-1">
				<Puesto className="h-auto w-4/12 lg:w-8/12 puesto-vector" />
				<Moto className="h-auto w-2/12 lg:w-4/12 animate_shakeY" />
			</div>
			<div className="w-full lg:w-8/12 flex flex-wrap items-end justify-center px-10 pb-10 order-1 lg:order-2">
				<div className="w-full md:w-6/12 px-4 mb-8 md:mb-0">
					<div className="border-4 border-black contact-card p-4">
						<h3 className="text-white text-lg font-bold tracking-wide text-center">
							Country | Tec
						</h3>
						<p className="text-white tracking-wide text-center leading-tight my-2">
							Av Paseo de las Americas 2417-A contry la silla
						</p>
					</div>
				</div>
				<div className="w-full md:w-6/12 px-4">
					<div className="border-4 border-black contact-card p-4">
						<h3 className="text-white text-lg font-bold tracking-wide text-center">
							Mitras
						</h3>
						<p className="text-white tracking-wide text-center leading-tight my-2">
							Cervecería Fausto -Jordán 1144 mitras centro
						</p>
						{/* <a
							href="tel:+525582457813"
							className="text-white text-center block font-bold"
						>
							5582457813
						</a> */}
					</div>
				</div>
			</div>
		</article>
	);
}

export default Address;
