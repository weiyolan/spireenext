import React, { useEffect, useState, useRef, useCallback } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Background from '@/components/sections/Background'
import { PageWrapper } from '@/components/context/pageContext'
import { useAppContext } from '@/components/context/appContext'
// import { useDimensions } from '@/utils/useDimensions'
import Title from '@/components/atoms/Title'
import Layout from '@/components/sections/Layout'
import Footer from '@/components/sections/Footer'

import Navbar from '@/components/navbar/Navbar'
import ShoppingCart from '@/components/cart/ShoppingCart'
import HeroBanner from '@/components/sections/HeroBanner'
import CollectionMerinoBanner from '@/components/sections/CollectionMerinoBanner'
import AboutBanner from '@/components/sections/AboutBanner'
import SupportBanner from '@/components/sections/SupportBanner'
import BlogBanner from '@/components/sections/BlogBanner'


export default function Index() {

  const { scrolled, width, height, handleLightboxes } = useAppContext();

  let darkMode = true
  let normalAttribute = 'text-[#2C0012] fill-[#2C0012]'
  let normalColor = '#2C0012'
  let mobile = width < 684

  return (

    <>
      <Head>
        <title>{"Empowering Women to Run Everywhere - Spirée 2026"}</title>
        <meta name="description" content="Shop the new Spirée Celestial Collection: high-performance, 100% Merino wool base layers for running and mountain sports. Empower women to run with confidence and style. Free shipping in the EU." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`w-full min-h-fit text-primary`} onClick={handleLightboxes}>
        <PageWrapper
          darkMode={darkMode}
          mobile={mobile}
          normalAttribute={normalAttribute}
          normalColor={normalColor}
          viewBox={mobile ? "0 0 701 868" : "0 0 1468 635"}
        >
          {/* <Background style={{ objectPosition: `-${0 }px 0px` }} className='object-cover' src='/images/mainBackground.jpg'/> */}
{/*  h-[100vh] */}
          <HeroBanner />
          <CollectionMerinoBanner />
          <AboutBanner />
          <SupportBanner />
          <BlogBanner />


          <Navbar key=' ' from='' />
          <ShoppingCart />
        </PageWrapper>

      </main>
    </>



  )
}