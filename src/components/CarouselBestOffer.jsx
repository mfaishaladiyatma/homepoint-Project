import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

import promo from '../images/discountPromo.svg'
import gelasKacaBiru from '../images/gelasKacaBeningBiru.svg'
import arrowRight from '../images/arrow-right-white.svg'
import arrowLeft from '../images/arrow-left-white.svg'
import { AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './CarouselBestOffer.css'

import { Navigation, Autoplay } from "swiper";
import { data } from 'autoprefixer'

export default function CarouselBestOffer() {

  const [dataBestOffer, setDataBestOffer] = useState([])

  useEffect(() => {
    axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/products/discount')
      .then((response) => {
        console.log(response)
        setDataBestOffer(response.data.data)
        // console.log(cobaGet)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <>
      <div className='font-Inter  h-[600px] flex  justify-center '>
        <section className='mt-10 container px-5 flex flex-col gap-y-10'>
          <div className='flex justify-between items-center'>
            <h2 className='font-[500] text-[40px]'>Penawaran Terbaik</h2>
            <p className='text-[#316093] font-[600]'>Lihat Selengkapnya &gt;</p>
          </div>
          <div className='flex container items-center  h-full  relative'>
            <img className='h-full w-[380px]' src={promo} alt="" />
            <div className='container h-[400px] w-[85%] left-[15%] top-[50%] translate-y-[-50%] absolute '>
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                // loop={true}
                navigation={{
                  nextEl: ".button-next",
                  prevEl: ".button-prev",
                }}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                modules={[Navigation, Autoplay]}
                speed={700}
                // centeredSlides={true}
                className="carouselPromo"
              >
                {dataBestOffer.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className='h-full flex border-2 border-[#E1E1E1] bg-white rounded-[10px] container'>
                      <div className='flex flex-col container h-full p-3'>
                        <img className='h-[60%]' src={item.productImages[0].image} alt="" />
                        <div className='flex container flex-col justify-between  h-[50%] gap-y-8'>
                          <h4 className='font-bold mt-2 text-[18px]'>{item.name}</h4>
                          <div className='flex flex-col gap-y-3'>
                            <h3 className='font-bold text-[18px]'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(item.price)}</h3>
                            <div className='flex gap-x-2'>
                              <div className='flex items-center gap-x-2'>
                                <div className='text-yellow-400'><AiFillStar /></div>
                                <p className='text-[16px]'>{item.ratingAverage}</p>
                              </div>
                              <div>
                                |
                              </div>
                              <div className='flex items-center'>
                                <p className='text-[16px]'>Terjual {item.ratingCount}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
