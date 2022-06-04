import React from 'react'
import closeIcon from '../../assets/icon/close.png'

function Nomor({ setNomor, setData, data }) {

    const [name, setName] = React.useState("")

    const changeName = () => {
        setData(prevData => {
            return {
                ...prevData,
                hp: name
            }
        })
        setNomor(false)
    }

    return (
        <div className='modal-bg flex w-full h-full absolute bg-red-500 left-0 top-0 justify-center items-center'>
            <div className='relative flex flex-col items-center justify-center w-[80%] md:w-[40%] h-[30%] rounded-md bg-white p-16 z-99'>
                <img onClick={() => setNomor(false)} className="cursor-pointer absolute right-[20px] top-[20px] max-w-[20px]" src={closeIcon} alt="" />
                <h1 className='text-center font-bold text-[#316093]'>Ubah Nama Lengkap</h1>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <h1 className='text-[#316093] text-sm'>No Hp</h1>
                    <input onChange={(e) => setName(e.target.value)} className='w-full' placeholder='Masukkan Nomor Hp' />
                </div>
                <button onClick={() => changeName()} className='p-2 font-semibold px-12 rounded-md mt-6 bg-[#FBC646]'>Simpan</button>
            </div>
        </div>
    )
}

export default Nomor