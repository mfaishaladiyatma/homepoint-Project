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
import waLogo from '../images/waLogo.svg'

import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/exports'
import jwtDecode from 'jwt-decode'

export default function Homepage() {

    useEffect(() => {
        axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/products/discount')
            .then((response) => {
                console.log(response)
                // console.log(cobaGet)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const dispatch = useDispatch()

    const { token } = useSelector((state) => state)
    const decode = token ? jwtDecode(token) : null
    console.log(decode ? decode.sub : 'no token')

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

            <a target="_blank" href="https://api.whatsapp.com/send?phone=6282114742197&text=Halo%20Homepoint%F0%9F%99%8C%F0%9F%8F%BB%0AAda%20yang%20ingin%20Saya%20tanyakan%2C%20nih!%0A%0A(Tuliskan%20pertanyaanmu%20disini%20ya!)">
                <section className='group fixed bottom-20 right-10 w-[50px] h-[50px] z-20 transition ease-in-out delay-150 duration-300'>
                    <div className='invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 translate-x-[40%] group-hover:ease-in-out group-hover:duration-500 transition-all duration-300 flex justify-center items-center fixed bottom-20 right-16 w-[200px] h-[50px] bg-white font-inter font-semibold rounded-l-full z-20 shadow-shadow-custom-1'>
                        Hubungi Kami
                    </div>
                    <div className=' w-[50px] h-[50px] rounded-full bg-white shadow-shadow-custom-1 fixed bottom-20 right-10 flex items-center justify-center z-20 '>

                        <img src={waLogo} alt="" />
                    </div>
                </section>
            </a>
        </>
    )
}
