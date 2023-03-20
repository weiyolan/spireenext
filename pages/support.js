import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Background from '@/components/sections/Background'
import { PageWrapper } from '@/components/context/pageContext'
import { useAppContext } from '@/components/context/appContext'
// import { useDimensions } from '@/utils/useDimensions'

import Title from '@/components/atoms/Title'
import Layout from '@/components/sections/Layout'
import Footer from '@/components/sections/Footer'

import Navbar from '@/components/navbar/Navbar'
import ShoppingCart from '@/components/cart/ShoppingCart'
import SupportCard from '@/components/support/SupportCard'
import AddSupport from '@/components/atoms/AddSupport'
import AllSupportCards from '@/components/support/AllSupportCards'

export default function Support() {

  const { scrolled, width, height, handleLightboxes } = useAppContext();
  let mobile = width < 768

  return (

    <>
      <Head>
        <title>Women's Sportswear | Spirée 2023 | Reach New Heights</title>
        <meta name="description" content=" " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={`w-full`} onClick={handleLightboxes}>
        <PageWrapper
          darkMode={true}
          mobile={mobile}
        >
          <Background src='/images/supportBackground.jpg' className='object-cover object-left-bottom '/>

          <Layout>
            <Title mainTitle={'Join\nSpirée'} subTitle='Support Astrid and Spirée on their journey to empower women in sports.' />
            <section className='w-full sm:w-4/5 lg:w-3/5 mt-4 mx-auto text-primary font-quick font-light text-center whitespace-pre-wrap text-sm'>
              <p>
                {`Dear Supporter,\n
Thank you for considering supporting Spirée on our mission to revolutionize sportswear for women. We are so grateful for your contribution in making the Sun and Moon series a reality. As a token of our appreciation, we are offering the following packages.\n
Your support means everything to us, and we can't wait to show you the incredible products we have in store. Thank you for helping us empower women to reach their full potential.`}
              </p>

              <div className='mt-4 sm:mt-8'>
                <AddSupport />
              </div>


            </section>
            </Layout>


            <AllSupportCards/>
            {/* <section className='w-full flex h-[382px] md:h-auto md:flex-wrap relative md:justify-center mx-auto mt-8'>
              <SupportCard amount={50} title='Run With Purpose' percent={5} />
              <SupportCard amount={100} title='Chase The Horizon' percent={10} />
              <SupportCard amount={200} title='Reach New Heights' percent={20} />
            </section> */}


          {/* <Title text={'Merino'}/> */}
          <Footer noMargin noMotion={true} />

          <Navbar key='support' from='support' />
          <ShoppingCart />

        </PageWrapper>

      </main>
    </>



  )
}