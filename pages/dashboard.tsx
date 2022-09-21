import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'

import DashboardPage from '../components/DashboardPage'


const Dashboard: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <title>Abyss Dashboard</title>
        <meta property="og:title" content="Abyss Dashboard" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.abyssfnf.com/dashboard" />
        <meta property="og:image" content="https://www.abyssfnf.com/banner.png" />
        <meta property="og:description" content="A private collective of skilled traders and investors navigating the web3 space." />
        <meta name="theme-color" content="#0f172a" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <DashboardPage/>
    </>
  )
}

export default Dashboard
