import React from 'react'

import CompanyLogo from '../images/Logo aja Homepoint 2.svg'
import Heart from '../images/Heart.svg'
import Cart from '../images/ShoppingCart.svg'
import Bell from '../images/Bell.svg'
import UserLogo from '../images/UserCircle.svg'
import searchLogo from '../images/search.svg'
import arrowDown from '../images/ChevronDown.svg'

import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { logoutAction } from './action'
import { Transition } from '@headlessui/react'

const category = [
    {
        // id: 1,
        name: 'Kursi',
    },
    {
        // id: 2,
        name: 'Meja',
    },
    {
        // id: 3,
        name: 'Lampu',
    },
    {
        // id: 4,
        name: 'Kipas',
    },
    {
        // id: 5,
        name: 'Kulkas',
    },
    {
        // id: 6,
        name: 'Lainnya',
    }
]

export default function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [selected, setSelected] = useState('')
    const [isClickedLogin, setIsClickedLogin] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    //Menu Handler for Mobile & Tablet
    const [menu, setMenu] = React.useState(false)

    // Search Function (Navigation)
    // const searchHandler = (e) => {
    //     const lowerInput = e.target.value.toLowerCase()
    //     setData(dataProduct.filter(x => x.name.toLowerCase().includes(lowerInput)))
    // }

    const { token, name } = useSelector((state) => state)

    const decode = token ? jwtDecode(token) : null


    const toggleSelected = (value) => {
        if (selected) {
            setSelected('')
        } else if (selected !== value) {
            setSelected(value)
        } else {
            setSelected(value)
        }
    }

    const handleCategory = () => {
        setIsClicked(!isClicked)
    }



    console.log(selected)
    console.log(isClicked)
    return (
        <>

            <header className='sticky top-0 z-20'>
                {/*md:px-16  md:px-3*/}

                <div className='w-full bg-[#6999B8] h-[8vh] flex items-center justify-center'>
                    <div className='flex items-center container gap-x-0 justify-between'>

                        <div>
                            <Link to="/">
                                <img className="max-w-[100px] md:max-w-[140px]" src={CompanyLogo} alt="Homepoint" />
                            </Link>
                        </div>

                        {/*search logo*/}
                        <div className='relative bg-white xl:w-[300px] 2xl:w-[550px] w-[750px]  h-[45px] p-2 flex lg:hidden gap-x-3 rounded-[10px]'>

                            <button onClick={handleCategory}>
                                <div className='xl:w-[80px] 2xl:w-[150px] w-[200px] ml-3 h-full flex items-center justify-between '>
                                    <p>{selected ? selected : 'Kategori'}</p>
                                    <img src={arrowDown} alt="" />
                                </div>
                            </button>
                            {isClicked ?

                                <div className='absolute mt-2 h-[200px] overflow-auto z-10 top-full w-[200px] border-2 border-black bg-white'>
                                    <ul className='flex flex-col '>
                                        {category.map((item, index) => (
                                            <button className='' key={index} value={item.name} onClick={() => toggleSelected(item.name)}>
                                                <li className='hover:bg-blue-300  flex items-center justify-center h-[50px] '>{item.name}</li>
                                            </button>
                                        ))}
                                    </ul>
                                </div>

                                : null}


                            <div className='h-full w-1 rounded-full bg-black'></div>

                            <div className=' w-full'>
                                <input className='w-full h-full px-3' type="search" placeholder='Search' />
                            </div>
                            <button className=' w-[100px] mr-1  h-full  flex justify-end items-center'>
                                <img className=' w-[30px]' src={searchLogo} alt="" />
                            </button>
                        </div>

                        <div className='flex  items-center gap-x-4 lg:hidden '>
                            <img className="px-5 h-[23px]" src={Heart} alt="love" />
                            <img className="px-5 h-[23px]" src={Cart} alt="cart" />
                            <img className="px-5 h-[23px]" src={Bell} alt="bell" />

                            <div className='relative flex flex-row items-center gap-x-5'>
                                <img src={UserLogo} alt="User" />
                                <button onClick={() => setIsClickedLogin(!isClickedLogin)}>
                                    <p className='text-white w-[150px] overflow-hidden text-left text-ellipsis font-[400] '>{decode ? name : 'Masuk/Daftar'}</p>

                                </button>

                                <Transition
                                    as={Fragment}
                                    show={(isClickedLogin && token) ? true : false}
                                    enter="transition-all duration-300"
                                    enterFrom="opacity-0 translate-y-[-30%]"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition-all duration-300"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-[-30%]"
                                >
                                    <div className='bg-white absolute rounded-[8px] border-2 border-slate-400 w-full top-full mt-5 flex flex-col p-2 '>
                                        <button>
                                            <div className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200'>Profile</div>
                                        </button>
                                        <button onClick={() => { dispatch(logoutAction()); setIsClickedLogin(!isClickedLogin); }}>
                                            <div className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200'>Keluar</div>
                                        </button>
                                    </div>
                                </Transition>

                                <Transition
                                    as={Fragment}
                                    show={(isClickedLogin && !token) ? true : false}
                                    enter="transition-all duration-300"
                                    enterFrom="opacity-0 translate-y-[-30%]"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition-all duration-300"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-[-30%]"
                                >
                                    <div className='bg-white absolute rounded-[8px] border-2 border-slate-400 w-full top-full mt-5 flex flex-col p-2 '>
                                        <button onClick={() => navigate('/login')}>
                                            <div className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200'>Masuk</div>
                                        </button>
                                        <button onClick={() => navigate('/register')}>
                                            <div className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200'>Daftar</div>
                                        </button>
                                    </div>
                                </Transition>

                            </div>

                        </div>
                        <AiOutlineMenu onClick={() => setMenu(!menu)} className='cursor-pointer text-white hidden lg:flex text-[2rem]' />
                    </div>
                </div>
                {menu ?
                    <div className="lg:flex hidden gap-5 py-5 text-white flex-col px-6 md:px-16 w-full bg-[#6999B8]">
                        <Link to="/">
                            <div className='relative bg-white w-[fullpx] h-[40px] p-2 flex gap-x-3 rounded-[10px]'>

                                <button onClick={handleCategory}>
                                    <div className='w-[200px] ml-3 h-full flex items-center justify-between '>
                                        <p className='text-black'>{selected ? selected : 'Kategori'}</p>
                                        <img src={arrowDown} alt="" />
                                    </div>
                                </button>
                                {isClicked ?

                                    <div className='text-black absolute mt-2 h-[200px] overflow-auto z-10 top-full w-[200px] border-2 border-black bg-white'>
                                        <ul className='flex flex-col '>
                                            {category.map((item, index) => (
                                                <button className='' key={index} value={item.name} onClick={() => toggleSelected(item.name)}>
                                                    <li className='hover:bg-blue-300  flex items-center justify-center h-[50px] '>{item.name}</li>
                                                </button>
                                            ))}
                                        </ul>
                                    </div>

                                    : null}


                                <div className='h-full w-1 rounded-full bg-black'></div>

                                <div className=' w-full'>
                                    <input className='w-full h-full px-3' type="search" placeholder='Search' />
                                </div>
                                <button className=' w-[100px] h-full  flex justify-center'>
                                    <img className=' w-[30px]' src={searchLogo} alt="" />
                                </button>
                            </div>
                        </Link>
                        <Link to="/">Wishlist</Link>
                        <Link to="/">Cart</Link>
                        <Link to="/">Notification</Link>
                        <Link to="/profile">Account</Link>
                    </div>
                    :
                    null
                }

            </header>
        </>
    )
}
