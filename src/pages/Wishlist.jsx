import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useParams, useNavigate } from 'react-router-dom'

import gambarWishlist from '../images/gambarWishlist.svg'
import { AiFillStar } from "react-icons/ai";
import { BsHeart, BsFillTrashFill } from "react-icons/bs";
import trashIcon from '../images/trashIcon.svg'


export default function Wishlist() {

  const navigate = useNavigate()

  const [dataWishlist, setDataWishlist] = useState([])
  const [loading, setLoading] = useState(false)

  const { token } = useSelector((state) => state)
  const { id } = useParams()

  const decode = token ? jwtDecode(token) : null

  console.log(dataWishlist ? dataWishlist : "no data")

  useEffect(() => {
    if (decode) {
      setLoading(true)
      axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/' + id)
        .then((response) => {
          // setDataWishlist((prevState) =>([
          //   ...prevState,
          //   response.data.data
          // ]))
          setDataWishlist(response.data.data.wishlistItems)
          // console.log(cobaGet)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
    } else {
      return
    }
  }, [])

  const deleteWishlist = (id) => {
    axios({
      method: "delete",
      url: ('https://homepoint-server-staging.herokuapp.com/api/v1/wishlist/items/' + id ),
  }).then((response) => {
      //handle success
      console.log(response)
      // window.location.reload()
      navigate(0)
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

            <div className='flex flex-row  p-3 w-[700px] justify-between'>
              <h3 className='text-[32px] font-bold'>Wishlist</h3>
              <div className='border-2 rounded-[8px] border-[#316093] w-[450px] flex items-center px-3'>
                <input placeholder='Search Wishlist' type="text" />
              </div>
            </div>
            <div>
              <p className='text-[#316093]'>
                <button className='font-medium'>
                  Atur Wishlist
                </button>
              </p>
            </div>

          </div>

          <div className=' mt-10'>
            <div className='grid grid-cols-6 h-fit gap-3 p-3'>

              {dataWishlist.map((data) => {
                // console.log(data.wishlistItems)
                return (

                  <div key={data.id} className='border-2 border-slate-300 flex flex-col items-center justify-between rounded-[8px] p-2 gap-y-5 max-h-[450px]'>
                    <img src={data.products.productImages[0].image} alt="" />

                    <h3 className='w-full text-left font-bold text-[18px]'>{data.products.name}</h3>

                    <div className='flex flex-col w-full gap-y-2'>
                      <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(data.products.price * (data.products.discount / 100))}</h4>
                      <h3 className='font-bold text-[18px] text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(data.products.price)}</h3>
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
                        <button className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
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
