import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
import review from '../assets/review.png'
import review2 from '../assets/review2.png'

import gambar1 from '../assets/products/gambar1.png'
import gambar2 from '../assets/products/gambar2.png'
import gambar3 from '../assets/products/gambar3.png'
import gambar4 from '../assets/products/gambar4.png'
import gambar5 from '../assets/products/gambar5.png'
import gambar6 from '../assets/products/gambar6.png'
import UlasanProps from './ulasan/ulasanProps'
import ReviewProps from './ulasan/reviewProps'

function Ulasan({ product }) {
    return (
        <div className='py-12 px-4 w-full'>
            <h1>Ulasan</h1>
            <div className='flex flex-col md:flex-row w-full'>
                <div className='py-12 flex flex-col justify-center w-[150px] items-center'>
                    <h1 className='text-3xl font-bold'>{product[0].ratingAverage} <span className='text-xl'>/ 5</span></h1>
                    <div className='mt-2 flex items-center text-[#FBC646]'>
                        {product[0].ratingAverage >= 1 ? <AiFillStar className='text-xl' /> : <AiOutlineStar className='text-xl' />}
                        {product[0].ratingAverage >= 2 ? <AiFillStar className='text-xl' /> : <AiOutlineStar className='text-xl' />}
                        {product[0].ratingAverage >= 3 ? <AiFillStar className='text-xl' /> : <AiOutlineStar className='text-xl' />}
                        {product[0].ratingAverage >= 4 ? <AiFillStar className='text-xl' /> : <AiOutlineStar className='text-xl' />}
                        {product[0].ratingAverage >= 5 ? <AiFillStar className='text-xl' /> : <AiOutlineStar className='text-xl' />}
                    </div>
                    <h1 className='text-xl'>{`(${product[0].ratingCount} ulasan)`}</h1>
                </div>
                <div className='md:ml-24 px-5 flex flex-col md:items-center justify-center'>
                    <div className='py-1 items-center flex gap-[20px]'>
                        <h1>5</h1>
                        <AiFillStar className='text-[#FBC646]' />
                        <div className='blue-1 relative bg-[#E1E1E1] rounded-md h-[10px] w-[250px]'></div>
                        <h1 className="w-[30px]">24</h1>
                    </div>
                    <div className='py-1 items-center flex gap-[20px]'>
                        <h1>4</h1>
                        <AiFillStar className='text-[#FBC646]' />
                        <div className='blue-2 relative bg-[#E1E1E1] rounded-md h-[10px] w-[250px]'></div>
                        <h1 className="w-[30px]">8</h1>
                    </div>
                    <div className='py-1 items-center flex gap-[20px]'>
                        <h1>3</h1>
                        <AiFillStar className='text-[#FBC646]' />
                        <div className='blue-3 relative bg-[#E1E1E1] rounded-md h-[10px] w-[250px]'></div>
                        <h1 className="w-[30px]">4</h1>
                    </div>
                    <div className='py-1 items-center flex gap-[20px]'>
                        <h1>2</h1>
                        <AiFillStar className='text-[#FBC646]' />
                        <div className='bg-[#E1E1E1] rounded-md h-[10px] w-[250px]'></div>
                        <h1 className="w-[30px]">0</h1>
                    </div>
                    <div className='py-1 items-center flex gap-[20px]'>
                        <h1>1</h1>
                        <AiFillStar className='text-[#FBC646]' />
                        <div className='bg-[#E1E1E1] rounded-md h-[10px] w-[250px]'></div>
                        <h1 className="w-[30px]">0</h1>
                    </div>
                </div>
            </div>

            <div className='py-8 flex flex-col md:flex-row'>
                <h1>Semua Ulasan {`(${product[0].ratingCount})`}</h1>
                <div className='flex flex-wrap md:ml-12 gap-[5px] md:gap-[20px]'>
                    <div className='p-2 rounded-2xl px-4 border-[1px] flex items-center gap-[10px] border-black'>
                        <AiFillStar className='text-[#FBC646]' />
                        <h1>5</h1>
                    </div>
                    <div className='p-2 rounded-2xl px-4 border-[1px] flex items-center gap-[10px] border-black'>
                        <AiFillStar className='text-[#FBC646]' />
                        <h1>4</h1>
                    </div>
                    <div className='p-2 rounded-2xl px-4 border-[1px] flex items-center gap-[10px] border-black'>
                        <AiFillStar className='text-[#FBC646]' />
                        <h1>3</h1>
                    </div>
                    <div className='p-2 rounded-2xl px-4 border-[1px] flex items-center gap-[10px] border-black'>
                        <AiFillStar className='text-[#FBC646]' />
                        <h1>2</h1>
                    </div>
                    <div className='p-2 rounded-2xl px-4 border-[1px] flex items-center gap-[10px] border-black'>
                        <AiFillStar className='text-[#FBC646]' />
                        <h1>1</h1>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-[20px]'>
                <ReviewProps />
                <ReviewProps />
                <ReviewProps />
                <ReviewProps />
            </div>

            <div className='py-24'>
                <h1 className='font-bold'>Diskusi</h1>
                <div className='flex flex-col'>
                    <div className='max-w-fit mt-4 flex gap-[10px] items-center justify-between py-4 px-5 border-[1px] border-black rounded-md'>
                        <h1 className='text-sm md:text-md text-[#505050]'>Diskusikan pertanyaanmu terkait produk ini dengan kami maupun pembeli lainnya</h1>
                        <button className='font-bold bg-[#FBC646] text-[#22364A] p-3 ml-auto rounded-md'>Tulis Pertanyaan</button>
                    </div>
                    <div className='mt-12 max-w-fit rounded-md p-5 border-[1px] border-black'>
                        <h1 className='font-bold'>Lynn Tanner • <span className='font-light'>2022-02-22</span></h1>
                        <h1 className='py-2'>Apakah terdapat garansi? Jika ya berapa lama garansinya?</h1>
                        <div className='flex items-center py-2 border-t-[1px] border-black'>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='w-[10px] h-[10px] bg-gray-300 rounded-full'></div>
                                <div className='w-[2px] h-[65px] bg-gray-400 rounded-md'></div>
                            </div>
                            <div>
                                <div className='ml-6'>
                                    <div className='flex items-center py-3 gap-[20px]'>
                                        <h1 className='bg-[#316093] text-white px-2 py-1 rounded-xl'>Customer Care</h1>
                                        •
                                        <h1>2022-02-22</h1>
                                    </div>
                                    <h1>Halo, Garansi produk ini satu tahun, jika anda menemui masalah produk silahkan hubungi kami<br></br> atau datang ke toko offline terdekat.</h1>
                                    <input className="mt-4 p-1 border-none outline-none indent-[10px] font-bold text-black bg-gray-300 w-[100%] rounded-md" placeholder="Tambahkan komentar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex pt-12 pb-6 items-center justify-between'>
                        <h1 className='text-2xl font-bold'>Produk Lainnya</h1>
                        <a href="/">Lihat Selengkapnya</a>
                    </div>

                    <div className='grid grid-cols-2 gap-[10px] md:gap-[0] md:grid-cols-4 lg:grid-cols-6'>
                        <UlasanProps gambar={gambar1} />
                        <UlasanProps gambar={gambar2} />
                        <UlasanProps gambar={gambar3} />
                        <UlasanProps gambar={gambar4} />
                        <UlasanProps gambar={gambar5} />
                        <UlasanProps gambar={gambar6} />
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Ulasan