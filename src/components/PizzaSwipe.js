import { Fragment, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PizzaData } from '../utils/pizza-data';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

function PizzaSwipe() {
	const [theSlides, setTheSlides] = useState(4);

	const handleResize = () => {
		console.log(window.innerWidth);
		if (window.innerWidth > 1279) {
			console.log(4);
			setTheSlides(4);
		}
		if (window.innerWidth > 770 && window.innerWidth < 1280) {
			console.log(3);
			setTheSlides(3);
		}
		if (window.innerWidth < 770) {
			console.log(2);
			setTheSlides(2);
		}
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	return (
		<article className="pizza-swiper w-full py-20">
			{theSlides === 4 && (
				<Swiper
					spaceBetween={50}
					slidesPerView={4}
					navigation
					// centeredSlides={true}
					grabCursor={true}
					updateOnWindowResize={true}
					// onReachBeginning
					// onReachEnd
				>
					<Fragment>
						{PizzaData.map((pizza) => (
							<SwiperSlide
								key={pizza.name}
								className="the-pizza-slide"
							>
								{/* {({ isActive }) => ( */}
								<Fragment>
									<img src={pizza.img} alt={pizza.name} />
									{/* {isActive && ( */}
									<motion.h2
										className="text-center font-bold rounded-full shadow-2xl leading-tight py-2 px-2 text-white whitespace-no-wrap"
										initial={{
											opacity: 0,
											x: '-50%',
											y: '100%'
										}}
										animate={{
											opacity: 1,
											y: '-50%',
											x: '-50%'
										}}
										exit={{
											opacity: 0,
											y: '100%',
											x: '-50%'
										}}
									>
										{pizza.name}
									</motion.h2>
									{/* )} */}
								</Fragment>
								{/* )} */}
							</SwiperSlide>
						))}
					</Fragment>
				</Swiper>
			)}
			{theSlides === 3 && (
				<Swiper
					spaceBetween={50}
					slidesPerView={3}
					navigation
					// centeredSlides={true}
					grabCursor={true}
					updateOnWindowResize={true}
				>
					<Fragment>
						{PizzaData.map((pizza) => (
							<SwiperSlide
								key={pizza.name}
								className="the-pizza-slide"
							>
								{/* {({ isActive }) => ( */}
								<Fragment>
									<img src={pizza.img} alt={pizza.name} />
									{/* {isActive && ( */}
									<motion.h2
										className="text-center font-bold rounded-full shadow-2xl leading-tight py-2 px-2 text-white whitespace-no-wrap"
										initial={{
											opacity: 0,
											x: '-50%',
											y: '100%'
										}}
										animate={{
											opacity: 1,
											y: '-50%',
											x: '-50%'
										}}
										exit={{
											opacity: 0,
											y: '100%',
											x: '-50%'
										}}
									>
										{pizza.name}
									</motion.h2>
									{/* )} */}
								</Fragment>
								{/* )} */}
							</SwiperSlide>
						))}
					</Fragment>
				</Swiper>
			)}
			{theSlides === 2 && (
				<Swiper
					spaceBetween={50}
					slidesPerView={2}
					navigation
					// centeredSlides={true}
					grabCursor={true}
					updateOnWindowResize={true}
					// onReachBeginning
					// onReachEnd
				>
					<Fragment>
						{PizzaData.map((pizza) => (
							<SwiperSlide
								key={pizza.name}
								className="the-pizza-slide"
							>
								{/* {({ isActive }) => ( */}
								<Fragment>
									<img src={pizza.img} alt={pizza.name} />
									{/* {isActive && ( */}
									<motion.h2
										className="text-center font-bold rounded-full shadow-2xl leading-tight py-2 px-2 text-white whitespace-no-wrap"
										initial={{
											opacity: 0,
											x: '-50%',
											y: '100%'
										}}
										animate={{
											opacity: 1,
											y: '-50%',
											x: '-50%'
										}}
										exit={{
											opacity: 0,
											y: '100%',
											x: '-50%'
										}}
									>
										{pizza.name}
									</motion.h2>
									{/* )} */}
								</Fragment>
								{/* )} */}
							</SwiperSlide>
						))}
					</Fragment>
				</Swiper>
			)}
		</article>
	);
}

export default PizzaSwipe;
