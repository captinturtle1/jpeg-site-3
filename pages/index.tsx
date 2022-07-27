import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Landing from '../components/Landing'
import About from '../components/About'

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle}/>
      <Landing/>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Landing/>
      <Landing/>
    </>
  )
}

export default Home
