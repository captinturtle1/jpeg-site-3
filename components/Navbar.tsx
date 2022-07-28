import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {

const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  

    return (
        <nav className={scrollNav === true ? "fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-teal-400 p-6 ease-out duration-300 bg-opacity-80 backdrop-blur-lg" : "fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-opacity-0 ease-out duration-300"}>
            <div onClick={toggleHome} className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
                <img className="fill-current h-8 w-8 mr-2" width="54" height="54" src={"pinksquare.png"}/>
                <span className="font-semibold text-xl tracking-tight mr-4">NFTEZY</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={toggle} className={scrollNav === true ? "flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" : "flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200"}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={scrollNav === true ? "transition-all w-full hidden flex-grow lg:flex lg:items-center lg:w-auto text-xl text-teal-200" : "transition-all w-full hidden lg:flex lg:items-center lg:w-auto text-xl text-white"}>
                <div className="">
                    <a href="#responsive-header" className={scrollNav === true ? "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10" : "block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200 mr-10"}>
                      Docs
                    </a>
                    <a href="#responsive-header" className={scrollNav === true ? "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10" : "block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200 mr-10"}>
                      Examples
                    </a>
                    <a href="#responsive-header" className={scrollNav === true ? "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10" : "block mt-4 lg:inline-block lg:mt-0 hover:text-gray-200 mr-10"}>
                      Blog
                    </a>
                </div>
            </div>
            <div className="hidden lg:block">
                <a href="/dashboard" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Dashboard</a>
            </div>
        </nav>
    );
}

export default Navbar;