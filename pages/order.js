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
import Button from '@/components/atoms/Button'
import Preview from '@/components/atoms/Preview'
import SunLogo from '@/components/atoms/SunLogo'
import ArrowLink from '@/components/atoms/ArrowLink'
import MoonLogo from '@/components/atoms/MoonLogo'


export default function Order() {

  const { scrolled, width, height, handleLightboxes, cart } = useAppContext();
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
          <Background src='/images/orderBackground.png' />
          {/* </Sun><Moon/> */}
          <Title mainTitle='Pre-Order' subTitle='Be the first to run everywhere with a 100% merino woolen Spirée base layer' />
          <Layout>
            <div className='flex justify-center items-start'>

              <div className='flex'>
                <Preview title='Sun' subTitle={'Unleash Your Inner Fire\nA burst of energy, confidence and courage'} src='/images/sweaterBlackCut.png' />
              </div>

              <div className='flex flex-col mt-12'>
                {/* <Button className='mx-auto' text='Go To Checkout' /> */}
                <div className='flex text-center mt-12 justify-center font-quick font-extralight text-4xl text-white '>
                  <p> €99,-</p><p className='ml-1 text-xs whitespace-pre text-start self-end'>{'incl.\nVAT'}</p>
                </div>

                <div className='flex mt-12'>
                  <div className='flex flex-1 flex-col justify-center items-center'>
                    <SunLogo />
    
                    <Button className='my-2 mt-4' med text='Add To Cart' handleClick={()=>cart.addOne({id:'sun', price:99, name: 'Sun Merino Base Layer'})}/>
                    <p className='text-center px-3 text-white font-quick text-sm'>
                      The Sun and Moon base layers are currently in development and its designs are susceptible to minor changes. Curious when you will receive it?
                    </p>
                    <ArrowLink text='SEE PROGRESS' to='/progress' tabIndex={0} />
                  </div>

                  <div className='flex flex-1 flex-col justify-center items-center'>
                    <MoonLogo />
    
                    <Button className='my-2 mt-4' med text='Add To Cart' handleClick={()=>cart.addOne({id:'moon',price:99,name: 'Moon Merino Base Layer'})}/>
                    <p className='text-center px-3 text-white font-quick text-sm'>
                      When pre-ordering a Spirée base layer you provide a deposit ensuring you are one of the first ones to receive our unique and durable design.                    </p>
                    <ArrowLink text='SEE DESIGNS' to='/progress' tabIndex={0} />

                  </div>
                </div>

              

              </div>

              <div className='flex '>
                <Preview title='Moon' subTitle={'Embrace Your Ethereal Side\nA touch of mystery, tranquility, and grace'} src='/images/sweaterBlackCut.png' />
              </div>
            </div>


          </Layout>
          {/* <Title text={'Merino'}/> */}

          <Footer noMotion />
          <Navbar from='order' />
          <ShoppingCart />
        </PageWrapper>

      </main>
    </>



  )
}