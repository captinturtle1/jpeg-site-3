import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import React, { useState, useEffect } from 'react';

import aliensIcon from "../public/8liens.gif"

const Success = () => {
    return (
        <div className="flex justify-center h-[800px] lg:h-screen bg-gray-300 z-[1]" id="Success">
          <img className="object-cover lg:object-fill h-[800px] lg:h-full w-full absolute z-[2]" src="bg3.png"></img>
          <div className="m-auto z-[4] grid grid-cols-1 gap-10">
            <div className="bg-slate-800 p-10 max-w-lg rounded-3xl m-10 lg:m-auto">
              <div className="flex gap-10">
                <img src={aliensIcon.src} className="w-[200px]"/>
                <h1 className="m-auto text-xl lg:text-6xl font-bold">8liens</h1>
              </div>
              <div className="mt-10 flex text-3xl font-light">
                <h1 className="">
                  Buy in:
                </h1>
                <h1 className="m-auto">
                  10 E
                </h1>
              </div>
              <div className="mt-10 flex text-3xl font-light">
                <h1 className="">
                  Sell:
                </h1>
                <h1 className="m-auto">
                  100 E
                </h1>
              </div>
            </div>
            <div className="flex justify-center text-white z-[4] gap-20 text-[30px] select-none">
              <AiOutlineLeft className="hover:text-gray-300 cursor-pointer"/>
              <AiOutlineRight className="hover:text-gray-300 cursor-pointer"/>
            </div>
          </div>
        </div>
    );
}

export default Success;