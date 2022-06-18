import React from "react";
import { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { logoutAction } from './action'
import { Transition } from '@headlessui/react'


import Logo from "../assets/homepoint.png";
import Search from "../assets/icon/search.png";
import bell from "../assets/icon/bell.png";
import love from "../assets/icon/love.png";
import cart from "../assets/icon/cart.png";
import user from "../assets/icon/user.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Header({ searchHandler, setMenu, menu }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [selected, setSelected] = useState('')
  const [isClickedLogin, setIsClickedLogin] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const { token, name } = useSelector((state) => state)

  const decode = token ? jwtDecode(token) : null


  return (
    <>
      <div className="sticky top-0 w-full bg-[#6999B8] px-6  h-[8vh]   flex md:px-3 items-center z-20 justify-between">
        <div className="">
          <Link to="/">
            <img className="max-w-[100px] md:max-w-[140px]" src={Logo} alt="Homepoint" />
          </Link>
        </div>
        <div className="hidden xl:flex items-center relative">
          <select className="border-none outline-none h-[30px] text-sm px-3">
            <option value="Kategori">Kategori</option>
          </select>
          {/* {e => setQ(e.target.value)} */}
          <div className="h-[30px] flex items-center">
            <input onChange={(e) => searchHandler(e)} className="outline-none px-4 h-full border-none lg:w-[450px]" placeholder="Search ..." />
            <img className="absolute right-[20px]" src={Search} alt="search" />
          </div>
        </div>
        <div className="hidden w-fit xl:flex  gap-x-14 items-center">
          <img className=" h-[23px]" src={love} alt="love" />
          
            <Link className=" w-[50px]" to="/search">
              <div className="flex w-[30px] items-center justify-center">
              <img className=" h-[23px]" src={cart} alt="cart" />
              </div>
            </Link>
          
          <img className=" h-[23px]" src={bell} alt="bell" />

          <div className='relative flex flex-row items-center '>
            <img src={user} alt="User" />
            <button onClick={() => setIsClickedLogin(!isClickedLogin)}>
              <p className='text-white text-center  w-[150px] overflow-hidden  text-ellipsis font-[400] '>{decode ? name : 'Masuk/Daftar'}</p>

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
                <button onClick={() => {navigate('/login'); setIsClickedLogin(!isClickedLogin);}}>
                  <div className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200'>Masuk</div>
                </button>
                <button onClick={() => {navigate('/register'); setIsClickedLogin(!isClickedLogin);}}>
                  <div className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200'>Daftar</div>
                </button>
              </div>
            </Transition>

          </div>

        </div>
        <AiOutlineMenu onClick={() => setMenu(!menu)} className="text-white xl:hidden text-[2rem]" />
      </div>
      {menu ? (
        <div className="flex gap-5 py-5 text-white flex-col px-6 md:px-16 w-full bg-[#6999B8]">
          <Link to="/">
            <div className="flex items-center relative">
              <select className="border-none text-black outline-none h-[20px] sm:h-[30px] text-sm px-3">
                <option value="Kategori">Kategori</option>
              </select>
              <div className="h-[20px] sm:h-[30px] bg-red-500 w-full flex items-center">
                <input onChange={(e) => searchHandler(e)} className="text-black border-none outline-none pl-3 h-full border-none w-[100%]" placeholder="Search ..." />
                <img className="absolute w-[10px] md:w-[15px] right-[10px] sm:right-[20px]" src={Search} alt="search" />
              </div>
            </div>
          </Link>
          <Link to="/">Wishlist</Link>
          <Link to="/search">Cart</Link>
          <Link to="/">Notification</Link>
          <Link to="/login">Account</Link>
        </div>
      ) : (
        ""
      )}
      
    </>
  );
}

export default Header;
