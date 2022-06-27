import React from 'react'
import { useState } from 'react'

import riwayatPesananLogo from '../images/riwayatPesananLogo.svg'
import pesananBarangImage from '../images/pesananBarangImage.svg'
import batasPembayaranLogo from '../images/batasPembayaranLogo.svg'

import dompetHitamLogo from '../images/dompetHitamLogo.svg'
import dikemasLogoBlack from '../images/dikemasLogo.svg'
import dikirimLogoBlack from '../images/dikirimLogo.svg'
import sampaiLogoBlack from '../images/sampaiLogo.svg'
import penilaianLogoBlack from '../images/penilaianLogo.svg'

import dompetIconWhite from '../images/dompetIcon.svg'
import dikemasLogoWhite from '../images/dikemasPutihLogo.svg'
import dikirimLogoWhite from '../images/dikirimPutihLogo.svg'
import sampaiLogoWhite from '../images/sampaiPutihLogo.svg'
import penilaianLogoWhite from '../images/penilaianPutihLogo.svg'

export default function RiwayatPesanan() {
  const [bayarTab, setBayarTab] = useState(true)
  const [dikemasTab, setDikemasTab] = useState(false)
  const [dikirimTab, setDikirimTab] = useState(false)
  const [sampaiTab, setSampaiTab] = useState(false)
  const [penilaianTab, setPenilaianTab] = useState(false)

  const [gambarBayar, setGambarBayar] = useState(dompetIconWhite)
  const [gambarDikemas, setGambarDikemas] = useState(dikemasLogoBlack)
  const [gambarDikirim, setGambarDikirim] = useState(dikirimLogoBlack)
  const [gambarSampai, setGambarSampai] = useState(sampaiLogoBlack)
  const [gambarPenilaian, setGambarPenilaian] = useState(penilaianLogoBlack)

  const handleBayarTab = () => {
    setBayarTab(true)
    setDikemasTab(false)
    setDikirimTab(false)
    setSampaiTab(false)
    setPenilaianTab(false)

    setGambarBayar(dompetIconWhite)
    setGambarDikemas(dikemasLogoBlack)
    setGambarDikirim(dikirimLogoBlack)
    setGambarSampai(sampaiLogoBlack)
    setGambarPenilaian(penilaianLogoBlack)
  }

  const handleDikemasTab = () => {
    setBayarTab(false)
    setDikemasTab(true)
    setDikirimTab(false)
    setSampaiTab(false)
    setPenilaianTab(false)

    setGambarBayar(dompetHitamLogo)
    setGambarDikemas(dikemasLogoWhite)
    setGambarDikirim(dikirimLogoBlack)
    setGambarSampai(sampaiLogoBlack)
    setGambarPenilaian(penilaianLogoBlack)
  }

  const handleDikirimTab = () => {
    setBayarTab(false)
    setDikemasTab(false)
    setDikirimTab(true)
    setSampaiTab(false)
    setPenilaianTab(false)

    setGambarBayar(dompetHitamLogo)
    setGambarDikemas(dikemasLogoBlack)
    setGambarDikirim(dikirimLogoWhite)
    setGambarSampai(sampaiLogoBlack)
    setGambarPenilaian(penilaianLogoBlack)
  }

  const handleSampaiTab = () => {
    setBayarTab(false)
    setDikemasTab(false)
    setDikirimTab(false)
    setSampaiTab(true)
    setPenilaianTab(false)

    setGambarBayar(dompetHitamLogo)
    setGambarDikemas(dikemasLogoBlack)
    setGambarDikirim(dikirimLogoBlack)
    setGambarSampai(sampaiLogoWhite)
    setGambarPenilaian(penilaianLogoBlack)
  }

  const handlePenilaianTab = () => {
    setBayarTab(false)
    setDikemasTab(false)
    setDikirimTab(false)
    setSampaiTab(false)
    setPenilaianTab(true)

    setGambarBayar(dompetHitamLogo)
    setGambarDikemas(dikemasLogoBlack)
    setGambarDikirim(dikirimLogoBlack)
    setGambarSampai(sampaiLogoBlack)
    setGambarPenilaian(penilaianLogoWhite)
  }

  return (
    <div className='font-Inter flex flex-col py-10 min-h-[500px] px-20 gap-y-8'>

      <div className='flex  justify-between items-center'>
        <h2 className='text-[30px] font-medium'>Daftar Pesanan Aktif</h2>
        <button>
          <div className='flex'>
            <img src={riwayatPesananLogo} alt="" />
            <p className='text-[#316093]'>Lihat Riwayat Pesanan</p>
          </div>
        </button>
      </div>


      <div className='flex justify-evenly'>

        <button onClick={handleBayarTab}>
          <div className={`${bayarTab ? 'text-white bg-[#316093] border-none' : 'text-black border-2 border-[#98B6C9]'} w-[200px] h-[50px] rounded-[8px] flex items-center bg-white justify-center  gap-x-3`}>
            <img src={gambarBayar} alt="" />
            <p>Bayar</p>
          </div>
        </button>

        <button onClick={handleDikemasTab}>
          <div className={`${dikemasTab ? 'text-white bg-[#316093] border-none' : 'text-black border-2 border-[#98B6C9]'} w-[200px] h-[50px] rounded-[8px] flex items-center bg-white justify-center   gap-x-3`}>
            <img src={gambarDikemas} alt="" />
            <p>Dikemas</p>
          </div>
        </button>

        <button onClick={handleDikirimTab}>
          <div className={`${dikirimTab ? 'text-white bg-[#316093] border-none' : 'text-black border-2 border-[#98B6C9]'} w-[200px] h-[50px] rounded-[8px] flex items-center bg-white justify-center   gap-x-3`}>
            <img src={gambarDikirim} alt="" />
            <p>Dikirim</p>
          </div>
        </button>

        <button onClick={handleSampaiTab}>
          <div className={`${sampaiTab ? 'text-white bg-[#316093] border-none' : 'text-black border-2 border-[#98B6C9]'} w-[200px] h-[50px] rounded-[8px] flex items-center bg-white justify-center   gap-x-3`}>
            <img src={gambarSampai} alt="" />
            <p>Sampai</p>
          </div>
        </button>

        <button onClick={handlePenilaianTab}>
          <div className={`${penilaianTab ? 'text-white bg-[#316093] border-none' : 'text-black border-2 border-[#98B6C9]'} w-[200px] h-[50px] rounded-[8px] flex items-center bg-white justify-center   gap-x-3`}>
            <img src={gambarPenilaian} alt="" />
            <p>Penilaian</p>
          </div>
        </button>
      </div>

      <div className='flex flex-col  w-full h-fit gap-y-5 mt-14'>
        {bayarTab ?
          <div className='flex flex-col border-2 border-slate-300 rounded-[8px] min-h-[250px] p-3 gap-y-2'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-x-3'>
                <h3 className='text-slate-500'>13 Jan 2022 | #no_pesanan</h3>
                <div className='text-red-500 flex gap-x-1'>
                  <img src={batasPembayaranLogo} alt="" />
                  <h3>Batas pembayaran: 24 Mei 2022 | 09:00 WIB</h3>
                </div>
              </div>
              <div className='w-[200px] h-[40px] bg-[#FFF1D0] flex justify-center items-center rounded-[10px] text-[#D69A0C] font-semibold'>
                Belum Dibayar
              </div>
            </div>

            <div className='flex  gap-x-3'>
              <img src={pesananBarangImage} alt="" />
              <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-y-2'>
                  <h3 className='font-semibold'>Penggorengan Elektronik tanpa, Penggorengan Elektronik tanpa, Peng...</h3>
                  <p>+3 Produk lainnya</p>
                </div>
                <h2 className='font-bold text-[24px] text-[#22364A]'>Rp 804.000</h2>
              </div>
            </div>

            <div className='flex justify-end gap-x-3'>
              <button>
                <p className='text-[#316093] font-semibold'>Lihat detail transaksi</p>
              </button>
              <button>
                <div className='w-[200px] flex justify-center items-center h-[50px] bg-[#FBC646] rounded-[8px]'>
                  <p className='text-[#22364A] font-semibold'>Bayar</p>
                </div>
              </button>
            </div>
          </div>
          :
          null}


        <div className='flex flex-col border-2 border-slate-300 rounded-[8px] min-h-[250px] p-3 gap-y-2'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-x-3'>
              <h3 className='text-slate-500'>13 Jan 2022 | #no_pesanan</h3>
            </div>
            {bayarTab ?
              <div className='w-[200px] h-[40px] bg-[#E4EAFC] flex justify-center items-center rounded-[10px] text-[#3064FF] font-semibold'>
                Menunggu Konfirmasi
              </div>
              :
              null}

            {dikemasTab ?
              <div className='w-[200px] h-[40px] bg-[#FCE4F7] flex justify-center items-center rounded-[10px] text-[#960175] font-semibold'>
                Dikemas
              </div>
              :
              null}

            {dikirimTab ?
              <div className='w-[200px] h-[40px] bg-[#A9FFF5] flex justify-center items-center rounded-[10px] text-[#007C6D] font-semibold'>
                Dikirim
              </div>
              :
              null}

            {sampaiTab ?
              <div className='w-[200px] h-[40px] bg-[#FDFAB7] flex justify-center items-center rounded-[10px] text-[#FFC400] font-semibold'>
                Barang Sampai
              </div>
              :
              null}

            {penilaianTab ?
              <div className='w-[200px] h-[40px] bg-[#C4C8F3] flex justify-center items-center rounded-[10px] text-[#040C5E] font-semibold'>
                Barang Sampai
              </div>
              :
              null}
          </div>

          <div className='flex  gap-x-3'>
            <img src={pesananBarangImage} alt="" />
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col gap-y-2'>
                <h3 className='font-semibold'>Penggorengan Elektronik tanpa, Penggorengan Elektronik tanpa, Peng...</h3>
                <p>+3 Produk lainnya</p>
              </div>
              <h2 className='font-bold text-[24px] text-[#22364A]'>Rp 804.000</h2>
            </div>
          </div>

          <div className='flex justify-end gap-x-3'>
            <button>
              <p className='text-[#316093] font-semibold'>Lihat detail transaksi</p>
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}
