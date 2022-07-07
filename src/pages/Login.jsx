import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginActionAsync, logoutAction } from "../components/action";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/exports";

import homePointLogo from "../images/HomepointLoginRegister.svg";
import backgroundImage from "../images/BgRegisLogin.svg";
import Google from "../images/GoogleLogo.svg";
import Facebook from "../images/Facebook.svg";

import { Link } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token } = useSelector((state) => state);

  const handleLogin = () => {
    dispatch(loginActionAsync(email, password, navigate));
    // redirectIfLogin()
  };
  
  // useEffect(() => {
  //     axios.get(`https://homepoint-server-staging.herokuapp.com/api/v1/users`)
  //     // https://cosmetic-b.herokuapp.com/api/v1/product
  //     // https://rent-cars-api.herokuapp.com/admin/car
  //     // https://homepoint-server-staging.herokuapp.com/api/v1/users
  //     .then((response) => {
  //         console.log(response)
  //     });
  // }, []);

  return (
    <>
      {/* <div style={{ backgroundImage: `url(${backgroundImage})` }} className="font-Inter flex flex-col ">
        <div className="flex py-3 w-full">
          <button onClick={() => navigate(-1)} className="ml-10">
            <AiOutlineArrowLeft className="text-[2rem]" />
          </button>
        </div>


        <section className="flex justify-center py-5 w-full ">
          <div className="flex flex-col px-3 items-center w-[50%] md:w-[40%] h-fit bg-[#98B6C9] rounded-[16px]">
            <div className="flex flex-col items-center">
              <img className="max-w-[80%]" src={homePointLogo} alt="" />
              <h2 className="font-bold text-[#22364A]">Daftar akun</h2>
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full">
                <p className="px-1 font-bold">Nama Lengkap</p>
                <input
                  value={namaLengkap}
                  onChange={(e) => setNamaLengkap(e.target.value)}
                  className="focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-12 sm:h-10 rounded-[8px] bg-[#DADADA]"
                  placeholder="Nama Lengkap"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full">
                <p className="px-1 font-bold">Email</p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-12 sm:h-10 rounded-[8px] bg-[#DADADA]"
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full">
                <p className="px-1 font-bold">Kata Sandi</p>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-12 sm:h-10 rounded-[8px] bg-[#DADADA]"
                  placeholder="Kata Sandi"
                  type="password"
                />
              </div>
            </div>

            <div className="flex items-center w-full gap-x-5 my-5 px-3">
              <input value={isChecked} onChange={(e) => setIsChecked(e.target.checked)} className="accent-[#FBC646] w-[20px] h-[30px]" type="checkbox" />
              <div>
                Dengan mendaftar, Anda menyetujui <span>Syarat &amp; Ketentuan</span> serta <span>Kebijakan Privasi</span> Homepoint
              </div>
            </div>

            <button onClick={handleRegister} className="bg-[#FBC646] w-[95%] py-3 rounded-[10px] mt-3">
              <p className="font-bold ">Daftar</p>
            </button>

            <div className="my-3">Atau</div>

            <div className="flex gap-[20px] my-3">
              <button className="w-[40px] h-[40px] flex justify-center items-center rounded-[10px]">
                <img className="w-full" src={Google} alt="" />
              </button>
              <button className="w-[40px] h-[40px] bg-white-transparent flex justify-center items-center rounded-[10px]">
                <img className="w-full" src={Facebook} alt="" />
              </button>
            </div>

            <div className="my-3">
              <div>
                Sudah memiliki akun?{" "}
                <span onClick={() => navigate("/register")} className=" cursor-pointer font-semibold">
                  Masuk
                </span>
              </div>
            </div>
          </div>
        </section>
      </div> */}
      {/* whole page */}

      <div style={{ backgroundImage: `url(${backgroundImage})` }} className=" bg-cover bg-left-bottom relative font-Inter flex flex-col py-12 h-screen md:h-full items-center justify-center  w-full">
        <div className="absolute top-[5%] left-[3%]">
          <button onClick={() => navigate(-1)} className="ml-10">
            <AiOutlineArrowLeft className="text-[2rem]" />
          </button>
        </div>
        {/* mid-section or form */}

        <section className="flex justify-center md:justify-end md:px-24 py-12 w-full ">
          {/* form-section */}
          <div className="flex flex-col px-3 items-center w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%]  h-fit bg-[#98B6C9] rounded-[16px] py-6">
            <div className="flex flex-col items-center">
              <img className="max-w-[80%] w-[50%] sm:w-[80%]" src={homePointLogo} alt="" />
              <p className="font-bold sm:text-[26px] text-[18px] text-[#22364A]">Masuk</p>
            </div>

            <div className="w-full">
              <div className="flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full">
                <p className=" px-1 font-bold">Email</p>
                <input
                  className="focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-12 sm:h-12 rounded-[8px] bg-[#DADADA]"
                  placeholder="Email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full">
                <p className="px-1 font-bold">Kata Sandi</p>
                <input
                  className="focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 sm:h-12 h-12 rounded-[8px] bg-[#DADADA]"
                  placeholder="Kata Sandi"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-star mt-5 px-3 w-full ">
              <button onClick={() => navigate("/forgetpass")}>
                <p className="text-[#505050] font-semibold">Lupa kata sandi?</p>
              </button>
            </div>

            {/* <Link to="/profile" onClick={handleLogin} className="bg-[#FBC646] w-[95%] py-3 flex justify-center rounded-[10px] mt-3">
              <div className="font-bold ">Masuk</div>
            </Link> */}
            <button  onClick={handleLogin} className="bg-[#FBC646] w-[95%] py-3 flex justify-center rounded-[10px] mt-3">
              <div className="font-bold ">Masuk</div>
            </button>

            <div className="my-3">Atau</div>

            <div className="flex gap-[20px] justify-center  w-full px-5 my-3">
              <button className=" w-[100px] py-6 h-[30px] sm:w-full sm:h-[40px] bg-white/30 flex justify-center items-center rounded-[10px]">
                <img className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]" src={Google} alt="" />
              </button>
              <button className=" w-[100px] py-6 h-[30px] sm:w-full sm:h-[40px] bg-white/30 flex justify-center items-center rounded-[10px]">
                <img className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]" src={Facebook} alt="" />
              </button>
            </div>

            <div className="my-3">
              <p>
                Belum memiliki akun?{" "}
                <span onClick={() => navigate("/register")} className="cursor-pointer font-semibold">
                  Daftar
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
