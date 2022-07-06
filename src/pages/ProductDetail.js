import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'

import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import Ulasan from '../components/ulasan'
import loveOutline from '../images/loveOutline.svg'
import shareIcon from '../images/shareIcon.svg'
import instagramLogo from '../images/Instagram.svg'
import facebookLogo from '../images/Facebook.svg'
// import { addressContext } from '../context/context'

function ProductDetail() {

    const { token, name } = useSelector((state) => state)
    const idAkun = useSelector((state) => state.id)

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    

    useEffect(() => {
        const fetchData = async () => {
            const respProduct = await axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/products/${id}`)
            .then((response) => {
                setProduct(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error)
                //wip: display error here
            });

            const respProductInWishlist = await axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/items/${idAkun}/${id}`)
            .then((response) => {
                console.log(response)
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error)
                //wip: display error here
            });
        }

        fetchData();
        
    }, [id, idAkun]);

    const addToWishlist = () => {
        axios({
            method: "post",
            url: `https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/items/${idAkun}/${id}`,
            data: {
                'productId': id,
                'userId': idAkun
            },
            // headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }).then((response) => {
            //handle success
            console.log(response)
        }).catch((error) => {
            //handle error
            console.log(error)
        })
    }

    //wip: show loading
    return (
        <>
            {loading ? (<div>Loading...</div>) : (
                <div className='font-Inter px-4 lg:px-12 md:px-24'>
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
                                        <h3 className='font-semibold'>{product.ratingAverage}</h3>
                                        <div className='flex px-2 border-r-[1px] border-black text-[#FBC646]'>
                                            {product.ratingAverage >= 1 ? <AiFillStar className='text-xl' /> : <AiOutlineStar className='text-xl' />}
                                            {product.ratingAverage >= 2 ? <AiFillStar className='text-xl' /> : <AiOutlineStar className='text-xl' />}
                                            {product.ratingAverage >= 3 ? <AiFillStar className='text-xl' /> : <AiOutlineStar className='text-xl' />}
                                            {product.ratingAverage >= 4 ? <AiFillStar className='text-xl' /> : <AiOutlineStar className='text-xl' />}
                                            {product.ratingAverage >= 5 ? <AiFillStar className='text-xl' /> : <AiOutlineStar className='text-xl' />}
                                        </div>

                                    </div>
                                    <div className='flex px-5 border-r-[1px] border-black'>
                                        <h3 className='font-semibold'>{product.ratingCount}</h3>
                                        <span className='ml-2 font-light'>Penilaian</span>
                                    </div>
                                    <div className='flex px-5 border-r-[1px] border-black'>
                                        <h3 className='font-semibold'>{product.amountSold}</h3>
                                        <span className='ml-2 font-light'>Terjual</span>
                                    </div>
                                </div>

                                <div className='flex items-center'>
                                    <h1 className='before text-lg'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(product.price)}</h1>
                                    <h1 className='text-2xl font-bold ml-2'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format((product.price * (product.discount / 100)))}</h1>
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
                            <div className='w-full flex flex-col justify-start items-center '>

                                <div className='p-3 w-fit flex flex-col max-h-[425px] ml-4 border-[#6999B8] border-[1px] rounded-md'>
                                    <div className='flex justify-center rounded-md gap-[20px] items-center p-3 border-black border-[1px]'>
                                        <div className='text-[#316093]'>{`<`}</div>
                                        <img src={product.productImages[0].image} className="max-w-[100px]" alt="" />
                                        <div className='text-[#316093]'>{`>`}</div>
                                    </div>
                                    <h1 className='py-5 before'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(product.price)}</h1>
                                    <h1 className='font-bold text-2xl'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format((product.price * (product.discount / 100)))}</h1>
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
                                <div className=' mt-3 flex gap-x-3 items-center'>
                                    <button onClick={addToWishlist}>
                                        <img src={loveOutline} alt="" />
                                    </button>
                                    <div className='group cursor-pointer transition relative w-[30px] flex items-center '>
                                        <button >
                                            <img src={shareIcon} alt="" />
                                        </button>
                                        <div className='absolute  top-full left-0 bg-white  w-[230px] h-fit flex gap-x-3 p-2 invisible  opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-[-50%] group-hover:ease-in-out group-hover:duration-500 rounded-[8px] shadow-shadow-custom-1'>
                                            <button>
                                                <img className='w-[30px]' src={instagramLogo} alt="" />
                                            </button>
                                            <button>
                                                <img className='w-[30px]' src={facebookLogo} alt="" />
                                            </button>
                                            <button>
                                                <img className='w-[30px]' src={instagramLogo} alt="" />
                                            </button>
                                            <button>
                                                <img className='w-[30px]' src={facebookLogo} alt="" />
                                            </button>
                                            <button>
                                                <img className='w-[30px]' src={instagramLogo} alt="" />
                                            </button>
                                        </div>
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