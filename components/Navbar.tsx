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
  const [scrollNavOpacity, setScrollNavOpacity] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeNav = () => {
    if (window.scrollY >= 230) {
      setScrollNav(true);
      setScrollNavOpacity(100);
    } else {
      setScrollNav(false);
      setScrollNavOpacity(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const handleSetActive = (activeNum) => {
    setActiveSection(activeNum);
  };
  

  return (
    <nav className={isOpen === true ? "z-20 fixed top-0 left-0 right-0 flex items-center justify-between flex-col bg-gray-800 py-6 px-10 ease-out bg-opacity-80 backdrop-blur-lg h-[95vh] transition-all m-5 rounded-[35px]" : (scrollNav === true ?  "h-20 z-20 fixed top-0 left-0 right-0 mx-5 lg:mx-20 mt-5 flex items-center justify-between flex-wrap bg-gray-700 py-6 px-10 ease-out transition-all bg-opacity-80 backdrop-blur-lg rounded-[35px] select-none" : "h-20 z-20 fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap bg-gray-700 p-6 bg-opacity-0 ease-out transition-all select-none")}>
      <div className="fixed top-0 left-0 flex w-full py-6 px-10">
        <Link onSetActive={() => handleSetActive(0)} to="Landing" spy={true} smooth={true} offset={0} duration={800} className="flex flex-none items-center flex-shrink-0 text-white mr-6 cursor-pointer">
          <div className="fill-current h-8 w-8 mr-2 rounded-xl">
            <Image src={logo}/>
          </div>
          <span className="font-semibold text-xl tracking-tight mr-4 visible">Abyss</span>
        </Link>
        <div className="grow"/>
        <button onClick={toggle} className={scrollNav === true ? "flex-none lg:hidden px-3 py-2 border rounded text-slate-400 border-slate-400 hover:text-white hover:border-white" : "flex-none lg:hidden items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200"}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-[131px]"/>
      <div className={isOpen === true ? "transition-all flex-grow flex items-center text-gray-200 visible opacity-100" : (scrollNav === true ? "transition-all flex-grow flex items-center w-auto text-xl text-gray-200 invisible lg:visible opacity-0 lg:opacity-100 h-0 lg:h-auto" : "transition-all flex items-center w-auto text-xl text-white lg:translate-x-[120px] invisible lg:visible opacity-0 lg:opacity-100 h-0 lg:h-auto")}>
        <div className="bg-blue-300 w-10 h-2 bottom-[10px] rounded-full invisible lg:visible" style={{opacity: scrollNavOpacity, position: "absolute", left: activeSection + 175, transition: "all .2s"}}/>
        <div className="z-[1] flex lg:block flex-col items-center gap-8 lg:gap-0 text-4xl lg:text-xl">
          <Link onSetActive={() => handleSetActive(0)} to="Tools" spy={true} smooth={true} offset={0} duration={800} className={scrollNav === true ? "hover:text-white lg:mr-10 cursor-pointer m-auto" : "hover:text-gray-300 lg:mr-10 cursor-pointer m-auto"}>
            Tools
          </Link>
          <Link onSetActive={() => handleSetActive(95)} to="Success" spy={true} smooth={true} offset={-100} duration={800} className={scrollNav === true ? "hover:text-white lg:mr-10 cursor-pointer m-auto" : "hover:text-gray-300 lg:mr-10 cursor-pointer m-auto"}>
            Success
          </Link>
          <Link onSetActive={() => handleSetActive(193)} to="Team" spy={true} smooth={true} offset={0} duration={800} className={scrollNav === true ? "hover:text-white lg:mr-10 cursor-pointer m-auto" : "hover:text-gray-300 lg:mr-10 cursor-pointer m-auto"}>
            Team
          </Link>
          <Link onSetActive={() => handleSetActive(272)} to="Faq" spy={true} smooth={true} offset={-100} duration={800} className={scrollNav === true ? "hover:text-white lg:mr-10 cursor-pointer m-auto" : "hover:text-gray-300 lg:mr-10 cursor-pointer m-auto"}>
            Faq
          </Link>
          <NextLink href="/dashboard">
            <a className="transition-all inline-block lg:hidden text-2xl px-4 py-2 leading-none rounded text-white bg-blue-500 hover:bg-blue-400 drop-shadow hover:drop-shadow-sm">Dashboard</a>
          </NextLink>
          <div className="flex lg:hidden items-center gap-6">
            <a href="https://opensea.io/collection/abyssfnf" className="fill-gray-300 hover:fill-white">
              <svg className="h-6 w-6"><Opensea/></svg>
            </a>
            <a href="https://x2y2.io/collection/abyssfnf/items" className="fill-gray-300 hover:fill-white">
              <svg className="h-6 w-6"><X2y2/></svg>
            </a>
            <a href="https://looksrare.org/collections/0xFBbB17037Fd01851ddA9FC097748EB3E52A56710" className="fill-gray-300 hover:fill-white">
              <svg className="h-6 w-6"><Looksrare/></svg>
            </a>
          </div>
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
    </nav>
  );
}

export default Navbar;