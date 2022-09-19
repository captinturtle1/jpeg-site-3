import React, { useState, useEffect } from 'react';

import Image from 'next/image'
import bg from '../public/bg0.png'

const Landing = () => {
  return (
    <div className="flex relative justify-center h-[85vh] bg-gray-900 z-[1]" id="Landing">
      <div className="bottom-0 absolute z-[3] translate-y-[6.9px]">
        <Image quality={100} src={bg}/>
      </div>
      <h1 className="hidden md:flex mt-[18vh] text-[15vw] font-bold drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)] z-[2] text-white">
        ABYSS
      </h1>
      <div className="md:hidden mt-[30vh] text-[20vw] xl:text-[14rem] font-bold drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)] z-[2] text-white">
        <h1>ABYSS</h1>
      </div>
    </div>
  );
}

export default Landing;