import React from 'react'
import profileIcon from '../assets/profileIcon.png'
import secureIcon from '../assets/secure.png'
import Modal from './modal/modal'
import Birth from './modal/birth'
import Gender from './modal/gender'
import Nomor from './modal/nomor'
import Address from './modal/address'

function Profile() {

    const [data, setData] = React.useState({
        name: "Lynn Tanner",
        birth: "Tanggal Lahir",
        gender: "Jenis Kelamin",
        email: "lynntanner@gmail.com",
        hp: "No Hp"
    })

    const [alamat, setAlamat] = React.useState(false)

    const [alamatPengguna, setAlamatPengguna] = React.useState({

    })
    const [state, setState] = React.useState(true)
    const [modal, setModal] = React.useState(false)
    const [birth, setBirth] = React.useState(false)
    const [gender, setGender] = React.useState(false)
    const [nomor, setNomor] = React.useState(false)

    const [address, setAddress] = React.useState(false)

    console.log(alamatPengguna)
    return (
        <div className='w-full h-full px-4 md:py-24 flex flex-col justify-center md:items-center'>
            {modal ? <Modal setModal={setModal} setData={setData} data={data} /> : ""}
            {birth ? <Birth setBirth={setBirth} setData={setData} data={data} /> : ""}
            {gender ? <Gender setGender={setGender} setData={setData} data={data} /> : ""}
            {nomor ? <Nomor setNomor={setNomor} setData={setData} data={data} /> : ""}
            {address ? <Address setAddress={setAddress} setAlamat={setAlamat} setAlamatPengguna={setAlamatPengguna} alamatPengguna={alamatPengguna} /> : ""}
            <div className='flex flex-col md:flex-row gap-[20px]'>
                <h1 className='text-2xl md:hidden font-bold py-6'>Profil</h1>
                <div className='p-3 max-h-[380px] max-w-fit border-[#98B6C9] border-[1px] rounded-md'>
                    <img className='p-12 md:p-24 bg-[#F2F2F2]' src={profileIcon} alt="" />
                    <h1 className='font-bold'>Lynn Tanner</h1>
                    <h2 className='text-sm pb-4'>Bergabung sejak Jan 2022</h2>
                    <button className='flex justify-center items-center border-[1px] border-[#22364A] rounded-md max-w-fit px-5 py-2 gap-[20px]'>
                        <img src={secureIcon} alt="" />
                        <h1 className='font-bold text-[#22364A]'>Ubah Kata Sandi</h1>
                    </button>
                </div>
                <div className='items-center mr-12 mt-12 mb-12 md:mt-0 py-3 sm:w-[350px] md:w-[500px] border-[#98B6C9] lg:w-[750px] border-[1px] rounded-md'>
                    <div className='w-full px-3 border-b-[1px] border-[#98B6C9] flex gap-[20px]'>
                        <h1 className={`text-[#B5B5B5] ${state ? "active" : ""} cursor-pointer`} onClick={() => setState(true)}>Biodata Diri</h1>
                        <h1 className={`text-[#B5B5B5] ${state ? "" : "active"} cursor-pointer`} onClick={() => setState(false)}>Alamat</h1>
                    </div>

                    {state ?
                        <div className='p-3 flex flex-col gap-[10px]'>
                            <h1 className='text-[#316093] font-bold'>Informasi Biodata</h1>
                            <div className='flex justify-between p-3 bg-[#F7F7F7] items-center'>
                                <div>
                                    <h1 className='text-sm text-[#316093]'>Label</h1>
                                    <h1 className='font-bold'>{data.name}</h1>
                                </div>
                                <div>
                                    <h2 onClick={() => setModal(true)} className='text-[#316093] cursor-pointer font-bold'>Ubah</h2>
                                </div>
                            </div>
                            <div className='flex justify-between p-3 bg-[#F7F7F7] items-center'>
                                <div>
                                    <h1 className='font-bold'>{data.birth}</h1>
                                </div>
                                <div>
                                    <h2 onClick={() => setBirth(true)} className='text-[#316093] cursor-pointer font-bold'>Tambah</h2>
                                </div>
                            </div>
                            <div className='flex justify-between p-3 bg-[#F7F7F7] items-center'>
                                <div>
                                    <h1 className='font-bold'>{data.gender}</h1>
                                </div>
                                <div>
                                    <h2 onClick={() => setGender(true)} className='text-[#316093] xursor-pointer font-bold'>Tambah</h2>
                                </div>
                            </div>
                            <h1 className='text-[#316093] font-bold'>Informasi Kontak</h1>
                            <div className='flex justify-between p-3 bg-[#F7F7F7] items-center'>
                                <div>
                                    <h1 className='text-sm text-[#316093]'>Email</h1>
                                    <h1 className='font-bold'>{data.email}</h1>
                                </div>
                            </div>
                            <div className='flex justify-between p-3 bg-[#F7F7F7] items-center'>
                                <div>
                                    <h1 className='font-bold'>{data.hp}</h1>
                                </div>
                                <div>
                                    <h2 onClick={() => setNomor(true)} className='text-[#316093] font-bold cursor-pointer'>Tambah</h2>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='p-3 flex flex-col gap-[10px]'>
                            {alamat ?
                                <div>
                                    <div className='flex justify-between items-center w-full'>
                                        <h1 className='text-[#316093] font-bold'>{alamatPengguna.alamatUtama ? "Alamat Utama" : "Detail Alamat"}</h1>
                                        <h2 onClick={() => setAddress(true)} className='text-[#316093] font-bold cursor-pointer'>Ubah Alamat</h2>
                                    </div>
                                    <div className='flex flex-col gap-[14px]'>
                                        <h1 className='text-[#316093]'>{alamatPengguna.labelAlamat}</h1>
                                        <h1>Provinsi : {alamatPengguna.provinsi}</h1>
                                        <h1>Kabupaten : {alamatPengguna.kabupaten}</h1>
                                        <h1>Kecamatan : {alamatPengguna.kecamatan}</h1>
                                        <h1>Kelurahan : {alamatPengguna.kelurahan}</h1>
                                        <h1>Kode Pos : {alamatPengguna.kodePos}</h1>
                                        <h1>Nama Lengkap : {alamatPengguna.namaLengkap}</h1>
                                        <h1>No Hp : {alamatPengguna.noHp}</h1>
                                    </div>
                                </div>
                                :
                                <div>
                                    <button onClick={() => setAddress(true)} className='text-[#22364A] p-2 border-[#22364A] border-[1px] rounded-md'>Tambahkan Informasi Alamat</button>
                                </div>
                            }
                        </div>
                    }

                </div>
            </div >
        </div >
    )
}

export default Profile