import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { ParallaxProvider } from 'react-scroll-parallax';

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Landing from '../components/Landing'
import About from '../components/About'
import Tools from '../components/Tools'
import Success from '../components/Success'
import Team from '../components/Team'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Background from '../components/Background'

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ParallaxProvider>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Landing/>
        <About/>
        <Tools/>
        <Success/>
        <Team/>
        <Faq/>
        <Footer/>
      </ParallaxProvider>
    </>
  )
}

export default Home
