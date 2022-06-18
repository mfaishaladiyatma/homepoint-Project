import React from 'react'

import heroBanner from '../images/bannerHero-1.png'
import heroBanner2 from '../images/bannerHero-2.png'
import heroBanner3 from '../images/bannerHero-3.png'
import arrowRight from '../images/arrow-right-white.svg'
import arrowLeft from '../images/arrow-left-white.svg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Carousel() {

    return (
        <>
            <div className=' flex justify-center '>
                <div className='container h-[31.25rem]'>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        navigation={{
                            nextEl: ".button-next",
                            prevEl: ".button-prev",
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        speed={700}
                        centeredSlides={true}
                        className="carouselHero"
                    >
                        <SwiperSlide>
                            <div className='h-[400px] container '>
                                <img className='h-full w-full object-fit' src={heroBanner} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[400px] container '>
                                <img className='h-full w-full object-fit' src={heroBanner2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[400px] container '>
                                <img className='h-full w-full object-fit' src={heroBanner3} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[400px] container '>
                                <img className='h-full w-full object-fit' src={heroBanner} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[400px] container '>
                                <img className='h-full w-full object-fit' src={heroBanner2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[400px] container '>
                                <img className='h-full w-full object-fit' src={heroBanner3} alt="" />
                            </div>
                        </SwiperSlide>

                        <div className='swiper-button-next button-next'>
                            <img src={arrowRight} alt="" />
                        </div>
                        <div className='swiper-button-prev button-prev'>
                            <img src={arrowLeft} alt="" />
                        </div>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
