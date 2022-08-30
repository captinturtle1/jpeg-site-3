import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation } from "swiper";

const Team = () => {
    return (
        <div className="flex justify-center h-[900px] bg-gray-400 z-[1]" id="Team">
          <img className="object-cover lg:object-fill h-[901px] w-full absolute z-[2]" src="bg4.png"></img>
          {/*
          <div className="z-[4] grid">
            <div className="grid">
              <h1 className="text-4xl lg:text-6xl font-bold h-[3px] m-auto">Meet Our Team</h1>
              <div className="h-[3px] bg-white w-80 lg:w-[500px] m-auto hidden sm:block"></div>
            </div>
          <div className="mt-16 lg:m-auto grid grid-cols-2 lg:grid-cols-6 lg:gap-10">
            <div>
              <a href="https://twitter.com/HeyDody">
                <div className="px-10  drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                  <img className="w-[100px] lg:w-[150px] rounded-full" src="dody.png"></img>
                  <div className="text-center font-bold text-3xl py-3">Dody</div>
                  <div className="text-center text-sm xl:text-xl">Owner</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/0x_Dylan">
                <div className="px-10  drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                  <img className="w-[100px] lg:w-[150px] rounded-full" src="dylan.png"></img>
                  <div className="text-center font-bold text-3xl py-3">Dylan</div>
                  <div className="text-center text-sm xl:text-xl">Owner</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/Yashatoshi">
                <div className="px-10  drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                  <img className="w-[100px] lg:w-[150px] rounded-full" src="yasha.png"></img>
                  <div className="text-center font-bold text-3xl py-3">Yasha</div>
                  <div className="text-center text-sm xl:text-xl">Owner</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/its_Zoid">
                <div className="px-10  drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                  <img className="w-[100px] lg:w-[150px] rounded-full" src="zoid.png"></img>
                  <div className="text-center font-bold text-3xl py-3">Zoid</div>
                  <div className="text-center text-sm xl:text-xl">Market Guru</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/foxninjac71">
                <div className="px-10  drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                  <img className="w-[100px] lg:w-[150px] rounded-full m-auto" src="captinturtle.png"></img>
                  <div className="text-center font-bold text-3xl py-3">Turtle</div>
                  <div className="text-center text-sm xl:text-xl">Dev</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="https://twitter.com/chiefnquach">
                <div className="px-10  drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                  <img className="w-[100px] lg:w-[150px] rounded-full m-auto" src="chiefnquach.png"></img>
                  <div className="text-center font-bold text-3xl py-3">Chief</div>
                  <div className="text-center text-sm xl:text-xl">Collab Manager</div>
                  <div className="flex justify-center pb-5">
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>*/}
        <div className="z-[3]">
          <Swiper
            effect={"flip"}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
            navigation={true}
          >
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/Yashatoshi">
                  <div className="flex px-10 h-[380px] drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <a href="https://twitter.com/Yashatoshi">
                  <div className="px-10 h-[380px] drop-shadow-[0px_10px_20px_rgba(0,0,0,1)] hover:drop-shadow-[0px_5px_20px_rgba(0,0,0,1)] transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <img className="w-[100px] lg:w-[150px] rounded-full" src="yasha.png"></img>
                    <div className="text-center font-bold text-3xl py-3">Yasha</div>
                    <div className="text-center text-sm xl:text-xl">Owner</div>
                    <div className="flex justify-center pb-5">
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
}

export default Team;