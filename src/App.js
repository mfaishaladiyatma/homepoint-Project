import React from "react";

import Profile from "./components/profile";
import Layout from "./common/Layout";
import Hero from "./components/hero";
import Product from "./components/product";

import Logo from "./assets/homepoint.png";
import Search from "./assets/icon/search.png";
import bell from "./assets/icon/bell.png";
import love from "./assets/icon/love.png";
import cart from "./assets/icon/cart.png";
import user from "./assets/icon/user.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { Routes, Route } from "react-router-dom";
import { addressContext } from "./context/context";

// function App() {
//   return (
//     <div>
//   <Routes>
{/* <Route path="/" element={<Layout />}>
  <Route path="/" element={<Hero data={currentPosts} setData={setData} productPerPage={productPerPage} paginate={paginate} currentPage={currentPage} />} />
  <Route path="/product/:id" element={<Product />} />
  <Route path="/profile" element={<Profile />} />
</Route>
</Routes> */}
//     </div>
//   );
// }



function App() {

  //React Context Data ( Fetch Data using Axios )
  const { dataProduct, setDataProduct } = React.useContext(addressContext)

  // Put dataProduct to React State
  const [data, setData] = React.useState(dataProduct)
  React.useEffect(() => {
      setData(dataProduct)
  }, [dataProduct])

  //Menu Handler for Mobile & Tablet
  const [menu, setMenu] = React.useState(false)

  // Search Function (Navigation)
  const searchHandler = (e) => {
      const lowerInput = e.target.value.toLowerCase()
      setData(dataProduct.filter(x => x.name.toLowerCase().includes(lowerInput)))
  }

  //Pagination 
  const [currentPage, setCurrentPage] = React.useState(1)
  const [productPerPage, setProductPerPage] = React.useState(16)

  // *** Pagination Pattern 
  const indexOfLastPost = currentPage * productPerPage
  const indexOfFirstPost = indexOfLastPost - productPerPage
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

  //Pagination Function
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
      <div>
          <div className='w-full bg-[#6999B8] px-6 md:px-16 h-[8vh] justify-between px-4 flex md:px-3 items-center'>
              <div>
                  <Link to="/">
                      <img className="max-w-[100px] md:max-w-[140px]" src={Logo} alt="Homepoint" />
                  </Link>
              </div>
              <div className='hidden lg:flex items-center relative'>
                  <select className='border-none outline-none h-[30px] text-sm px-3'>
                      <option value="Kategori">Kategori</option>
                  </select>
                  {/* {e => setQ(e.target.value)} */}
                  <div className='h-[30px] flex items-center'>
                      <input onChange={e => searchHandler(e)} className="border-none outline-none px-4 h-full border-none lg:w-[450px]" placeholder='Search ...' />
                      <img className="absolute right-[20px]" src={Search} alt="search" />
                  </div>
              </div>
              <div className='hidden xl:flex ml-24'>
                  <img className="px-5 h-[23px]" src={love} alt="love" />
                  <img className="px-5 h-[23px]" src={cart} alt="cart" />
                  <img className="px-5 h-[23px]" src={bell} alt="bell" />
                  <Link to="/profile" className="px-5 h-[23px] flex items-center gap-[20px]">
                      <img src={user} alt="user" />
                      <h3 className='text-white'>Masuk/Daftar</h3>
                  </Link>
              </div>
              <AiOutlineMenu onClick={() => setMenu(!menu)} className='text-white xl:hidden text-[2rem]' />
          </div>
          {menu ?
              <div className="flex gap-5 py-5 text-white flex-col px-6 md:px-16 w-full bg-[#6999B8]">
                  <Link to="/">
                      <div className='flex items-center relative'>
                          <select className='border-none text-black outline-none h-[20px] sm:h-[30px] text-sm px-3'>
                              <option value="Kategori">Kategori</option>
                          </select>
                          <div className='h-[20px] sm:h-[30px] bg-red-500 w-full flex items-center'>
                              <input onChange={e => searchHandler(e)} className="text-black border-none outline-none pl-3 h-full border-none w-[100%]" placeholder='Search ...' />
                              <img className="absolute w-[10px] md:w-[15px] right-[10px] sm:right-[20px]" src={Search} alt="search" />
                          </div>
                      </div>
                  </Link>
                  <Link to="/">Wishlist</Link>
                  <Link to="/">Cart</Link>
                  <Link to="/">Notification</Link>
                  <Link to="/profile">Account</Link>
              </div>
              :
              ""
          }
          <Routes>
              <Route path='/' element={<Hero data={currentPosts} setData={setData} productPerPage={productPerPage} paginate={paginate} currentPage={currentPage} />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path="/profile" element={<Profile />} />
          </Routes>
      </div >
  )
}


export default App;
