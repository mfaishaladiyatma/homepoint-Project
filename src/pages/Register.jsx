import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'

import homePointLogo from '../images/HomepointLoginRegister.svg'
import backgroundImage from '../images/BgRegisLogin.svg'
import Google from '../images/GoogleLogo.svg'
import Facebook from '../images/Facebook.svg'
import goBack from '../images/arrowGoBack.svg'

export default function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [namaLengkap, setNamaLengkap] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = (e) => {
        
    }

    return (
        <>
            <div className='font-Inter bg-cover gap-y-[100px] h-[180vh] bg-left-bottom flex flex-col ' style={{ backgroundImage: `url(${backgroundImage})` }} >

                <nav className=' flex h-[70px] border-2 border-red-500 w-full'>
                    <button onClick={() => navigate(-1)} className='ml-10'>
                        <img src={goBack} alt="" />
                    </button>
                </nav>

                <section className='flex justify-end py-5 px-14 w-full border-2 border-black'>
                    <div className='container border-2 border-yellow-200 flex justify-end '>
                        <div className='flex flex-col gap-y-5 items-center border-2 border-blue-700  py-10 px-5 h-fit bg-[#98B6C9] rounded-[16px] max-w-[600px] w-[550px]'>
                            <div className='flex flex-col items-center'>
                                <img className='w-[250px]' src={homePointLogo} alt="" />
                                <h2 className='font-bold text-[32px] text-[#22364A]'>Daftar akun</h2>
                            </div>
                            <div className='w-full'>
                                <div className='flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full'>
                                    <p className='px-2 font-bold'>Nama Lengkap</p>
                                    <input value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} className='focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-12 rounded-[8px] bg-[#DADADA]' placeholder='Nama Lengkap' type="text" />
                                </div>
                                <div className='flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full'>
                                    <p className='px-2 font-bold'>Email</p>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-12 rounded-[8px] bg-[#DADADA]' placeholder='Email' type="text" />
                                </div>
                                <div className='flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full'>
                                    <p className='px-2 font-bold'>Kata Sandi</p>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-12 rounded-[8px] bg-[#DADADA]' placeholder='Kata Sandi' type="password" />
                                </div>
                            </div>

                            <div className='flex items-center w-full gap-x-5 border-2 border-black px-3'>
                                <input className='accent-[#FBC646] w-[20px] h-[30px]' type="checkbox" />
                                <div className='w-[80%] text-[14px] border-2 border-yellow-300'>
                                    <p>Dengan mendaftar, Anda menyetujui <span>Syarat &amp; Ketentuan</span> serta <span>Kebijakan Privasi</span> Homepoint</p>
                                </div>
                            </div>
                            <button className='bg-[#FBC646] w-[95%] h-[50px] rounded-[10px]'>
                                <p className='font-bold '>Daftar</p>
                            </button>
                            <p>Atau</p>
                            <div className='flex gap-x-10'>
                                <button className='w-[200px] h-[50px] bg-white-transparent flex justify-center items-center rounded-[10px]'>
                                    <img className='w-[30px]' src={Google} alt="" />
                                </button>
                                <button className='w-[200px] h-[50px] bg-blue-500 bg-white-transparent flex justify-center items-center rounded-[10px]'>
                                    <img className='w-[35px]' src={Facebook} alt="" />
                                </button>

                            </div>
                            <div>
                                <p>Sudah memiliki akun? <span onClick={() => navigate('/login')} className=' cursor-pointer font-semibold'>Masuk</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
