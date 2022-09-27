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
import jr from '../public/JR96.png'

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
    <div className="flex justify-center h-[2850px] xs:h-[1750px] lg:h-[1550px] 2xl:h-[1100px] bg-gray-400 z-[1] overflow-hidden" id="Team">
      <div className="object-cover lg:object-fill h-[2851px] xs:h-[1751px] lg:h-[1551px] 2xl:h-[1101px] w-full absolute z-[2] select-none">
        <Image layout="fill" quality={100} src={bg}/>
      </div>
      <div className="z-[4] lg:mx-10 text-white">
        <div className="z-[4] flex flex-col gap-5 h-24 mt-16">
          <h1 className="text-3xl lg:text-6xl font-bold mx-auto">Meet Our Team</h1>
          <div className="h-[3px] bg-white w-[500px] mx-auto hidden lg:block"></div>
        </div>
        <div className="mt-16 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 gap-y-16 md:gap-10 md:gap-y-20">
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
                      <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Dody is an entrepreneur with a background in business management and hospitality. He's been involved in the crypto space since 2012 and has been doing NFT project analyses for over a year.</p>
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
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Dylan is a full stack developer with a decade worth of experience. He made the switch to web3 midway through 2021 and has been heavily involved in project development, analysis and more since then.</p>
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
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Yasha has been involved with NFT's the longest out of all of the owners. He got his start making plays on nifty gateway a few years ago and ever since has developed an eye for trends that others just don't see.</p>
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
                    <div className="text-center text-xl">Defi</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperButtonNext>
                <div>
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Zoid sets his focus on defi, mainly alts and meme coins instead of typical projects. He has been in the space for over a year and has a good eye for the latest trends and airdrops that could have potential.</p>
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
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Chief is a seasoned vet in the space and works as ambassador for program and collab management at Chibi Dinos. His focus is on expansion through engagement, partnerships and creating utility.</p>
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
                    <div className="text-center text-xl">Developer</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
            <SwiperButtonNext>
              <div>
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">Turtle is our in house developer and has been with us for several years. He is a well rounded, full stack developer focused on creating useful tools, writing and analyzing contracts and much more involving web3.</p>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <a href="https://twitter.com/foxninjac71" className="m-auto text-3xl">
              <FaTwitter/>
            </a>
          </Swiper>
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            allowTouchMove={false}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px] flex flex-wrap col-span-1 xs:col-span-2 lg:col-span-3 2xl:col-span-1"
          >
            <SwiperSlide>
            <SwiperButtonNext>
              <div>
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <Image src={jr} className="rounded-full"/>
                    <div className="text-center font-bold text-3xl py-3">JR</div>
                    <div className="text-center text-xl">Support</div>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <SwiperSlide>
            <SwiperButtonNext>
              <div>
                  <div className="h-[280px] lg:h-[340px] flex px-5 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <p className="text-[.8rem] lg:text-[1.1rem] m-auto text-center">JR has been involved in the NFT space for the past year and is working full time with several projects. His main focus is securing collabs and server-side support.</p>
                    <TbRotate360 className="absolute bottom-5 right-5 text-slate-700 text-xl"/>
                  </div>
                </div>
              </SwiperButtonNext>
            </SwiperSlide>
            <a href="https://twitter.com/JRLO96" className="m-auto text-3xl">
              <FaTwitter/>
            </a>
          </Swiper>
          <Swiper
            slidesPerView={1}
            effect={"flip"}
            loop={true}
            modules={[EffectFlip]}
            allowTouchMove={false}
            className="max-w-[175px] md:max-w-[200px] lg:max-w-[250px] flex-wrap hidden 2xl:flex"
          >
            <SwiperSlide>
              <div>
                  <div className="h-[280px] lg:h-[340px] px-10 drop-shadow-xl hover:drop-shadow-lg transition-all ease-out hover:translate-x-1 hover:translate-y-1 cursor-pointer bg-slate-800 rounded-xl py-8">
                    <Image src={turtle} height={1} className="invisible"/>
                    <div className="text-center font-bold text-3xl pt-20">And</div>
                    <div className="text-center font-bold text-3xl">others</div>
                  </div>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Team;