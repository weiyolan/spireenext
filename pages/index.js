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

import { TiWaves } from 'react-icons/ti'
import { GiFeather, GiSheep } from 'react-icons/gi'
import { BsThermometerSun } from 'react-icons/bs'
import { MdDryCleaning } from 'react-icons/md'
import Property from '@/components/atoms/Property'
import Story1Astrid from '@/components/story/Story1Astrid'
import Story2Pharma from '@/components/story/Story2Pharma'
import Story2PharmaBanner from '@/components/story/Story2PharmaBanner'
import AddSupport from '@/components/atoms/AddSupport'
import { Path } from '@/utils/pathUtils'
import StayInTouch from '@/components/atoms/StayInTouch'

let joinText = `Join us in bringing the Celestial Sun and Moon series to life by supporting our crowdfunding campaign! For a limited time, donations of €50 or more will receive a special gift package including a limited edition Spirée headband, gloves, and neck warmer.\nHelp us create high-quality, sustainable sportswear while receiving exclusive rewards. Donate now and be a part of our journey!`

export default function Index() {

  const { scrolled, width, height, handleLightboxes } = useAppContext();

  let [visible, setVisible] = useState([1, 0, 0, 0])
  let [loaded, setLoaded] = useState(false)
  // let [tik, setTok] = useState(false)
  // function nextVisible (array) {
  // let i = array.findIndex((el)=>el===1)
  // let newVisible = new Array(array.length).fill(0);
  // newVisible

  // }

  function handleVisibility(i) {
    let newVisibility = new Array(visible.length).fill(0);
    newVisibility[i] = 1;
    // console.log(newVisibility)
    return newVisibility
  }

  function nextVisibility() {
    setVisible((oldVisible) => {
      // console.log(oldVisible)
      let currentItem = oldVisible.indexOf(1);
      if (currentItem === -1) {
        return handleVisibility(0)
      } else {
        let nextItem = currentItem === oldVisible.length - 1 ? 0 : currentItem + 1;
        // console.log(nextItem)
        return handleVisibility(nextItem)
      }
    })
  }

  // console.log(visible)


  // useEffect(() => {
  //   let timer = setTimeout(() => setLoaded(true), 500)
  //   let interval = setInterval(() => nextVisibility(), 3000)
  //   return () => { clearTimeout(timer); clearInterval(interval) }
  // }, [])

  const containerVariants = {
    first: {
      display: "none",
      // transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" },
    },
    loaded: {
      display: "flex",
      transition: { staggerChildren: 0.1, delayChildren: 1.5 }
    },
  };
  const childVariants = {
    first: {
      x: 0,
      opacity: 0,

      // transition: {
      //   delay: 0.5,
      //   y: { stiffness: 1000 }
      // }
    },
    loaded: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: 0.25 }
        // y: {duration:1, stiffness: 1000, velocity: -100 }
      }
    }
  };


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


      <main style={{ height: 'calc(100% - 192px)' }} className={`w-full text-white`} onClick={handleLightboxes}>
        <PageWrapper
          darkMode={darkMode}
          mobile={mobile}
          normalAttribute={normalAttribute}
          normalColor={normalColor}
          viewBox={mobile ? "0 0 701 5137" : "0 0 1468 2322"}
        >
          {/* <Background style={{ objectPosition: `-${0 }px 0px` }} className='object-cover' src='/images/mainBackground.jpg'/> */}
          <div id='hero-banner' style={{}} className='relative h-[90vh] w-full'>
            <div id='hero-background' className='absolute top-0 w-full h-full '>
              <Image alt='' fill src='/images/heroBannerCut.jpg' className={`object-cover object-top`} sizes="100vw" quality={100} />
            </div>

            <div id='hero-title' className='flex relative flex-col items-start pt-32 ml-20 h-full'>
              <div id='hero-mainTitle' className=''>
                {/* <div className={`${'absolute'} ${visible[0] === 1 ? 'opacity-1 delay-500' : 'opacity-0 select-none blur-md'} flex transition-all duration-1000 h-screen w-full flex-col justify-center items-center text-center ${darkMode ? 'text-white' : normalAttribute}`}>
                      <SpireeLogo className={`w-28 md:w-40 transition-all ease-in-out duration-1000 ${loaded ? '-translate-y-24 sm:-translate-y-24 ' : 'translate-y-0'}`} />
                    </div> */}
                <div className={`${'relative'} ${visible[1] === 1 || true ? 'opacity-1 delay-500' : 'opacity-0 select-none blur-md'}  flex transition-all duration-1000 flex-col ${darkMode ? 'text-white' : normalAttribute}`}>
                  <h1 className={`font-sans inline-flex font-semibold tracking-max uppercase
                    whitespace-pre-wrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap 
                    text-6xl `}>
                    <span className='inline-flex'>
                      <>
                        Spir
                        <ESpiree fill='black' className='inline-flex w-9 mr-1 md:mr-2 lg:mr-2 mb-0.5 sm:mb-0' />
                        <span className=''>
                          e
                        </span>
                      </>
                    </span>
                  </h1>
                </div>
              </div>
              <div id='hero-subTitle' className={`${'relative'} flex my-4 transition-all duration-1000 ${loaded || true ? 'opacity-1 ' : 'opacity-0'}  
                                transition-all duration-700 ${darkMode ? 'text-white' : normalAttribute}`}>
                <h2 className=' font-quick font-medium md:font-normal text-lg md:text-2xl 
                                max-w-[95%] mobl:max-w-[80%] md:max-w-lg  mx-auto '>
                  {/* {'Empowering Women to Run Everywhere, with Confidence and Style.'} */}
                  {'Empowering women to run everywhere, with confidence and style.'}
                </h2>
              </div>
              <div id='hero-accentTitle' className='flex relative '>
                <AccentTitle text='100% Merino' noMargin className='font-medium mr-12' />
                <AccentTitle text='Pro Women Sportswear' noMargin className='font-medium' />
              </div>
            </div>

          </div>


          <div className='relative bg-gradient-to-b from-emerald-600 z-[2] to-indigo-700 h-[175vh] rounded-b-[60px] shadow-2xl shadow-black/30'>
            <div className='absolute w-full h-full overflow-hidden'>
              <div className='absolute w-full bottom-0 translate-y-20'>
                <SpireeLogo className='w-10/12 opacity-5' />
              </div>
            </div>

            <div className='h-[90vh] relative w-11/12 mx-auto -translate-y-20 overflow-hidden rounded-[60px] shadow-2xl shadow-black/30'>
              <div className='absolute w-full h-full'>
                <Image alt='' fill src='/images/collectionBackground.png' className={` object-cover object-center`} sizes="90vw" quality={100} />
              </div>
              <SubTitle mainTitle={'Our New Collection'} subTitle='High Performance 100% Merino Wool Base Layer For Running and Mountain Sports' />

              <SunTitle sun />
              <SunTitle moon />

            </div>


            <div id='collection-&-merino-banner' className='relative h-[90vh] w-full flex'>

              <div id='merino-title' className='pl-24 w-1/2'>
                <div className='mb-8'>
                  <SubTitle mainTitle={'Yes, We Go\n100% Merino'} left subTitle={'High Performance 100% Merino Wool Base Layer\nFor Running and Mountain Sports'} />
                </div>
                <Button text='Discover Merino' med to='/merino' />
                <div className='flex bg-black/20 backdrop-blur-sm rounded-3xl my-8 w-fit p-6 gap-6'>
                  <Property text='Odour Resistant' icon={<TiWaves className='fill-white w-12 h-12 rotate-90' />} />
                  <Property text='Ultra Soft' icon={<GiFeather className='fill-white w-12 h-12 ' />} />
                  <Property text='Thermoregulating' icon={<BsThermometerSun className='fill-white w-12 h-12 ' />} />
                  <Property text='Quickdry' icon={<MdDryCleaning className='fill-white w-12 h-12 ' />} />
                  <Property text='Natural' icon={<GiSheep className='fill-white w-12 h-12 ' />} />
                </div>
              </div>

              <div id='merino-photographs' className='w-1/2 flex flex-col items-center'>

                <div className='relative flex'>

                  <Image alt='Beautiful landscape of very hot climate with Merino sheep in the foreground' width={548 / 1.15} height={313 / 1.15} src='/images/merinoSummer.png'
                    className='shadow-2xl shadow-black/50 rounded-t-[40px] translate-x-10' />
                  <div className='absolute flex flex-col w-24 h-24 justify-center bg-black/20 backdrop-blur text-left rounded-3xl p-4 top-1/2 -translate-y-1/2'>
                    <p className='font-sans font-extralight text-xl'>from</p>
                    <p className='font-sans font-normal text-xl'>+30°C</p>
                  </div>
                </div>

                <div className='relative flex'>
                  <Image alt='Beautiful landscape of very cold climate with Merino sheep in the foreground' width={548 / 1.15} height={313 / 1.15} src='/images/merinoWinter.png'
                    className='shadow-2xl shadow-black/50 rounded-b-[40px] -translate-x-10' />
                  <div className='absolute flex flex-col w-24 h-24 justify-center bg-black/20 backdrop-blur text-left rounded-3xl p-4 top-1/2 -translate-y-1/2 right-0'>
                    <p className='font-sans font-extralight text-xl'>to</p>
                    <p className='font-sans font-normal text-xl'>-10°C</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className='relative h-[100vh] -translate-y-16 w-full z-[1] rounded-b-[60px] overflow-hidden shadow-2xl shadow-black/30 pt-[140px] '>
            <div className='absolute w-full h-full top-0'>
              <Image alt='' fill src='/images/aboutBanner.png' className={`object-cover object-left-bottom`} sizes="100vw" quality={100} />
            </div>

            <div className='flex flex-col items-end pr-24'>
              <SubTitle right mainTitle={'Meet Astrid'} subTitle={"Meet Astrid and discover the inspiration\nbehind Spirée's mission to empower runners."} />
              <Button className='my-8' text='EXPERIENCE THE STORY' to='/about' med />
            </div>

            <div className='absolute right-0 sm:-translate-y-28 sm:translate-x-80 w-full h-full'>
              <Story1Astrid banner speed={1} scrollMin={0} scrollMax={0} />
              <Story2PharmaBanner speed={1} scrollMin={0} scrollMax={0} />
            </div>
          </div>

          <div className='relative h-[100vh] flex -translate-y-32 w-full overflow-hidden  '>
            <div className='absolute w-full h-full top-0'>
              <Image alt='' fill src='/images/supportBackground.jpg' className={`object-cover object-center`} sizes="100vw" quality={100} />
            </div>

            <div className='relative flex flex-col items-start px-24 pt-[140px] w-1/2 h-full top-0 bg-black/20 backdrop-blur'>
              <SubTitle left mainTitle={'Join Us'} subTitle={""} />

              <p className='text-justify font-quick font-light whitespace-pre-wrap my-8'>
                {joinText}
              </p>
              <AddSupport />
              <Button className='my-8' text='See rewards' to='/support' med />
            </div>
            <div className='relative flex justify-center items-center w-1/2 pt-[60px]'>

              <svg width="0" height="0"  >
                <clipPath id="svgClip" clipPathUnits="objectBoundingBox">
                  <path id="Spiree" d="M0.91045 0.463896L0.637766 0L0.393629 0.415337C0.35015 0.341042 0.306102 0.266743 0.260522 0.204871C0.229056 0.162157 0.195285 0.122352 0.157657 0.0931172C0.119728 0.0636484 0.0766147 0.0439613 0.0271849 0.0439613H0L0 0.15858H0.0271849C0.0420144 0.15858 0.0618631 0.165961 0.0867207 0.185491C0.111229 0.204747 0.138064 0.233839 0.166305 0.272175C0.210157 0.331701 0.2544 0.407234 0.300811 0.48647C0.314796 0.510347 0.328979 0.53456 0.343407 0.558773L0.393942 0.64359L0.637767 0.228795L0.809595 0.521102L0.809634 0.521169L0.865733 0.617239L1 0.617239L0.91045 0.463896Z" fill="#0E0C0C" />
                </clipPath>
              </svg>

              <Image style={{ clipPath: 'url(#svgClip)' }}
                width={3840 / 2} height={2490 / 2} src='/images/blogBackground2.png' className='w-64 h-[250px] drop-shadow-2xl ' alt='spirée logo' />

            </div>

          </div>

          <div className='relative h-[100vh] rounded-t-[60px] flex -translate-y-48 w-full overflow-hidden '>
            <div className='absolute w-full h-full top-0'>
              <Image alt='' fill src='/images/blogBackground2.png' className={`object-cover object-center`} sizes="100vw" quality={100} />
            </div>
            <div className='flex relative flex-wrap pt-20 w-full h-full'>
              <div className='flex text-black flex-col w-1/2 items-start pl-24'>
                <SubTitle darkMode={false} left mainTitle={'Our Blog'} subTitle={"Join us on the journey to unleash your inner\nathlete with Spirée's celestial collection."} />
                <Button className='my-8' text='Read our Blog' to='/blog' med />
              </div>
              <div className='flex flex-col w-1/2 items-end pr-24'>
                <SubTitle darkMode={false} right mainTitle={'Newsletter'} subTitle={"Want to be the first to know when the\nCelestial Collection is ready for launch?"} />
                <div className='my-8'><StayInTouch /></div>
                {/* <Button className='my-8' text='EXPERIENCE THE STORY' to='/about' med /> */}
              </div>
              <Footer />

            </div>

          </div>




          <Navbar from='' />
          <ShoppingCart />
        </PageWrapper>

      </main>
    </>



  )
}