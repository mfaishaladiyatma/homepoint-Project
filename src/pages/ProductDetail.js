import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'

import { useParams, useSearchParams } from 'react-router-dom'

import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import Ulasan from '../components/ulasan'
// import { addressContext } from '../context/context'

function ProductDetail() {

    const { id } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ product, setProduct ] = useState();

    useEffect(() => {
        axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/products/${id}`)
            .then((response) => {
                setProduct(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                //wip: display error here
            });
    }, [id]);

    //wip: show loading
    return (
        <>
            {loading ? (<div>Loading...</div>) : (
                <div className='px-4 lg:px-12 md:px-24'>
                    <div className='font-semibold text-lg my-5'>
                        Kategori : {product.productSubcategories.name}
                    </div>
                    <div className='w-full md:py-12 flex flex-col'>
                        <div className='flex flex-col lg:flex-row gap-[20px] justify-between'>
                            <img className="max-w-[200px] md:max-w-[400px] max-h-[400px]" src={product.productImages[0].image} alt="" />
                            <div>
                                <h1 className='text-2xl font-semibold'>{product.name}</h1>
                                <div className='flex flex-row md:items-center text-sm md py-4'>
                                    <div className='flex items-center'>
                                        <h3>{product.ratingAverage}</h3>
                                        <div className='flex px-2 border-r-[1px] border-black'>
                                            <AiFillStar className='text-[#FBC646]' />
                                            <AiFillStar className='text-[#FBC646]' />
                                            <AiFillStar className='text-[#FBC646]' />
                                            <AiFillStar className='text-[#FBC646]' />
                                            <AiFillStar className='text-[#FBC646]' />
                                        </div>

                                    </div>
                                    <div className='flex px-5 border-r-[1px] border-black'>
                                        <h3>{product.ratingCount}</h3>
                                        <span className='ml-2 font-light'>Penilaian</span>
                                    </div>
                                    <div className='flex px-5 border-r-[1px] border-black'>
                                        <h3>{product.amountSold}</h3>
                                        <span className='ml-2 font-light'>Terjual</span>
                                    </div>
                                </div>

                                <div className='flex items-center'>
                                    <h1 className='before text-xl'>{product.price}</h1>
                                    <h1 className='text-2xl mt-2 font-bold ml-2'>Rp {Math.trunc(product.price * (product.discount / 100))}</h1>
                                </div>

                                <div className='flex bg-[#E6EFF4] w-full mt-6 px-5 py-2 rounded-md'>
                                    <div className='border-r-[1px] w-[50%] border-[#6999B8]'>
                                        <h1>Brand</h1>
                                        <div className='text-l'>{product.brand.toUpperCase()}</div>
                                    </div>
                                    <div className='px-5 w-[50%]'>
                                        <div className='flex w-100 gap-3'>
                                            <div>Warna</div>
                                            <div>:</div>
                                        </div>
                                        <div className="rounded-full w-8 h-8" style={{ backgroundColor: product.color }}></div>
                                    </div>
                                </div>

                                <div className='py-4'>
                                    <h1 className='py-2 font-bold'>Deskripsi</h1>
                                    <div>
                                        <div>
                                            <div dangerouslySetInnerHTML={{ __html: product.description }}>
                                                
                                            </div>
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
                                                    <h1>Ambil di Toko</h1>
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
                            <div className='w-full flex justify-center'>

                                <div className='p-3 w-fit flex flex-col max-h-[425px] ml-4 border-[#6999B8] border-[1px] rounded-md'>
                                    <div className='flex justify-center rounded-md gap-[20px] items-center p-3 border-black border-[1px]'>
                                        <div className='text-[#316093]'>{`<`}</div>
                                        <img src={product.productImages[0].image} className="max-w-[100px]" alt="" />
                                        <div className='text-[#316093]'>{`>`}</div>
                                    </div>
                                    <h1 className='py-5 before'>Rp {product.price}</h1>
                                    <h1 className='font-bold text-2xl'>Rp {Math.trunc(product.price * (product.discount / 100))}</h1>
                                    <div className='flex py-5 items-center gap-[20px]'>
                                        <div className='flex items-center gap-[20px] bg-[#22364A] px-3 py-1 rounded-xl text-white'>
                                            <div>
                                                -
                                            </div>
                                            <div className='px-3'>1</div>
                                            <div>
                                                +
                                            </div>
                                        </div>
                                        <div className='text-sm whitespace-nowrap'>Stok tersedia</div>
                                    </div>
                                    <h1 className='text-sm'>Pembelian Maksimal 100 pcs</h1>
                                    <div className='mt-auto'>
                                        <button className='flex items-center justify-center px-5 py-3 text-center font-bold w-[100%] bg-[#FBC646]'>+ Keranjang</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Ulasan product={product} />
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductDetail;