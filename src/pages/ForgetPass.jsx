import React from 'react'
import homePointLogo from '../images/HomepointLoginRegister.svg'
import backgroundImage from '../images/BgRegisLogin.svg'
import Google from '../images/GoogleLogo.svg'
import Facebook from '../images/Facebook.svg'

import { useState } from 'react'


export default function ForgetPass() {

    const [Permintaan, setPermintaan] = useState(false)

    const clickPermintaan = () => {
        setPermintaan(!Permintaan)
    }
  return (
    <>
            <div className='font-Inter bg-cover gap-y-[100px] bg-left-bottom flex flex-col ' style={{ backgroundImage: `url(${backgroundImage})` }} >
                <nav className=' flex h-[70px] border-2 border-red-500 w-full'>
                    <button>
                        <img src="" alt="" />
                    </button>
                </nav>
                <div className='flex justify-end py-5 px-14 w-full border-2 border-black'>
                    <div className={`${Permintaan ? ' items-center ' : ' items-end '}flex container border-2 border-yellow-200 flex-col  mb-[300px]`}>
                        <div className={`${Permintaan ? 'hidden' : 'flex'} flex-col gap-y-5 items-center border-2 border-blue-700  py-10 px-5 h-fit bg-[#98B6C9] rounded-[16px] max-w-[600px] w-[600px]`}>
                            <div className='flex flex-col items-center'>
                                <img src={homePointLogo} alt="" />
                                <h2 className='font-bold text-[40px] text-[#22364A]'>Reset Password</h2>
                            </div>
                            
                            <div className='flex flex-col gap-y-3 bg-white p-2 justify-between rounded-[10px] w-full'>
                                <p className='px-2 text-[#316093]'>Email/No. Hp</p>
                                <input className='focus:outline-none focus:border-[#6999B8] focus:ring-2 focus:ring-[#6999B8] caret-[#6999B8] px-2 h-10 rounded-[8px]' placeholder='Email/No. Hp' type="text" />
                            </div>

                            <button onClick={clickPermintaan} className='bg-[#FBC646] w-full h-[50px] rounded-[10px]'>
                                <p className='font-bold '>Kirim Permintaan</p>
                            </button>
                            
                        </div>

                        <div className={`${Permintaan ? ' flex ' : ' hidden '} flex-col justify-evenly items-center max-w-[900px] w-[900px] h-[400px] bg-white-transparent py-7 px-24 rounded-[16px]`}>
                            <h3 className='font-bold text-[32px]'>Silahkan Cek Email Kamu</h3>
                            <p className='text-center'>Kami telah mengirimkan email berisi password baru, kamu dapat mengubah password tersebut di pengaturan profil.</p>
                            <button className='bg-[#FBC646] w-[50%] h-[50px] font-semibold rounded-[10px]'>Masuk</button>
                            <p>Belum mendapatkan email? <span className='text-[#316093]'>Kirim Ulang</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}
