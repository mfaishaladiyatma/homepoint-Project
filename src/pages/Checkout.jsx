import React from 'react'
import { useEffect, useState, Fragment } from 'react';
import { Transition } from '@headlessui/react'

import ModalCheckout from '../components/ModalCheckout';

import { HiOutlineChevronRight, HiChevronDown, HiChevronUp, HiOutlineX } from "react-icons/hi";
import gambarWishlist from '../images/gambarWishlist.svg'
import kurirReguler from '../images/kurirReguler.svg'
import kurirHomepoint from '../images/kurirHomepoint.svg'
import ambilDiTempat from '../images/ambilDiTempat.svg'

export default function Checkout() {

  const [subtotalClicked, setSubtotalClicked] = useState(true)
  const [modalCheckout, setModalCheckout] = useState(false)

  return (
    <div className='flex flex-col gap-y-10 px-16 py-3 font-Inter'>
      <h1 className='font-bold text-[30px]'>Checkout</h1>
      <div className='flex flex-row  gap-x-5'>

        <section className=' w-[70%] flex flex-col gap-y-5'>
          <h2 className='font-medium text-[24px]'>Kirim ke</h2>

          <div className='flex flex-col gap-y-2'>

            <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center gap-x-3'>
                <p className='font-semibold text-[20px]'>Fajar Tri Utomo <span className='font-medium'>(Rumah)</span></p>
                <div className='flex justify-center items-center rounded-full bg-[#0284D6] text-white px-3'>Utama</div>
              </div>
              <div className='flex p-1 border-2 border-blue-300 rounded-[8px]'>
                <p className='text-[#505050]'>Pilih Alamat Lain</p>
              </div>
            </div>

            <p className='font-medium'>08211313131</p>

            <p className='text-[#505050]'>JL. Buah batu permai no 100 Blok A5 deket masjid agung, Desa Batu, Kec. Batu, Kota Bandung. Batu, Kota Bandung, 34131</p>

          </div>

          <div className='h-[10px] w-full bg-slate-400/30 rounded-full'></div>

          <div className='flex flex-col gap-y-8'>

            <h2 className='font-medium text-[24px]'>Daftar Pesananmu</h2>

            <div className='flex flex-row'>
              <img src={gambarWishlist} alt="" />
              <div className='flex flex-col max-h-[80%] justify-between'>
                <p className='font-medium text-[16px]'>Penggorengan Elektronik tanpa minyak / Air Fryer 2.5 L</p>
                <p className='font-semibold text-[20px]'>Rp. 800.000</p>
              </div>
            </div>

            <div className='flex flex-row gap-x-3'>
              <input className='accent-[#FBC646]' type="checkbox" />
              <p>Tambahkan Asuransi</p>
              <p className='font-medium text-[#316093] '>Pelajari</p>
            </div>

            <div className='h-[2px] w-full bg-slate-400/30'></div>

            <div className='flex flex-row py-2'>
              <div className='w-[90%] '>
                <div className='flex flex-row justify-between mb-5'>
                  <p className='font-semibold'>Subtotal</p>
                  <p className='font-semibold'>Rp 900.000</p>
                </div>
                <Transition
                  as={Fragment}
                  show={subtotalClicked}
                  enter="transition-all duration-[350ms]"
                  enterFrom="opacity-0 translate-y-[-25%]"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition-all duration-[350ms]"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-[-25%]"
                >
                  <div className='w-full  flex flex-col gap-y-2'>
                    <div className='flex flex-row justify-between'>
                      <p>Harga 1 barang (1)</p>
                      <p className='font-semibold'>Rp 800.000</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                      <p>Asuransi</p>
                      <p className='font-semibold'>Rp 100.000</p>
                    </div>
                  </div>
                </Transition>
              </div>

              <div className='w-[10%]  flex justify-center items-start'>
                <button onClick={() => setSubtotalClicked(!subtotalClicked)}>
                  {subtotalClicked ?
                    <HiChevronUp size={'2rem'} />
                    :
                    <HiChevronDown size={'2rem'} />
                  }
                </button>
              </div>
            </div>

          </div>

        </section>

        <section className='flex flex-col h-fit w-[30%] px-3 py-5 gap-y-8 shadow-shadow-custom-2 rounded-[8px]'>

          <div className='flex flex-row border-2 border-blue-300 rounded-[8px] justify-between items-center h-10'>
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

          <button onClick={() => setModalCheckout(!modalCheckout)}>
            <div className='rounded-[8px] font-bold text-[#505050] bg-[#FBC646] h-10 flex justify-center items-center'>
              Lanjutkan
            </div>
          </button>
        </section>

      </div>

      {modalCheckout ? <ModalCheckout setModalCheckout={setModalCheckout} /> : null}

    </div>
  )
}
