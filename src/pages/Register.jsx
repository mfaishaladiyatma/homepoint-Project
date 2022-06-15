import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'

import { registerUser } from '../components/action'

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
    const [isChecked, setIsChecked] = useState(false)

    console.log(isChecked)

    const handleRegister = () => {

        if(isChecked) {
            dispatch(registerUser(namaLengkap, email, password, navigate))
        } else {
            alert('Silahkan centang checkbox')
        }
    }

    return (
        <>
        {/* whole page */}

            <div className='font-Inter bg-cover sm:gap-y-[50px] gap-y-[100px] sm:h-[145vh] lg:h-[100vh] h-[170vh] bg-left-bottom flex flex-col ' style={{ backgroundImage: `url(${backgroundImage})` }} >

        {/* nav */}

                <nav className=' flex h-[70px] border-2 border-red-500 w-full'>
                    <button onClick={() => navigate(-1)} className='ml-10'>
                        <img src={goBack} alt="" />
                    </button>
                </nav>

                {/* mid-section or form */}

                <section className='flex justify-end py-5 px-14 w-full border-2 border-black'>
                    <div className='container border-2 border-yellow-200 flex lg:justify-center justify-end '>

                        {/* form-section */}

                        <div className='flex flex-col gap-y-3 items-center border-2 border-blue-700 lg:py-0  py-10 px-5 sm:h-[800px] lg:h-[780px] h-fit bg-[#98B6C9] rounded-[16px] max-w-[600px] lg:w-[500px] sm:w-[350px] w-[550px]'>

                            <div className='flex flex-col items-center'>
                                <img className='lg:w-[200px] w-[250px]' src={homePointLogo} alt="" />
                                <h2 className='font-bold sm:text-[20px] lg:text-[28px] text-[34px] text-[#22364A]'>Daftar akun</h2>
                            </div>

                            <div className='w-full'>
                                <div className='flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full'>
                                    <p className='px-1 font-bold'>Nama Lengkap</p>
                                    <input value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} className='focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-12 sm:h-10 rounded-[8px] bg-[#DADADA]' placeholder='Nama Lengkap' type="text" />
                                </div>
                                <div className='flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full'>
                                    <p className='px-1 font-bold'>Email</p>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-12 sm:h-10 rounded-[8px] bg-[#DADADA]' placeholder='Email' type="text" />
                                </div>
                                <div className='flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full'>
                                    <p className='px-1 font-bold'>Kata Sandi</p>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-12 sm:h-10 rounded-[8px] bg-[#DADADA]' placeholder='Kata Sandi' type="password" />
                                </div>
                            </div>

                            <div className='flex items-center w-full gap-x-5 border-2 border-black px-3'>
                                <input  value={isChecked} onChange={(e) => setIsChecked(e.target.checked)} className='accent-[#FBC646] w-[20px] h-[30px]' type="checkbox" />
                                <div className='w-[80%] sm:w-full text-[14px] border-2 border-yellow-300'>
                                    <p>Dengan mendaftar, Anda menyetujui <span>Syarat &amp; Ketentuan</span> serta <span>Kebijakan Privasi</span> Homepoint</p>
                                </div>
                            </div>

                            <button onClick={handleRegister} className='bg-[#FBC646] w-[95%] h-[50px] rounded-[10px] mt-3'>
                                <p className='font-bold '>Daftar</p>
                            </button>

                            <p>Atau</p>

                            <div className='flex gap-x-10 sm:w-[300px]'>
                                <button className='w-[200px] h-[50px] bg-white-transparent flex justify-center items-center rounded-[10px]'>
                                    <img className='w-[30px]' src={Google} alt="" />
                                </button>
                                <button className='w-[200px] h-[50px] bg-blue-500 bg-white-transparent flex justify-center items-center rounded-[10px]'>
                                    <img className='w-[35px]' src={Facebook} alt="" />
                                </button>
                            </div>

                            <div className='mt-3'>
                                <p>Sudah memiliki akun? <span onClick={() => navigate('/login')} className=' cursor-pointer font-semibold'>Masuk</span></p>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
