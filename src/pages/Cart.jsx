import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import jwtDecode from "jwt-decode";

import productCartImage from '../images/productCartImage.svg'
import { BsHeart, BsFillTrashFill } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";


export default function Cart() {
  const { token, name } = useSelector((state) => state)
  const idAkun = useSelector((state) => state.id)

  const [rekomendasiProduct, setRekomendasiProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState([]);
  const [loading, setLoading] = useState(true);

  // qty.forEach((item) => {
  //   console.log(item)
  // })

  const decode = token ? jwtDecode(token) : null;

  useEffect(() => {

    const fetchData = async () => {
      const respRecommendProduct = await axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/products/latest')
        .then((response) => {
          // console.log(response)
          setRekomendasiProduct(response.data.data)
          // console.log(rekomendasiProduct)
          // console.log(cobaGet)
        })
        .catch((error) => {
          console.log(error)
        })

      if (decode) {

        const respProductInCart = await axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/cart/${idAkun}`)
          .then((response) => {
            setCart(response.data.data);
            setQty(response.data.data.map(item => item.quantity))
            // console.log(response.data.data)
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

    fetchData()
  }, [])

  const addQty = async (id, quantity) => {

    const addPutQty = await axios({
      method: "put",
      url: `https://homepoint-server-staging.herokuapp.com/api/v1/cart/items/${id}`,
      data: (quantity + 1),
      headers: { "Content-Type": "application/json" }
    }).then((response) => {
      //handle success
      console.log(response)
    }).catch((error) => {
      //handle error
      console.log(error)
    })

    const getPutQty = await axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/cart/${idAkun}`)
      .then((response) => {
        setCart(response.data.data);
        setQty(response.data.data.map(item => item.quantity))
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
  const calcTotal = () => {
    
    const total = cart.map(item => item.products.discount == 0 ? 
      item.products.price * item.quantity
      : 
      ((item.products.price * (item.products.discount /100)) * item.quantity)).reduce((a, b) => {
      return a + parseInt(b, 10)
    }, 0)
    return total
  }

  return (
    <div className='flex flex-col py-3 px-16 gap-y-10'>
      <h2 className='font-bold text-[30px]'>Keranjang</h2>
      <div className='flex flex-row  gap-x-5 font-Inter'>
        <div className='flex flex-col w-[70%]  px-2 gap-y-8'>

          <div className='flex justify-between'>
            <div className='flex gap-x-2 items-center'>
              <input className='accent-[#FBC646] w-[20px] h-[30px] border-blue-500 text-red-500 outline-none' type="checkbox" />
              <span>Pilih Semua</span>
            </div>
            <div>
              <p className='font-bold text-red-500'>Hapus</p>
            </div>
          </div>

          {/* card untuk product yang dibeli */}
          <section>
            {cart.map((item) => {
              return (
                <div key={item.id} className='flex flex-col '>

                  <div className='flex flex-row  items-center gap-x-2'>
                    <input className='accent-[#FBC646] w-[20px] h-[30px]' type="checkbox" />
                    <img className='w-[250px]' src={item.products.productImages[0].image} alt="" />
                    <div className='flex flex-col  w-full h-full gap-y-12'>
                      <div className='flex flex-col'>
                        <h4 className='text-[18px]'>{item.products.name}</h4>

                        <h4 className='font-bold text-[18px]'>{item.products.discount == 0 ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 9 }).format(item.products.price) : new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 9 }).format(item.products.price * (item.products.discount / 100))}</h4>

                      </div>
                      <div className='flex flex-row justify-between'>
                        <div className='flex items-center gap-x-2'>
                          <button>
                            <div>
                              <BsHeart />
                            </div>
                          </button>
                          <p>|</p>
                          <button>
                            <div className='text-red-500'>
                              <BsFillTrashFill />
                            </div>
                          </button>
                        </div>
                        <div className='flex justify-between px-2 rounded-[10px] w-[80px] text-white bg-[#22364A]'>
                          <button>
                            -
                          </button>
                          <p>{item.quantity}</p>
                          <button onClick={() => addQty(item.id, item.quantity)}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full h-[2px] rounded-full bg-slate-400 mt-5 mb-5'></div>

                </div>
              )
            })}


          </section>

          {/* card untuk product yang rekomendasi */}
          <section className='flex flex-col '>
            <div className='flex justify-between items-center'>
              <h4 className='text-[30px] font-medium'>Rekomendasi Untukmu</h4>
              <p className='text-[#316093] font-[600]'>Lihat Selengkapnya &gt;</p>
            </div>
            <div className='grid grid-cols-4  h-full  gap-4 mt-10'>
              {rekomendasiProduct.slice(0, 8).map((item) => (
                <div key={item.id} className='flex flex-col border-2  p-3 justify-between gap-y-6 rounded-[10px] border-[#E1E1E1]'>
                  <img src={item.productImages[0].image} alt="" />
                  <p className='font-semibold'>{item.name}</p>
                  <div className='flex flex-col gap-y-3'>
                    <h4 className='font-bold text-[18px] text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(

                      item.price

                    )}</h4>
                    <div className='flex gap-x-2'>
                      <div className='flex items-center gap-x-2'>
                        <div className='text-yellow-400'><AiFillStar /></div>
                        <p className='text-[16px]'>{item.ratingAverage}</p>
                      </div>
                      <div>
                        |
                      </div>
                      <div className='flex items-center'>
                        <p className='text-[16px]'>Terjual {item.amountSold}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* card untuk tab harga/bayar */}
        <section className=' flex flex-col gap-y-8 w-[30%] rounded-[8px] shadow-shadow-custom-2 px-3 py-5 h-fit'>
          <div className='flex h-10 items-center justify-between  rounded-[8px] border-2 border-blue-300 px-3'>
            <div className='flex justify-center w-full'>
              <p className='font-semibold text-[#505050]'>Makin hemat dengan promo</p>
            </div>
            <div>
              <HiOutlineChevronRight />
            </div>
          </div>
          <div className='h-[2px] w-full bg-blue-300'></div>
          <h3 className='font-bold text-[22px]'>Ringkasan Belanja</h3>
          <div className='flex flex-col gap-y-6'>
            {cart.map((item, index) => {
              if (item.products.discount == 0) {
                return (
                  <React.Fragment key={index}>
                    <div className='flex justify-between'>
                      <p>Total harga ({item.quantity} barang)</p>
                      <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 9 }).format(

                        item.products.price * item.quantity

                      )}</p>
                    </div>
                  </React.Fragment>
                )
              } else {
                return (
                  <React.Fragment key={index}>
                    <div className='flex justify-between'>
                      <p>Total harga ({item.quantity} barang)</p>
                      <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 9 }).format(

                        (item.products.price * (item.products.discount / 100)) * item.quantity

                      )}</p>
                    </div>
                  </React.Fragment>
                )
              }
            })}
            {/* <div className='flex justify-between'>
              <p>Total harga ( barang)</p>
              <p>Rp. 800.000</p>
            </div> */}
          </div>
          <div className='h-[2px] w-full bg-blue-300'></div>

          {/* {cart.map((item, index) => {
            const totalAll = [((item.products.price * (item.products.discount / 100)) * item.quantity)]
            console.log(totalAll ? totalAll : 0)
          })} */}
          {/* {cart.map(item => item.products.price).reduce((a, b) => a + parseInt(b, 10), 0)} */}
          <div className='flex justify-between'>
            <p className='font-bold text-[22px]'>Total Harga</p>
            {/* <p className='font-bold text-[22px]'>Rp. 800.000</p> */}
            <p className='font-bold text-[22px]'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 9 }).format(

              calcTotal()

            )}</p>
          </div>
          <div className='rounded-[8px] font-bold text-[#505050] bg-[#FBC646] h-10 flex justify-center items-center'>
            Beli (1)
          </div>
        </section>


      </div>
    </div>
  )
}
