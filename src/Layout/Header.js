import Tilt from 'react-tilt';
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import HeaderImg from '../assets/header-veneto-pizza.jpg';
import Header2 from '../assets/header2.jpg';
import Header3 from '../assets/header3.jpg';
import Header4 from '../assets/header4.jpg';
import Header5 from '../assets/header5.jpg';
import Header6 from '../assets/header6.jpg';
import Veneto from '../assets/veneto-main.png';
// import BtnBg from '../assets/btn-bg.png';
import Pizza from '../assets/pizza-icon.png';
import FakeHr from '../assets/fake-hr.png';

const imageArray = [HeaderImg, Header2, Header3, Header4, Header5, Header6];
SwiperCore.use([Autoplay, EffectFade, Navigation]);
// SwiperCore.use([Autoplay]);
// SwiperCore.use([EffectFade]);

function Header() {
	return (
		<section
			className="main-header flex items-center justify-center flex-col relative"
			// style={{ background: `url(${theImage})` }}
		>
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
					<SwiperSlide
						style={{ background: `url(${imageArray[5]})` }}
					></SwiperSlide>
				</Swiper>
			</div>
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
					className="main-logo h-auto w-auto"
					src={Veneto}
					alt="Veneto Pizza"
				/>
			</Tilt>
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
					<img src={Pizza} alt="Pizza Icon" />
					<span className="text-white font-bold text-xl pl-10">
						Ordena en línea
					</span>
				</a>
			</Tilt>
			<div
				className="absolute left-0 bottom-0 w-full the-fake-hr with-z-1"
				style={{ background: `url(${FakeHr})` }}
			></div>
		</section>
	);
}

export default Header;
