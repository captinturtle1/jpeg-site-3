import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import React, { useState, useEffect } from 'react';

import aliensIcon from "../public/8liens.gif"

const Success = () => {
    return (
        <div className="flex justify-center h-screen bg-gray-300 z-[1]" id="Success">
          <img className="object-cover lg:object-fill h-full w-full absolute z-[2]" src="bg3.png"></img>
          <div className="m-auto z-[4]">
            <div className="text-right bg-pink-300 p-10 max-w-lg">
              <div className="flex gap-10">
                <img src={aliensIcon.src} className="w-40"/>
                <h1 className="m-auto text-6xl font-bold">8liens</h1>
              </div>
              <div className="mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="col-span-2 flex justify-center text-white z-[4] gap-20 text-[30px] m-5">
              <AiOutlineLeft className="hover:text-gray-300 cursor-pointer"/>
              <AiOutlineRight className="hover:text-gray-300 cursor-pointer"/>
            </div>
          </div>
        </div>
    );
}

export default Success;