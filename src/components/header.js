import React from "react";
import axios from "axios";
import { useState, Fragment, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
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
import { HiChevronDown } from 'react-icons/hi'

function Header({ setMenu, menu }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [selected, setSelected] = useState('')
  const [namaProfil, setNamaProfil] = useState('')
  const [isClickedLogin, setIsClickedLogin] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState('');

  const [ searchParams ] = useSearchParams();

  const { token, name, id } = useSelector((state) => state)

  const decode = token ? jwtDecode(token) : null;

  // console.log(getDataCategories)

  useEffect(() => {
    axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/product-categories')
      .then((response) => {
        setCategories(response.data.data);
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (decode) {
      axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/users/' + id)
        .then((response) => {
          // console.log(response.data.data)
          setNamaProfil(response.data.data.name)
          // console.log(cobaGet)
        })
        .catch((error) => {
          console.log(error)
        })
      } else {
        return 
      }
    }, []);

  useEffect(() => {
    const name = searchParams.get('name') || '';
    setSearch(name);
  }, [])

  const searchHandler = (e) => {
    e.preventDefault();
    console.log('searchbar');
    navigate(`/search?name=${search}`);
  }

  return (
    <>
      <div className="sticky top-0 w-full bg-[#6999B8] px-6  h-[8vh]   flex lg:px-3 items-center z-20 justify-between">
        <div className="">
          <Link to="/">
            <img className="max-w-[100px] lg:max-w-[140px] relative" src={Logo} alt="Homepoint" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-5 lg:rounded-[8px] lg:bg-white w-fit lg:px-3 items-center ">
          <div className="  flex flex-row justify-between items-center w-[100px]">
            <button className=" flex flex-row justify-between items-center w-full " onClick={() => {setIsClicked(!isClicked); setIsClickedLogin(false);}}>
              <p>Kategori</p>
              <HiChevronDown size={'1.2rem'}/>
            </button>
            <Transition
              as={Fragment}
              show={isClicked}
              enter="transition-all duration-300"
              enterFrom="opacity-0 translate-y-[-10%]"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-300"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-[-10%]"
            >
              <div className="absolute border-2 border-slate-400 w-full h-[230px] left-0 rounded-b-[8px] bg-white top-full grid grid-cols-5 gap-x-3 p-2">
                <div className=" flex flex-col items-start">
                  <h3 className="font-bold text-[18px]">Semua Kategori</h3>
                </div>
                {categories.map((category) => (
                  <div key={category.id} className=" flex flex-col items-start gap-y-8">
                    <h3 className="font-bold text-[18px]">{category.name}</h3>
                    <div className="flex flex-col items-start gap-y-3 w-full">
                      {category.productSubcategories.map((sub) => (
                        <div onClick={(e) => { e.stopPropagation(); setIsClicked(false); navigate(`/search?subcategory=${sub.id}`); }}key={sub.id} className="rounded-[8px] p-1 hover:bg-orange-100 hover:text-orange-600 hover:font-medium cursor-pointer w-full text-left">{sub.name}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Transition>
          </div>
          {/* <select className="border-none outline-none h-[30px] text-sm px-3">
            <option value="Kategori">Kategori</option>
          </select> */}
          {/* {e => setQ(e.target.value)} */}
          <div className="w-[2px] h-[25px] bg-black/60 rounded-full"></div>
          <div className="h-[30px]   flex items-center">
            <form className="flex  lg:w-[250px] xl:w-[450px]" onSubmit={searchHandler}>
              <input onChange={(e) => setSearch(e.target.value)} value={search} className="outline-none px-4 h-full border-none w-full" placeholder="Search ..." />
              <button type="submit"><img className="ml-auto" src={Search} alt="search" /></button>
            </form>
          </div>
        </div>
        <div className="hidden w-fit lg:flex gap-x-10  xl:gap-x-14 items-center">
          <button className="flex w-[30px] items-center justify-center" onClick={() => navigate(`/wishlist-${id}`)}>
          <img className=" h-[23px]" src={love} alt="love" />
          </button>

          
            <button onClick={() => navigate('/cart')} className="flex w-[30px] items-center justify-center">
              <img className=" h-[23px]" src={cart} alt="cart" />
            </button>
          


          <div className='relative flex flex-row items-center '>
            <button className="flex flex-row items-center gap-x-3" onClick={() => {setIsClickedLogin(!isClickedLogin); setIsClicked(false);}}>
            <img src={user} alt="User" />
              <p className='text-white overflow-hidden w-[150px] whitespace-nowrap text-ellipsis  font-[400] '>{decode ? namaProfil : 'Masuk/Daftar'}</p>

            </button>

            <Transition
              as={Fragment}
              show={(isClickedLogin && token) ? true : false}
              enter="transition-all duration-300"
              enterFrom="opacity-0 translate-y-[-20%]"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-300"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-[-20%]"
            >
              <div className='bg-white absolute rounded-[8px] border-2 border-slate-400 w-full top-full mt-5 flex flex-col p-2 '>
                <button onClick={() => {navigate('/profile'); setIsClickedLogin(!isClickedLogin);}}>
                  <div  className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200 hover:font-medium'>Profile</div>
                </button>
                <button onClick={() => {navigate('/pesanan'); setIsClickedLogin(!isClickedLogin);}}>
                  <div  className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200 hover:font-medium'>Pesanan</div>
                </button>
                <button onClick={() => {navigate('/checkout'); setIsClickedLogin(!isClickedLogin);}}>
                  <div  className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200 hover:font-medium'>Checkout</div>
                </button>
                <button onClick={() => { dispatch(logoutAction()); setIsClickedLogin(!isClickedLogin); }}>
                  <div className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200 hover:font-medium'>Keluar</div>
                </button>
              </div>
            </Transition>

            <Transition
              as={Fragment}
              show={(isClickedLogin && !token) ? true : false}
              enter="transition-all duration-300"
              enterFrom="opacity-0 translate-y-[-20%]"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-300"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-[-20%]"
            >
              <div className='bg-white absolute rounded-[8px] border-2 border-slate-400 w-full top-full mt-5 flex flex-col p-2 '>
                <button onClick={() => { navigate('/login'); setIsClickedLogin(!isClickedLogin); }}>
                  <div className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200 hover:font-medium'>Masuk</div>
                </button>
                <button onClick={() => { navigate('/register'); setIsClickedLogin(!isClickedLogin); }}>
                  <div className='h-[40px] px-2 flex justify-start items-center rounded-[8px] hover:bg-sky-200 hover:font-medium'>Daftar</div>
                </button>
              </div>
            </Transition>

          </div>

        </div>
        <AiOutlineMenu onClick={() => setMenu(!menu)} className="text-white lg:hidden text-[2rem]" />
      </div>
      {menu ? (
        <div className="sticky top-[60px] z-20 flex gap-5 py-5 text-white flex-col px-6 lg:px-16 w-full bg-[#6999B8]">
            <div className="flex items-center relative">
              <select className="border-none text-black outline-none h-[20px] sm:h-[30px] text-sm px-3">
                <option value="Kategori">Kategori</option>
              </select>
              <div className="h-[20px] sm:h-[30px] w-full flex items-center">
                <form className="flex w-full h-full" onSubmit={searchHandler}>
                  <input onChange={(e) => setSearch(e.target.value)} value={search} className="text-black border-none outline-none pl-3 h-full  w-[100%]" placeholder="Search ..." />
                  <button className="bg-white p-2 ml-auto" type="submit"><img className="w-[10px] lg:w-[15px]" src={Search} alt="search"/></button>
                </form>
              </div>
            </div>
          <Link to={`../wishlist-${id}`}>Wishlist</Link>
          <Link to={`../cart`}>Cart</Link>
          <Link to="/">Notification</Link>
          <Link to={`../profile`}>Profile</Link>
        </div>
      ) : (
        ""
      )}

    </>
  );
}

export default Header;
