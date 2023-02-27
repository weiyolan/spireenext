import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import BackgroundSun from '@/components/sections/BackgroundSun'
import BackgroundMoon from '@/components/sections/BackgroundMoon'
import { PageWrapper } from '@/components/context/pageContext'
import { useAppContext } from '@/components/context/appContext'
// import { useDimensions } from '@/utils/useDimensions'

import Title from '@/components/sections/Title'
import Layout from '@/components/sections/Layout'
import Footer from '@/components/sections/Footer'

import Navbar from '@/components/navbar/Navbar'
import ShoppingCart from '@/components/cart/ShoppingCart'

export default function Collection() {

  const { scrolled, width, height, handleLightboxes } = useAppContext();
  let [front, setFront] = useState(true)
  let mobile = width < 768


  let scale1 = front ? 0.75 : 1;
  let scale2 = front ? 1 : 0.75;
  let shirtWidth = 340;

  function handleClick() {
    setFront(oldFront => !oldFront)
  }

  return (

    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content=" " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`w-full`} onClick={handleLightboxes}>

        <PageWrapper
          darkMode={true}
          mobile={mobile}
        >
          <div id='sun' className='w-full h-screen'>
            <BackgroundSun />
            <Layout>
              <Title mainTitle='Celestial Design' subTitle='Every woman deserves to feel confident and stylish during their favourite sports.' />
              
              <div className='w-full flex'>
              <div className='flex transition-all w-2/3 relative min-h-[600px] justify-center cursor-pointer' onClick={handleClick}>

                {/* <div style={{ width: (shirtWidth * scale1) + 'px', height: (shirtWidth * 1.2819 * scale1) + 'px', transform:`translate(${front?-30:-30}%,${front?0:30}%)`, zIndex:front?0:1, animationFillMode:'forwards'}} className='${front?'animate-toBackL':'animate-toFrontL'} transition-all duration-1000 absolute'> */}
                <div style={{ width: (shirtWidth * scale1) + 'px', height: (shirtWidth * 1.2819 * scale1) + 'px', animationFillMode: 'forwards' }} className={` transition-all right-1/3 duration-500 absolute  ${front ? 'animate-toLeft2 top-0' : ' animate-toLeft  top-24'}  `}>
                  <Image alt='Back side of the Moon model from the Spirée Collection' className={`object-contain object-center`} fill src='/images/sweaterBlack.png' sizes={'50vw'} />
                </div>

                {/* <div style={{ width: (shirtWidth * scale2) + 'px', height: (shirtWidth * 1.2819 * scale2) + 'px', transform:`translate(${front?30:30}%,${front?30:0}%)`, zIndex:front?1:0, animationFillMode:'forwards'}} className={`' ${front?'animate-toFrontR':'animate-toBackR'} transition-all duration-1000 absolute'`}> */}
                <div style={{ width: (shirtWidth * scale2) + 'px', height: (shirtWidth * 1.2819 * scale2) + 'px', animationFillMode: 'forwards' }} className={`transition-all left-1/3 ease-linear duration-500 absolute ${front ? 'animate-toRight top-24' : ' animate-toRight2 top-0'}   `}>
                  <Image alt='Front side of the Moon model from the Spirée Collection' className={`object-contain object-center`} fill src='/images/sweaterBlack.png' sizes={'50vw'} />
                </div>
              </div>

              <div className='flex flex-col text-right'>
                <h3 className='font-quick font-thin text-9xl text-white'>
                  Sun
                </h3>
                <h4 className='font-sans font-thin text-2xl text-white whitespace-pre ml-2'>
                  {`Unleash Your Inner Fire\nA burst of energy, confidence, and courage`}
                </h4>
              </div>
              </div>

            </Layout>
          </div>
          <div id='moon' className='w-full relative h-screen'>
            <BackgroundMoon />
            {/* <Title text={'Merino'}/> */}
            <Layout>
              <Title mainTitle='Celestial Design' subTitle='Every woman deserves to feel confident and stylish during their favourite sports.' />

              <div className='w-full flex'>
                <div className='flex flex-col'>
                  <h3 className='font-quick font-thin text-9xl text-white'>
                    Moon
                  </h3>
                  <h4 className='font-sans font-thin text-2xl text-white whitespace-pre ml-2'>
                    {`Embrace Your Ethereal Side\nA touch of mystery, tranquility, and grace`}
                  </h4>
                </div>
                <div className='flex transition-all w-2/3 relative min-h-[600px] justify-center cursor-pointer' onClick={handleClick}>

                  {/* <div style={{ width: (shirtWidth * scale1) + 'px', height: (shirtWidth * 1.2819 * scale1) + 'px', transform:`translate(${front?-30:-30}%,${front?0:30}%)`, zIndex:front?0:1, animationFillMode:'forwards'}} className='${front?'animate-toBackL':'animate-toFrontL'} transition-all duration-1000 absolute'> */}
                  <div style={{ width: (shirtWidth * scale1) + 'px', height: (shirtWidth * 1.2819 * scale1) + 'px', animationFillMode: 'forwards' }} className={` transition-all right-1/3 duration-500 absolute  ${front ? 'animate-toLeft2 top-0' : ' animate-toLeft  top-24'}  `}>
                    <Image alt='Back side of the Moon model from the Spirée Collection' className={`object-contain object-center`} fill src='/images/sweaterBlack.png' sizes={'50vw'} />
                  </div>

                  {/* <div style={{ width: (shirtWidth * scale2) + 'px', height: (shirtWidth * 1.2819 * scale2) + 'px', transform:`translate(${front?30:30}%,${front?30:0}%)`, zIndex:front?1:0, animationFillMode:'forwards'}} className={`' ${front?'animate-toFrontR':'animate-toBackR'} transition-all duration-1000 absolute'`}> */}
                  <div style={{ width: (shirtWidth * scale2) + 'px', height: (shirtWidth * 1.2819 * scale2) + 'px', animationFillMode: 'forwards' }} className={`transition-all left-1/3 ease-linear duration-500 absolute ${front ? 'animate-toRight top-24' : ' animate-toRight2 top-0'}   `}>
                    <Image alt='Front side of the Moon model from the Spirée Collection' className={`object-contain object-center`} fill src='/images/sweaterBlack.png' sizes={'50vw'} />
                  </div>
                </div>
              </div>
            </Layout>
          </div>




          <Navbar from='collection/#sun' />
          <ShoppingCart />
          <Footer noMotion />
        </PageWrapper>

      </main>
    </>



  )
}