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
import HeroBanner from '@/components/sections/HeroBanner'
import CollectionMerinoBanner from '@/components/sections/CollectionMerinoBanner'
import AboutBanner from '@/components/sections/AboutBanner'
import SupportBanner from '@/components/sections/SupportBanner'
import BlogBanner from '@/components/sections/BlogBanner'


export default function Index() {

  const { scrolled, width, height, handleLightboxes } = useAppContext();
  let [banner1Height,setBanner1Height] = useState(undefined)
  let [banner2Height,setBanner2Height] = useState(undefined)
  let [banner3Height,setBanner3Height] = useState(undefined)
  let [banner4Height,setBanner4Height] = useState(undefined)
  // let [tik, setTok] = useState(false)
  // function nextVisible (array) {
  // let i = array.findIndex((el)=>el===1)
  // let newVisible = new Array(array.length).fill(0);
  // newVisible

  // }


  // console.log(visible)


  useEffect(()=>{
    // console.log(banner1Height)
    // console.log(banner2Height)
    // console.log(banner3Height)
    // console.log(banner4Height)
  })


  let darkMode = true
  let normalAttribute = 'text-[#2C0012] fill-[#2C0012]'
  let normalColor = '#2C0012'
  let mobile = width < 684

  return (

    <>
      <Head>
        <title>{"Empowering Women to Run Everywhere - Spirée 2023"}</title>
        <meta name="description" content="Shop the new Spirée Celestial Collection: high-performance, 100% Merino wool base layers for running and mountain sports. Empower women to run with confidence and style. Free shipping in the EU." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* height: 'calc(100% - 192px)' */}
      {/* h-[calc(535vh-12rem) */}
      {/* {console.log(banner1Height+banner2Height+banner3Height+banner4Height || 800*3)} */}
      <main style={{height:`calc(100vh + ${banner1Height+banner2Height+banner3Height+banner4Height || 800*3}px - 12rem`}} className={`w-full min-h-fit text-primary ]`} onClick={handleLightboxes}>
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
{/*  lg:h-[180vh] */}
          <CollectionMerinoBanner setHeight={setBanner1Height}/>
{/* lg:h-[100vh] */}
          <AboutBanner setHeight={setBanner2Height}/>
{/*  lg:h-[100vh]  */}
          <SupportBanner setHeight={setBanner3Height}/>

{/* lg:h-[65vh] 2xl:h-[50vh] */}
          <BlogBanner setHeight={setBanner4Height}/> 


          <Navbar key=' ' from='' />
          <ShoppingCart />
        </PageWrapper>

      </main>
    </>



  )
}