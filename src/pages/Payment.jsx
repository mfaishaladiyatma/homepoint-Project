import React from 'react'
import Logo from '../assets/homepointBlue.svg'
import { useState } from 'react'

function Payment() {
  const [img, setImg] = useState()

  const onImageChange = (e) => {
    const [file] = e.target.files
    setImg(URL.createObjectURL(file))
  }


  return (
    <div className='flex flex-col px-20 py-10'>
      <img className='max-w-[250px]' src={Logo} alt="" />
      <div className='w-full flex items-center justify-center'>
        <div className='flex flex-col border-slate-400 border-[1px] rounded-[8px] p-5 w-[600px]'>
          <div className='flex justify-between'>
            <h3>Konfirmasi Pembayaran</h3>
            <p>Batas pembayaran</p>
          </div>
          <p>Informasi rekening pembayaran</p>
          
          <div className='flex flex-col border-2 border-slate-400 items-center rounded-[8px]'>
          <input accept="image/png, image/gif, image/jpeg" type="file" onChange={onImageChange} />
          <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment