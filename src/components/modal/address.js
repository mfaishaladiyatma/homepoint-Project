
import React, { useContext } from 'react'
import closeIcon from '../../assets/icon/close.png'
import { addressContext } from '../../context/context'

function Address({ setAddress, setAlamatPengguna, setAlamat, alamatPengguna }) {

    const [userAddress, setUserAddress] = React.useState({
        labelAlamat: "",
        provinsi: "Aceh",
        kabupaten: "",
        kecamatan: "",
        kelurahan: "",
        kodePos: "",
        namaLengkap: "",
        noHp: "",
        alamatUtama: false
    })

    const addressHandler = (e) => {
        setUserAddress(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const mainAddress = () => {
        setUserAddress(prevData => {
            return {
                ...prevData,
                alamatUtama: !prevData.alamatUtama
            }
        })
    }

    console.log(userAddress)

    const changeAddress = () => {
        setAlamatPengguna(userAddress)
        setAlamat(true)
        setAddress(false)
    }

    const { listProvinsi } = useContext(addressContext)



    return (
        <div className='modal-bg flex w-full h-full absolute bg-red-500 left-0 top-0 justify-center items-center'>
            <div className='relative modal-auto flex flex-col items-center justify-center w-[80%] md:w-[40%] h-[90%] rounded-md bg-white p-16 z-99'>
                <img onClick={() => setAddress(false)} className="cursor-pointer absolute right-[20px] top-[20px] max-w-[20px]" src={closeIcon} alt="" />
                <h1 className='py-3 text-center font-bold text-[#316093]'>Tambahkan Alamat</h1>
                <h1 className='py-2 w-full'>Informasi Detail Alamat</h1>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input name="labelAlamat" onChange={(e) => addressHandler(e)} className='w-full' placeholder='Label Alamat' />
                </div>
                <select name="provinsi" onChange={(e) => addressHandler(e)} className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    {listProvinsi.provinsi.map(each => {
                        return (
                            <option value={each.nama} key={each.id}>{each.nama}</option>
                        )
                    })}
                </select>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input name="kabupaten" onChange={(e) => addressHandler(e)} className='w-full' placeholder='Kabupaten / Kota' />
                </div>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input name="kecamatan" onChange={(e) => addressHandler(e)} className='w-full' placeholder='Kecamatan' />
                </div>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input name="kelurahan" onChange={(e) => addressHandler(e)} className='w-full' placeholder='Kelurahan' />
                </div>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input onChange={(e) => addressHandler(e)} name="kodePos" className='w-full' placeholder='Kode Pos' />
                </div>
                <h1 className='py-2 mt-4 w-full'>Informasi Penerima</h1>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input onChange={(e) => addressHandler(e)} name="namaLengkap" className='w-full' placeholder='Nama Lengkap Penerima' />
                </div>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input onChange={(e) => addressHandler(e)} name="noHp" className='w-full' placeholder='No Hp Penerima' />
                </div>
                <div className='w-full mt-4'>
                    <input onChange={() => mainAddress()} id="utama" type="checkbox" /> <label htmlFor="utama">Jadikan Alamat Utama</label>
                </div>
                <button onClick={() => changeAddress()} className='p-2 font-semibold px-12 rounded-md mt-6 bg-[#FBC646]'>Simpan Alamat</button>
            </div>
        </div>
    )
}

export default Address