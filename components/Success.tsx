import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import React, { useState, useEffect } from 'react';

import Image from 'next/image'
import bg from '../public/bg2.png'

import azuki from '../public/azuki.jpg'
import CloneX from '../public/CloneX.png'
import doodles from '../public/doodles.jpg'
import moonbirds from '../public/moonbirds.png'
import parallel from '../public/parallel.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

const Success = () => {
    return (
        <div className="flex justify-center items-center h-[800px] bg-gray-300 z-[1] overflow-hidden" id="Success">
          <div className="object-cover lg:object-fill h-[802px] w-full absolute z-[2] select-none">
            <Image layout="fill" quality={100} src={bg}/>
          </div>
          <div className="z-[4] text-white">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="w-[250px] lg:w-[400px] drop-shadow-2xl"
            >
              <SwiperSlide>
                <div className="flex flex-col">
                  <Image src={azuki} className="rounded-t-3xl"/>
                  <div className="grid gap-y-6 bg-slate-800 rounded-b-3xl pb-12">
                    <h1 className="my-auto text-4xl font-bold m-auto col-span-2 pt-6">Azuki</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Buy in:</h1>
                    <h1 className="text-2xl ml-6">10 E</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Sell:</h1>
                    <h1 className="text-2xl ml-6">1,000 E</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col">
                  <Image src={CloneX} className="rounded-t-3xl"/>
                  <div className="grid gap-y-6 bg-slate-800 rounded-b-3xl pb-12">
                    <h1 className="my-auto text-4xl font-bold m-auto col-span-2 pt-6">Azuki</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Buy in:</h1>
                    <h1 className="text-2xl ml-6">10 E</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Sell:</h1>
                    <h1 className="text-2xl ml-6">1,000 E</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col">
                  <Image src={doodles} className="rounded-t-3xl"/>
                  <div className="grid gap-y-6 bg-slate-800 rounded-b-3xl pb-12">
                    <h1 className="my-auto text-4xl font-bold m-auto col-span-2 pt-6">Azuki</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Buy in:</h1>
                    <h1 className="text-2xl ml-6">10 E</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Sell:</h1>
                    <h1 className="text-2xl ml-6">1,000 E</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col">
                  <Image src={moonbirds} className="rounded-t-3xl"/>
                  <div className="grid gap-y-6 bg-slate-800 rounded-b-3xl pb-12">
                    <h1 className="my-auto text-4xl font-bold m-auto col-span-2 pt-6">Azuki</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Buy in:</h1>
                    <h1 className="text-2xl ml-6">10 E</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Sell:</h1>
                    <h1 className="text-2xl ml-6">1,000 E</h1>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col">
                  <Image src={parallel} className="rounded-t-3xl"/>
                  <div className="grid gap-y-6 bg-slate-800 rounded-b-3xl pb-12">
                    <h1 className="my-auto text-4xl font-bold m-auto col-span-2 pt-6">Azuki</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Buy in:</h1>
                    <h1 className="text-2xl ml-6">10 E</h1>
                    <h1 className="text-2xl ml-6 lg:ml-16">Sell:</h1>
                    <h1 className="text-2xl ml-6">1,000 E</h1>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
    );
}

export default Success;