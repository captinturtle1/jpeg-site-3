import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
  return (
    <>
      <Head>
        <title>Abyss</title>
        <meta property="og:title" content="Abyss" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.abyssfnf.com/" />
        <meta property="og:image" content="https://www.abyssfnf.com/banner.png" />
        <meta property="og:description" content="A private collective of skilled traders and investors navigating the web3 space." />
        <meta name="theme-color" content="#0f172a" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar/>
      <Landing/>
      <Tools/>
      <Success/>
      <Team/>
      <Faq/>
      <Footer/>
      <Background/>
    </>
  )
}

export default Home
