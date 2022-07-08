import React from 'react'
import { HiOutlineChevronRight, HiChevronDown, HiChevronUp, HiOutlineX } from "react-icons/hi";
import gambarWishlist from '../images/gambarWishlist.svg'
import kurirReguler from '../images/kurirReguler.svg'
import kurirHomepoint from '../images/kurirHomepoint.svg'
import ambilDiTempat from '../images/ambilDiTempat.svg'

export default function ModalCheckout({setModalCheckout}) {
  return (
    <section className='fixed bg-slate-400/70 top-0 left-0 right-0 bottom-0 z-30'>

      <div className='bg-white fixed rounded-[8px] p-5 flex flex-col gap-y-5 top-[50%]  translate-y-[-50%] translate-x-[-50%] left-[50%] w-[500px] h-[600px] overflow-y-scroll scrollbar'>

        <div className='w-full flex justify-end'>
          <button onClick={() => setModalCheckout(false)}>
            <HiOutlineX size={'2rem'} />
          </button>
        </div>

        <div className='w-full flex justify-center'>
          <h3 className='font-bold text-[24px]'>Pembayaran</h3>
        </div>
        <div className='h-[2px] w-full bg-blue-300'></div>

        <div className='flex flex-col gap-y-5'>
          <h4 className='font-medium text-[18px]'>Detail Pesananmu</h4>

          <div className='flex flex-row justify-between'>
            <p>1x</p>
            <p className='max-w-[300px]'>Penggorengan Elektronik tanpa minyak / Air Fryer 2.5 L / Microwave Ori</p>
            <p className='font-semibold'>Rp 529.000</p>
          </div>
          <div className='h-[2px] bg-slate-400/30 w-full'></div>
        </div>

        <div className='flex flex-row justify-between'>
          <p className=''>Subtotal</p>
          <p className='font-semibold text-[#316093]'>Rp 529.000</p>
        </div>

        <div className='flex flex-col gap-y-5'>
          <h4 className='font-medium text-[18px]'>Pilih Layanan Pengiriman</h4>

          <div className='flex flex-row justify-between'>

            <div className='flex flex-col items-center'>
              <div className='w-full flex justify-start'>
                <input
                  type="radio"
                  name='pengiriman'
                />
              </div>
              <img src={kurirReguler} alt="" />
              <p className='font-semibold italic text-[#316093]'>Rp 25.000</p>
            </div>

            <div className='flex flex-col items-center'>
              <div className='w-full flex justify-start'>
                <input
                  type="radio"
                  name='pengiriman'
                />
              </div>
              <img src={kurirHomepoint} alt="" />
              <p className='font-semibold italic text-[#316093]'>Gratis</p>
            </div>

            <div className='flex flex-col items-center'>
              <div className='w-full flex justify-start'>
                <input
                  type="radio"
                  name='pengiriman'
                />
              </div>
              <img src={ambilDiTempat} alt="" />
              <p className='font-semibold italic text-[#316093]'>Gratis</p>
            </div>

          </div>

        </div>

        <button>
          <div className='bg-slate-300 rounded-[8px] w-full flex justify-start items-center p-3'>
            Pilih Lokasi Toko
          </div>
        </button>

        <div className='flex flex-col'>
          <h4 className='font-semibold'>Ringkasan Pembayaran</h4>
          <div className='flex flex-row justify-between'>
            <p>Total Belanja (1 produk)</p>
            <p>Rp. 529.000</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p>Total Ongkir</p>
            <p>Rp. 0</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p>Biaya asuransi (1 produk)</p>
            <p>Rp. 100.000</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p>Diskon</p>
            <p>- Rp. 250.000</p>
          </div>
        </div>

        <div className='h-[2px] w-full bg-slate-300'></div>

        <div className='flex flex-row justify-between'>
          <p>Total</p>
          <p className='font-semibold'>Rp 850.000</p>
        </div>

        <div className='flex flex-col'>
          <h4>Metode Pembayaran</h4>
          <button>
            <div className='flex flex-row justify-between items-center border-2 border-slate-400 rounded-[8px] p-3'>
              <p>Pilih Metode Pembayaran</p>
              <HiChevronDown size={'1.4rem'} />
            </div>
          </button>
        </div>

        <button>
          <div className='rounded-[8px] font-bold text-[#505050] bg-[#FBC646] h-10 flex justify-center items-center'>
            Bayar
          </div>
        </button>

      </div>

    </section>
  )
}
