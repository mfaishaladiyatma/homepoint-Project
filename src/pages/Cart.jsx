import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

import productCartImage from '../images/productCartImage.svg'
import { BsHeart, BsFillTrashFill } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";


export default function Cart() {
  const [rekomendasiProduct, setRekomendasiProduct] = useState([]);

  useEffect(() => {
    axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/products/latest')
      .then((response) => {
        // console.log(response)
        setRekomendasiProduct(response.data.data)
        console.log(rekomendasiProduct)
        // console.log(cobaGet)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])



  return (
    <div className='flex flex-row p-3 gap-x-2 font-Inter'>
      <div className='flex flex-col w-[70%] border-2 border-blue-500 px-2 gap-y-8'>
        <h2 className='font-bold text-[30px]'>Keranjang</h2>

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
          <div className='flex flex-col '>
            <div className='flex flex-row  items-center gap-x-2'>
              <input className='accent-[#FBC646] w-[20px] h-[30px]' type="checkbox" />
              <img src={productCartImage} alt="" />
              <div className='flex flex-col border-2 border-slate-500 w-full h-full gap-y-12'>
                <div className='flex flex-col'>
                  <h4 className='text-[18px]'>Promo Rak Dinding Kayu Besi Serbaguna Minimalis</h4>
                  <h4 className='font-bold text-[18px]'>Rp 800.000</h4>
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
                    <p>1</p>
                    <button>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full h-[2px] rounded-full bg-slate-400 mt-5'></div>
          </div>

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
                  <h4 className='font-bold text-[18px] text-left'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 6 }).format(item.price)}</h4>
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
      <section className='flex flex-col gap-y-8 w-[30%] rounded-[8px] shadow-shadow-custom-2 px-3 py-5 h-fit'>
        <div className='flex h-10 items-center justify-between  rounded-[8px] border-2 border-blue-300 px-3'>
          <div className='flex justify-center ] w-full'>
            <p className='font-semibold text-[#505050]'>Makin hemat dengan promo</p>
          </div>
          <div>
            <HiOutlineChevronRight />
          </div>
        </div>
        <div className='h-[2px] w-full bg-blue-300'></div>
        <h3 className='font-bold text-[22px]'>Ringkasan Belanja</h3>
        <div className='flex justify-between'>
          <p>Total harga (1 barang)</p>
          <p>Rp. 800.000</p>
        </div>
        <div className='h-[2px] w-full bg-blue-300'></div>
        <div className='flex justify-between'>
          <p className='font-bold text-[22px]'>Total Harga</p>
          <p className='font-bold text-[22px]'>Rp. 800.000</p>
        </div>
        <div className='rounded-[8px] font-bold text-[#505050] bg-[#FBC646] h-10 flex justify-center items-center'>
          Beli (1)
        </div>
      </section>


    </div>
  )
}
