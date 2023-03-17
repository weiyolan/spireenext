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
import SunResponsibilities from '@/components/sections/SunResponsibilities'
import SubTitle from '@/components/atoms/SubTitle'
import AccentTitle from '@/components/atoms/AccentTitle'
import SunCare from '@/components/sections/SunCare'
import SunOrder from '@/components/sections/SunOrder'

export default function Collection() {

  const { scrolled, width, height, handleLightboxes } = useAppContext();
  let [front, setFront] = useState(true)
  let mobile = width < 768
  let [sun, setSun] = useState(true)

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
          sun={sun}
        >
          {/* <BackgroundSun /> */}
          <div id='part1' className={`relative `}>
            <div className={`absolute w-full h-full bg-gradient-to-b transition-all ease-linear duration-[2.5s] ${sun ? 'opacity-100' : 'opacity-0'} from-[#FF514C] to-[#FFB961]`} />
            <div className={`absolute w-full h-full bg-gradient-to-b transition-all ease-linear duration-[2.5s] ${sun ? 'opacity-0' : 'opacity-100'}  from-[#30005F] to-[#A850B4]`} />

            <div className={`absolute w-[100vw] h-[100vw] ease-linear duration-[2.5s] top-0 ${sun?'left-0':''} translate-y-1/3 -translate-x-1/3`}>
              <Image alt='' role='presentation' width={2000} height={2000} src='/images/collectionSunBackground.svg' className='relative w-full ' />
            </div>

            <FadeDiv amount={15} type='bottom' className='w-full relative -mb-[10%]'>
              <div className={`absolute w-full h-full transition-all ease-linear duration-[2.5s] ${sun ? 'opacity-100' : 'opacity-0'} bg-gradient-to-br from-[#FD7A2D] via-[#FD7A2D] to-[#FFCA87]`} />
              <div className={`absolute w-full h-full transition-all ease-linear duration-[2.5s] ${sun ? 'opacity-0' : 'opacity-100'} bg-gradient-to-bl from-[#14003D] via-[#14003D] to-[#24006C] `} />

              <div id='hero-banner' className={`w-full pb-[10%] transition-all`}>
                <div className={`absolute w-[150vw] h-[150vw] duration-[2.5s]  md:w-[60vw] md:h-[60vw] top-0  ${sun?'right-0 -translate-y-1/3 translate-x-1/3':'right-full translate-y-1/4 translate-x-2/3'}`}>
                  <Image alt='sun decoration' width={700} height={700} src='/images/sun2.png' priority className={`absolute transition-all duration-[2.5s] w-full ${sun?'opacity-100':'opacity-0'}`} />
                  <Image alt='moon decoration' width={700} height={700} src='/images/moon2.png' priority className={`absolute transition-all duration-[2.5s] w-full ${sun?'opacity-0':'opacity-20'}`} />
                </div>

                <Layout className={'relative'}>
                  <Title className='mb-8' mainTitle='Pro Sportswear' subTitle='High performance 100% merino wool base layer for running and mountain sports' />
                  <div className={`flex ${sun?'':'flex-row-reverse'} h-fit mx-auto gap-12 text-primary justify-center items-start`}>
                    <SunGallery className={'flex-1'} />
                    <SunSign handleClick={() => setSun(sun => !sun)} className='w-20' />
                    <SunTitlePage className={'flex-1'} sun={sun} />
                  </div>
                </Layout>
              </div>
            </FadeDiv>

            <Layout className={'relative pb-20'}>
              <SunDetails left={sun} title='Design' titleOn className='mt-24' />
              <SunDetails left={!sun} title='Material' className='' />
              <SunDetails left={sun} title='Finish'  className='' />
            </Layout>
          </div>

          <div id='part2' className=' relative'>
            <div className={`absolute w-full h-full bg-gradient-to-b transition-all ease-linear duration-[2.5s] ${sun ? 'opacity-100' : 'opacity-0'} from-[#FFB2CE] to-[#FC5753]`} />
            <div className={`absolute w-full h-full bg-gradient-to-b transition-all ease-linear duration-[2.5s] ${sun ? 'opacity-0' : 'opacity-100'}  from-[#1F999E] to-[#360856]`} />

            <div className='absolute w-[66vw] h-[66vw] top-0 right-0 translate-y-12 translate-x-1/3'>
              <Image alt='' role='presentation' width={2000} height={2000} src='/images/collectionSunBackground.svg' className='relative w-full ' />
            </div>
            <Layout >
              <SunResponsibilities />

              <SunCare />

            </Layout>

            <SunOrder />

          </div>


          <Navbar key='collection' from='collection' />
          <ShoppingCart />
          {/* <Footer noMotion /> */}
        </PageWrapper>

      </main>
    </>



  )
}
