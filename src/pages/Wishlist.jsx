import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

import gambarWishlist from '../images/gambarWishlist.svg'
import { AiFillStar } from "react-icons/ai";
import { BsHeart, BsFillTrashFill } from "react-icons/bs";
import trashIcon from '../images/trashIcon.svg'


export default function Wishlist() {

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate()

  const [dataWishlist, setDataWishlist] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const [filterList, setFilterList] = useState({
    name: '',
    page: 0,
    size: 12
  });

  const { token } = useSelector((state) => state)
  const idAkun = useSelector((state) => state.id)
  const { id } = useParams()


  const decode = token ? jwtDecode(token) : null


  useEffect(() => {
    const fetchData = async () => {
      if (decode) {
        setLoading(true)
        const getWishlistItems = await axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/' + id)
          .then((response) => {
            // setDataWishlist((prevState) =>([
            //   ...prevState,
            //   response.data.data
            // ]))
            setDataWishlist(response.data.data.wishlistItems)
            setLoading(false)
            // console.log(cobaGet)
          })
          .catch((error) => {
            console.log(error)
            setLoading(false)
          })
      } else {
        return
      }
    }

    fetchData()

  }, [])

  // const name = searchParams.get('name');
  // const page = searchParams.get('page');
  // const size = searchParams.get('size');

  // const url = require("url")

  const queryParams = {
    productName: search,
    page: 0,
    size: 12,
  }

  const params = new URLSearchParams(queryParams)

  const searchHandler = (e) => {
    e.preventDefault()
    // setFilterList((prevState) => ({
    //   ...prevState,
    //   name:search,
    //   page,
    //   size,
    // }));

    axios({
      method: 'GET',
      url: 'https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/' + idAkun,
      params
    })
      .then((response) => {
        setDataWishlist(response.data.data.wishlistItems)
      })
      .catch((error) => {
        console.log(error)
        //wip: display error here
      });
  }

  const getWishlistData = () => {
    axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/' + id)
      .then((response) => {
        // setDataWishlist((prevState) =>([
        //   ...prevState,
        //   response.data.data
        // ]))
        setDataWishlist(response.data.data.wishlistItems)
        setLoading(false)
        // console.log(cobaGet)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  const deleteWishlist = (id) => {
    axios({
      method: "delete",
      url: ('https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/items/' + id),
    }).then((response) => {
      //handle success
      console.log(response)
      // window.location.reload()
      toast.success("Item berhasil dihapus")
      getWishlistData()
    }).catch((error) => {
      //handle error
      console.log(error)
    })
  }

  const addToCart = (id) => {
    axios({
      method: "post",
      url: (`https://homepoint-server-staging.herokuapp.com/api/v1/cart/items/${idAkun}/` + id),
      data: 1
      ,
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      //handle success
      console.log(response, "<<<Add To Cart>>>")
      toast.success("Produk berhasil ditambahkan ke keranjang");
      getWishlistData()
      // window.location.reload()
    }).catch((error) => {
      //handle error
      console.log(error)
    })
  }

  return (
    <>
      {loading ? <div className='text-center'>Loading...</div> :
        <div className='font-Inter p-10 flex flex-col'>
          <div className=' flex flex-row justify-between items-center'>

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
                  theme: {
                    primary: 'blue',
                    secondary: 'yellow'
                  }
                },

                error: {
                  duration: 5000,
                  theme: {
                    primary: 'red',
                    secondary: 'yellow'
                  }
                }
              }}
            />

            <div className='flex flex-row  p-3 w-[700px] justify-between'>
              <h3 className='text-[32px] font-bold'>Wishlist</h3>
              <form onSubmit={searchHandler}>
                <div className='border-2 rounded-[8px] border-[#316093] w-[450px] flex items-center p-3'>
                  <input className='w-full' onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Search Wishlist' type="text" />
                </div>
              </form>
            </div>
            {/* <div>
              <p className='text-[#316093]'>
                <button className='font-medium'>
                  Atur Wishlist
                </button>
              </p>
            </div> */}

          </div>

          <div className=' mt-10'>
            <div className='grid grid-cols-6 h-fit gap-3 p-3'>

              {dataWishlist.length > 0 && dataWishlist.map((data) => {
                // console.log(data.wishlistItems)
                return (
                  
                  <div onClick={() => navigate('/product/'+data.products.id)} key={data.id}  className='border-2 border-slate-300 flex flex-col items-center justify-between rounded-[8px] p-2 gap-y-5 h-full max-h-[450px] cursor-pointer'>
                    <img className='rounded-[8px]' src={data.products.productImages[0].image} alt="" />

                    <h3 className='w-full text-left font-bold text-[18px]'>{data.products.name}</h3>

                    <div className='flex flex-col w-full gap-y-2'>
                      {data.products.discount === 0 ?
                        <h3 className='font-bold text-[18px] text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(data.products.price)}</h3>
                        :
                        <>
                          <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(data.products.price)}</h4>
                          <h3 className='font-bold text-[18px] text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(data.products.price * (data.products.discount / 100))}</h3>
                        </>
                      }


                      <div className='flex flex-row items-center gap-x-2'>
                        <div className='text-yellow-500'>
                          <AiFillStar />
                        </div>
                        <p>{data.products.ratingAverage}</p>
                        <p> | </p>
                        <p>Terjual {data.products.amountSold}</p>
                      </div>
                      <div className='flex flex-row gap-x-3'>
                        <button onClick={() => deleteWishlist(data.id)}>
                          <img className='w-[25px]' src={trashIcon} alt="" />
                        </button>
                        <button onClick={() => addToCart(data.products.id)} className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
                          <p>+</p>
                          <p>Keranjang</p>
                        </button>
                      </div>
                    </div>

                  </div>
                  
                )
              }
              )}


            </div>
          </div>
        </div>
      }

    </>
  )
}
