import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import nftnerdsExample from "../public/tools1.png"
import zetaExample from "../public/tools2.png"
import degenmintExample from "../public/tools3.png"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import bg from '../public/bg1.png'

import fomoAlert from '../public/fomo.jpg'
import followAlerts from '../public/follow.jpg'
import contractScraper from '../public/contract.jpg'
import mintScraper from '../public/mint.jpg'
import raffleScraper from '../public/raffle.jpg'
import calander from '../public/calendar.jpg'

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";


const Tools = () => {
  const swiper = useSwiper();
    return (
        <div className="grid justify-center h-[100vh] bg-gray-200 z-[1]" id="Tools">
          <div className="object-cover lg:object-fill h-[100vh] w-full absolute z-[2]">
            <Image layout="fill" quality={100} src={bg}/>
          </div>
          <div className="z-[4] flex">
              <Swiper 
                spaceBetween={100}
                loop={true}
                slidesPerView={3}
                className="w-[1300px] rounded-3xl select-none m-auto drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]"
              >
                <SwiperSlide>
                  <div className="bg-slate-800 w-96 rounded-3xl flex flex-col pt-7">
                    <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                      <Image src={fomoAlert} className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                      <div className="text-[1.2rem] font-bold pb-4">Lorem ipsum.</div>
                      <div className="text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 w-96 rounded-3xl flex flex-col pt-7">
                    <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                      <Image src={followAlerts} className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                      <div className="text-[1.2rem] font-bold pb-4">Lorem ipsum.</div>
                      <div className="text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 w-96 rounded-3xl flex flex-col pt-7">
                    <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                      <Image src={contractScraper} className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                      <div className="text-[1.2rem] font-bold pb-4">Lorem ipsum.</div>
                      <div className="text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 w-96 rounded-3xl flex flex-col pt-7">
                    <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                      <Image src={mintScraper} className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                      <div className="text-[1.2rem] font-bold pb-4">Lorem ipsum.</div>
                      <div className="text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 w-96 rounded-3xl flex flex-col pt-7">
                    <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                      <Image src={raffleScraper} className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                      <div className="text-[1.2rem] font-bold pb-4">Lorem ipsum.</div>
                      <div className="text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 w-96 rounded-3xl flex flex-col pt-7">
                    <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                      <Image src={calander} className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                      <div className="text-[1.2rem] font-bold pb-4">Lorem ipsum.</div>
                      <div className="text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
          </div>
        </div>
    );
}

export default Tools;