import React from "react";
import Carousel from "../components/Carousel";
import CarouselBestOffer from "../components/CarouselBestOffer";
import CarouselRekomendasi from "../components/CarouselRekomendasi";

import peralatanDapurBanner from "../images/peralatanDapur.svg";
import peralatanKebersihanBanner from "../images/peralatanKebersihan.svg";
import interiorFurnitureBanner from "../images/interiorFurniture.svg";
import elektronikBanner from "../images/elektronik.svg";
import kategoriImage from "../images/kategoriImage.svg";
import peralatanMasakLogo from "../images/peralatanMasakLogo.svg";
import aksesorisDapurLogo from '../images/aksesorisDapurLogo.svg';
import perlengkapanMasakLogo from '../images/perlengkapanMasakLogo.svg';
import interiorLogo from '../images/interiorLogo.svg';
import eksteriorLogo from '../images/eksteriorLogo.svg';
import kebersihanRumahLogo from '../images/kebersihanRumahLogo.svg';
import kebersihanDapurLogo from '../images/kebersihanDapurLogo.svg';
import kebersihanToiletLogo from '../images/kebersihanToiletLogo.svg';
import elektronikDapurLogo from '../images/elektronikDapurLogo.svg';
import elektronikKebersihanLogo from '../images/elektronikKebersihanLogo.svg';
import perangkatElektronikLogo from '../images/perangkatElektronikLogo.svg';

import kitchenwarePeralatanDapur from "../images/kitchenware-peralatanDapur.svg";
import kitchenwareElektronikDapur from "../images/kitchenware-elektronikDapur.svg";
import kitchenwareAlatMakan from "../images/kitchenware-alatMakan.svg";
import kitchenwarePenyimpananMakanan from "../images/kitchenware-penyimpananMakanan.svg";
import waLogo from "../images/waLogo.svg";

import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import jwtDecode from "jwt-decode";
import toast, { Toaster } from 'react-hot-toast';

export default function Homepage() {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state);
  const decode = token ? jwtDecode(token) : null;
  // console.log(decode ? decode.sub : "no token");

  return (
    <>
      <Carousel />

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

      <section className="font-Inter flex flex-col justify-center mt-10 gap-y-3 px-5  h-fit">
        <h2 className=" md:text-left text-center text-[30px] md:text-[40px] font-medium">Pilihan Kategori</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6   gap-3 p-2 ">
          <div className="border-2 border-gray-200 rounded-[8px] w-full h-full flex justify-center items-center">
            <img src={kategoriImage} alt="" />
          </div>
          <div className="border-2 border-gray-200 rounded-[8px] w-full h-full flex justify-center items-center">
            <img src={peralatanMasakLogo} alt="" />
          </div>
          <div className="border-2 border-gray-200 rounded-[8px] w-full h-full flex justify-center items-center">
            <img src={aksesorisDapurLogo} alt="" />
          </div>
          <div className="border-2 border-gray-200 rounded-[8px] w-full h-full flex justify-center items-center">
            <img src={perlengkapanMasakLogo} alt="" />
          </div>
          <div className="border-2 border-gray-200 rounded-[8px] w-full h-full flex justify-center items-center">
            <img src={interiorLogo} alt="" />
          </div>
          <div className="border-2 border-gray-200 rounded-[8px] w-full h-full flex justify-center items-center">
            <img src={eksteriorLogo} alt="" />
          </div>
          <div className="border-2 border-gray-200 rounded-[8px] w-full h-full flex justify-center items-center">
            <img src={kebersihanRumahLogo} alt="" />
          </div>
          <div className="border-2 border-gray-200 rounded-[8px] w-full h-full flex justify-center items-center">
            <img src={kebersihanDapurLogo} alt="" />
          </div>
          <div className="border-2 border-gray-200 rounded-[8px] w-full h-full flex justify-center items-center">
            <img src={kebersihanToiletLogo} alt="" />
          </div>
          <div className="border-2 border-gray-200 rounded-[8px] w-full h-full flex justify-center items-center">
            <img src={elektronikDapurLogo} alt="" />
          </div>
          <div className="border-2 border-gray-200 rounded-[8px] w-full h-full flex justify-center items-center">
            <img src={elektronikKebersihanLogo} alt="" />
          </div>
          <div className="border-2 border-gray-200 rounded-[8px] w-full h-full flex justify-center items-center">
            <img src={perangkatElektronikLogo} alt="" />
          </div>
          
        </div>
      </section>

      <section className="font-Inter  flex justify-center">
        <div className=" container xl:mt-10 h-fit p-5 gap-y-12 flex flex-col">
          <div>
            <h2 className="font-[500] text-center md:text-left text-[30px] md:text-[40px]">Kitchenware Weeks</h2>
          </div>
          <div className="text-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 h-fit gap-y-3  gap-x-5 ">
            <div className="flex flex-col relative  items-center  w-full rounded-[10px] cursor-pointer hover:shadow-shadow-custom-3 hover:-translate-y-2 ease-in-out duration-200">
              <img className="lg:w-full md:w-[350px] w-[250px] rounded-[10px]" src={kitchenwarePeralatanDapur} alt="" />
              <div className="absolute bottom-5 left-[50%] translate-x-[-50%] font-[700] text-[20px] md:text-[22px] xl:text-[25px] w-fit">
                <p>Peralatan Dapur</p>
              </div>
            </div>
            <div className="flex flex-col relative items-center w-full rounded-[10px] cursor-pointer hover:shadow-shadow-custom-3 hover:-translate-y-2 ease-in-out duration-200">
              <img className="lg:w-full md:w-[350px] w-[250px] rounded-[10px]" src={kitchenwareElektronikDapur} alt="" />
              <div className="absolute bottom-5 left-[50%] translate-x-[-50%] font-[700] text-[20px] md:text-[22px] xl:text-[25px] w-fit">
                <p>Elektronik Dapur</p>
              </div>
            </div>
            <div className="flex flex-col relative items-center w-full rounded-[10px] cursor-pointer hover:shadow-shadow-custom-3 hover:-translate-y-2 ease-in-out duration-200">
              <img className="lg:w-full md:w-[350px] w-[250px] rounded-[10px]" src={kitchenwareAlatMakan} alt="" />
              <div className="absolute bottom-5 left-[50%] translate-x-[-50%] font-[700] text-[20px] md:text-[22px] xl:text-[25px] w-fit">
                <p>Perlengkapan Masak</p>
              </div>
            </div>
            <div className="flex flex-col relative items-center w-full rounded-[10px] cursor-pointer hover:shadow-shadow-custom-3 hover:-translate-y-2 ease-in-out duration-200">
              <img className="lg:w-full md:w-[350px] w-[250px] rounded-[10px]" src={kitchenwarePenyimpananMakanan} alt="" />
              <div className="absolute bottom-5 left-[50%] translate-x-[-50%] font-[700] text-[20px] md:text-[22px] xl:text-[25px] w-fit">
                <p>Penyimpanan Makanan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CarouselBestOffer />

      <CarouselRekomendasi />

      <a target="_blank" href="https://api.whatsapp.com/send?phone=6282114742197&text=Halo%20Homepoint%F0%9F%99%8C%F0%9F%8F%BB%0AAda%20yang%20ingin%20Saya%20tanyakan%2C%20nih!%0A%0A(Tuliskan%20pertanyaanmu%20disini%20ya!)" rel="noopener noreferrer">
        <section className="group fixed bottom-20 right-10 w-[50px] h-[50px] z-20 transition ease-in-out delay-150 duration-300">
          <div className="invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 translate-x-[40%] group-hover:ease-in-out group-hover:duration-500 transition-all duration-300 flex justify-center items-center fixed bottom-20 right-16 w-[200px] h-[50px] bg-white font-inter font-semibold rounded-l-full z-20 shadow-shadow-custom-1">
            Hubungi Kami
          </div>
          <div className=" w-[50px] h-[50px] rounded-full bg-white shadow-shadow-custom-1 fixed bottom-20 right-10 flex items-center justify-center z-20 ">
            <img src={waLogo} alt="" />
          </div>
        </section>
      </a>
    </>
  );
}
