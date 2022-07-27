import React from "react";
import profileIcon from "../assets/profileIcon.png";
import secureIcon from "../assets/secure.png";
import Modal from "./modal/modal";
import Birth from "./modal/birth";
import Gender from "./modal/gender";
import Nomor from "./modal/nomor";
import Address from "./modal/address";

import { useSelector } from 'react-redux/es/exports'
import { useState, Fragment, useEffect } from 'react'
import axios from "axios";
import jwtDecode from 'jwt-decode'
import toast, { Toaster } from 'react-hot-toast';


function Profile() {
  const { token, id } = useSelector((state) => state)

  const decode = token ? jwtDecode(token) : null

  useEffect(() => {
    if (decode) {
      axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/users/' + id)
        .then((response) => {
          // console.log(response.data.data)
          setUserLengkap(response.data.data)
          setAlamatPengguna(response.data.data.addresses)
          setData({
            ...data,
            name: response.data.data.name,
            email: response.data.data.email,
          })
          // console.log(cobaGet)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      return
    }
  }, [])

  // useEffect(() => {
  //   axios.get('https://homepoint-server-staging.herokuapp.com/api/v1/products/discount')
  //     .then((response) => {
  //       console.log(response)
  //       setDataBestOffer(response.data.data)
  //       // console.log(cobaGet)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [])


  const [data, setData] = React.useState({
    name: "Lynn Tanner",
    birth: "Tanggal Lahir",
    gender: "Jenis Kelamin",
    email: "lynntanner@gmail.com",
    hp: "No Hp",
  });
  // console.log(data.name)
  const [alamat, setAlamat] = React.useState(false);

  const [alamatPengguna, setAlamatPengguna] = React.useState([]);

  const [userLengkap, setUserLengkap] = React.useState({});
  const [state, setState] = React.useState(true);
  const [modal, setModal] = React.useState(false);
  const [birth, setBirth] = React.useState(false);
  const [gender, setGender] = React.useState(false);
  const [nomor, setNomor] = React.useState(false);

  const [address, setAddress] = React.useState(false);

  return (
    <div className="w-full font-Inter h-full px-4 md:py-24 flex flex-col justify-center md:items-center">
      {modal ? <Modal setModal={setModal} setData={setData} data={data} /> : ""}
      {birth ? <Birth setBirth={setBirth} setData={setData} data={data} /> : ""}
      {gender ? <Gender setGender={setGender} setData={setData} data={data} /> : ""}
      {nomor ? <Nomor setNomor={setNomor} setData={setData} data={data} /> : ""}
      {address ? <Address userLengkap={userLengkap} setAddress={setAddress} setAlamat={setAlamat} setAlamatPengguna={setAlamatPengguna} alamatPengguna={alamatPengguna} /> : ""}

      <Toaster
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
      />

      <div className="flex flex-col md:flex-row gap-[20px]">
        <h1 className="text-2xl md:hidden font-bold py-6">Profil</h1>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="p-3 flex h-fit flex-col max-w-fit border-[#98B6C9] border-[1px] rounded-md gap-y-5">
            <h1 className="font-bold text-[24px]">{data.name}</h1>
            {/* <h1 className="font-bold text-[24px]">{userLengkap.addresses.phoneNumber}</h1> */}
            <div className="flex w-full">
              <button className="flex w-full justify-center items-center border-[1px] border-[#22364A] rounded-md px-5 py-2 gap-[20px]">
                <img src={secureIcon} alt="" />
                <h1 className="font-bold text-[#22364A]">Ubah Kata Sandi</h1>
              </button>
            </div>
          </div>
          <div className="items-center py-3 sm:w-[350px] md:w-[500px] border-[#98B6C9] h-max lg:w-[750px] border-[1px] rounded-md">
            <div className="w-full px-3 flex gap-[20px]">
              <h1 className={`text-[#B5B5B5] ${state ? "active" : ""} cursor-pointer`} onClick={() => setState(true)}>
                Biodata Diri
              </h1>
              <h1 className={`text-[#B5B5B5] ${state ? "" : "active"} cursor-pointer`} onClick={() => setState(false)}>
                Alamat
              </h1>
            </div>

            <hr className="border-light-blue-pale border-[1px] my-3"></hr>

            {state ? (
              <div className="p-3 flex flex-col gap-[10px]">
                <h1 className="text-[#316093] font-bold">Informasi Biodata</h1>
                <div className="flex justify-between p-3 bg-[#F7F7F7] items-center">
                  <div>
                    <h1 className="font-bold">{data.name}</h1>
                  </div>
                  <div>
                    <h2 onClick={() => setModal(true)} className="text-[#316093] cursor-pointer font-bold">
                      Ubah
                    </h2>
                  </div>
                </div>
                <div className="flex justify-between p-3 bg-[#F7F7F7] items-center">
                  <div>
                    <h1 className="font-bold">{data.birth}</h1>
                  </div>
                  <div>
                    <h2 onClick={() => setBirth(true)} className="text-[#316093] cursor-pointer font-bold">
                      Tambah
                    </h2>
                  </div>
                </div>
                <div className="flex justify-between p-3 bg-[#F7F7F7] items-center">
                  <div>
                    <h1 className="font-bold">{data.gender}</h1>
                  </div>
                  <div>
                    <h2 onClick={() => setGender(true)} className="text-[#316093] xursor-pointer font-bold">
                      Tambah
                    </h2>
                  </div>
                </div>
                <h1 className="text-[#316093] font-bold">Informasi Kontak</h1>
                <div className="flex justify-between p-3 bg-[#F7F7F7] items-center">
                  <div>
                    <h1 className="text-sm text-[#316093]">Email</h1>
                    <h1 className="font-bold">{data.email}</h1>
                  </div>
                </div>
                <div className="flex justify-between p-3 bg-[#F7F7F7] items-center">
                  <div>
                    <h1 className="font-bold">{data.hp}</h1>
                  </div>
                  <div>
                    <h2 onClick={() => setNomor(true)} className="text-[#316093] font-bold cursor-pointer">
                      Tambah
                    </h2>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`h-full ${alamat ? "" : "items-center justify-center"} flex flex-col gap-[10px]`}>
                {alamat ?
                  null
                  :
                  alamatPengguna.length > 0 ?
                    (alamatPengguna.map((item) => {
                      return (
                        <div key={item.id}>
                          <h3>{item.fullAddress}, {item.village}, {item.districts}, {item.city}, {item.province}, {item.zipCode}</h3>
                        </div>
                      )
                    }))
                    :
                    (
                      <div>
                        <button onClick={() => setAddress(true)} className="text-[#22364A] p-2 border-[#22364A] border-[1px] rounded-md">
                          Tambahkan Informasi Alamat
                        </button>
                      </div>

                    )
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
