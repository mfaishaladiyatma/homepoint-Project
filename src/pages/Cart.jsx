import React from 'react'

import productCartImage from '../images/productCartImage.svg'
import { BsHeart, BsFillTrashFill } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function Cart() {
  return (
    <div className='flex flex-row p-3 gap-x-2 font-Inter'>
      <div className='flex flex-col w-[70%] border-2 border-blue-500 px-2 gap-y-8'>
        <h2 className='font-bold text-[24px]'>Keranjang</h2>

        <div className='flex justify-between'>
          <div className='flex gap-x-2 items-center'>
            <input type="checkbox" />
            <span>Pilih Semua</span>
          </div>
          <div>
            <p className='font-bold text-red-500'>Hapus</p>
          </div>
        </div>

        {/* card untuk product yang dibeli */}
        <section>
          <div className='flex flex-col border-2 border-green-500'>
            <div className='flex flex-row  items-center gap-x-2'>
              <input type="checkbox" />
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
      </div>

        {/* card untuk tab harga/bayar */}
      <section className='flex flex-col gap-y-8 w-[30%] rounded-[8px] shadow-shadow-custom-2 px-3 py-5'>
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
