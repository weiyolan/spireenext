import React, { useEffect, useState, useRef, useCallback } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Background from '@/components/sections/Background'
import { PageWrapper } from '@/components/context/pageContext'
import { useAppContext } from '@/components/context/appContext'
// import { useDimensions } from '@/utils/useDimensions'

import Title from '@/components/sections/Title'
import Layout from '@/components/sections/Layout'
import Footer from '@/components/sections/Footer'

import Navbar from '@/components/navbar/Navbar'
import ShoppingCart from '@/components/cart/ShoppingCart'
import ESpiree from '@/components/atoms/ESpiree'
import SpireeLogo from '@/components/atoms/SpireeLogo'
import SubTitleAnimate from '@/components/atoms/SubTitleAnimate'
import ArrowLink from '@/components/atoms/ArrowLink'




export default function Index() {

  const { scrolled, width, height, handleLightboxes } = useAppContext();
  let mobile = width < 986

  let [visible, setVisible] = useState([1, 0,0,0])
  let [loaded,setLoaded] = useState(false)
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
      console.log(oldVisible)
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


  useEffect(() => {
    let timer = setTimeout(()=> setLoaded(true), 200)
    let interval = setInterval(() => nextVisibility(), 4000)
    return () => {clearTimeout(timer);clearInterval(interval)}
  }, [])

  return (

    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content=" " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={`w-full text-black min-h-screen`} onClick={handleLightboxes}>
        <PageWrapper
          darkMode={false}
          mobile={mobile}
        >
          {/* <Background style={{ objectPosition: `-${0 }px 0px` }} className='object-cover' src='/images/mainBackground.jpg'/> */}
          <div style={{}} className='absolute top-0 left-0 h-screen w-full '>
            {/* <img style={{objectPosition:`-${218}px 0px`}} alt='' src='/images/merinoBackgroundWide.jpg' className={`object-cover h-full object-left-bottom `}/> */}
            <Image style={{ objectPosition: `-${width < 640 ? 300 : width < 792 ? 200 : 0}px ${width < 900 ? 60 : 0}px` }} alt='' fill src='/images/mainBackground3.jpg' className={`object-cover `} sizes="100vw" quality={100} />
            {/* <Image alt='' fill src='/images/merinoBackground.jpg' className={`object-cover object-left-bottom `} sizes="100vw" quality={100} /> */}
          </div>

          <div className={`${'absolute'} ${visible[0] === 1 ? 'opacity-1 delay-500' : 'opacity-0 select-none'} flex transition-all duration-1000 h-screen w-full flex-col justify-center items-center text-center ${false ? 'text-white' : 'text-black'}`}>
            <SpireeLogo className={`w-40 transition-all ease-in-out duration-1000 ${loaded?'-translate-y-28 ':'translate-y-0'}`} />
          </div>

          <div className={`${'absolute'} ${visible[1] === 1 ? 'opacity-1 delay-500' : 'opacity-0 select-none'}  flex -translate-y-28  transition-all duration-1000 h-screen w-full flex-col justify-center items-center text-center ${false ? 'text-white' : 'text-black'}`}>
            <h1 className={`font-sans inline-flex font-semibold tracking-max uppercase
        whitespace-pre-wrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap 
        text-6xl `}>
              <span className='ml-4 inline-flex'>
                <>
                  Spir
                  <ESpiree fill='black' className='inline-flex w-9 mr-1 md:mr-2 lg:mr-2 mb-0.5 sm:mb-0' />
                  <span className='tracking-normal'>
                    e
                  </span>
                </>
              </span>
            </h1>
          </div>


          
          <div className={`${'absolute'} ${visible[2] === 1 ? 'opacity-1 delay-500' : 'opacity-0 select-none'} flex -translate-y-28  transition-all duration-1000 h-screen w-full flex-col justify-center items-center text-center ${true ? 'text-white' : 'text-black'}`}>
            <SubTitleAnimate text={'100% Merino\nWool '}/>
          </div>
 
          <div className={`${'absolute'} ${visible[3] === 1 ? 'opacity-1 delay-500' : 'opacity-0 select-none'} flex  -translate-y-28  transition-all duration-1000 h-screen w-full flex-col justify-center items-center text-center ${true ? 'text-white' : 'text-black'}`}>
            <SubTitleAnimate text={'Pro Women\nSportswear'}/>
          </div>
          <div className={`${'absolute'} flex transition-all duration-1000 delay-1000 ${loaded?'opacity-1 ':'opacity-0'}  transition-all duration-700 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center ${true ? 'text-white' : 'text-black'}`}>
            <h2 className=' font-quick text-center font-normal whitespace-pre text-3xl text-black'>
              {'Every women deserves to feel\nconfident and stylish during\ntheir favourite sports.'}
              </h2>
          </div>
          <div className={`${'absolute'}  flex transition-all duration-1000 delay-1000 ${loaded?'opacity-1 ':'opacity-0'}  transition-all duration-700 h-screen w-full flex-col  ${true ? 'text-white' : 'text-black'}`}>
            <ArrowLink text={'Discover our collection'} to={'/'}/>
            <ArrowLink text={'Experience our story'} to={'/'}/>
            <ArrowLink text={'Why merino wool'} to={'/'}/>
          </div>


{/* 
          <div className={`${'absolute'} ${visible[3] === 1 ? 'opacity-1 delay-200' : 'opacity-0 select-none'} flex transition-all duration-700 h-screen w-full flex-col justify-center items-center text-center ${true ? 'text-white' : 'text-black'}`}>
            <SubTitleAnimate text={'Every women should '}/>
          </div> */}
          

          {/* <Spiree/> */}
          {/* <Title text={'Merino'}/> */}


          <Navbar from='' />
          <ShoppingCart />
        </PageWrapper>

      </main>
    </>



  )
}