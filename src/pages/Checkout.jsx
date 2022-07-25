import React from 'react'
import { useEffect, useState, Fragment } from 'react';
import { Transition } from '@headlessui/react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import jwtDecode from 'jwt-decode'
import axios from "axios";

import ModalCheckout from '../components/ModalCheckout';

import { HiOutlineChevronRight, HiChevronDown, HiChevronUp, HiOutlineX } from "react-icons/hi";
import gambarWishlist from '../images/gambarWishlist.svg'
import kurirReguler from '../images/kurirReguler.svg'
import kurirHomepoint from '../images/kurirHomepoint.svg'
import ambilDiTempat from '../images/ambilDiTempat.svg'

export default function Checkout() {

  const { token, name } = useSelector((state) => state)
  const idAkun = useSelector((state) => state.id)
  const cartToCheckout = useSelector((state) => state.cart)

  const decode = token ? jwtDecode(token) : null

  const [subtotalClicked, setSubtotalClicked] = useState(true)
  const [modalCheckout, setModalCheckout] = useState(false)
  const [userProfile, setUserProfile] = useState([])
  const [totalAsuransi, setTotalAsuransi] = useState(0)
  

  useEffect(() => {
    if (decode) {
      axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/users/' + idAkun)
        .then((response) => {
          // console.log(response.data.data)
          setUserProfile(response.data.data)
          // console.log(cobaGet)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      return
    }
  }, [])


  const calcTotal = () => {

    const total = cartToCheckout.map(item => item.products.discount == 0 ?
      (item.products.price * item.quantity)
      :
      ((item.products.price - (item.products.price * (item.products.discount / 100))) * item.quantity)).reduce((a, b) => {
        return a + parseInt(b, 10)
      }, 0)
    return total
  }

  const [checked, setChecked] = useState([])

  const handleAsuransi = (e, idCartItem) => {
    if (e) {
      setChecked([...checked, idCartItem])

      if(cartToCheckout.find(item => item.id === idCartItem).products.discount === 0){
      setTotalAsuransi(totalAsuransi + (cartToCheckout.find(item => item.id === idCartItem).products.price * (1/100)))
      }else{
        setTotalAsuransi(totalAsuransi + ((cartToCheckout.find(item => item.id === idCartItem).products.price -(cartToCheckout.find(item => item.id === idCartItem).products.price * (cartToCheckout.find(item => item.id === idCartItem).products.discount / 100))) * (1/100)))
      }
    } else {
      setChecked(checked.filter(item => item !== idCartItem))
      
      if(cartToCheckout.find(item => item.id === idCartItem).products.discount === 0){
      setTotalAsuransi(totalAsuransi - (cartToCheckout.find(item => item.id === idCartItem).products.price * (1/100)))
      }else{
        setTotalAsuransi(totalAsuransi - (((cartToCheckout.find(item => item.id === idCartItem).products.price) -(cartToCheckout.find(item => item.id === idCartItem).products.price * (cartToCheckout.find(item => item.id === idCartItem).products.discount / 100))) * (1/100)))
      }
    }
  }

  const totalSemua = calcTotal() + totalAsuransi

  return (
    <div className='flex flex-col gap-y-10 px-16 py-3 font-Inter'>
      <h1 className='font-bold text-[30px]'>Checkout</h1>
      <div className='flex flex-row  gap-x-5'>

        <section className=' w-[70%] flex flex-col gap-y-5'>
          <h2 className='font-medium text-[24px]'>Kirim ke</h2>

          <div className='flex flex-col gap-y-2'>

            <div className='flex flex-row justify-between'>
              <div className='flex flex-row items-center gap-x-3'>
                <p className='font-semibold text-[20px]'>{name}</p>
                <div className='flex justify-center items-center rounded-full bg-[#0284D6] text-white px-3'>Utama</div>
              </div>
              {/* <div className='flex p-1 border-2 border-blue-300 rounded-[8px]'>
                <p className='text-[#505050]'>Pilih Alamat Lain</p>
              </div> */}
            </div>

            <p className='font-medium'>08211313131</p>

            <p className='text-[#505050]'>JL. Buah batu permai no 100 Blok A5 deket masjid agung, Desa Batu, Kec. Batu, Kota Bandung. Batu, Kota Bandung, 34131</p>

          </div>

          <div className='h-[10px] w-full bg-slate-400/30 rounded-full'></div>

          <div className='flex flex-col gap-y-8 mt-5 mb-10'>

            <h2 className='font-medium text-[24px]'>Daftar Pesananmu</h2>
            {cartToCheckout.map((item) => {

              return (
                <React.Fragment key={item.id}>
                  {/* <div className='h-[2px] w-full bg-slate-400/30'></div> */}
                  <div className='flex flex-row gap-x-5  '>
                    <img className='w-[200px] rounded-[8px] border-[1px] border-slate-400' src={item.products.productImages[0].image} alt="" />
                    <div className='flex flex-col max-h-[50%] justify-between'>
                      <p className='font-medium text-[16px]'>{item.products.name}</p>
                      {item.products.discount === 0
                        ?
                        <p className='font-semibold text-[20px]'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(item.products.price)}</p>
                        :
                        <p className='font-semibold text-[20px]'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(item.products.price - (item.products.price * (item.products.discount / 100)))}</p>
                      }
                    </div>
                  </div>
                  {item.products.productSubcategories.name === 'Perangkat Elektronik' || item.products.productSubcategories.name === 'Elektronik Kebersihan' || item.products.productSubcategories.name === 'Elektronik Dapur'
                    ?
                    <div className='flex flex-row gap-x-3'>
                      <input onChange={(e) => handleAsuransi(e.target.checked, item.id)} value={item.products.name} className='accent-[#FBC646] scale-[1.5]' type="checkbox" />
                      <p>Tambahkan Asuransi</p>
                      <p className='font-medium text-[#316093] '>Pelajari</p>
                    </div>
                    :
                    null
                  }
                  <div className='h-[2px] w-full bg-slate-400/30'></div>

                  <div className='flex flex-row py-2'>
                    <div className='w-[90%] '>
                      <div className='flex flex-row justify-between mb-5'>
                        <p className='font-semibold'>Subtotal</p>
                        {item.products.discount === 0 && checked.includes(item.id) ?
                          <p className='font-semibold'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format((item.products.price * item.quantity) + (item.products.price * (1 / 100)))}</p>
                          :
                          item.products.discount === 0 ?
                            <p className='font-semibold'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format((item.products.price * item.quantity))}</p>
                            :
                            item.products.discount !== 0 && checked.includes(item.id) ?
                              <p className='font-semibold'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(((item.products.price - (item.products.price * (item.products.discount / 100))) * item.quantity) + ((item.products.price - (item.products.price * (item.products.discount / 100))) * (1 / 100)))}</p>
                              :
                              item.products.discount !== 0 ?
                                <p className='font-semibold'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format((item.products.price - (item.products.price * (item.products.discount / 100))) * item.quantity)}</p>
                                :
                                null
                        }
                      </div>
                      <Transition
                        as={Fragment}
                        show={subtotalClicked}
                        enter="transition-all duration-[350ms]"
                        enterFrom="opacity-0 translate-y-[-25%]"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition-all duration-[350ms]"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-[-25%]"
                      >
                        <div className='w-full  flex flex-col gap-y-2'>
                          <div className='flex flex-row justify-between'>
                            <p>Harga 1 barang ({item.quantity})</p>
                            {item.products.discount === 0 ?
                              <p className='font-semibold'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(item.products.price * item.quantity)}</p>
                              :
                              <p className='font-semibold'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format((item.products.price - (item.products.price * (item.products.discount / 100))) * item.quantity)}</p>
                            }
                          </div>
                          {checked.includes(item.id)
                            ?
                            <div className='flex flex-row justify-between'>
                              <p>Asuransi</p>
                              {item.products.discount === 0 ?
                                <p className='font-semibold'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(item.products.price * (1 / 100))}</p>
                                :
                                <p className='font-semibold'>{(new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(((item.products.price - (item.products.price * (item.products.discount / 100))) * (1 / 100))))}</p>
                              }
                            </div>
                            :
                            null
                          }

                        </div>
                      </Transition>
                    </div>

                    <div className='w-[10%]  flex justify-center items-start'>
                      <button onClick={() => setSubtotalClicked(!subtotalClicked)}>
                        {subtotalClicked ?
                          <HiChevronUp size={'2rem'} />
                          :
                          <HiChevronDown size={'2rem'} />
                        }
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}

          </div>

        </section>

        <section className='flex flex-col h-fit w-[30%] px-3 py-5 gap-y-8 shadow-shadow-custom-2 rounded-[8px]'>
          <div className='flex flex-col gap-y-6'>
            <h3 className='font-bold text-[22px]'>Ringkasan belanja</h3>
            <div className='flex flex-col gap-y-2'>
              {/* {cartToCheckout.map((item, index) => {
                <React.Fragment key={index}>
                  <div className='flex flex-row justify-between'>
                    <p>Total harga ({cartToCheckout.length} produk)</p>
                    <p>{calcTotal()}</p>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <p>Biaya asuransi (1 produk)</p>
                    <p>Rp. 100.000</p>
                  </div>
                </React.Fragment>
              })} */}
              <div className='flex flex-row justify-between'>
                <p>Total harga ({cartToCheckout.length} produk)</p>
                <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(calcTotal())}</p>
              </div>
              <div className='flex flex-row justify-between'>
                <p>Biaya asuransi ({checked.length} produk)</p>
                {/* <p>{calcTotalAsuransi()}</p> */}
                <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(totalAsuransi)}</p>
              </div>
            </div>
          </div>
          <div className='h-[2px] w-full bg-blue-300'></div>
          <div className='flex flex-row justify-between'>
            <p className='font-bold text-[22px]'>Total Harga</p>
            <p className='font-bold text-[22px]'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(totalSemua)}</p>
          </div>

          <button onClick={() => setModalCheckout(!modalCheckout)}>
            <div className='rounded-[8px] font-bold text-[#505050] bg-[#FBC646] h-10 flex justify-center items-center'>
              Lanjutkan
            </div>
          </button>
        </section>

      </div>

      {modalCheckout ? <ModalCheckout idAkun={idAkun} totalSemua={totalSemua} totalAsuransi={totalAsuransi} checked={checked} cartToCheckout={cartToCheckout} setModalCheckout={setModalCheckout} totalHargaBarang={calcTotal()} /> : null}

    </div>
  )
}
