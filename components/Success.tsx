import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import React, { useState, useEffect } from 'react';

import aliensIcon from "../public/8liens.gif"

const Success = () => {
    return (
        <div className="flex justify-center h-[1000px] bg-gray-300 z-[1]" id="Success">
          <img className="object-cover lg:object-fill h-[1000px] w-full absolute z-[2]" src="bg3.png"></img>
          <div className="m-auto z-[4] grid grid-cols-1 gap-10">
            <div className="grid grid-cols-3 w-[1500px] p-5 bg-opacity-50 bg-white">
              <div className="bg-slate-800 p-10 w-[500px] rounded-3xl m-10 lg:m-auto">
                <div className="grid grid-cols-2 gap-10">
                  <img src={aliensIcon.src} className="w-[200px]"/>
                  <h1 className="my-auto text-xl lg:text-6xl font-bold">8liens</h1>
                  <h1 className="text-3xl">Buy in:</h1>
                  <h1 className="text-3xl">10 E</h1>
                  <h1 className="text-3xl">Sell:</h1>
                  <h1 className="text-3xl">100 E</h1>
                </div>
                <p className="text-[1rem] pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="bg-slate-800 p-10 w-[500px] rounded-3xl m-10 lg:m-auto">
                <div className="grid grid-cols-2 gap-10">
                  <img src={aliensIcon.src} className="w-[200px]"/>
                  <h1 className="my-auto text-xl lg:text-6xl font-bold">8liens</h1>
                  <h1 className="text-3xl">Buy in:</h1>
                  <h1 className="text-3xl">10 E</h1>
                  <h1 className="text-3xl">Sell:</h1>
                  <h1 className="text-3xl">100 E</h1>
                </div>
                <p className="text-[1rem] pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="bg-slate-800 p-10 w-[500px] rounded-3xl m-10 lg:m-auto">
                <div className="grid grid-cols-2 gap-10">
                  <img src={aliensIcon.src} className="w-[200px]"/>
                  <h1 className="my-auto text-xl lg:text-6xl font-bold">8liens</h1>
                  <h1 className="text-3xl">Buy in:</h1>
                  <h1 className="text-3xl">10 E</h1>
                  <h1 className="text-3xl">Sell:</h1>
                  <h1 className="text-3xl">100 E</h1>
                </div>
                <p className="text-[1rem] pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="bg-slate-800 p-10 w-[500px] rounded-3xl m-10 lg:m-auto">
                <div className="grid grid-cols-2 gap-10">
                  <img src={aliensIcon.src} className="w-[200px]"/>
                  <h1 className="my-auto text-xl lg:text-6xl font-bold">8liens</h1>
                  <h1 className="text-3xl">Buy in:</h1>
                  <h1 className="text-3xl">10 E</h1>
                  <h1 className="text-3xl">Sell:</h1>
                  <h1 className="text-3xl">100 E</h1>
                </div>
                <p className="text-[1rem] pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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