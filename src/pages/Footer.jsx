import React from 'react'

import HomepointLogo from '../images/Logo Homepoint.svg'
import DownloadOnIos from '../images/download-on-ios.svg'
import DownloadOnAndroid from '../images/download-on-android.svg'
import Instagram from '../images/Instagram.svg'
import Facebook from '../images/Facebook.svg'
import Twitter from '../images/Twitter.svg'
import Tiktok from '../images/TikTok.svg'
import Youtube from '../images/YouTube.svg'

export default function Footer() {
  return (
    <footer>
      <div className=' bg-light-blue-pale flex items-center justify-center px-4 py-10 font-Inter w-full h-fit z-30'>
        <div className=' container  px-3 h-full flex flex-wrap xl:flex-nowrap gap-x-10  justify-center xl:justify-between items-center'>
          <div className='w-[150px] md:w-[200px] mr-5 '>
            <img  src={HomepointLogo} alt="" />
          </div>
          <div className='flex flex-flow flex-col h-full  xl:gap-y-3 gap-y-2 '>
            <h3 className='font-[600] xl:text-[30px] text-[24px]'>Layanan Konsumen</h3>
            <p className='text-[16px] xl:text-[20px]'>Pusat Bantuan</p>
            <p className='text-[16px] xl:text-[20px]'>Cara Belanja</p>
            <p className='text-[16px] xl:text-[20px]'>Pembayaran</p>
            <p className='text-[16px] xl:text-[20px]'>Pengiriman & Pengambilan barang</p>
            <p className='text-[16px] xl:text-[20px]'>FAQ</p>
          </div>
          <div className='flex flex-col h-fit  gap-y-3  '>
            <h3 className='font-[600] xl:text-[30px] text-[24px]'>Hubungi kami</h3>
            <p className='flex flex-wrap  text-[16px] xl:text-[20px]'>Helpcenter@homepoint.com</p>
            <p className='text-[16px] xl:text-[20px]'>+62 21 911</p>
          </div>
          <div className='flex flex-col items-start h-full gap-y-10   '>
            <div className='flex  flex-col gap-y-3'>
              <h3 className='font-[600] xl:text-[30px] text-[24px]'>Download Aplikasi</h3>
              <div className='flex flex-col xl:flex-row gap-x-3 items-start gap-y-2 h-fit'>
                <img className='h-[30px] xl:h-[40px]' src={DownloadOnIos} alt="" />
                <img className='h-[30px] xl:h-[40px]' src={DownloadOnAndroid} alt="" />
              </div>
            </div>
            <div className='flex flex-col gap-y-3 w-fit '>
              <h3 className='font-[600] xl:text-[30px] text-[24px]'>Ikuti kami di</h3>
              <div className='flex flex-wrap flex-row gap-x-5 h-10 '>
                <img className='w-[25px] xl:w-[35px]' src={Instagram} alt="" />
                <img className='w-[25px] xl:w-[35px]' src={Facebook} alt="" />
                <img className='w-[25px] xl:w-[35px]' src={Twitter} alt="" />
                <img className='w-[25px] xl:w-[35px]' src={Tiktok} alt="" />
                <img className='w-[25px] xl:w-[35px]' src={Youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
