import React from 'react'

import { HiOutlineChevronRight } from "react-icons/hi";

export default function Checkout() {
  return (
    <div className='flex flex-col gap-y-10 px-16 py-3 font-Inter'>
      <h1 className='font-bold text-[30px]'>Checkout</h1>
      <div className='flex flex-row border-2 border-black gap-x-5'>

        <section className='border-2 border-blue-300 w-[70%] flex flex-col gap-y-5'>
          <h2 className='font-medium text-[24px]'>Kirim ke</h2>

          <div className='flex flex-col'>

            <div className='flex flex-row justify-between'>
              <div className='flex flex-row'>
                <p>Fajar Tri Utomo (Rumah)</p>
                <div>Utama</div>
              </div>
              <div className='flex'>
                <p>Pilih Alamat Lain</p>
              </div>
            </div>
            
            <p>08211313131</p>

            <p>JL. Buah batu permai no 100 Blok A5 deket masjid agung, Desa Batu, Kec. Batu, Kota Bandung. Batu, Kota Bandung, 34131</p>

          </div>

          <div className='h-[10px] w-full bg-slate-500/20 rounded-full'></div>

          <div className='flex flex-col'>

            <h2>Daftar Pesananmu</h2>
            <div className='flex flex-row'>
              <img src="" alt="" />
              <div className='flex flex-col'>
                <p>Penggorengan Elektronik tanpa minyak / Air Fryer 2.5 L</p>
              </div>
            </div>

          </div>

        </section>

        <section className='flex flex-col  w-[30%] p-2 gap-y-8 shadow-shadow-custom-2 rounded-[8px]'>

          <div className='flex flex-row border-2 border-blue-300 rounded-[8px] px-3 justify-between items-center h-10'>
            <div className='flex justify-center w-full'>
              <p className='font-semibold text-[#505050]'>Makin hemat dengan promo</p>
            </div>
            <HiOutlineChevronRight />
          </div>
          <div className='h-[2px] w-full bg-blue-300'></div>
          <div className='flex flex-col gap-y-6'>
            <h3 className='font-bold text-[22px]'>Ringkasan belanja</h3>
            <div className='flex flex-col gap-y-2'>
              <div className='flex flex-row justify-between'>
                <p>Total harga (1 produk)</p>
                <p>Rp. 1.000.000</p>
              </div>
              <div className='flex flex-row justify-between'>
                <p>Biaya asuransi (1 produk)</p>
                <p>Rp. 100.000</p>
              </div>
            </div>
          </div>
          <div className='h-[2px] w-full bg-blue-300'></div>
          <div className='flex flex-row justify-between'>
            <p className='font-bold text-[22px]'>Total Harga</p>
            <p className='font-bold text-[22px]'>Rp. 1.000.000</p>
          </div>
          <div className='rounded-[8px] font-bold text-[#505050] bg-[#FBC646] h-10 flex justify-center items-center'>
            Lanjutkan
          </div>
        </section>

      </div>
    </div>
  )
}
