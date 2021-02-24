import { ReactComponent as Puesto } from '../assets/puesto.svg';
import { ReactComponent as Moto } from '../assets/moto.svg';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
	width: '100%',
	height: '100%'
};

const center = {
	lat: 25.6460024,
	lng: -100.2678023
};
const center2 = {
	lat: 25.6879735,
	lng: -100.3398599
};

function Address() {
	return (
		<article
			id="contact"
			className="contact-section w-full pt-20 flex flex-wrap items-end justify-center relative"
		>
			<LoadScript googleMapsApiKey="AIzaSyBl2K12OyDSVmP_1-A1oF-Erps_7WhC-PA">
				<div className="w-full lg:w-4/12 flex items-end justify-center lg:justify-between order-2 lg:order-1">
					<Puesto className="h-auto w-8/12 sm:w-4/12 lg:w-8/12 puesto-vector relative pointer-events-none" />
					{/* <Moto className="h-auto w-2/12 lg:w-4/12 animate_shakeY left-0 bottom-0" /> */}
					<Moto className="animate_shakeY absolute left-0 bottom-0 pointer-events-none" />
				</div>
				<div className="w-full lg:w-8/12 flex flex-wrap items-end justify-center px-0 sm:px-10 pb-0 sm:pb-10 order-1 lg:order-2 relative z-1">
					<div className="w-full md:w-6/12 px-4 mb-8 md:mb-0">
						<div className="theMapHolder mb-10">
							<GoogleMap
								mapContainerStyle={containerStyle}
								center={center}
								zoom={17}
								options={{
									disableDefaultUI: true
								}}
							>
								<>
									<Marker position={center} />
								</>
							</GoogleMap>
						</div>
						<div className="contact-card p-4 relative">
							<h3 className="text-white text-lg font-bold tracking-wide text-center">
								Country | Tec
							</h3>
							<p className="text-white tracking-wide text-center leading-tight my-2">
								Av Paseo de las Americas 2417-A Contry La Silla
							</p>
							<p className="text-white tracking-wide text-center leading-tight my-2">
								Tel:{' '}
								<a
									href="tel:+528183659989"
									className="underline"
								>
									818365-9989
								</a>{' '}
								y{' '}
								<a
									href="tel:+528183497751"
									className="underline"
								>
									818349-7751
								</a>
							</p>
						</div>
					</div>
					<div className="w-full md:w-6/12 px-4">
						<div className="theMapHolder mb-10">
							<GoogleMap
								mapContainerStyle={containerStyle}
								center={center2}
								zoom={17}
								options={{
									disableDefaultUI: true
								}}
							>
								<>
									<Marker position={center2} />
								</>
							</GoogleMap>
						</div>
						<div className="contact-card p-4 relative">
							<h3 className="text-white text-lg font-bold tracking-wide text-center">
								Mitras
							</h3>
							<p className="text-white tracking-wide text-center leading-tight my-2">
								Cervecería Fausto -Jordán 1144 Mitras Centro
							</p>
							<p className="text-white tracking-wide text-center leading-tight my-2">
								Tel:{' '}
								<a
									href="tel:+528135391969"
									className="underline"
								>
									8135391969
								</a>{' '}
								y{' '}
								<a
									href="tel:+528135391970"
									className="underline"
								>
									8135391970
								</a>
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
			</LoadScript>
		</article>
	);
}

export default Address;
