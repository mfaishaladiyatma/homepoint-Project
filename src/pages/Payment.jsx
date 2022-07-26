import React from 'react'
import Logo from '../assets/homepointBlue.svg'
import { useState, useEffect } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import axios from "axios";
import { useSelector } from 'react-redux/es/hooks/useSelector'

function Payment() {
  const idAkun = useSelector((state) => state.id)

  const navigate = useNavigate()

  const [img, setImg] = useState()
  const [file, setFile] = useState()
  const [transaction, setTransaction] = useState([])
  const [loading, setLoading] = useState(true)

  const onImageChange = (e) => {
    const [file] = e.target.files
    const image = e.target.files[0]
    setImg(URL.createObjectURL(file))
    setFile(image)
  }

  const FormData = require('form-data');
  // Create a new form instance
  const imageFile = new FormData();
  imageFile.append("proofPayment", file.name, )




  useEffect(() => {
    axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/transaction/user/' + idAkun)
      .then((response) => {
        // console.log(response.data.data)
        setTransaction(response.data.data)
        setLoading(false)
        // console.log(cobaGet)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })

  }, [])

  const handleImageUpload = () => {
    axios({
      method: "put",
      url: `https://homepoint-server-staging.herokuapp.com/api/v1/transaction/payment-confirmation/${transaction[0].id}`,
      data: {
        paymentProof: imageFile
      },
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      navigate('/')
    }).catch((error) => {
      //handle error
      console.log(error)
    })
  }


  return (
    <div className='flex flex-col px-20 py-10 fontInter'>
      {loading ? <div className='flex items-center justify-center h-full'> loading.... </div>
        :
        <>
          <img className='max-w-[250px]' src={Logo} alt="" />
          <div className='w-full flex items-center justify-center'>
            <div className='flex flex-col border-slate-400 border-[1px] rounded-[8px] p-5 w-[600px]'>
              <div className='flex justify-between items-center'>
                <h3 className='text-[32px] font-bold'>Konfirmasi Pembayaran</h3>
                <p>Batas pembayaran</p>
              </div>
              <p className='font-semibold mt-5'>Informasi rekening pembayaran</p>

              <div className='flex mt-3 w-[300px] justify-between'>
                <p>Nama bank</p>
                <p className='font-medium'>{transaction[0].bank.bankName}</p>
              </div>

              <div className='flex w-[300px] justify-between'>
                <p>Nomor Rekening</p>
                <p className='font-medium'>{transaction[0].bank.accountNumber}</p>
              </div>

              <div className='flex w-[300px] justify-between'>
                <p>Nama Penerima</p>
                <p className='font-medium'>{transaction[0].bank.holderName}</p>
              </div>

              <div className='flex w-[300px] justify-between'>
                <p>Total pembayaran</p>
                <p className='font-medium'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumSignificantDigits: 12 }).format(transaction[0].totalPrice) }</p>
              </div>

              <h3 className='font-bold text-[18px] py-8'>Silahkan kirim bukti pembayaran</h3>

              <div className='flex flex-col border-2 border-slate-400 items-center rounded-[8px]'>
                <input accept="image/png, image/gif, image/jpeg" type="file" onChange={onImageChange} />
                <img src={img} alt="" />
              </div>

              {file ?
                <button onClick={() => handleImageUpload()} className={`bg-yellow-400 border-2 rounded-[8px] mt-3 p-2 font-medium `}>
                  Konfirmasi
                </button>
                :
                <button disabled className={`bg-slate-400 cursor-not-allowed border-2 rounded-[8px] mt-3 p-2 font-medium `}>
                  Konfirmasi
                </button>
              }


            </div>
          </div>
        </>
      }
    </div>

  )
}

export default Payment