import { useEffect, useState } from 'react';
import Tilt from 'react-tilt';
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
// import HeaderImg from '../assets/header-veneto-pizza.jpg';
import Header2 from '../assets/header2.jpg';
import Header3 from '../assets/header3.jpg';
import Header4 from '../assets/header4.jpg';
import Header5 from '../assets/header5.jpg';
import Header6 from '../assets/header6.jpg';
import Veneto from '../assets/veneto-main.png';
// import BtnBg from '../assets/btn-bg.png';
import Pizza from '../assets/pizza-icon.png';
import FakeHr from '../assets/fake-hr.png';

const imageArray = [Header2, Header3, Header4, Header5, Header6];
SwiperCore.use([Autoplay, EffectFade, Navigation]);

function Header() {
	const [tiltEffect, setTiltEffect] = useState(true);

	const handleResize = () => {
		console.log(window.innerWidth);
		if (window.innerWidth > 770 && window.innerWidth < 1280) {
			setTiltEffect(false);
		}
		if (window.innerWidth < 770) {
			setTiltEffect(false);
			// setTheSlides(2);
			// setCenter(true);
		}
		// if (window.innerWidth < 540) {
		// setTheSlides(1);
		// }
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
	return (
		<section className="main-header flex items-center justify-center flex-col relative">
			<div className="the-background-swiper absolute left-0 top-0 h-full w-full">
				<Swiper
					loop={true}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					effect="fade"
					navigation
				>
					<SwiperSlide
						style={{ background: `url(${imageArray[0]})` }}
					></SwiperSlide>
					<SwiperSlide
						style={{ background: `url(${imageArray[1]})` }}
					></SwiperSlide>
					<SwiperSlide
						style={{ background: `url(${imageArray[2]})` }}
					></SwiperSlide>
					<SwiperSlide
						style={{ background: `url(${imageArray[3]})` }}
					></SwiperSlide>
					<SwiperSlide
						style={{ background: `url(${imageArray[4]})` }}
					></SwiperSlide>
					{/* <SwiperSlide
						style={{ background: `url(${imageArray[5]})` }}
					></SwiperSlide> */}
				</Swiper>
			</div>
			{tiltEffect ? (
				<Tilt
					className="flex justify-center items-center with-z-1"
					options={{
						reverse: true,
						max: 20,
						perspective: 1000,
						scale: 1.2,
						speed: 300,
						transition: true,
						reset: true
					}}
				>
					<img
						className="main-logo h-auto w-auto transform scale-125"
						src={Veneto}
						alt="Veneto Pizza"
					/>
				</Tilt>
			) : (
				<div className="flex justify-center items-center with-z-1 pointer-events-none">
					<img
						className="main-logo h-auto w-auto transform"
						src={Veneto}
						alt="Veneto Pizza"
					/>
				</div>
			)}
			{tiltEffect ? (
				<Tilt
					className="flex justify-center items-center with-z-1"
					options={{
						reverse: true,
						max: 5,
						perspective: 1000,
						scale: 1.2,
						speed: 300,
						transition: true,
						reset: true
					}}
				>
					<a
						href="https://app.vmarket.mx/?rId=4"
						className="with-z-1 order-btn rounded-full flex items-center justify-center px-6 py-3 mt-12"
						// style={{ background: `url(${BtnBg})` }}
					>
						<div className="bg-faker absolute left-0 top-0 h-full"></div>
						<img src={Pizza} alt="Pizza Icon" />
						<span className="text-white font-bold text-xl pl-10">
							Ordena en línea
						</span>
					</a>
				</Tilt>
			) : (
				<div className="flex justify-center items-center with-z-1">
					<a
						href="https://app.vmarket.mx/?rId=4"
						className="with-z-1 order-btn rounded-full flex items-center justify-center px-6 py-3 mt-12"
						// style={{ background: `url(${BtnBg})` }}
					>
						<div className="bg-faker absolute left-0 top-0 h-full"></div>
						<img src={Pizza} alt="Pizza Icon" />
						<span className="text-white font-bold text-xl pl-10">
							Ordena en línea
						</span>
					</a>
				</div>
			)}
			<div
				className="absolute left-0 bottom-0 w-full the-fake-hr with-z-1"
				style={{ background: `url(${FakeHr})` }}
			></div>
		</section>
	);
}

export default Header;
