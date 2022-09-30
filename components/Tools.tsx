import { useCallback, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Image from 'next/image'
import bg from '../public/bg1.png'

import fomoAlert from '../public/fomo.jpg'
import followAlerts from '../public/follow.jpg'
import contractScraper from '../public/contract.jpg'
import mintScraper from '../public/mint.jpg'
import raffleScraper from '../public/raffle.jpg'
import calander from '../public/calendar.jpg'

import { Swiper, SwiperSlide } from "swiper/react";



const Tools = () => {
  const [swiperRef, setSwiperRef] = useState<any>();
  const [swiperRefMobile, setSwiperRefMobile] = useState<any>();


  const handleLeftClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slidePrev();
  }, [swiperRef]);

  const handleRightClick = useCallback(() => {
    if (!swiperRef) return;
    swiperRef.slideNext();
  }, [swiperRef]);


  const handleLeftClickMobile = useCallback(() => {
    if (!swiperRefMobile) return;
    swiperRefMobile.slidePrev();
  }, [swiperRefMobile]);

  const handleRightClickMobile = useCallback(() => {
    if (!swiperRefMobile) return;
    swiperRefMobile.slideNext();
  }, [swiperRefMobile]);

    return (
        <div className="flex flex-col justify-center h-[900px] lg:h-[1100px] bg-gray-200 z-[1]" id="Tools">
          <div className="object-cover lg:object-fill h-[901px] lg:h-[1101px] w-full absolute z-[2] select-none">
            <Image layout="fill" quality={100} src={bg}/>
          </div>
          <div className="z-[4] flex flex-col gap-5 h-24">
            <h1 className="text-4xl lg:text-6xl font-bold mx-auto">Our tools</h1>
            <div className="h-[3px] bg-white w-[300px] mx-auto hidden lg:block"></div>
          </div>
          <div className="z-[4] hidden lg:flex overflow-hidden drop-shadow-lg">
            <div className="m-auto">
              <div className="text-5xl text-white hover:text-gray-300 cursor-pointer" onClick={handleLeftClick}>
                <FiChevronLeft/>
              </div>
            </div>
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={170}
              loop={true}
              className="w-[1492px] rounded-3xl select-none m-auto mt-16  text-white">
              <SwiperSlide>
                <div className="bg-slate-800 w-80 xl:w-96 rounded-3xl flex flex-col pt-7">
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
                <div className="bg-slate-800 w-80 xl:w-96 rounded-3xl flex flex-col pt-7">
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
                <div className="bg-slate-800 w-80 xl:w-96 rounded-3xl flex flex-col pt-7">
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
                <div className="bg-slate-800 w-80 xl:w-96 rounded-3xl flex flex-col pt-7">
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
                <div className="bg-slate-800 w-80 xl:w-96 rounded-3xl flex flex-col pt-7">
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
                <div className="bg-slate-800 w-80 xl:w-96 rounded-3xl flex flex-col pt-7">
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
            <div className="m-auto">
              <div className="text-5xl text-white hover:text-gray-300 cursor-pointer" onClick={handleRightClick}>
                <FiChevronRight/>
              </div>
            </div>
          </div>
          <div className="z-[4] flex lg:hidden overflow-hidden drop-shadow-xl">
            <div className="m-auto">
              <div className="text-5xl text-white active:text-gray-300 cursor-pointer" onClick={handleLeftClickMobile}>
                <FiChevronLeft/>
              </div>
            </div>
            <Swiper
              onSwiper={setSwiperRefMobile}
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={120}
              loop={true}
              className="w-64 md:w-96 rounded-3xl select-none text-white">
              <SwiperSlide>
                <div className="bg-slate-800 w-64 md:w-96 rounded-3xl flex flex-col">
                  <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                    <Image src={fomoAlert} className="rounded-3xl"/>
                  </div>
                  <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                    <div className="text-[1.2rem] font-bold pb-4">FOMO Alerts</div>
                    <div className="text-[1rem] h-26">FOMO alerts are extremely useful and will notify you based on different market conditions surrounding trending projects.</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-slate-800 w-64 md:w-96 rounded-3xl flex flex-col">
                  <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                    <Image src={followAlerts} className="rounded-3xl"/>
                  </div>
                  <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                    <div className="text-[1.2rem] font-bold pb-4">Follow Alerts</div>
                    <div className="text-[1rem] h-26">Follow alerts will show you who important figures are following and can be useful for finding new projects before they blow up.</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-slate-800 w-64 md:w-96 rounded-3xl flex flex-col">
                  <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                    <Image src={contractScraper} className="rounded-3xl"/>
                  </div>
                  <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                    <div className="text-[1.2rem] font-bold pb-4">Contract Alerts</div>
                    <div className="text-[1rem] h-26">Contract alerts makes sure you have access to any lowkey mints or stealth drops that fly under the radar since not every mint is announced.</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-slate-800 w-64 md:w-96 rounded-3xl flex flex-col">
                  <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                    <Image src={mintScraper} className="rounded-3xl"/>
                  </div>
                  <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                    <div className="text-[1.2rem] font-bold pb-4">Mint Alerts</div>
                    <div className="text-[1rem] h-26">Mint alerts will let you know when a new project has begun minting or when and older project gains some traction and begins to sell out.</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-slate-800 w-64 md:w-96 rounded-3xl flex flex-col">
                  <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                    <Image src={raffleScraper} className="rounded-3xl"/>
                  </div>
                  <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                    <div className="text-[1.2rem] font-bold pb-4">Raffle Alerts</div>
                    <div className="text-[1rem] h-26">Raffle alerts will ensure you never miss another whitelist opportunity whether its on premint, superful, discord, twitter, you name it.</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-slate-800 w-64 md:w-96 rounded-3xl flex flex-col">
                  <div className="flex-grow text-5xl rounded-t-3xl m-auto">
                    <Image src={calander} className="rounded-3xl"/>
                  </div>
                  <div className="flex flex-wrap w-full text-5xl bg-400-800 rounded-b-3xl bg-slate-800 pt-6 p-8">
                    <div className="text-[1.2rem] font-bold pb-4">Daily Calendar</div>
                    <div className="text-[1rem] h-26">A daily list that is meant to serve as a quick guide for new projects minting from day to day and is updated regularly.</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="m-auto">
              <div className="text-5xl text-white active:text-gray-300 cursor-pointer" onClick={handleRightClickMobile}>
                <FiChevronRight/>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Tools;