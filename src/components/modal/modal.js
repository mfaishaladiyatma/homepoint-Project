import React from 'react'
import closeIcon from '../../assets/icon/close.png'

import { useSelector } from 'react-redux/es/exports'
import { useState, Fragment, useEffect } from 'react'
import axios from "axios";
import jwtDecode from 'jwt-decode'

function Modal({ setModal, setData, data }) {

    const [name, setName] = React.useState("")
    const [dataGet, setDataGet] = React.useState({})

    const { token, id } = useSelector((state) => state)

    const decode = token ? jwtDecode(token) : null

    useEffect(() => {
        if (decode ) {
            const userById = 'https://homepoint-server-staging.herokuapp.com/api/v1/users/' + id
            console.log(userById)
            axios.get(userById)
                .then((response) => {
                    setDataGet({
                        ...dataGet,
                        ...response.data.data
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            console.log('error')
        }
    }, [])
    { dataGet ? console.log(dataGet) : console.log('kosong') }

    const testChangeName = () => {
        setDataGet({
            ...dataGet,
            name:name
        })
    }
    
    const changeName = () => {
        testChangeName()
        // setData(prevData => {
        //     return {
        //         ...prevData,
        //         name: name
        //     }
        // })
        // setModal(false)
        axios({
            method: "put",
            url: 'https://homepoint-server-staging.herokuapp.com/api/v1/users',
            data: dataGet,
        }).then((response) => {
            //handle success
            console.log(response)
        }).catch((error) => {
            //handle error
            console.log(error)
        })
        setModal(false)
    }

    return (
        <>
            <div className='modal-bg flex w-full absolute left-0 right-0 bottom-0 top-0 justify-center items-center'>
            </div>
            <div className='absolute mx-auto left-[50%] translate-xy top-[50%] w-[50%] flex flex-col items-center rounded-md bg-white p-5 z-99'>
                <div className='w-full'>
                    <img onClick={() => setModal(false)} className="cursor-pointer max-w-[10px] sm:max-w-[20px] float-right" src={closeIcon} alt="" />
                </div>
                <h1 className='text-center font-bold text-[#316093]'>Ubah Nama Lengkap</h1>
                <div className='p-2 mt-6 w-full rounded-md border-[1px] border-[#316093]'>
                    <h1 className='text-[#316093] text-sm'>Nama Lengkap</h1>
                    <input onChange={(e) => setName(e.target.value)} className='w-full' placeholder='Masukkan Nama' />
                </div>
                <button onClick={() => changeName()} className='p-2 font-semibold px-12 rounded-md mt-6 bg-[#FBC646]'>Simpan</button>
            </div>
        </>
    )
}

export default Modal