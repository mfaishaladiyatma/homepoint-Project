import React from "react";
import Logo from "../assets/homepoint.png";
import Search from "../assets/icon/search.png";
import bell from "../assets/icon/bell.png";
import love from "../assets/icon/love.png";
import cart from "../assets/icon/cart.png";
import user from "../assets/icon/user.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function Header({ searchHandler, setMenu, menu }) {
  return (
    <>
      <div className="w-full bg-[#6999B8] px-6 md:px-16 h-[8vh] justify-between px-4 flex md:px-3 items-center">
        <div className="xl:w-[400px]">
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
            <input onChange={(e) => searchHandler(e)} className="border-none outline-none px-4 h-full border-none lg:w-[450px]" placeholder="Search ..." />
            <img className="absolute right-[20px]" src={Search} alt="search" />
          </div>
        </div>
        <div className="hidden w-[400px] xl:flex ml-24">
          <img className="px-5 h-[23px]" src={love} alt="love" />
          <Link to="/search">
            <img className="px-5 h-[23px]" src={cart} alt="cart" />
          </Link>
          <img className="px-5 h-[23px]" src={bell} alt="bell" />
          <Link to="/login" className="px-5 h-[23px] flex items-center gap-[20px]">
            <img src={user} alt="user" />
            <h3 className="text-white">Masuk/Daftar</h3>
          </Link>
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
