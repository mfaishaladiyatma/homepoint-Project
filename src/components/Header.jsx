import React from 'react'
import CompanyLogo from '../images/Logo aja Homepoint 2.svg'
import Heart from '../images/Heart.svg'
import Cart from '../images/ShoppingCart.svg'
import Bell from '../images/Bell.svg'
import UserLogo from '../images/UserCircle.svg'
import arrowDown from '../images/ChevronDown.svg'
import { HiCheck } from "react-icons/hi";
import searchLogo from '../images/search.svg'

import { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import jwtDecode from 'jwt-decode'

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
    const [selected, setSelected] = useState('')
    const [isClickedLogin, setIsClickedLogin] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const { token } = useSelector((state) => state)

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

    const navigate = useNavigate()

    console.log(selected)
    console.log(isClicked)
    return (
        <header className='sticky top-0 z-20'>
            <nav className='bg-blue-pale  h-20 flex items-center justify-center font-Inter'>
                <div className='container px-3 flex items-center justify-between'>
                    <button>
                        <img src={CompanyLogo} alt="Homepoint" />
                    </button>
                    <div className='relative bg-white w-[750px] h-[60px] p-2 flex gap-x-3 rounded-[10px]'>

                        <button onClick={handleCategory}>
                            <div className='w-[200px] ml-3 h-full flex items-center justify-between '>
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
                        <button className=' w-[100px] h-full  flex justify-center'>
                            <img className=' w-[40px]' src={searchLogo} alt="" />
                        </button>
                    </div>
                    <button>
                        <img src={Heart} alt="Wishlist" />
                    </button>
                    <button>
                        <img src={Cart} alt="Cart" />
                    </button>
                    <button>
                        <img src={Bell} alt="Notification" />
                    </button>
                    <div className='relative flex items-center gap-x-4'>
                        <img src={UserLogo} alt="User" />
                        <button onClick={() => setIsClickedLogin(!isClickedLogin)}>
                            <p className='text-white w-[150px] overflow-hidden text-ellipsis font-[400]'>{decode ? decode.sub : 'Masuk/Daftar'}</p>

                        </button>

                        {isClickedLogin ?
                            <div className='bg-white absolute border-2 border-black w-full top-full mt-5 flex flex-col'>
                                <button onClick={() => navigate('/login')}>
                                    <div className='h-[40px] flex justify-center items-center'>Masuk</div>
                                </button>
                                <button onClick={() => navigate('/register')}>
                                    <div className='h-[40px] flex justify-center items-center'>Daftar</div>
                                </button>
                            </div>

                            : null}

                    </div>
                </div>
            </nav>
        </header>
    )
}
