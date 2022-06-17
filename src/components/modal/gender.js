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
        <>
            <div className='modal-bg flex w-full absolute left-0 right-0 bottom-0 top-0 justify-center items-center'>
            </div>
            <div className='absolute mx-auto left-[50%] translate-xy top-[50%] w-[50%] flex flex-col items-center rounded-md bg-white p-5 z-99'>
                <div className='w-full'>
                    <img onClick={() => setGender(false)} className="cursor-pointer max-w-[10px] sm:max-w-[20px] float-right" src={closeIcon} alt="" />
                </div>
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
        </>
    )
}

export default Gender