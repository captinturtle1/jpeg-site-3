import React, { useState, useEffect } from 'react';

import Image from 'next/image'
import bg from '../public/bg0.png'
import squid from '../public/passText.png'

import { Link, animateScroll as scroll } from 'react-scroll';

const Landing = () => {
  return (
    <div className="flex relative justify-center h-[970px] bg-gray-900" id="Landing">
      <div className="bottom-0 absolute z-[3] translate-y-[6.9px]">
        <Image quality={100} src={bg}/>
      </div>
      <div className="z-[4] grid grid-cols-1 h-[900px] lg:grid-cols-2 gap-20">
        <div className="m-auto w-[650px] flex justify-center drop-shadow-[15px_10px_10px_rgba(0,0,0,0.4)]">
          <div>
            <Image src={squid}/>
          </div>
        </div>
        <div className="m-auto">
          <div className="text-7xl font-bold pb-8">Into the abyss</div>
          <div className="max-w-[700px] text-2xl pb-8">A private collective of skilled traders and investors navigating the web3 space. Membership passes grant access to all community benefits while active. Each membership runs on a 30 day renewal system and can be managed at anytime via our dashboard.</div>
          <div className="max-w-[700px] text-2xl pb-8">Membership passes grant access to all community benefits while active. Each membership runs on a 30 day renewal system and can be managed at anytime via our dashboard.</div>
          <button className="transition-all inline-block text-2xl px-6 py-3 leading-none rounded font-bold text-white bg-blue-500 hover:bg-blue-400 drop-shadow hover:drop-shadow-sm">Apply</button>
          <button className="ml-6 transition-all inline-block text-2xl px-6 py-3 mb-3 leading-none rounded font-bold text-white bg-blue-500 hover:bg-blue-400 drop-shadow hover:drop-shadow-sm">Buy Pass</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;