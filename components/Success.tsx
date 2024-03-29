import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import React, { useState, useEffect } from 'react';

import Image from 'next/image'
import bg from '../public/bg2.png'

import officehours from '../public/officehours.png'
import eightliens from '../public/8liens.png'
import pudgypenguins from '../public/pudgypenguins.png'
import isekai from '../public/isekai.png'
import lilpudgys from '../public/lilpudgys.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

const Success = () => {
    return (
        <div className="flex justify-center items-center h-[850px] lg:h-[1050px] bg-gray-300 z-[1] overflow-hidden" id="Success">
          <div className="object-cover lg:object-fill h-[851px] lg:h-[1051px] w-full absolute z-[2] select-none">
            <Image layout="fill" quality={100} priority={true} src={bg}/>
          </div>
          <div className="z-[4] text-white">
          <div className="z-[4] flex flex-col gap-5 h-24">
            <h1 className="text-4xl lg:text-6xl font-bold mx-auto">Past calls</h1>
            <div className="h-[3px] bg-white w-[300px] mx-auto hidden lg:block"></div>
          </div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="w-[250px] lg:w-[400px] drop-shadow-2xl mt-16"
            >
              <SwiperSlide>
                <div className="flex flex-col">
                  <Image layout="responsive" src={officehours} className="rounded-t-3xl"/>
                  <div className="grid gap-y-6 bg-slate-800 rounded-b-3xl pb-12 translate-y-[-1px]">
                    <h1 className="my-auto text-2xl lg:text-4xl font-bold m-auto col-span-2 pt-6">Office Hours</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Avg Entry:</h1>
                    <h1 className="text-2xl ml-6">0 Ξ</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Avg Exit</h1>
                    <h1 className="text-2xl ml-6">0.2 Ξ</h1>
                    <h1 className="text-2xl font-bold col-span-2 m-auto">2000% ROI</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col">
                  <Image layout="responsive" src={eightliens} className="rounded-t-3xl"/>
                  <div className="grid gap-y-6 bg-slate-800 rounded-b-3xl pb-12 translate-y-[-1px]">
                    <h1 className="my-auto text-2xl lg:text-4xl font-bold m-auto col-span-2 pt-6">8liens</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Avg Entry:</h1>
                    <h1 className="text-2xl ml-6">0.1 Ξ</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Avg Exit</h1>
                    <h1 className="text-2xl ml-6">0.4 Ξ</h1>
                    <h1 className="text-2xl font-bold col-span-2 m-auto">300% ROI</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col">
                  <Image layout="responsive" src={pudgypenguins} className="rounded-t-3xl"/>
                  <div className="grid gap-y-6 bg-slate-800 rounded-b-3xl pb-12 translate-y-[-1px]">
                    <h1 className="my-auto text-2xl lg:text-4xl font-bold m-auto col-span-2 pt-6">Pudgy Penguins</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Avg Entry:</h1>
                    <h1 className="text-2xl ml-6">1.1 Ξ</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Avg Exit</h1>
                    <h1 className="text-2xl ml-6">3.7 Ξ</h1>
                    <h1 className="text-2xl font-bold col-span-2 m-auto">236% ROI</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col">
                  <Image layout="responsive" src={isekai} className="rounded-t-3xl"/>
                  <div className="grid gap-y-6 bg-slate-800 rounded-b-3xl pb-12 translate-y-[-1px]">
                    <h1 className="my-auto text-2xl lg:text-4xl font-bold m-auto col-span-2 pt-6">Isekai</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Avg Entry:</h1>
                    <h1 className="text-2xl ml-6">0.15 Ξ</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Avg Exit</h1>
                    <h1 className="text-2xl ml-6">0.5 Ξ</h1>
                    <h1 className="text-2xl font-bold col-span-2 m-auto">233% ROI</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col">
                  <Image layout="responsive" src={lilpudgys} className="rounded-t-3xl"/>
                  <div className="grid gap-y-6 bg-slate-800 rounded-b-3xl pb-12 translate-y-[-1px]">
                    <h1 className="my-auto text-2xl lg:text-4xl font-bold m-auto col-span-2 pt-6">Lil Pudgys</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Avg Entry:</h1>
                    <h1 className="text-2xl ml-6">0.08 Ξ</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Avg Exit</h1>
                    <h1 className="text-2xl ml-6">0.25 Ξ</h1>
                    <h1 className="text-2xl font-bold col-span-2 m-auto">212% ROI</h1>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
    );
}

export default Success;