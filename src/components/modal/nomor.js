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
        <>
            <div className='modal-bg flex w-full absolute left-0 right-0 bottom-0 top-0 justify-center items-center'>
            </div>
            <div className='absolute mx-auto left-[50%] translate-xy top-[50%] w-[50%] flex flex-col items-center rounded-md bg-white p-5 z-99'>
                <div className='w-full'>
                    <img onClick={() => setNomor(false)} className="cursor-pointer max-w-[10px] sm:max-w-[20px] float-right" src={closeIcon} alt="" />
                </div>
                <h1 className='text-center font-bold text-[#316093]'>Ubah Nama Lengkap</h1>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <h1 className='text-[#316093] text-sm'>No Hp</h1>
                    <input onChange={(e) => setName(e.target.value)} className='w-full' placeholder='Masukkan Nomor Hp' />
                </div>
                <button onClick={() => changeName()} className='p-2 font-semibold px-12 rounded-md mt-6 bg-[#FBC646]'>Simpan</button>
            </div>
        </>
    )
}

export default Nomor