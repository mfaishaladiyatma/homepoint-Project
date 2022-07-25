import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';


import { HiOutlineChevronRight, HiChevronDown, HiChevronUp, HiOutlineX } from "react-icons/hi";
import gambarWishlist from '../images/gambarWishlist.svg'
import kurirReguler from '../images/kurirReguler.svg'
import kurirHomepoint from '../images/kurirHomepoint.svg'
import ambilDiTempat from '../images/ambilDiTempat.svg'

export default function ModalCheckout({ setModalCheckout, checked, cartToCheckout, totalAsuransi, totalSemua, idAkun, totalHargaBarang }) {

  const [loading, setLoading] = useState(true);
  const [selectedToko, setSelectedToko] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [bank, setBank] = useState([]);
  const [shippingService, setShippingService] = useState([]);
  const [selectedShippingService, setSelectedShippingService] = useState('');

  const totalSemuaFinal = shippingService === 'ce200561-20bd-4a6c-8fbe-9f015074e5b8' ? totalSemua + 25000 : totalSemua;

  useEffect(() => {

    const fetchData = async () => {
      const shippingService = await axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/shippingservice')
        .then((response) => {
          setShippingService(response.data);
          // console.log(response.data)
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error)
          //wip: display error here
        });

      const bankService = await axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/bank`)
        .then((response) => {
          setBank(response.data);
          // console.log(response.data)
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error)
          //wip: display error here
        })

    }

    fetchData();

  }, []);

  const checkoutItem = [cartToCheckout.map((item) => (
    {
      "discount": item.products.discount,
      "id": item.id,
      "isInsurance": checked.includes(item.id) ? true : false,
      "price": item.products.price,
      "productId": item.products.id,
      "quantity": item.quantity,
    }
  ))]

  // console.log(checkoutItem)

  const handleCheckout = () => {
    axios({
      method: "delete",
      url: `https://homepoint-server-staging.herokuapp.com/api/v1/cart/items`,
      data: {
        "addressesId": "string",
        "bankId": selectedBank,
        "shippingServicesId": selectedShippingService,
        "storeLocation": selectedShippingService === 'ce200561-20bd-4a6c-8fbe-9f015074e5b8' ? selectedToko : '',
        "totalPrice": totalSemua,
        "transactionItems": [
          {
            "discount": 0,
            "id": "string",
            "isInsurance": true,
            "price": 0,
            "productId": "string",
            "quantity": 0
          }
        ],
        "userId": idAkun
      },
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }).then((response) => {
    }).catch((error) => {
      //handle error
      console.log(error)
    })
  }

  return (
    <section className='fixed bg-slate-400/70 top-0 left-0 right-0 bottom-0 z-30'>

      <div className='bg-white fixed rounded-[8px] p-5 flex flex-col gap-y-5 top-[50%]  translate-y-[-50%] translate-x-[-50%] left-[50%] w-[500px] h-[600px] overflow-y-scroll scrollbar'>

        <div className='w-full flex justify-end'>
          <button onClick={() => setModalCheckout(false)}>
            <HiOutlineX size={'2rem'} />
          </button>
        </div>

        <div className='w-full flex justify-center'>
          <h3 className='font-bold text-[24px]'>Pembayaran</h3>
        </div>
        <div className='h-[2px] w-full bg-blue-300'></div>

        <div className='flex flex-col gap-y-5'>
          <h4 className='font-medium text-[18px]'>Detail Pesananmu</h4>

          {cartToCheckout.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <div className='flex flex-row justify-between'>
                  <p>{item.quantity}x</p>
                  <p className='max-w-[300px]'>{item.products.name}</p>
                  {item.products.discount === 0 ?
                    <p className='font-semibold'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(item.products.price * item.quantity)}</p>
                    :
                    <p className='font-semibold'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format((item.products.price - (item.products.price * (item.products.discount / 100))) * item.quantity)}</p>
                  }
                </div>
                <div className='h-[2px] bg-slate-400/30 w-full'></div>
              </React.Fragment>
            )
          })}

        </div>

        {/* <div className='flex flex-row justify-between'>
          <p className=''>Asuransi</p>
          <p className='font-semibold text-[#316093]'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(totalAsuransi)}</p>
        </div> */}

        <div className='flex flex-row justify-between'>
          <p className=''>Subtotal</p>
          <p className='font-semibold text-[#316093]'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(totalHargaBarang)}</p>
        </div>

        <div className='flex flex-col gap-y-5'>
          <h4 className='font-medium text-[18px]'>Pilih Layanan Pengiriman</h4>

          <div className='flex flex-row justify-between'>

            {shippingService.map((item) => {

              return (
                <div key={item.id} className='flex flex-col items-center'>
                  <div className='w-full flex justify-start'>
                    <input
                      type="radio"
                      name='pengiriman'
                      value={item.id}
                      onChange={(e) => setSelectedShippingService(e.target.value)}
                    />
                  </div>
                  <img src={item.icon} alt="" />
                  {item.courierType === 'Regular' || item.courierType === 'Homepoint' ?
                    <p className=' text-sm text-slate-500'>Kurir {item.courierType}</p>
                    :
                    <p className=' text-sm text-slate-500'>{item.courierType}</p>
                  }
                  {item.shippingCost === 0 ?
                    <p className='font-semibold italic text-[#316093]'>Gratis</p>
                    :
                    <p className='font-semibold italic text-[#316093]'>Rp. {item.shippingCost}</p>
                  }

                </div>
              )
            })}


          </div>

        </div>
        {selectedShippingService === 'ce200561-20bd-4a6c-8fbe-9f015074e5b8' ?
          <select onChange={(e) => setSelectedToko(e.target.value)} className={`${selectedToko !== '' ? 'bg-white border-[1px] border-black' : 'bg-slate-300'}  rounded-[8px] w-full flex justify-start items-center p-3 cursor-pointer `}>
            <option className='bg-white' value="">Pilih Lokasi Toko</option>
            <option className='bg-white' value="malang">Homepoint Cabang Malang</option>
            <option className='bg-white' value="surabaya">Homepoint Cabang Surabaya</option>
            <option className='bg-white' value="jakarta">Homepoint Cabang Jakarta</option>
          </select>
          :
          <select onChange={(e) => setSelectedToko(e.target.value)} disabled className={`${selectedToko !== '' ? 'bg-white border-[1px] border-black' : 'bg-slate-300'}  rounded-[8px] w-full flex justify-start items-center p-3 cursor-not-allowed `}>
            <option className='bg-white' value="">Pilih Lokasi Toko</option>
            <option className='bg-white' value="malang">Homepoint Cabang Malang</option>
            <option className='bg-white' value="surabaya">Homepoint Cabang Surabaya</option>
            <option className='bg-white' value="jakarta">Homepoint Cabang Jakarta</option>
          </select>
        }




        <div className='flex flex-col gap-y-3'>
          <h4 className='font-semibold mb-5'>Ringkasan Pembayaran</h4>
          <div className='flex flex-row justify-between'>
            <p>Total Belanja ({cartToCheckout.length} produk)</p>
            <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(totalHargaBarang)}</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p>Total Ongkir</p>
            <p>{selectedShippingService === '9e174a08-a523-49fb-86c0-72c4cf32a425' ?
              new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(25000)
              :
              new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(0)
            }</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p>Biaya asuransi ({checked.length} produk)</p>
            <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(totalAsuransi)}</p>
          </div>
        </div>

        <div className='h-[2px] w-full bg-slate-300'></div>

        <div className='flex flex-row justify-between'>
          <p className='font-semibold'>Total</p>
          <p className='font-semibold'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(totalSemuaFinal)}</p>
        </div>

        <div className='flex flex-col'>
          <h4>Metode Pembayaran</h4>

          <select className='flex flex-row justify-between items-center border-2 border-slate-400 rounded-[8px] p-3 cursor-pointer mt-3' onChange={(e) => setSelectedBank(e.target.value)}>
            <option value="">Pilih Metode Pembayaran</option>
            {bank.map((item) => {

              return (
                <option key={item.id} value={item.id}>{item.bankName}</option>
              )
            })}

          </select>

        </div>
        {bank.find((item) => item.id === selectedBank) ?
          <div className='flex flex-col gap-y-2'>
            <h3 className='font-medium'>Informasi rekening pembayaran</h3>
            <div className='flex items-center gap-x-8'>
              <img className='w-[100px]' src={bank.find((item) => item.id === selectedBank).bankLogo} alt="" />
              <h3 className='text-[20px] font-semibold'>{bank.find((item) => item.id === selectedBank).bankName}</h3>
            </div>
            <div className='flex items-center gap-x-3'>
              <h3 className='text-slate-400'>Nomor Rekening</h3>
              <h3>{bank.find((item) => item.id === selectedBank).accountNumber}</h3>
            </div>
            <div className='flex items-center gap-x-5'>
              <h3 className='text-slate-400'>Nama Penerima</h3>
              <h3>{bank.find((item) => item.id === selectedBank).holderName}</h3>
            </div>
          </div>
          :
        null
        }



        <button>
          <div className='rounded-[8px] font-bold text-[#505050] bg-[#FBC646] h-10 flex justify-center items-center'>
            Bayar
          </div>
        </button>

      </div>

    </section>
  )
}
