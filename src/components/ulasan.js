import React from 'react'
import { useState, useEffect } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import axios from 'axios'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { BsStarHalf } from 'react-icons/bs'
// import review from '../assets/review.png'
// import review2 from '../assets/review2.png'

// import gambar1 from '../assets/products/gambar1.png'
// import gambar2 from '../assets/products/gambar2.png'
// import gambar3 from '../assets/products/gambar3.png'
// import gambar4 from '../assets/products/gambar4.png'
// import gambar5 from '../assets/products/gambar5.png'
// import gambar6 from '../assets/products/gambar6.png'
// import UlasanProps from './ulasan/ulasanProps'
// import ReviewProps from './ulasan/reviewProps'

function Ulasan({ product }) {
    const navigate = useNavigate()
    const [otherProduct, setOtherProduct] = useState([])

    useEffect(() => {
        axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/products/latest')
            .then((response) => {
                setOtherProduct(response.data.data)
                // console.log(response.data.data)
            })
            .catch((error) => {
                console.log(error)
                //wip: display error here
            })
    },[])
    return (
        <div className="ulasan flex flex-col font-Inter mb-20">

            <div className='flex flex-col gap-y-5 justify-center m-auto w-fit items-center'>
                <h2 className='text-left w-full text-[20px] font-medium'>Penilaian Pembeli</h2>
                <div className='flex bg-[#E6EFF4] gap-x-20 py-5 px-14 rounded-[8px] justify-between'>
                    <div className='flex flex-col h-full items-center gap-y-5'>
                        <div className='flex items-center'>
                            <h3 className='font-semibold text-[42px]'>{product.ratingAverage}</h3>
                            <p className='text-[20px]'>/5</p>
                        </div>
                        <div>
                            <p className='text-slate-600'>{product.ratingCount} Penilaian</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center text-yellow-400 gap-x-2'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <p className='text-black'>990</p>
                        </div>
                        <div className='flex items-center text-yellow-400 gap-x-2'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <p className='text-black'>24</p>
                        </div>
                        <div className='flex items-center text-yellow-400 gap-x-2'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <p className='text-black'>0</p>
                        </div>
                        <div className='flex items-center text-yellow-400 gap-x-2'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <p className='text-black'>0</p>
                        </div>
                        <div className='flex items-center text-yellow-400 gap-x-2'>
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <p className='text-black'>0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-y-14 mt-20'>
                <div className='flex justify-between'>
                    <h3 className='font-bold text-[30px]'>Produk lainnya</h3>
                    <h4 className='text-[16px] text-[#316093]'>Lihat Selengkapnya &gt;</h4>
                </div>
                <div className='grid gap-x-3 grid-cols-6'>
                    {otherProduct.slice(0,6).map((product) => {
                        return (
                            <button key={product.id} onClick={() => navigate('/product/' + product.id)}>
                                <div className='flex flex-col h-full border-2  p-3 justify-between gap-y-6 rounded-[10px] border-[#E1E1E1] shadow-shadow-custom-1 hover:-translate-y-3 ease-in-out duration-300 max-w-[250px]'>
                                    <div className='flex flex-row items-center justify-center '>
                                        <img className='rounded-[8px]  w-[200px] ' src={product.productImages[0].image} alt="" />
                                    </div>
                                    <p className='font-semibold text-[16px] text-left '>{product.name}</p>
                                    <div className='flex flex-col gap-y-3'>
                                        {product.discount === 0 ?

                                            <h4 className='font-bold text-[18px] text-left mt-8'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(product.price)}</h4>
                                            :
                                            <>
                                                <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(product.price)}</h4>

                                                <h3 className='font-bold text-[18px] text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(product.price - (product.price * (product.discount / 100)))}</h3>
                                            </>
                                        }

                                        <div className='flex gap-x-2'>
                                            <div className='flex items-center gap-x-2'>
                                                <div className='text-yellow-400 text-[14px] md:text-[16px]'><AiFillStar /></div>
                                                <p className='text-[16px]'>{product.ratingAverage}</p>
                                            </div>
                                            <div className='text-[14px] md:text-[16px]'>
                                                |
                                            </div>
                                            <div className='flex items-center'>
                                                <p className='text-[16px]'>Terjual {product.amountSold}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Ulasan