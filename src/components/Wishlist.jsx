import React from 'react'
import gambarWishlist from '../images/gambarWishlist.svg'
import { AiFillStar } from "react-icons/ai";
import { BsHeart, BsFillTrashFill } from "react-icons/bs";
import trashIcon from '../images/trashIcon.svg'


export default function Wishlist() {
  return (
    <div className='font-Inter p-10 flex flex-col'>
      <div className=' flex flex-row justify-between items-center'>

        <div className='flex flex-row  p-3 w-[700px] justify-between'>
          <h3 className='text-[32px] font-bold'>Wishlist</h3>
          <div className='border-2 rounded-[8px] border-[#316093] w-[450px] flex items-center px-3'>
            <input placeholder='Search Wishlist' type="text" />
          </div>
        </div>
        <div>
          <p className='text-[#316093]'>
            <button className='font-medium'>
              Atur Wishlist
            </button>
          </p>
        </div>

      </div>
      <div className=' mt-10'>
        <div className='grid grid-cols-6 h-fit gap-3 p-3'>
          <div className='border-2 border-slate-300 flex flex-col items-center rounded-[8px] p-2 gap-y-5 h-fit'>
            <img src={gambarWishlist} alt="" />

            <h3 className='w-full text-left font-bold text-[18px]'>Gelas Kaca Bening Baru</h3>

            <div className='flex flex-col w-full gap-y-2'>
              <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>Rp 23.000</h4>
              <h3 className='font-bold text-[18px] text-left'>Rp 13.000</h3>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-yellow-500'>
                  <AiFillStar />
                </div>
                <p>4.8</p>
                <p> | </p>
                <p>Terjual 100</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <button>
                  <img className='w-[25px]' src={trashIcon} alt="" />
                </button>
                <button className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
                  <p>+</p>
                  <p>Keranjang</p>
                </button>
              </div>
            </div>

          </div>
          <div className='border-2 border-slate-300 flex flex-col items-center rounded-[8px] p-2 gap-y-5 h-fit'>
            <img src={gambarWishlist} alt="" />

            <h3 className='w-full text-left font-bold text-[18px]'>Gelas Kaca Bening Baru</h3>

            <div className='flex flex-col w-full gap-y-2'>
              <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>Rp 23.000</h4>
              <h3 className='font-bold text-[18px] text-left'>Rp 13.000</h3>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-yellow-500'>
                  <AiFillStar />
                </div>
                <p>4.8</p>
                <p> | </p>
                <p>Terjual 100</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <button>
                  <img className='w-[25px]' src={trashIcon} alt="" />
                </button>
                <button className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
                  <p>+</p>
                  <p>Keranjang</p>
                </button>
              </div>
            </div>

          </div>
          <div className='border-2 border-slate-300 flex flex-col items-center rounded-[8px] p-2 gap-y-5 h-fit'>
            <img src={gambarWishlist} alt="" />

            <h3 className='w-full text-left font-bold text-[18px]'>Gelas Kaca Bening Baru</h3>

            <div className='flex flex-col w-full gap-y-2'>
              <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>Rp 23.000</h4>
              <h3 className='font-bold text-[18px] text-left'>Rp 13.000</h3>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-yellow-500'>
                  <AiFillStar />
                </div>
                <p>4.8</p>
                <p> | </p>
                <p>Terjual 100</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <button>
                  <img className='w-[25px]' src={trashIcon} alt="" />
                </button>
                <button className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
                  <p>+</p>
                  <p>Keranjang</p>
                </button>
              </div>
            </div>

          </div>
          <div className='border-2 border-slate-300 flex flex-col items-center rounded-[8px] p-2 gap-y-5 h-fit'>
            <img src={gambarWishlist} alt="" />

            <h3 className='w-full text-left font-bold text-[18px]'>Gelas Kaca Bening Baru</h3>

            <div className='flex flex-col w-full gap-y-2'>
              <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>Rp 23.000</h4>
              <h3 className='font-bold text-[18px] text-left'>Rp 13.000</h3>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-yellow-500'>
                  <AiFillStar />
                </div>
                <p>4.8</p>
                <p> | </p>
                <p>Terjual 100</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <button>
                  <img className='w-[25px]' src={trashIcon} alt="" />
                </button>
                <button className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
                  <p>+</p>
                  <p>Keranjang</p>
                </button>
              </div>
            </div>

          </div>
          <div className='border-2 border-slate-300 flex flex-col items-center rounded-[8px] p-2 gap-y-5 h-fit'>
            <img src={gambarWishlist} alt="" />

            <h3 className='w-full text-left font-bold text-[18px]'>Gelas Kaca Bening Baru</h3>

            <div className='flex flex-col w-full gap-y-2'>
              <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>Rp 23.000</h4>
              <h3 className='font-bold text-[18px] text-left'>Rp 13.000</h3>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-yellow-500'>
                  <AiFillStar />
                </div>
                <p>4.8</p>
                <p> | </p>
                <p>Terjual 100</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <button>
                  <img className='w-[25px]' src={trashIcon} alt="" />
                </button>
                <button className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
                  <p>+</p>
                  <p>Keranjang</p>
                </button>
              </div>
            </div>

          </div>
          <div className='border-2 border-slate-300 flex flex-col items-center rounded-[8px] p-2 gap-y-5 h-fit'>
            <img src={gambarWishlist} alt="" />

            <h3 className='w-full text-left font-bold text-[18px]'>Gelas Kaca Bening Baru</h3>

            <div className='flex flex-col w-full gap-y-2'>
              <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>Rp 23.000</h4>
              <h3 className='font-bold text-[18px] text-left'>Rp 13.000</h3>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-yellow-500'>
                  <AiFillStar />
                </div>
                <p>4.8</p>
                <p> | </p>
                <p>Terjual 100</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <button>
                  <img className='w-[25px]' src={trashIcon} alt="" />
                </button>
                <button className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
                  <p>+</p>
                  <p>Keranjang</p>
                </button>
              </div>
            </div>

          </div>
          <div className='border-2 border-slate-300 flex flex-col items-center rounded-[8px] p-2 gap-y-5 h-fit'>
            <img src={gambarWishlist} alt="" />

            <h3 className='w-full text-left font-bold text-[18px]'>Gelas Kaca Bening Baru</h3>

            <div className='flex flex-col w-full gap-y-2'>
              <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>Rp 23.000</h4>
              <h3 className='font-bold text-[18px] text-left'>Rp 13.000</h3>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-yellow-500'>
                  <AiFillStar />
                </div>
                <p>4.8</p>
                <p> | </p>
                <p>Terjual 100</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <button>
                  <img className='w-[25px]' src={trashIcon} alt="" />
                </button>
                <button className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
                  <p>+</p>
                  <p>Keranjang</p>
                </button>
              </div>
            </div>

          </div>
          <div className='border-2 border-slate-300 flex flex-col items-center rounded-[8px] p-2 gap-y-5 h-fit'>
            <img src={gambarWishlist} alt="" />

            <h3 className='w-full text-left font-bold text-[18px]'>Gelas Kaca Bening Baru</h3>

            <div className='flex flex-col w-full gap-y-2'>
              <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>Rp 23.000</h4>
              <h3 className='font-bold text-[18px] text-left'>Rp 13.000</h3>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-yellow-500'>
                  <AiFillStar />
                </div>
                <p>4.8</p>
                <p> | </p>
                <p>Terjual 100</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <button>
                  <img className='w-[25px]' src={trashIcon} alt="" />
                </button>
                <button className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
                  <p>+</p>
                  <p>Keranjang</p>
                </button>
              </div>
            </div>

          </div>
          <div className='border-2 border-slate-300 flex flex-col items-center rounded-[8px] p-2 gap-y-5 h-fit'>
            <img src={gambarWishlist} alt="" />

            <h3 className='w-full text-left font-bold text-[18px]'>Gelas Kaca Bening Baru</h3>

            <div className='flex flex-col w-full gap-y-2'>
              <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>Rp 23.000</h4>
              <h3 className='font-bold text-[18px] text-left'>Rp 13.000</h3>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-yellow-500'>
                  <AiFillStar />
                </div>
                <p>4.8</p>
                <p> | </p>
                <p>Terjual 100</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <button>
                  <img className='w-[25px]' src={trashIcon} alt="" />
                </button>
                <button className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
                  <p>+</p>
                  <p>Keranjang</p>
                </button>
              </div>
            </div>

          </div>
          <div className='border-2 border-slate-300 flex flex-col items-center rounded-[8px] p-2 gap-y-5 h-fit'>
            <img src={gambarWishlist} alt="" />

            <h3 className='w-full text-left font-bold text-[18px]'>Gelas Kaca Bening Baru</h3>

            <div className='flex flex-col w-full gap-y-2'>
              <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>Rp 23.000</h4>
              <h3 className='font-bold text-[18px] text-left'>Rp 13.000</h3>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-yellow-500'>
                  <AiFillStar />
                </div>
                <p>4.8</p>
                <p> | </p>
                <p>Terjual 100</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <button>
                  <img className='w-[25px]' src={trashIcon} alt="" />
                </button>
                <button className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
                  <p>+</p>
                  <p>Keranjang</p>
                </button>
              </div>
            </div>

          </div>
          <div className='border-2 border-slate-300 flex flex-col items-center rounded-[8px] p-2 gap-y-5 h-fit'>
            <img src={gambarWishlist} alt="" />

            <h3 className='w-full text-left font-bold text-[18px]'>Gelas Kaca Bening Baru</h3>

            <div className='flex flex-col w-full gap-y-2'>
              <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>Rp 23.000</h4>
              <h3 className='font-bold text-[18px] text-left'>Rp 13.000</h3>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-yellow-500'>
                  <AiFillStar />
                </div>
                <p>4.8</p>
                <p> | </p>
                <p>Terjual 100</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <button>
                  <img className='w-[25px]' src={trashIcon} alt="" />
                </button>
                <button className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
                  <p>+</p>
                  <p>Keranjang</p>
                </button>
              </div>
            </div>

          </div>
          <div className='border-2 border-slate-300 flex flex-col items-center rounded-[8px] p-2 gap-y-5 h-fit'>
            <img src={gambarWishlist} alt="" />

            <h3 className='w-full text-left font-bold text-[18px]'>Gelas Kaca Bening Baru</h3>

            <div className='flex flex-col w-full gap-y-2'>
              <h4 className='text-[14px] text-gray-500 line-through decoration-red-600 decoration-2 text-left'>Rp 23.000</h4>
              <h3 className='font-bold text-[18px] text-left'>Rp 13.000</h3>
              <div className='flex flex-row items-center gap-x-2'>
                <div className='text-yellow-500'>
                  <AiFillStar />
                </div>
                <p>4.8</p>
                <p> | </p>
                <p>Terjual 100</p>
              </div>
              <div className='flex flex-row gap-x-3'>
                <button>
                  <img className='w-[25px]' src={trashIcon} alt="" />
                </button>
                <button className='bg-[#FBC646] p-3 flex flex-row justify-between w-[130px] font-semibold rounded-[8px] text-[#252525]'>
                  <p>+</p>
                  <p>Keranjang</p>
                </button>
              </div>
            </div>

          </div>
          

        </div>
      </div>
    </div>
  )
}
