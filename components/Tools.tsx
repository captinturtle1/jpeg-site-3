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
                      <div className="text-[1.2rem] font-bold pb-4">FOMO Alerts</div>
                      <div className="text-[1rem] h-16">FOMO alerts are extremely useful and will notify you based on different market conditions surrounding trending projects.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 w-96 rounded-3xl flex flex-col pt-7">
                    <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                      <Image src={followAlerts} className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                      <div className="text-[1.2rem] font-bold pb-4">Follow Alerts</div>
                      <div className="text-[1rem] h-16">Follow alerts will show you who important figures are following and can be useful for finding new projects before they blow up.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 w-96 rounded-3xl flex flex-col pt-7">
                    <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                      <Image src={contractScraper} className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                      <div className="text-[1.2rem] font-bold pb-4">Contract Alerts</div>
                      <div className="text-[1rem] h-16">Contract alerts makes sure you have access to any lowkey mints or stealth drops that fly under the radar since not every mint is announced.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 w-96 rounded-3xl flex flex-col pt-7">
                    <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                      <Image src={mintScraper} className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                      <div className="text-[1.2rem] font-bold pb-4">Mint Alerts</div>
                      <div className="text-[1rem] h-16">Mint alerts will let you know when a new project has begun minting or when and older project gains some traction and begins to sell out.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 w-96 rounded-3xl flex flex-col pt-7">
                    <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                      <Image src={raffleScraper} className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                      <div className="text-[1.2rem] font-bold pb-4">Raffle Alerts</div>
                      <div className="text-[1rem] h-16">Raffle alerts will ensure you never miss another whitelist opportunity whether its on premint, superful, discord, twitter, you name it.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 w-96 rounded-3xl flex flex-col pt-7">
                    <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                      <Image src={calander} className="rounded-3xl"/>
                    </div>
                    <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                      <div className="text-[1.2rem] font-bold pb-4">Daily Calendar</div>
                      <div className="text-[1rem] h-16">A daily list that is meant to serve as a quick guide for new projects minting from day to day and is updated regularly.</div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
          </div>
        </div>
    );
}

export default Tools;