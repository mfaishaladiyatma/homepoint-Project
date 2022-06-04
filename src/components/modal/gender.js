import React from 'react'
import closeIcon from '../../assets/icon/close.png'

function Gender({ setGender, setData, data }) {

    const [name, setName] = React.useState("")

    const changeGender = () => {
        setData(prevData => {
            return {
                ...prevData,
                gender: name
            }
        })
        setGender(false)
    }

    return (
        <div className='modal-bg flex w-full h-full absolute bg-red-500 left-0 top-0 justify-center items-center'>
            <div className='relative flex flex-col items-center justify-center w-[80%] md:w-[40%] h-[30%] rounded-md bg-white p-16 z-99'>
                <img onClick={() => setGender(false)} className="cursor-pointer absolute right-[20px] top-[20px] max-w-[20px]" src={closeIcon} alt="" />
                <h1 className='text-center font-bold text-[#316093]'>Tambah Jenis Kelamin</h1>
                <div className='p-2 mt-6 w-full flex items-center gap-[5px] md:gap-[30px] justify-around'>
                    {/* <h1 className='text-[#316093] text-sm'>Nama Lengkap</h1>
                    <input onChange={(e) => setName(e.target.value)} className='w-full' placeholder='Input your Name' /> */}
                    <div className='text-sm md:text-md flex items-center'>
                        <input onClick={() => setName("Perempuan")} name="gender" type="radio" id="female" />
                        <label className='ml-4' for="female">Perempuan</label>
                    </div>
                    <div className='text-sm md:text-md flex items-center'>
                        <input onClick={() => setName("Laki-laki")} name="gender" type="radio" id="male" />
                        <label className='ml-4 w-max' for="male">Laki-laki</label>
                    </div>

                </div>
                <button onClick={() => changeGender()} className='p-2 font-semibold px-12 rounded-md mt-6 bg-[#FBC646]'>Simpan</button>
            </div>
        </div>
    )
}

export default Gender