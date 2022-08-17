import React, { useState } from 'react';

const Sidebar = ({ isOpen, toggle }) => {
    return (
            <nav className={isOpen === true ? "z-20 ease-out duration-300 fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-purple-400 p-6 bg-opacity-80 backdrop-blur-lg" : "z-20 ease-in duration-300 fixed top-[-500px] left-0 right-0 flex items-center justify-between flex-wrap bg-purple-400 p-6"}>
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img className="fill-current h-8 w-8 mr-2 rounded-xl" src={"pinksquare.png"}/>
                    <span className="font-semibold text-xl tracking-tight mr-4">Abyss</span>
                </div>
                <div className="block">
                    <button onClick={toggle} className="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-200 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="2 2 18 18" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                    </button>
                </div>
                <div className="w-full justify-center text-xl grid justify-items-center">
                    <a href="#responsive-header" className="block mt-10 text-purple-200 hover:text-white">
                      Docs
                    </a>
                    <a href="#responsive-header" className="block mt-10 text-purple-200 hover:text-white">
                      Examples
                    </a>
                    <a href="#responsive-header" className="block mt-10 text-purple-200 hover:text-white">
                      Blog
                    </a>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-500 hover:bg-white mt-10 mb-8">Dashboard</a>
                </div>
            </nav>
    );
}

export default Sidebar;