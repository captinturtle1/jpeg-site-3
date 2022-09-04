import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Image from 'next/image'
import NextLink from 'next/link'

const Navbar = ({ toggle }) => {

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 230) {
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
        <nav className={scrollNav === true ? "z-20 fixed top-0 left-0 right-0 mx-5 lg:mx-20 mt-5 flex items-center justify-between flex-wrap bg-gray-700 py-6 px-10 ease-out duration-300 bg-opacity-80 backdrop-blur-lg rounded-full select-none" : "z-20 fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-gray-700 p-6 bg-opacity-0 ease-out duration-300 select-none"}>
            <div onClick={toggleHome} className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
                <img className="fill-current h-8 w-8 mr-2 rounded-xl" src={"pinksquare.png"}/>
                <span className={scrollNav === true ? "font-semibold text-xl tracking-tight mr-4" : "hidden"}>Abyss</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={toggle} className={scrollNav === true ? "flex items-center px-3 py-2 border rounded text-slate-400 border-slate-400 hover:text-white hover:border-white" : "flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200"}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={scrollNav === true ? "transition-all w-full hidden flex-grow lg:flex lg:items-center lg:w-auto text-xl text-gray-200" : "transition-all w-full hidden lg:flex lg:items-center lg:w-auto text-xl text-white"}>
                <div className="">
                  <Link activeClass="underline decoration-blue-300 decoration-4 underline-offset-[28px] " to="About" spy={true} smooth={true} offset={0} duration={800} className={scrollNav === true ? "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10 cursor-pointer" : "block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-10 cursor-pointer"}>
                    About
                  </Link>
                  <Link activeClass="underline decoration-blue-300 decoration-4 underline-offset-[28px]" to="Tools" spy={true} smooth={true} offset={0} duration={800} className={scrollNav === true ? "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10 cursor-pointer" : "block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-10 cursor-pointer"}>
                    Tools
                  </Link>
                  <Link activeClass="underline decoration-blue-300 decoration-4 underline-offset-[28px]" to="Success" spy={true} smooth={true} offset={0} duration={800} className={scrollNav === true ? "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10 cursor-pointer" : "block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-10 cursor-pointer"}>
                    Success
                  </Link>
                  <Link activeClass="underline decoration-blue-300 decoration-4 underline-offset-[28px]" to="Team" spy={true} smooth={true} offset={0} duration={800} className={scrollNav === true ? "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10 cursor-pointer" : "block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-10 cursor-pointer"}>
                    Team
                  </Link>
                  <Link activeClass="underline decoration-blue-300 decoration-4 underline-offset-[28px]" to="Faq" spy={true} smooth={true} offset={0} duration={800} className={scrollNav === true ? "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10 cursor-pointer" : "block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-10 cursor-pointer"}>
                    Faq
                  </Link>
                </div>
            </div>
            <div className="hidden lg:block">
              <NextLink href="/dashboard">
                <a className="transition-all inline-block text-md px-4 py-2 leading-none rounded text-white bg-blue-300 hover:bg-blue-400 drop-shadow hover:drop-shadow-sm">Dashboard</a>
              </NextLink>
            </div>
        </nav>
    );
}

export default Navbar;