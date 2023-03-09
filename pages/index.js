import React, { useEffect, useState, useRef, useCallback } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Background from '@/components/sections/Background'
import { PageWrapper } from '@/components/context/pageContext'
import { useAppContext } from '@/components/context/appContext'
// import { useDimensions } from '@/utils/useDimensions'
import { motion } from 'framer-motion'
import Title from '@/components/atoms/Title'
import Layout from '@/components/sections/Layout'
import Footer from '@/components/sections/Footer'

import Navbar from '@/components/navbar/Navbar'
import ShoppingCart from '@/components/cart/ShoppingCart'
import ESpiree from '@/components/atoms/ESpiree'
import SpireeLogo from '@/components/atoms/SpireeLogo'
import SubTitleAnimate from '@/components/atoms/SubTitle'
import ArrowLink from '@/components/atoms/ArrowLink'
import Button from '@/components/atoms/Button'
import AccentTitle from '@/components/atoms/AccentTitle'
import SubTitle from '@/components/atoms/SubTitle'
import SunTitle from '@/components/atoms/SunTitle'


import Property from '@/components/atoms/Property'
import Story1Astrid from '@/components/story/Story1Astrid'
import Story2Pharma from '@/components/story/Story2Pharma'
import Story2PharmaBanner from '@/components/story/Story2PharmaBanner'
import AddSupport from '@/components/atoms/AddSupport'
import { Path } from '@/utils/pathUtils'
import StayInTouch from '@/components/atoms/StayInTouch'
import HeroBanner from '@/components/sections/HeroBanner'
import CollectionMerinoBanner from '@/components/sections/CollectionMerinoBanner'
import AboutBanner from '@/components/sections/AboutBanner'
import SupportBanner from '@/components/sections/SupportBanner'
import BlogBanner from '@/components/sections/BlogBanner'


export default function Index() {

  const { scrolled, width, height, handleLightboxes } = useAppContext();

  // let [tik, setTok] = useState(false)
  // function nextVisible (array) {
  // let i = array.findIndex((el)=>el===1)
  // let newVisible = new Array(array.length).fill(0);
  // newVisible

  // }


  // console.log(visible)





  let darkMode = true
  let normalAttribute = 'text-[#2C0012] fill-[#2C0012]'
  let normalColor = '#2C0012'
  let mobile = width < 684

  return (

    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content=" " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* height: 'calc(100% - 192px)' */}
      {/* h-[calc(535vh-12rem) */}
      <main style={{}} className={`w-full min-h-fit lg:h-[calc(565vh-12rem)] text-white ]`} onClick={handleLightboxes}>
        <PageWrapper
          darkMode={darkMode}
          mobile={mobile}
          normalAttribute={normalAttribute}
          normalColor={normalColor}
          viewBox={mobile ? "0 0 701 868" : "0 0 1468 635"}
        >
          {/* <Background style={{ objectPosition: `-${0 }px 0px` }} className='object-cover' src='/images/mainBackground.jpg'/> */}

          <HeroBanner />

          <CollectionMerinoBanner />

          <AboutBanner />

          <SupportBanner />

          <BlogBanner />



          <Navbar from='' />
          <ShoppingCart />
        </PageWrapper>

      </main>
    </>



  )
}