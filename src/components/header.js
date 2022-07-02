import React from "react";
import axios from "axios";
import { useState, Fragment, useEffect } from 'react'
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
import { AiOutlineDown } from "react-icons/ai";

function Header({ searchHandler, setMenu, menu }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [selected, setSelected] = useState('')
  const [namaProfil, setNamaProfil] = useState('')
  const [isClickedLogin, setIsClickedLogin] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [getDataCategories, setGetDataCategories] = useState([])

  const { token, name, id } = useSelector((state) => state)

  const decode = token ? jwtDecode(token) : null

  // console.log(getDataCategories)

  // useEffect(() => {
  //   axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/product-categories')
  //     .then((response) => {
  //       setGetDataCategories([...getDataCategories, response.data.data])
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  // }, [])

  useEffect(() => {
    if (decode) {
      axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/users/' + id)
        .then((response) => {
          console.log(response.data.data)
          setNamaProfil(response.data.data.name)
          // console.log(cobaGet)
        })
        .catch((error) => {
          console.log(error)
        })
      } else {
        return 
      }
    }, [])

  return (
    <>
      <div className="sticky top-0 w-full bg-[#6999B8] px-6  h-[8vh]   flex md:px-3 items-center z-20 justify-between">
        <div className="">
          <Link to="/">
            <img className="max-w-[100px] md:max-w-[140px]" src={Logo} alt="Homepoint" />
          </Link>
        </div>
        <div className="hidden xl:flex xl:gap-x-5 xl:rounded-[8px] xl:bg-white  xl:px-3 items-center relative">
          <div className="relative  flex flex-row justify-between items-center w-[100px]">
            <button className=" flex flex-row justify-between items-center w-full " onClick={() => setIsClicked(!isClicked)}>
              <p>Kategori</p>
              <AiOutlineDown />
            </button>

            <Transition
              as={Fragment}
              show={isClicked}
              enter="transition-all duration-[350ms]"
              enterFrom="opacity-0 translate-y-[-25%]"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-[350ms]"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-[-25%]"
            >
              <div className="absolute border-2 border-black w-[1000px] h-[230px] rounded-[8px] bg-white top-full mt-5 grid grid-cols-5 gap-x-3 p-2">
                <div className=" flex flex-col items-start">
                  <h3 className="font-bold text-[18px]">Semua Kategori</h3>
                </div>
                <div className=" flex flex-col items-start gap-y-8">
                  <h3 className="font-bold text-[18px]">Peralatan Dapur</h3>
                  <div className="flex flex-col items-start gap-y-3 w-full">
                    <p className="rounded-[8px] p-1 hover:bg-sky-200  w-full text-left">Peralatan Masak</p>
                    <p className="rounded-[8px] p-1 hover:bg-sky-200  w-full text-left">Aksesoris Dapur</p>
                    <p className="rounded-[8px] p-1 hover:bg-sky-200  w-full text-left">Perlengkapan Masak</p>
                  </div>
                </div>
                <div className=" flex flex-col items-start gap-y-8">
                  <h3 className="font-bold text-[18px]">Furnitur</h3>
                  <div className="flex flex-col items-start gap-y-3 w-full">
                    <p className="rounded-[8px] p-1 hover:bg-sky-200 w-full text-left">Furnitur Interior</p>
                    <p className="rounded-[8px] p-1 hover:bg-sky-200 w-full text-left">Furnitur Eksterior</p>
                  </div>
                </div>
                <div className=" flex flex-col items-start gap-y-8">
                  <h3 className="font-bold text-[18px]">Peralatan Kebersihan</h3>
                  <div className="flex flex-col items-start gap-y-3 w-full">
                    <p className="rounded-[8px] p-1 hover:bg-sky-200 w-full text-left">Kebersihan Rumah</p>
                    <p className="rounded-[8px] p-1 hover:bg-sky-200 w-full text-left">Kebersihan Dapur</p>
                    <p className="rounded-[8px] p-1 hover:bg-sky-200 w-full text-left">Kebersihan Toilet</p>
                  </div>
                </div>
                <div className=" flex flex-col items-start gap-y-8">
                  <h3 className="font-bold text-[18px]">Elektronik</h3>
                  <div className="flex flex-col items-start gap-y-3 w-full">
                    <p className="rounded-[8px] p-1 hover:bg-sky-200 w-full text-left">Elektronik Dapur</p>
                    <p className="rounded-[8px] p-1 hover:bg-sky-200 w-full text-left">Elektronik Kebersihan</p>
                    <p className="rounded-[8px] p-1 hover:bg-sky-200 w-full text-left">Perangkat Elektronik</p>
                  </div>
                </div>

              </div>
            </Transition>


          </div>

          {/* <select className="border-none outline-none h-[30px] text-sm px-3">
            <option value="Kategori">Kategori</option>
          </select> */}
          {/* {e => setQ(e.target.value)} */}
          <div className="w-[3px] h-[25px] bg-black rounded-full"></div>
          <div className="h-[30px] flex items-center">
            <input onChange={(e) => searchHandler(e)} className="outline-none px-4 h-full border-none lg:w-[450px]" placeholder="Search ..." />
            <img className="absolute right-[20px]" src={Search} alt="search" />
          </div>
        </div>
        <div className="hidden w-fit xl:flex  gap-x-14 items-center">
          <img className=" h-[23px]" src={love} alt="love" />

          <Link to="/search">
            <div className="flex w-[30px] items-center justify-center">
              <img className=" h-[23px]" src={cart} alt="cart" />
            </div>
          </Link>

          <img className=" h-[23px]" src={bell} alt="bell" />

          <div className='relative flex flex-row items-center '>
            <button className="flex flex-row" onClick={() => setIsClickedLogin(!isClickedLogin)}>
            <img src={user} alt="User" />
              <p className='text-white text-center  w-[150px] overflow-hidden  text-ellipsis font-[400] '>{decode ? namaProfil : 'Masuk/Daftar'}</p>

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
                <button onClick={() => {navigate('/profile'); setIsClickedLogin(!isClickedLogin);}}>
                  <div  className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200'>Profile</div>
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
                <button onClick={() => { navigate('/login'); setIsClickedLogin(!isClickedLogin); }}>
                  <div className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200'>Masuk</div>
                </button>
                <button onClick={() => { navigate('/register'); setIsClickedLogin(!isClickedLogin); }}>
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
                <input onChange={(e) => searchHandler(e)} className="text-black border-none outline-none pl-3 h-full  w-[100%]" placeholder="Search ..." />
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
