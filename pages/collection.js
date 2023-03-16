import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import BackgroundSun from '@/components/sections/BackgroundSun'
import BackgroundMoon from '@/components/sections/BackgroundMoon'
import { PageWrapper } from '@/components/context/pageContext'
import { useAppContext } from '@/components/context/appContext'
// import { useDimensions } from '@/utils/useDimensions'

import Title from '@/components/atoms/Title'
import Layout from '@/components/sections/Layout'
import Footer from '@/components/sections/Footer'

import Navbar from '@/components/navbar/Navbar'
import ShoppingCart from '@/components/cart/ShoppingCart'
import SunTitle from '@/components/atoms/SunTitle'
import SunGallery from '@/components/sections/SunGallery'
import SunSign from '@/components/atoms/SunSign'
import SunTitlePage from '@/components/atoms/SunTitlePage'
import FadeDiv from '@/components/scroll/FadeDiv'
import SunDetails from '@/components/sections/SunDetails'

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

  let sun = true;

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
          sun={sun}
        >
          {/* <BackgroundSun /> */}
          <div id='part1' className='bg-gradient-to-b from-[#FF514C] to-[#FFB961]'>

            <FadeDiv amount={15} type='bottom' className='w-full -mb-[10%]'>
              <div id='sun' className='w-full pb-[10%] bg-gradient-to-br from-[#FD7A2D] via-[#FD7A2D] to-[#FFCA87]'>
                <div className='absolute w-[150vw] h-[150vw] top-0 right-0 md:w-[60vw] md:h-[60vw] -translate-y-1/3 translate-x-1/3 '>
                  <Image alt='sun decoration' width={700} height={700} src='/images/sun2.png' priority className='relative w-full ' />
                </div>

                <Layout className={'relative'}>
                  <Title className='mb-8' mainTitle='Pro Sportswear' subTitle='High performance 100% merino wool base layer for running and mountain sports' />

                  <div className='flex mx-auto gap-12 text-white justify-center items-start'>
                    <SunGallery className={'flex-1'} />
                    <SunSign className='w-20' />
                    <SunTitlePage className={'flex-1'} sun={sun} />
                  </div>



                </Layout>
              </div>
            </FadeDiv>

            <Layout className={'relative'}>
              {/* <div> */}
              <SunDetails left title='Design' titleOn className='mt-24' />
              <SunDetails title='Material' className='' />
              <SunDetails title='Finish' left className='' />

              {/* </div> */}
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
