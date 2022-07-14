import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import jwtDecode from "jwt-decode";

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast';

import heartRed from '../images/heartRed.svg'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import Ulasan from '../components/ulasan'
import loveOutline from '../images/loveOutline.svg'
import shareIcon from '../images/shareIcon.svg'
import instagramLogo from '../images/Instagram.svg'
import facebookLogo from '../images/Facebook.svg'
import waLogo from '../images/waLogo.svg'
// import { addressContext } from '../context/context'

function ProductDetail() {
    const navigate = useNavigate()

    const { token, name } = useSelector((state) => state)
    const idAkun = useSelector((state) => state.id)

    const { id } = useParams();

    const [stock, setStock] = useState()
    const [qty, setQty] = useState(1)
    const [icon, setIcon] = useState(false)
    const [wishlistIcon, setWishlistIcon] = useState(loveOutline)
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const [checkProduct, setCheckProduct] = useState();

    const decode = token ? jwtDecode(token) : null;

    const urlProduct = `https://homepoint-server-staging.herokuapp.com/api/v1/products/${id}`


    useEffect(() => {

        const fetchData = async () => {
            const respProduct = await axios.get(urlProduct)
                .then((response) => {
                    setProduct({ ...response.data.data });
                    setStock(response.data.data.stock)
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    console.log(error)
                    //wip: display error here
                });

            if (decode) {

                const respProductInWishlist = await axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/items/${idAkun}/${id}`)
                    .then((response) => {
                        setCheckProduct(response.data.data);
                        console.log(response.data.data)
                        // console.log(checkProduct)
                        setLoading(false);
                    })
                    .catch((error) => {
                        setLoading(false);
                        console.log(error)
                        //wip: display error here
                    })
            }
        }

        fetchData();

    }, []);

    //[checkproduct]

    const handleClickWishlist = () => {
        // setIcon(!icon)

        if (checkProduct == null) {
            setWishlistIcon(heartRed)
            addToWishlist()
        } else {
            setWishlistIcon(loveOutline)
            removeFromWishlist()
        }
    }

    const addToWishlist =  () => {
        if (!idAkun) {
            navigate('/login')
            toast('Silahkan login terlebih dahulu',{
                icon: '⚠️',
            })
        } else {
            
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
                console.log(response, "<<<Add To Wishlist>>>")
                checkProductInWishlist()
                // setCheckProduct(true)
                toast.success("Berhasil menambahkan ke wishlist")
                // navigate(0)
            }).catch((error) => {
                //handle error
                console.log(error)
            })
            
        }
    }

    const checkProductInWishlist = () => {
        axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/items/${idAkun}/${id}`)
                .then((response) => {
                    setCheckProduct(response.data.data);
                    console.log(response.data.data)
                    // console.log(checkProduct)
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    console.log(error)
                    //wip: display error here
                })
    }

    const removeFromWishlist =  () => {
        axios({
            method: "delete",
            url: ('https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/items/' + checkProduct.id),
        }).then((response) => {
            checkProductInWishlist()
            //handle success
            toast.success("Produk telah terhapus dari wishlist")
            // setCheckProduct(false)
            console.log(response, "<<<Remove From Wishlist>>>")
            // navigate(0)
        }).catch((error) => {
            //handle error
            console.log(error)
        })
    }

    const addToCart = () => {
        if (!idAkun) {
            navigate('/login')
            toast('Silahkan login terlebih dahulu',{
                icon: '⚠️',
            })
        } else if (qty == 0){
            toast.error("Jumlah produk tidak boleh 0");
        } else {
            axios({
                method: "post",
                url: `https://homepoint-server-staging.herokuapp.com/api/v1/cart/items/${idAkun}/${id}`,
                data: qty
                ,
                headers: { "Content-Type": "application/json" },
            }).then((response) => {
                //handle success
                console.log(response, "<<<Add To Cart>>>")
                toast.success("Produk berhasil ditambahkan ke keranjang");
                // window.location.reload()
            }).catch((error) => {
                //handle error
                console.log(error)
            })
        }
    }

    const handleAddQty = () => {
        if ((qty || 0) < stock) {
            setQty(qty + 1)
        }
    }

    const handleDecQty = () => {
        if (qty === 1 || qty === 0) {
            setQty(0)
        }
        if (qty > 0) {
            setQty(qty - 1)
        }
    }

    const handleQty = (e) => {
        if (!e.target.value) {
            setQty(0)
        } else if (parseInt(e.target.value, 10) > stock) {
            setQty(stock)
        } else {
            setQty(parseInt(e.target.value, 10))
        }
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
                            <img className="max-w-[200px] md:max-w-[400px] max-h-[400px] rounded-[10px] shadow-shadow-custom-2" src={product.productImages[0].image} alt="" />
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

                                {product.discount === 0 ?
                                    <div className='flex items-center'>

                                        <h1 className='text-2xl font-bold'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(product.price)}</h1>

                                    </div>

                                    :
                                    <div className='flex items-center'>

                                        <h1 className='line-through  text-lg'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(product.price)}</h1>
                                        <h1 className='text-2xl font-bold ml-2'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format((product.price * (product.discount / 100)))}</h1>
                                    </div>
                                }

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

                                <div className='p-3 w-fit flex flex-col max-h-[425px] ml-4 border-[#6999B8] border-2 rounded-md shadow-shadow-custom-2'>
                                    <div className='flex justify-center rounded-md gap-[20px] items-center p-3 border-black border-2'>
                                        <div className='text-[#316093]'>{`<`}</div>
                                        <img src={product.productImages[0].image} className="max-w-[100px]" alt="" />
                                        <div className='text-[#316093]'>{`>`}</div>
                                    </div>

                                    {product.discount === 0 ?
                                        <div className='flex flex-col'>
                                            <h1 className='font-bold text-2xl'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(product.price)}</h1>
                                        </div>
                                        :
                                        <div className='flex flex-col'>
                                            <h1 className='py-5 line-through'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(product.price)}</h1>
                                            <h1 className='font-bold text-2xl'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format((product.price * (product.discount / 100)))}</h1>
                                        </div>
                                    }


                                    <div className='flex py-5 items-center gap-[20px]'>
                                        <div className='flex items-center justify-between w-[120px] bg-[#22364A] px-3 py-1 rounded-xl text-white'>
                                            <button className='px-1' onClick={handleDecQty}>
                                                <div className='text-[20px]'>
                                                    -
                                                </div>
                                            </button>
                                            <input className='w-12 placeholder:text-slate-200  text-center bg-transparent text-white' type="text" placeholder='1' value={qty} onChange={handleQty} pattern="[0-9]*" />
                                            <button onClick={handleAddQty} className='= px-1'>
                                                <div className='text-[20px]'>
                                                    +
                                                </div>
                                            </button>
                                        </div>
                                        <div className='text-sm whitespace-nowrap'>Stok tersedia</div>
                                    </div>
                                    <h1 className='text-sm'>Pembelian Maksimal {product.stock} pcs</h1>
                                    <div className='mt-5'>
                                        <button onClick={addToCart} className={` ${ qty == 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#FBC646]'} ' flex items-center justify-center px-5 py-3 text-center font-bold w-[100%]  rounded-[8px] ' `}>+ Keranjang</button>

                                        <Toaster 
                                            position='bottom-right'
                                            reverseOrder={false}

                                            toastOptions={{
                                                duration: 5000,
                                                style: {
                                                    backgroundColor: '#FBC646',
                                                    color: '#22364A',
                                                    fontWeight: 'bold',
                                                },

                                                success: {
                                                    duration: 5000,
                                                    theme:{
                                                        primary: 'blue',
                                                        secondary: 'yellow'
                                                    }
                                                },

                                                error: {
                                                    duration: 5000,
                                                    theme:{
                                                        primary: 'red',
                                                        secondary: 'yellow'
                                                    }
                                                }
                                            }}
                                        />

                                    </div>
                                </div>
                                <div className=' mt-3 flex gap-x-3 items-center'>
                                    <button onClick={handleClickWishlist}>
                                        <img src={checkProduct ? heartRed : loveOutline} alt="" />
                                    </button>
                                    <div className='group cursor-pointer transition relative w-[30px] flex items-center '>
                                        <button >
                                            <img src={shareIcon} alt="" />
                                        </button>
                                        <div className='absolute  top-full left-0 bg-white  w-[230px] h-fit flex gap-x-3 p-2 invisible  opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-[-50%] group-hover:ease-in-out group-hover:duration-500 rounded-[8px] shadow-shadow-custom-1'>
                                            <button className='hover:shadow-shadow-custom-2 rounded-full '>
                                                <img className='w-[30px]' src={instagramLogo} alt="" />
                                            </button>
                                            <button className='hover:shadow-shadow-custom-2 rounded-full '>
                                                <img className='w-[30px]' src={facebookLogo} alt="" />
                                            </button>
                                            <button className='hover:shadow-shadow-custom-2 rounded-full'>
                                                <a target="_blank" href={`https://api.whatsapp.com/send?phone=628111462878&text=${urlProduct}%0AHalo%20Homepoint%F0%9F%99%8C%F0%9F%8F%BB%0AAda%20yang%20ingin%20Saya%20tanyakan%2C%20nih!%0A%0A(Tuliskan%20pertanyaanmu%20disini%20ya!)`} rel="noopener noreferrer">
                                                    <img className="w-[30px]" src={waLogo} alt="test" />
                                                </a>
                                            </button>
                                            <button className='hover:shadow-shadow-custom-2 rounded-full '>
                                                <img className='w-[30px]' src={facebookLogo} alt="" />
                                            </button>
                                            <button className='hover:shadow-shadow-custom-2 rounded-full '>
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