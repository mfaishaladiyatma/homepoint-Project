import React from 'react'
import Carousel from '../components/Carousel'
import CarouselBestOffer from '../components/CarouselBestOffer'
import CarouselRekomendasi from '../components/CarouselRekomendasi'

import peralatanDapurBanner from '../images/peralatanDapur.svg'
import peralatanKebersihanBanner from '../images/peralatanKebersihan.svg'
import interiorFurnitureBanner from '../images/interiorFurniture.svg'
import elektronikBanner from '../images/elektronik.svg'

import kitchenwarePeralatanDapur from '../images/kitchenware-peralatanDapur.svg'
import kitchenwareElektronikDapur from '../images/kitchenware-elektronikDapur.svg'
import kitchenwareAlatMakan from '../images/kitchenware-alatMakan.svg'
import kitchenwarePenyimpananMakanan from '../images/kitchenware-penyimpananMakanan.svg'

export default function Homepage() {
    return (
        <>
            <Carousel />

            <section className='font-Inter flex   justify-center '>
                <div className='mt-7 container flex gap-x-7 justify-center px-5'>
                    <div className='w-full relative  rounded-[10px]'>
                        <img className='rounded-[10px] w-full' src={peralatanDapurBanner} alt="" />
                        <div className='absolute left-5 font-[500] text-[20px] top-[50%] translate-y-[-50%]'>
                            <p>Peralatan Dapur</p>
                        </div>
                    </div>
                    <div className='w-full relative  rounded-[10px]'>
                        <img className='w-full rounded-[10px]' src={peralatanKebersihanBanner} alt="" />
                        <div className='absolute left-5 font-[500] text-[20px] top-[50%] translate-y-[-50%]'>
                            <p>Peralatan Kebersihan</p>
                        </div>
                    </div>
                    <div className='w-full relative  rounded-[10px]'>
                        <img className='w-full rounded-[10px]' src={interiorFurnitureBanner} alt="" />
                        <div className='absolute left-5 font-[500] text-[20px] top-[50%] translate-y-[-50%]'>
                            <p>Interior/Furniture</p>
                        </div>
                    </div>
                    <div className='w-full relative  rounded-[10px]'>
                        <img className='w-full rounded-[10px]' src={elektronikBanner} alt="" />
                        <div className='absolute left-5 font-[500] text-[20px] top-[50%] translate-y-[-50%]'>
                            <p>Elektronik</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='font-Inter  flex justify-center'>
                <div className='container mt-10 h-fit p-5 gap-y-12 flex flex-col'>
                    <div>
                        <h2 className='font-[500] text-[40px]'>Kitchenware Weeks</h2>
                    </div>
                    <div className='text-white flex h-full  gap-x-5'>
                        <div className='flex flex-col relative    w-full rounded-[10px]'>
                            <img className='w-full rounded-[10px]' src={kitchenwarePeralatanDapur} alt="" />
                            <div className='absolute bottom-5 left-[50%] translate-x-[-50%] font-[700] text-[25px] w-fit'>
                                <p>Peralatan Dapur</p>
                            </div>
                        </div>
                        <div className='flex flex-col relative  w-full rounded-[10px]'>
                            <img className='w-full rounded-[10px]' src={kitchenwareElektronikDapur} alt="" />
                            <div className='absolute bottom-5 left-[50%] translate-x-[-50%] font-[700] text-[25px] w-fit'>
                                <p>Elektronik Dapur</p>
                            </div>
                        </div>
                        <div className='flex flex-col relative  w-full rounded-[10px]'>
                            <img className='w-full rounded-[10px]' src={kitchenwareAlatMakan} alt="" />
                            <div className='absolute bottom-5 left-[50%] translate-x-[-50%] font-[700] text-[25px] w-fit'>
                                <p>Alat Makan &amp; Minuman</p>
                            </div>
                        </div>
                        <div className='flex flex-col relative  w-full rounded-[10px]'>
                            <img className='w-full rounded-[10px]' src={kitchenwarePenyimpananMakanan} alt="" />
                            <div className='absolute bottom-5 left-[50%] translate-x-[-50%] font-[700] text-[25px]  w-fit'>
                                <p>Penyimpanan Makanan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CarouselBestOffer />

            <CarouselRekomendasi />
        </>
    )
}
