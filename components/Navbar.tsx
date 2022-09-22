import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Image from 'next/image'
import NextLink from 'next/link'
import logo from '../public/logo.png'

import Opensea from '../public/opensea.svg'
import X2y2 from '../public/x2y2.svg'
import Looksrare from '../public/looksrare.svg'



const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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

  const handleSetActive = (activeNum) => {
    setActiveSection(activeNum);
  };
  

    return (
        <nav className={isOpen === true ? "z-20 fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-gray-800 py-6 px-10 ease-out bg-opacity-80 backdrop-blur-lg h-full transition-all" : (scrollNav === true ?  "h-20 z-20 fixed top-0 left-0 right-0 mx-5 lg:mx-20 mt-5 flex items-center justify-between flex-wrap bg-gray-700 py-6 px-10 ease-out transition-all bg-opacity-80 backdrop-blur-lg rounded-[100px] select-none" : "h-20 z-20 fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-gray-700 p-6 bg-opacity-0 ease-out transition-all select-none")}>
            {isOpen === false ? (
              <>
                <div className="fixed top-0 left-0 right-0 h-20 flex justify-between py-6 px-10 ease-out transition-all">
                  <Link onSetActive={() => handleSetActive(0)} to="Landing" spy={true} smooth={true} offset={0} duration={800} className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
                      <div className="fill-current h-8 w-8 mr-2 rounded-xl">
                        <Image src={logo}/>
                      </div>
                      <span className="font-semibold text-xl tracking-tight mr-4 visible">Abyss</span>
                  </Link>
                  <button onClick={toggle} className={scrollNav === true ? "flex items-center px-3 py-2 border rounded text-slate-400 border-slate-400 hover:text-white hover:border-white" : "flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200"}>
                      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                </div>
                <div className={scrollNav === true ? "transition-all w-full hidden flex-grow lg:flex lg:items-center lg:w-auto text-xl text-gray-200" : "transition-all w-full hidden lg:flex lg:items-center lg:w-auto text-xl text-white translate-x-32"}>
                    <div className="">
                      <div className={scrollNav === true ? "bg-blue-300 w-10 h-2 bottom-[10px] rounded-full transition-all delay-500" : "opacity-0 transition-all"} style={{position: "absolute", left: activeSection + 175, transition: "all .2s"}}/>
                      <Link onSetActive={() => handleSetActive(0)} to="Tools" spy={true} smooth={true} offset={0} duration={800} className={scrollNav === true ? "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10 cursor-pointer" : "block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-10 cursor-pointer"}>
                        Tools
                      </Link>
                      <Link onSetActive={() => handleSetActive(95)} to="Success" spy={true} smooth={true} offset={-100} duration={800} className={scrollNav === true ? "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10 cursor-pointer" : "block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-10 cursor-pointer"}>
                        Success
                      </Link>
                      <Link onSetActive={() => handleSetActive(193)} to="Team" spy={true} smooth={true} offset={0} duration={800} className={scrollNav === true ? "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10 cursor-pointer" : "block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-10 cursor-pointer"}>
                        Team
                      </Link>
                      <Link onSetActive={() => handleSetActive(272)} to="Faq" spy={true} smooth={true} offset={0} duration={800} className={scrollNav === true ? "block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-10 cursor-pointer" : "block mt-4 lg:inline-block lg:mt-0 hover:text-gray-300 mr-10 cursor-pointer"}>
                        Faq
                      </Link>
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-6">
                  <a href="https://opensea.io/collection/abyssfnf" className={scrollNav === true ? "fill-gray-300 hover:fill-white visible transition-all hidden xl:flex" : "invisible opacity-0 transition-all"}>
                    <svg className="h-6 w-6"><Opensea/></svg>
                  </a>
                  <a href="https://x2y2.io/collection/abyssfnf/items" className={scrollNav === true ? "fill-gray-300 hover:fill-white visible transition-all hidden xl:flex" : "invisible opacity-0 transition-all"}>
                    <svg className="h-6 w-6"><X2y2/></svg>
                  </a>
                  <a href="https://looksrare.org/collections/0xFBbB17037Fd01851ddA9FC097748EB3E52A56710" className={scrollNav === true ? "fill-gray-300 hover:fill-white visible transition-all hidden xl:flex" : "invisible opacity-0 transition-all"}>
                    <svg className="h-6 w-6"><Looksrare/></svg>
                  </a>
                  <NextLink href="/dashboard">
                    <a className="ml-6 transition-all inline-block text-md px-4 py-2 leading-none rounded text-white bg-blue-500 hover:bg-blue-400 drop-shadow hover:drop-shadow-sm">Dashboard</a>
                  </NextLink>
                </div>
              </>
            ):(
              <>
                <div className="fixed top-0 left-0 right-0 h-20 flex justify-between py-6 px-10 ease-out transition-all">
                  <Link onClick={toggle} onSetActive={() => handleSetActive(0)} to="Landing" spy={true} smooth={true} offset={0} duration={800} className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
                      <div className="fill-current h-8 w-8 mr-2 rounded-xl">
                        <Image src={logo}/>
                      </div>
                      <span className={isOpen === true ? "font-semibold text-xl tracking-tight mr-4 visible" : "invisible"}>Abyss</span>
                  </Link>
                  <button onClick={toggle} className={scrollNav === true ? "flex items-center px-3 py-2 border rounded text-slate-400 border-slate-400 hover:text-white hover:border-white" : "flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200"}>
                      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                </div>
                <div className={isOpen === true ? "transition-all w-full items-center text-4xl flex flex-col gap-8 opacity-100" : "transition-all opacity-0"}>
                    <Link onClick={toggle} onSetActive={() => handleSetActive(0)} to="Tools" spy={true} smooth={true} offset={0} duration={800} className="text-white hover:text-gray-300 cursor-pointer">
                      Tools
                    </Link>
                    <Link onClick={toggle} onSetActive={() => handleSetActive(95)} to="Success" spy={true} smooth={true} offset={-100} duration={800} className="text-white hover:text-gray-300 cursor-pointer">
                      Success
                    </Link>
                    <Link onClick={toggle} onSetActive={() => handleSetActive(193)} to="Team" spy={true} smooth={true} offset={0} duration={800} className="text-white hover:text-gray-300 cursor-pointer">
                      Team
                    </Link>
                    <Link onClick={toggle} onSetActive={() => handleSetActive(272)} to="Faq" spy={true} smooth={true} offset={0} duration={800} className="text-white hover:text-gray-300 cursor-pointer mb-10">
                      Faq
                    </Link>
                    <NextLink href="/dashboard">
                      <a className="transition-all inline-block text-xl px-4 py-2 leading-none rounded text-white bg-blue-500 hover:bg-blue-400 drop-shadow hover:drop-shadow-sm">Dashboard</a>
                    </NextLink>
                    <div className="flex items-center gap-6">
                      <a href="https://opensea.io/collection/abyssfnf" className="fill-gray-300 hover:fill-white visible transition-all xl:flex">
                        <svg className="h-6 w-6"><Opensea/></svg>
                      </a>
                      <a href="https://x2y2.io/collection/abyssfnf/items" className="fill-gray-300 hover:fill-white visible transition-all flex">
                        <svg className="h-6 w-6"><X2y2/></svg>
                      </a>
                      <a href="https://looksrare.org/collections/0xFBbB17037Fd01851ddA9FC097748EB3E52A56710" className="fill-gray-300 hover:fill-white visible transition-all xl:flex">
                        <svg className="h-6 w-6"><Looksrare/></svg>
                      </a>
                  </div>
                </div>
              </>
            )}
        </nav>
    );
}

export default Navbar;