import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginActionAsync, logoutAction } from "../components/action";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/exports";

import toast, { Toaster } from 'react-hot-toast';

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

  const handleLogin = (e) => {
    e.preventDefault()
    if (email !== "" && password !== "") {
      dispatch(loginActionAsync(email, password, navigate, toast));
    } else {
      toast.error("Mohon isi email dan password");
    }
    // redirectIfLogin()
  };

  return (
    <>
      {/* whole page */}

      <div style={{ backgroundImage: `url(${backgroundImage})` }} className=" bg-cover bg-left-bottom relative font-Inter flex flex-col py-12 h-screen lg:h-full items-center justify-center  w-full">
        <div className="absolute top-[5%] left-[3%]">
          <button onClick={() => navigate(-1)} className="ml-10">
            <AiOutlineArrowLeft className="text-[26px] md:text-[32px]" />
          </button>
        </div>
        {/* mid-section or form */}

        <section className="flex justify-center lg:justify-end lg:px-24 py-12 w-full ">
          {/* form-section */}
          <div className="flex flex-col px-3 items-center w-[90%] md:w-[80%] lg:w-[45%]  h-fit bg-[#98B6C9] rounded-[16px] py-6 gap-y-6">
            <div className="flex flex-col items-center">
              <img className="max-w-[80%] sm:w-[80%]" src={homePointLogo} alt="" />
              <p className="font-bold md:text-[48px] text-[32px] text-[#22364A]">Masuk akun</p>
            </div>

            <form onSubmit={handleLogin} className="w-full">
              <div className="flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full">
                <p className=" px-1 font-bold text-[14px] md:text-[16px]">Email</p>
                <input
                  className="focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-24 md:h-12 rounded-[8px] bg-[#DADADA] md:text-[14px] text-[12px]"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-y-3 p-2 justify-between rounded-[10px] w-full">
                <p className="px-1 font-bold text-[14px] md:text-[16px]">Kata Sandi</p>
                <input
                  className="focus:outline-none focus:border-[#316093] focus:ring-2 focus:ring-[#316093] focus:bg-white caret-[#6999B8] px-2 h-24 md:h-12 rounded-[8px] bg-[#DADADA] md:text-[14px] text-[12px]"
                  placeholder="Kata Sandi"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-star mt-5 px-3 w-full ">

                <button>
                  <p className="text-[#505050] font-semibold text-[14px] md:text-[16px]">Lupa kata sandi?</p>
                </button>
              </div>

              <button  className="bg-[#FBC646] w-[95%] py-3 flex justify-center rounded-[10px] mt-3">
                <div className="font-bold text-[14px] md:text-[16px]">Masuk</div>

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

              </button>
            </form>


            {/* <Link to="/profile" onClick={handleLogin} className="bg-[#FBC646] w-[95%] py-3 flex justify-center rounded-[10px] mt-3">
              <div className="font-bold ">Masuk</div>
            </Link> */}

            {/* <div className="text-[14px] md:text-[16px]">Atau</div> */}

            <div className="flex gap-[20px] justify-center  w-full px-5">
              {/* <button className=" py-6 h-[30px] w-fit sm:h-[40px] bg-white/50 flex gap-x-3 px-5 justify-center items-center rounded-[10px]">
                <img className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]" src={Google} alt="" />
                <p className="text-[12px] md:text-[16px]">Masuk dengan akun google</p>
              </button> */}
              {/* <button className=" w-[100px] py-6 h-[30px] sm:w-full sm:h-[40px] bg-white/30 flex justify-center items-center rounded-[10px]">
                <img className="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]" src={Facebook} alt="" />
              </button> */}
            </div>

            <div className="mb-3">
              <p className="text-[14px] md:text-[16px]">
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
