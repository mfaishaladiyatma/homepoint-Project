import React from 'react'
import closeIcon from '../../assets/icon/close.png'
import { tanggal as Dates, tahun as Years } from '../../data.js'

function Birth({ setBirth, setData, data }) {

    //Default State
    const [date, setDate] = React.useState({
        tanggal: "1",
        bulan: "Januari",
        tahun: "1980"
    })

    // Custom Date Data
    const [tanggal] = React.useState(Dates)
    const [tahun] = React.useState(Years)
    const [bulan] = React.useState([
        "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ])

    const changeDateValue = (e) => {
        setDate(prevDate => {
            return {
                ...prevDate,
                [e.target.name]: e.target.value
            }
        })
    }


    const changeBirth = () => {
        setData(prevData => {
            return {
                ...prevData,
                birth: `${date.tanggal} ${date.bulan} ${date.tahun}`

            }
        })
        setBirth(false)
    }

    return (
        <>
            <div className='modal-bg flex w-full absolute left-0 right-0 bottom-0 top-0 justify-center items-center'>
            </div>
            <div className='absolute mx-auto left-[50%] translate-xy top-[50%] w-[50%] flex flex-col items-center rounded-md bg-white p-5 z-99'>
                <div className='w-full'>
                    <img onClick={() => setBirth(false)} className="cursor-pointer max-w-[10px] sm:max-w-[20px] float-right" src={closeIcon} alt="" />
                </div>
                <h1 className='text-center font-bold text-[#316093]'>Tambah Tanggal Lahir</h1>
                <div className='p-2 mt-6 w-full flex justify-center gap-[50px]'>
                    <select name="tanggal" value={date.tanggal} onChange={e => changeDateValue(e)}>
                        {tanggal.map((each, index) => {
                            return (
                                <option name="tanggal" key={index} value={each}>{each}</option>
                            )
                        })}
                    </select>
                    <select name="bulan" value={date.bulan} onChange={e => changeDateValue(e)}>
                        {bulan.map((each) => {
                            return (
                                <option name="bulan" value={each}>{each}</option>
                            )
                        })}
                    </select>
                    <select name="tahun" value={date.tahun} onChange={e => changeDateValue(e)}>
                        {tahun.map(each => {
                            return (
                                <option name="tahun" value={each}>{each}</option>
                            )
                        })}
                    </select>
                </div>
                <button onClick={() => changeBirth()} className='p-2 font-semibold px-12 rounded-md mt-6 bg-[#FBC646]'>Simpan</button>
            </div>
        </>
    )
}

export default Birth