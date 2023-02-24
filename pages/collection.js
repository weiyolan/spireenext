import React, { useEffect, useState, useRef } from 'react'
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
          <Background />
          {/* <Title text={'Merino'}/> */}
          <Title mainTitle='Celestial Design' subTitle='Every woman deserves to feel confident and stylish during their favourite sports.' />

          <Navbar from='collection#sun' />
          <ShoppingCart />
        </PageWrapper>

      </main>
    </>



  )
}