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
      <div className='h-72 bg-light-blue-pale flex items-center justify-center py-10 font-Inter'>
        <div className=' container h-full flex justify-between items-center'>
          <div>
            <img src={HomepointLogo} alt="" />
          </div>
          <div className='flex flex-col h-full gap-y-3'>
            <h3 className='font-[600] text-[25px]'>Layanan Konsumen</h3>
            <p>Pusat Bantuan</p>
            <p>Cara Belanja</p>
            <p>Pembayaran</p>
            <p>Pengiriman & Pengambilan barang</p>
            <p>FAQ</p>
          </div>
          <div className='flex flex-col h-full gap-y-3'>
            <h3 className='font-[600] text-[25px]'>Hubungi kami</h3>
            <p>Helpcenter@homepoint.com</p>
            <p>+62 21 911</p>
          </div>
          <div className='flex flex-col h-full gap-y-5'>
            <div className='flex  flex-col gap-y-3'>
              <h3 className='font-[600] text-[25px]'>Download Aplikasi</h3>
              <div className='flex justify-between h-14'>
                <img src={DownloadOnIos} alt="" />
                <img src={DownloadOnAndroid} alt="" />
              </div>
            </div>
            <div className='flex flex-col gap-y-3'>
              <h3 className='font-[600] text-[16px]'>Ikuti kami di</h3>
              <div className='flex gap-x-3 h-10'>
                <img src={Instagram} alt="" />
                <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
                <img src={Tiktok} alt="" />
                <img src={Youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
