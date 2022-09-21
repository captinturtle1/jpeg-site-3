import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import nftnerdsExample from "../public/tools1.png"
import zetaExample from "../public/tools2.png"
import degenmintExample from "../public/tools3.png"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import bg from '../public/bg2.png'

import fomoAlert from '../public/fomoalerts.png'
import followAlerts from '../public/followalerts.png'
import contractScraper from '../public/contractscraper.png'
import mintScraper from '../public/mintscraper.png'
import raffleScraper from '../public/rafflescraper.png'

import azuki from '../public/azuki.jpg'
import CloneX from '../public/CloneX.png'
import doodles from '../public/doodles.jpg'
import moonbirds from '../public/moonbirds.png'
import parallel from '../public/parallel.png'

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";



// 0 = image, 1 = title, 2 = desc
const nftnerdsDesc: any = [nftnerdsExample, "NFTNerds.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."];
const zetaDesc: any = [zetaExample, "Zeta.", "Aliquam faucibus purus in massa tempor. Aenean sed adipiscing diam donec adipiscing tristique risus. Velit egestas dui id ornare."];
const degenmintDesc: any = [degenmintExample, "Degen Mint.", "Nullam ac tortor vitae purus faucibus ornare suspendisse. Risus pretium quam vulputate dignissim suspendisse in est."];

const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>A</button>
  );
};

const Tools = () => {
  const [example, setExample] = useState(nftnerdsDesc);
  const [exampleCount, setExampleCount] = useState(0);

  //changes card information depending on exampleCount
  const updateImage = () => {
    if (exampleCount == 0) {
      setExample(nftnerdsDesc);
    } else if (exampleCount == 1) {
      setExample(zetaDesc);
    } else if (exampleCount == 2) {
      setExample(degenmintDesc);
    }
  };

  //cycles examplecCount up, loops back at 2
  const cycleUp = () => {
    setExampleCount(exampleCount + 1);
    if (exampleCount == 2) {
      setExampleCount(0);
    }
    updateImage();
  };

  //cycles exampleCount down 1, loops back at 0
  const cycleDown = () => {
    setExampleCount(exampleCount - 1);
    if (exampleCount == 0) {
      setExampleCount(2);
    }
    updateImage();
  };

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
                className="w-[1500px] rounded-3xl select-none m-auto drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]"
              >
                <SwiperSlide>
                  <div className="bg-slate-800 h-[600px] rounded-3xl flex flex-col">
                    <div className="w-full h-10 flex-grow text-5xl flex rounded-t-3xl">
                      <Image src={fomoAlert} className="rounded-t-3xl"/>
                    </div>
                    <div className="w-full h-32 text-5xl flex bg-400-800 rounded-b-3xl bg-slate-800 p-4">
                      <div className="m-auto text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 h-[600px] rounded-3xl flex flex-col">
                    <div className="w-full h-10 flex-grow text-5xl flex rounded-t-3xl">
                      <Image src={followAlerts} className="rounded-t-3xl"/>
                    </div>
                    <div className="w-full h-32 text-5xl flex bg-400-800 rounded-b-3xl bg-slate-800 p-4">
                      <div className="m-auto text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 h-[600px] rounded-3xl flex flex-col">
                    <div className="w-full h-10 flex-grow text-5xl flex rounded-t-3xl">
                      <Image src={contractScraper} className="rounded-t-3xl"/>
                    </div>
                    <div className="w-full h-32 text-5xl flex bg-400-800 rounded-b-3xl bg-slate-800 p-4">
                      <div className="m-auto text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 h-[600px] rounded-3xl flex flex-col">
                    <div className="w-full h-10 flex-grow text-5xl flex rounded-t-3xl">
                      <Image src={mintScraper} className="rounded-t-3xl"/>
                    </div>
                    <div className="w-full h-32 text-5xl flex bg-400-800 rounded-b-3xl bg-slate-800 p-4">
                      <div className="m-auto text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-slate-800 h-[600px] rounded-3xl flex flex-col">
                    <div className="w-full h-10 flex-grow text-5xl flex rounded-t-3xl">
                      <Image src={raffleScraper} className="rounded-t-3xl"/>
                    </div>
                    <div className="w-full h-32 text-5xl flex bg-400-800 rounded-b-3xl bg-slate-800 p-4">
                      <div className="m-auto text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
          </div>
        </div>
    );
}

export default Tools;