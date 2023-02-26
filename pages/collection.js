import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Background from '@/components/sections/Background'
import BackgroundSun from '@/components/sections/BackgroundSun'
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
  let mobile = width < 768

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
          <BackgroundSun />
          <Layout>
          {/* <Title text={'Merino'}/> */}
          <Title mainTitle='Celestial Design' subTitle='Every woman deserves to feel confident and stylish during their favourite sports.' />

          <div className=''>
            <h3 className='font-quick font-thin text-9xl text-white'>Moon</h3>
            <h4 className='font-sans font-thin text-2xl text-white whitespace-pre-wrap ml-2'>{`Embrace Your Ethereal Side\nA touch of mystery, tranquility, and grace`}</h4>
          </div>
          </Layout>
          <Navbar from='collection/#sun' />
          <ShoppingCart />
          <Footer noMotion/>
        </PageWrapper>

      </main>
    </>



  )
}