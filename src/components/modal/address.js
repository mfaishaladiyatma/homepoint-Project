
import React, { useContext } from 'react'
import closeIcon from '../../assets/icon/close.png'
import { addressContext } from '../../context/context'
import { useSelector } from 'react-redux/es/exports'
import { useState, Fragment, useEffect } from 'react'
import axios from "axios";
import jwtDecode from 'jwt-decode'
import toast, { Toaster } from 'react-hot-toast';

function Address({ setAddress, setAlamatPengguna, setAlamat, userLengkap }) {


    const [userAddress, setUserAddress] = React.useState({})
    const [label, setLabel] = useState('')
    const [provinsi, setProvinsi] = useState('')
    const [kota, setKota] = useState('')
    const [kecamatan, setKecamatan] = useState('')
    const [kelurahan, setKelurahan] = useState('')
    const [kodePos, setKodePos] = useState('')
    const [alamatLengkap, setAlamatLengkap] = useState('')
    const [namaPenerima, setNamaPenerima] = useState('')
    const [noHp, setNoHp] = useState('')


    const { token, id } = useSelector((state) => state)

    const decode = token ? jwtDecode(token) : null

    useEffect(() => {
        if (decode) {
            const userById = 'https://homepoint-server-staging.herokuapp.com/api/v1/address/' + id
            // console.log(userById)
            axios.get(userById)
                .then((response) => {
                    setUserAddress(response.data);

                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            console.log('error')
        }
    }, [])


    const submitAddress = () => {
        axios({
            method: "post",
            url: 'https://homepoint-server-staging.herokuapp.com/api/v1/address/',
            data: {
                "city": kota,
                "districts": kecamatan,
                "fullAddress": alamatLengkap,
                "isActive": userLengkap.isActive,
                "label": label,
                "phoneNumber": noHp,
                "province": provinsi,
                "recipientName": namaPenerima,
                "usersId": id,
                "village": kelurahan,
                "zipCode": kodePos
            },
            // headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }).then((response) => {
            // setCheckProduct(true)
            setAddress(false)
            toast.success("Berhasil Menambah Alamat")
            // navigate(0)
        }).catch((error) => {
            //handle error
            console.log(error)
        })
    }



    return (
        <>
            <div className=' bg-black/50 fixed flex w-full z-20  left-0 right-0 bottom-0 top-0 justify-center items-center'>
            </div>
            <div className='font-Inter fixed mx-auto overflow-y-auto z-30 h-[70%] left-[50%] translate-xy top-[50%] w-[50%] flex flex-col items-center rounded-md bg-white p-5 z-99 scrollbar'>

                {/* <Toaster
                    position='bottom-right'
                    reverseOrder={false}

                    toastOptions={{
                        duration: 5000,
                        style: {
                            backgroundColor: '#FBC646',
                            color: '#22364A',
                            fontWeight: 'bold',
                        },

                        success: {
                            duration: 5000,
                            theme: {
                                primary: 'blue',
                                secondary: 'yellow'
                            }
                        },

                        error: {
                            duration: 5000,
                            theme: {
                                primary: 'red',
                                secondary: 'yellow'
                            }
                        }
                    }}
                /> */}

                <div className='w-full'>
                    <img onClick={() => setAddress(false)} className="cursor-pointer max-w-[10px] sm:max-w-[20px] float-right" src={closeIcon} alt="" />
                </div>
                <h1 className='py-3 text-center font-bold text-[#316093]'>Tambahkan Alamat</h1>
                <h1 className='py-2 w-full'>Informasi Detail Alamat</h1>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input name="labelAlamat" onChange={(e) => setLabel(e.target.value)} className='w-full' placeholder='Contoh: Rumah' />
                </div>
                {/* <select name="provinsi" onChange={(e) => addressHandler(e)} className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    {listProvinsi.provinsi.map(each => {
                        return (
                            <option value={each.nama} key={each.id}>{each.nama}</option>
                        )
                    })}
                </select> */}
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input name="kabupaten" onChange={(e) => setProvinsi(e.target.value)} className='w-full' placeholder='Provinsi' />
                </div>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input name="kabupaten" onChange={(e) => setKota(e.target.value)} className='w-full' placeholder='Kabupaten / Kota' />
                </div>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input name="kecamatan" onChange={(e) => setKecamatan(e.target.value)} className='w-full' placeholder='Kecamatan' />
                </div>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input name="kelurahan" onChange={(e) => setKelurahan(e.target.value)} className='w-full' placeholder='Kelurahan' />
                </div>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input name="kodePos" onChange={(e) => setKodePos(e.target.value)} className='w-full' placeholder='Kode Pos' />
                </div>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input name="alamatLengkap" onChange={(e) => setAlamatLengkap(e.target.value)} className='w-full' placeholder='Alamat Lengkap' />
                </div>
                <h1 className='py-2 mt-4 w-full'>Informasi Penerima</h1>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input name="namaLengkap" onChange={(e) => setNamaPenerima(e.target.value)} className='w-full' placeholder='Nama Lengkap Penerima' />
                </div>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input name="noHp" onChange={(e) => setNoHp(e.target.value)} className='w-full' placeholder='No Hp Penerima' />
                </div>
                {/* <div className='w-full mt-4'>
                    <input  id="utama" type="checkbox" /> <label htmlFor="utama">Jadikan Alamat Utama</label>
                </div> */}
                <button onClick={() => submitAddress()} className='p-2 font-semibold px-12 rounded-md mt-6 bg-[#FBC646]'>Simpan Alamat</button>
            </div>
        </>
    )
}

export default Address