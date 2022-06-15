import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginActionAsync, logoutAction } from '../components/action'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux/es/exports'

import homePointLogo from '../images/HomepointLoginRegister.svg'
import backgroundImage from '../images/BgRegisLogin.svg'
import Google from '../images/GoogleLogo.svg'
import Facebook from '../images/Facebook.svg'
import goBack from '../images/arrowGoBack.svg'

export default function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { token } = useSelector((state) => state)

    const handleLogin = () => {
        dispatch(loginActionAsync(email, password, navigate))
        // redirectIfLogin()
    }

    // useEffect(() => {
    //     axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/users`)
    //     // https://cosmetic-b.herokuapp.com/api/v1/product
    //     // https://rent-cars-api.herokuapp.com/admin/car
    //     // https://homepoint-server-staging.herokuapp.com/api/v1/users
    //     .then((response) => {
    //         console.log(response)
    //     });
    // }, []);



    return (
        <>
        {/* whole page */}

            <div className='font-Inter bg-cover sm:gap-y-[50px] gap-y-[100px] sm:h-[125vh] lg:h-[100vh] h-[150vh] bg-left-bottom flex flex-col ' style={{ backgroundImage: `url(${backgroundImage})` }} >

                {/* nav */}

                <nav className=' flex h-[70px]  w-full'>
                    <button onClick={() => navigate(-1)} className='ml-10'>
                        <img src={goBack} alt="" />
                    </button>
                </nav>

                {/* mid-section or form */}

                <section className='flex justify-end py-5 px-14 w-full '>
                    <div className='container  flex lg:justify-center justify-end '>

                    {/* form-section */}

                        <div className='flex flex-col lg:gap-y-3 gap-y-3 items-center  lg:py-0  py-10 px-5 sm:h-[680px] lg:h-[700px] h-[800px] bg-[#98B6C9] rounded-[16px] max-w-[600px] lg:w-[500px] sm:w-[350px] w-[550px]'>
                            <div className='flex flex-col items-center'>
                                <img className='lg:w-[200px] w-[250px]' src={homePointLogo} alt="" />
                                <h2 className='font-bold sm:text-[20px] lg:text-[28px] text-[34px] text-[#22364A]'>Masuk akun</h2>
                            </div>

                            <div className='w-full '>
                                <div className='flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full'>
                                    <p className=' px-1 font-bold'>Email</p>
                                    <input className='focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-12 sm:h-10 rounded-[8px] bg-[#DADADA]' placeholder='Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full'>
                                    <p className='px-1 font-bold'>Kata Sandi</p>
                                    <input className='focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-12 sm:h-10 rounded-[8px] bg-[#DADADA]' placeholder='Kata Sandi' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>


                            <div className='flex justify-star mt-5 px-3 w-full '>
                                <button onClick={() => navigate('/forgetpass')}>
                                    <p className='text-[#505050] font-semibold'>Lupa kata sandi?</p>
                                </button>
                            </div>

                            <button onClick={handleLogin} className='bg-[#FBC646]  w-[95%] h-[50px] rounded-[10px]'>
                                <p className='font-bold '>Masuk</p>
                            </button>

                            <p>Atau</p>

                            <div className='flex gap-x-10 sm:w-[300px]'>
                                <button className='w-[200px] h-[50px] bg-white-transparent flex justify-center items-center rounded-[10px]'>
                                    <img className='w-[30px]' src={Google} alt="" />
                                </button>
                                <button className='w-[200px] h-[50px] bg-white-transparent flex justify-center items-center rounded-[10px]'>
                                    <img className='w-[35px]' src={Facebook} alt="" />
                                </button>
                            </div>

                            <div className='mt-3'>
                                <p>Belum memiliki akun? <span onClick={() => navigate('/register')} className='cursor-pointer font-semibold'>Daftar</span></p>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
