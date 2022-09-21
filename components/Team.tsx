import React, { useRef, useState } from "react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper, } from "swiper/react";
import { TbRotate360 } from 'react-icons/tb';
import { FaTwitter } from 'react-icons/fa';
import Image from 'next/image'

import bg from '../public/bg3.png'
import dody from '../public/dody.png'
import dylan from '../public/dylan.png'
import yasha from '../public/yasha.png'
import zoid from '../public/zoid.png'
import chief from '../public/chiefnquach.png'
import turtle from '../public/captinturtle.png'

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>{children}</button>;
};

const Team = () => {  
  return (
    <div className="flex justify-center h-[2350px] xs:h-[1250px] lg:h-[800px] bg-gray-400 z-[1] overflow-hidden" id="Team">
      <div className="object-cover lg:object-fill h-[2351px] xs:h-[1251px] lg:h-[801px] w-full absolute z-[2]">
        <Image layout="fill" quality={100} src={bg}/>
      </div>
      <div className="z-[4] lg:mx-10 text-white">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl lg:text-6xl font-bold mx-auto 2xl:mt-32">Meet Our Team</h1>
          <div className="h-[3px] bg-white w-80 lg:w-[500px] mx-auto hidden lg:block mb-32"></div>
        </div>
        <div className="mt-16 lg:m-auto grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-5 gap-y-16 md:gap-10 md:gap-y-20">
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            allowTouchMove={false}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px] flex flex-wrap"
          >
            <SwiperSlide>
              <SwiperButtonNext>
                <div>
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <Image src={dody} className="rounded-full"/>
                    <div className="text-center font-bold text-3xl py-3">Dody</div>
                    <div className="text-center text-xl">Owner</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperButtonNext>
                <div>
                    <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                      <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                    </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <a href="https://twitter.com/heydody" className="m-auto text-3xl">
              <FaTwitter/>
            </a>
          </Swiper>
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            allowTouchMove={false}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px] flex flex-wrap"
          >
            <SwiperSlide>
              <SwiperButtonNext>
                <div>
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <Image src={dylan} className="rounded-full"/>
                    <div className="text-center font-bold text-3xl py-3">Dylan</div>
                    <div className="text-center text-xl">Owner</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperButtonNext>
                <div>
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <a href="https://twitter.com/0x_Dylan" className="m-auto text-3xl">
              <FaTwitter/>
            </a>
          </Swiper>
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            allowTouchMove={false}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px] flex flex-wrap"
          >
            <SwiperSlide>
              <SwiperButtonNext>
                <div>
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <Image src={yasha} className="rounded-full"/>
                    <div className="text-center font-bold text-3xl py-3">Yasha</div>
                    <div className="text-center text-xl">Owner</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperButtonNext>
                <div>
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <a href="https://twitter.com/Yashatoshi" className="m-auto text-3xl">
              <FaTwitter/>
            </a>
          </Swiper>
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            allowTouchMove={false}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px] flex flex-wrap"
          >
            <SwiperSlide>
              <SwiperButtonNext>
                <div>
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <Image src={zoid} className="rounded-full"/>
                    <div className="text-center font-bold text-3xl py-3">Zoid</div>
                    <div className="text-center text-xl">Caller</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperButtonNext>
                <div>
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <a href="https://twitter.com/its_Zoid" className="m-auto text-3xl">
              <FaTwitter/>
            </a>
          </Swiper>
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            allowTouchMove={false}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px] flex flex-wrap"
          >
            <SwiperSlide>
              <SwiperButtonNext>
                <div>
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <Image src={chief} className="rounded-full"/>
                    <div className="text-center font-bold text-3xl py-3">Chief</div>
                    <div className="text-center text-xl">Collabs</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
            <SwiperButtonNext>
              <div>
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <a href="https://twitter.com/chiefnquach" className="m-auto text-3xl">
              <FaTwitter/>
            </a>
          </Swiper>
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            allowTouchMove={false}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px] flex flex-wrap"
          >
            <SwiperSlide>
            <SwiperButtonNext>
              <div>
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <Image src={turtle} className="rounded-full"/>
                    <div className="text-center font-bold text-3xl py-3">Turtle</div>
                    <div className="text-center text-xl">Dev</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
            <SwiperButtonNext>
              <div>
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <a href="https://twitter.com/foxninjac71" className="m-auto text-3xl">
              <FaTwitter/>
            </a>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Team;