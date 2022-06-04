import React from 'react'
import productImage from '../assets/product.png'
import { AiFillStar } from 'react-icons/ai'

import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import Ulasan from './ulasan'

function Hero() {
    return (
        <div className='w-full md:py-12 flex flex-col justify-between md:px-36'>
            <div className='flex flex-col md:flex-row'>
                <img className="max-h-[400px]" src={productImage} alt="" />
                <div className='px-4 md:px-24'>
                    <h1 className='text-2xl font-semibold'>VISHAL Diamond Set</h1>
                    <div className='flex flex-col md:flex-row md:items-center text-sm md py-4'>
                        <div className='flex items-center'>
                            <h3>4.8</h3>
                            <div className='flex px-2 md:border-r-[1px] md:border-black'>
                                <AiFillStar className='text-[#FBC646]' />
                                <AiFillStar className='text-[#FBC646]' />
                                <AiFillStar className='text-[#FBC646]' />
                                <AiFillStar className='text-[#FBC646]' />
                                <AiFillStar className='text-[#FBC646]' />
                            </div>

                        </div>
                        <div className='flex gap-[20px] md:px-5 md:border-r-[1px] md:border-black'>
                            <h3>487</h3>
                            <span>Penilaian</span>
                        </div>
                        <div className='flex gap-[20px] md:px-5 md:border-r-[1px] md:border-black'>
                            <h3>1,8RB</h3>
                            <span>Terjual</span>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <h1 className='before'>Rp 160.000</h1>
                        <h1 className='text-2xl font-bold ml-2'>Rp 155.000</h1>
                    </div>

                    <div className='flex bg-[#E6EFF4] mt-6 px-5 py-2 rounded-md'>
                        <div className='border-r-[1px] pr-28 border-black'>
                            <h1>Brand</h1>
                            <h1 className='text-2xl'>Vishal</h1>
                        </div>
                        <div className='px-5'>
                            <h1>Warna :</h1>
                            <div className='bg-[#F1C6B9] rounded-full w-[30px] h-[30px]'></div>
                        </div>
                    </div>

                    <div className='py-4'>
                        <h1 className='py-2 font-bold'>Deskripsi</h1>
                        <div>
                            <h1>Kondisi : Baru</h1>
                            <h1>Berat : 1.300 Gram</h1>
                            <h1>Bahan : Stainless Steel + PP + TPR</h1>
                            <h1>1 Set terdiri dari:</h1>
                            <h1>- Chef Knife {`(33cm x 20,5cm)`}</h1>
                            <h1>- Carving Knife {`(33cm x 20,5cm)`}</h1>
                            <h1>- Cleaver Knfie {`(30,5cm x 18cm)`}</h1>
                            <h1>- Paring Knife {`(20,5cm x 9,5cm)`}</h1>
                            <h1>Peeler</h1>
                            <h1>Gunting</h1>

                            <div>
                                <h1>Diamond knife patent pertama di Indonesia , tampilan <br></br>
                                    cantik dan berfungsi memotong apapun lebih tidak akan menempel di pisau. <span className='text-blue-500'>Lihat Selengkapnya</span>
                                </h1>
                            </div>

                            <div className='py-12'>
                                <h1 className='font-bold'>Pengiriman Tersedia</h1>
                                <div className='flex flex-col md:flex-row items-center mt-4 gap-[30px]'>
                                    <div>
                                        <img src={icon1} alt="" />
                                        <h1>Kurir Reguler</h1>
                                    </div>
                                    <div>
                                        <img src={icon2} alt="" />
                                        <h1>Ambil di Tokor</h1>
                                    </div>
                                    <div>
                                        <img src={icon3} alt="" />
                                        <h1>Kurir Homepoint</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-5 ml-4 max-h-[450px] border-black border-[1px] rounded-md'>
                    <div className='flex gap-[20px] items-center justify-between p-5 border-black border-[1px]'>
                        <h1>{`<`}</h1>
                        <img src={productImage} className="max-w-[120px]" alt="" />
                        <h1>{`>`}</h1>
                    </div>
                    <h1 className='py-5 before'>Rp 160.000</h1>
                    <h1>Rp 155.000</h1>
                    <div className='flex py-5 gap-[20px]'>
                        <div className='flex items-center gap-[20px] bg-[#22364A] px-5 rounded-xl text-white'>
                            <button>-</button>
                            <h1>1</h1>
                            <button>+</button>
                        </div>
                        <h1>Stok tersedia</h1>
                    </div>
                    <h1 className='text-sm'>Pembelian Maksimal 100 pcs</h1>
                    <div className='py-5'>
                        <button className='flex items-center justify-center px-5 py-3 text-center font-bold w-[100%] bg-[#FBC646]'>+ Keranjang</button>
                    </div>
                </div>
            </div>

            <Ulasan />
        </div>
    )
}

export default Hero