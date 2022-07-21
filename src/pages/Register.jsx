import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";

import { registerUser } from "../components/action";

import homePointLogo from "../images/HomepointLoginRegister.svg";
import backgroundImage from "../images/BgRegisLogin.svg";
import Google from "../images/GoogleLogo.svg";
import Facebook from "../images/Facebook.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";

// import {} from 'react-icons'

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [namaLengkap, setNamaLengkap] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  console.log(isChecked);

  const handleRegister = () => {
    if (isChecked && email && password && namaLengkap) {
      dispatch(registerUser(namaLengkap, email, password, navigate));
      setShowModal(!showModal);
    }
    if (isChecked && !email) {
      alert("Email tidak boleh kosong");
    }
    if (isChecked && !password) {
      alert("Password tidak boleh kosong");
    }
    if (isChecked && !namaLengkap) {
      alert("Nama tidak boleh kosong");
    }
    if (!isChecked) {
      alert("Silahkan centang checkbox");
    }
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundImage})` }} className="bg-cover bg-left-bottom relative font-Inter flex flex-col py-12 h-screen lg:h-full items-center justify-center  w-full ">
        <div className="absolute top-[5%] left-[3%]">
          <button onClick={() => navigate(-1)} className="ml-10">
            <AiOutlineArrowLeft className="text-[26px] md:text-[32px]" />
          </button>
        </div>

        {/* mid-section or form */}

        <section className="flex justify-center px-12 lg:justify-end lg:px-24 py-12 w-full ">
          {/* Modal */}
          {showModal ?
            <div className="absolute flex items-center justify-center top-0 right-0 w-full h-full bg-black/50 z-20">
              <div className="flex flex-col items-center justify-center border-2 border-black w-[700px] h-[300px] rounded-[8px] bg-white/90">
                <p className="font-semibold">Email konfirmasi sudah terkirim ke alamat email anda</p>
                <button onClick={() => navigate('/login')} className="bg-[#FBC646] w-[50%] mx-auto py-3 rounded-[10px] mt-3">
                  <p className="font-bold w-full">Login</p>
                </button>
              </div>
            </div>
            :
            null}
          {/* form-section */}
          <div className="flex flex-col px-3 items-center w-[90%] md:w-[80%] lg:w-[45%] h-fit bg-[#98B6C9] rounded-[16px] gap-y-5">
            <div className="flex flex-col items-center">
              <img className="max-w-[80%] " src={homePointLogo} alt="" />
              <h2 className="font-bold md:text-[48px] text-[32px] text-[#22364A]">Daftar akun</h2>
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full">
                <p className="px-1 font-bold text-[14px] md:text-[16px]">Nama Lengkap</p>
                <input
                  value={namaLengkap}
                  onChange={(e) => setNamaLengkap(e.target.value)}
                  className="focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-24 md:h-12 rounded-[8px] bg-[#DADADA] md:text-[14px] text-[12px]"
                  placeholder="Nama Lengkap"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full">
                <p className="px-1 font-bold text-[14px] md:text-[16px]">Email</p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-24 md:h-12 rounded-[8px] bg-[#DADADA] md:text-[14px] text-[12px]"
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full">
                <p className="px-1 font-bold text-[14px] md:text-[16px]">Kata Sandi</p>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-24 md:h-12 rounded-[8px] bg-[#DADADA] md:text-[14px] text-[12px]"
                  placeholder="Kata Sandi"
                  type="password"
                />
              </div>
            </div>

            <div className="flex items-start w-full gap-x-5 my-10 px-3">
              <input value={isChecked} onChange={(e) => setIsChecked(e.target.checked)} className="accent-[#FBC646] w-[20px] h-[30px] scale-[1.3] md:scale-[1.5]" type="checkbox" />
              <div className="text-[12px] md:text-[16px]">
                Dengan mendaftar, Anda menyetujui <span>Syarat &amp; Ketentuan</span> serta <span>Kebijakan Privasi</span> Homepoint
              </div>
            </div>

            <button onClick={handleRegister} className="bg-[#FBC646] w-[95%] mx-auto py-3 rounded-[10px] mt-3">
              <p className="font-bold w-full text-[14px] md:text-[16px]">Daftar</p>
            </button>

            <div className="my-3 text-center mx-auto w-[95%] text-[14px] md:text-[16px]">Atau</div>

            <div className="flex gap-[20px] justify-center  w-full px-5 my-3">
              <button className=" py-6 h-[30px] w-fit sm:h-[40px] bg-white/50 flex gap-x-3 px-5 justify-center items-center rounded-[10px]">
                <img className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]" src={Google} alt="" />
                <p className="text-[12px] md:text-[16px] ">Masuk dengan akun google</p>
              </button>
              {/* <button className=" w-[100px] py-6 h-[30px] sm:w-full sm:h-[40px] bg-white/30 flex justify-center items-center rounded-[10px]">
                <img className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]" src={Facebook} alt="" />
              </button> */}
            </div>

            <div className="flex justify-center w-[95%] my-10">
              <div className="text-[14px] md:text-[16px]">
                Sudah memiliki akun?
                <span onClick={() => navigate("/login")} className="ml-5 cursor-pointer font-semibold">
                  Masuk
                </span>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
