
import React, { useContext } from 'react'
import closeIcon from '../../assets/icon/close.png'
import { addressContext } from '../../context/context'

function Address({ setAddress, setAlamatPengguna, setAlamat }) {

    const { listProvinsi } = useContext(addressContext)
    const [userAddress, setUserAddress] = React.useState({})

    const addressHandler = (e) => {
        setUserAddress(prevData => {
            return {
                ...prevData,
                id: Math.trunc(Date.now() + Math.random()),
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


    const changeAddress = () => {
        setAlamatPengguna(prevState => {
            return [
                ...prevState,
                {
                    userAddress
                }
            ]
        })
        setAlamat(true)
        setAddress(false)
        setUserAddress({})
    }




    return (
        <>
            <div className='modal-bg flex w-full absolute left-0 right-0 bottom-0 top-0 justify-center items-center'>
            </div>
            <div className='absolute mx-auto overflow-y-auto h-[90%] left-[50%] translate-xy top-[50%] w-[50%] flex flex-col items-center rounded-md bg-white p-5 z-99'>
                <div className='w-full'>
                    <img onClick={() => setAddress(false)} className="cursor-pointer max-w-[10px] sm:max-w-[20px] float-right" src={closeIcon} alt="" />
                </div>
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
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <input onChange={(e) => addressHandler(e)} name="alamatLengkap" className='w-full' placeholder='Alamat Lengkap' />
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
        </>
    )
}

export default Address