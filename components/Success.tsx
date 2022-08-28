import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

import aliensIcon from "../public/8liens.gif"

const Success = () => {
    return (
        <div className="flex justify-center items-center h-[1000px] bg-gray-300 z-[1]" id="Success">
          <img className="object-cover lg:object-fill h-[1000px] w-full absolute z-[2]" src="bg3.png"></img>
          <div className="z-[4]">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="w-[500px] h-[650px] drop-shadow-2xl"
          >
            <SwiperSlide className="rounded-xl bg-slate-800 p-10">
              <div className="grid grid-cols-2 gap-12">
                <img src={aliensIcon.src} className="w-[200px]"/>
                <h1 className="my-auto text-xl lg:text-6xl font-bold">8liens</h1>
                <h1 className="text-3xl">Buy in:</h1>
                <h1 className="text-3xl">10 E</h1>
                <h1 className="text-3xl">Sell:</h1>
                <h1 className="text-3xl">100 E</h1>
              </div>
              <p className="text-[1rem] pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl bg-slate-800 p-10">
              <div className="grid grid-cols-2 gap-12">
                <img src={aliensIcon.src} className="w-[200px]"/>
                <h1 className="my-auto text-xl lg:text-6xl font-bold">8liens</h1>
                <h1 className="text-3xl">Buy in:</h1>
                <h1 className="text-3xl">10 E</h1>
                <h1 className="text-3xl">Sell:</h1>
                <h1 className="text-3xl">100 E</h1>
              </div>
              <p className="text-[1rem] pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl bg-slate-800 p-10">
              <div className="grid grid-cols-2 gap-12">
                <img src={aliensIcon.src} className="w-[200px]"/>
                <h1 className="my-auto text-xl lg:text-6xl font-bold">8liens</h1>
                <h1 className="text-3xl">Buy in:</h1>
                <h1 className="text-3xl">10 E</h1>
                <h1 className="text-3xl">Sell:</h1>
                <h1 className="text-3xl">100 E</h1>
              </div>
              <p className="text-[1rem] pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl bg-slate-800 p-10">
              <div className="grid grid-cols-2 gap-12">
                <img src={aliensIcon.src} className="w-[200px]"/>
                <h1 className="my-auto text-xl lg:text-6xl font-bold">8liens</h1>
                <h1 className="text-3xl">Buy in:</h1>
                <h1 className="text-3xl">10 E</h1>
                <h1 className="text-3xl">Sell:</h1>
                <h1 className="text-3xl">100 E</h1>
              </div>
              <p className="text-[1rem] pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl bg-slate-800 p-10">
              <div className="grid grid-cols-2 gap-12">
                <img src={aliensIcon.src} className="w-[200px]"/>
                <h1 className="my-auto text-xl lg:text-6xl font-bold">8liens</h1>
                <h1 className="text-3xl">Buy in:</h1>
                <h1 className="text-3xl">10 E</h1>
                <h1 className="text-3xl">Sell:</h1>
                <h1 className="text-3xl">100 E</h1>
              </div>
              <p className="text-[1rem] pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
    );
}

export default Success;