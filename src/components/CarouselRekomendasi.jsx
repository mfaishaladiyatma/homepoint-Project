import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import promo from '../images/promoBuy1Get1.svg'
import gelasKacaBiru from '../images/gelasKacaBeningBiru.svg'
import arrowRight from '../images/arrow-right-white.svg'
import arrowLeft from '../images/arrow-left-white.svg'
import { AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './CarouselRekomendasi.css'

import { Navigation, Autoplay } from "swiper";

export default function CarouselRekomendasi() {

    const navigate = useNavigate()

    const [dataRecommend, setDataRecommend] = useState([])

    useEffect(() => {
        axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/products/latest')
            .then((response) => {
                // console.log(response)
                setDataRecommend(response.data.data)
                // console.log(cobaGet)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <>
            <div className='font-Inter mb-[150px]  h-[800px]  md:h-[600px] flex  justify-center '>
                <section className='mt-10 container px-5 flex flex-col gap-y-10'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <h2 className='font-[500] text-[30px] md:text-[40px]'>Rekomendasi Untukmu</h2>
                        <p className='text-[#316093] text-[20px] font-[600]'>Lihat Selengkapnya &gt;</p>
                    </div>
                    <div className='flex container  h-full  '>
                        <div className=' h-[400px] w-full  '>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                // loop={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 15,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 15,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 15,
                                    },
                                    1280: {
                                        slidesPerView: 6,
                                        spaceBetween: 15,
                                    },
                                }}
                                navigation={{
                                    nextEl: ".button-next",
                                    prevEl: ".button-prev",
                                }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Navigation, Autoplay]}
                                speed={700}
                                // centeredSlides={true}
                                className="carouselRekomendasi"
                            >
                                {dataRecommend.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className='h-full relative flex border-[1px] border-[#E1E1E1] bg-white rounded-[10px] container hover:shadow-shadow-custom-3 hover:-translate-y-2 ease-in-out duration-200'>
                                            <button onClick={() => navigate('/product/'+item.id)} className='flex w-full'>

                                                <div className='flex flex-col items-center md:items-start w-full  h-full p-3'>
                                                    <img className='h-[180px] rounded-[8px]' src={item.productImages[0].image} alt="" />
                                                    <div className='flex container flex-col justify-between items-center md:items-start h-[50%] gap-y-8'>
                                                        <h4 className='font-bold mt-2  text-[18px] text-left'>{item.name}</h4>
                                                        <div className='flex flex-col gap-y-2'>

                                                            <h4 className='font-bold text-[18px] text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(item.price)}</h4>

                                                            <div className='flex gap-x-2'>
                                                                <div className='flex items-center gap-x-2'>
                                                                    <div className='text-yellow-400'><AiFillStar /></div>
                                                                    <p className='text-[16px]'>{item.ratingAverage}</p>
                                                                </div>
                                                                <div>
                                                                    |
                                                                </div>
                                                                <div className='flex items-center'>
                                                                    <p className='text-[16px]'>Terjual {item.amountSold}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                ))}





                                <div className='swiper-button-next button-next'>
                                    <img src={arrowRight} alt="" />
                                </div>
                                <div className='swiper-button-prev button-prev'>
                                    <img src={arrowLeft} alt="" />
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
