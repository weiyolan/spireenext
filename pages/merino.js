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
import MerinoText2 from '@/components/merino/MerinoOdour'
import MerinoQualities from '@/components/sections/MerinoQualities'
import TitleMoving from '@/components/sections/TitleMoving'

let qualities = [
  { id:'Natural',title: 'Natural', list: ['Merino wool is natural, it comes from the shearing of sheep. In addition to being natural, it is renewable, biodegradable and consumes little water.'] }, 
{ id:'Thermo',title: 'Thermoregulation', list: ['Merino wool regulates your body temperature. This fine wool keeps you warm in winter and allows you to move freely. Depending on its weight, it is also suitable for summer wear.'] }, 
{id:'Odour', title: 'Odour Resistant', list: ['It has a major advantage for sportswomen: it is odour resistant. Once dried after use, the shirt can be re-used without having being washed. This further increases the lifespan'] }, 
{ id:'Quickdry',title: 'Quickdry', list: ['In addition to drying quickly, it is hydrophilic. This means that it will absorb water without you noticing, so you will feel dry.'] }, 
{ id:'Skin',title: 'Second Skin', list: ['Merino wool is soft and comfortable. The fibres are fine and soft so that they do not come into contact with your skin and therefore do not cause irritation.'] }
];


export default function Merino() {

  const { scrolled, width, height, handleLightboxes } = useAppContext();
  let mobile = width < 768

  let [titleHeight,setTitleHeight] = useState(undefined)


  //   `Radial Gradient
  //   black @ 40.42%
  //   rgba(217, 217, 217, 0) @ 100%
  //   'maskImage': linear-gradient(to bottom, transparent, black ${amount}%, black ${100-amount}%, transparent),
  // `

  useEffect(()=>{
    // console.log(titleHeight)
  },[titleHeight])
  // let svgWidth = 770
  // let fadeStyle = () => ({
  //   // 'maskImage': `radial-gradient(circle ${width*0.8+'px'} at 20% 100% , #000000FF 40%, #00000000 80%)`,
  //   // 'maskImage': `radial-gradient( at 20% 100% , #000000FF 40%, #00000000 80%)`,
  //   // 'maskSize': '100% 100%',
  //   'WebkitMaskImage': `radial-gradient(70% 150% at 20% 100% , #000000FF 40%, #00000000 80%)`,
  //   'maskPosition': '0 0',
  //   'maskRepeat': 'no-repeat',
  // })
  return (

    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content=" " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={`w-full min-h-screen`} onClick={handleLightboxes}>
        <PageWrapper
          darkMode={true}
          mobile={mobile}
          // titleHeight={titleHeight}
        >
          <Background color='bg-[#091627]' />

          <Title setHeight={setTitleHeight} className='z-10' mainTitle='100% Merino Wool' subTitle={'As if you’re wearing nothing,\nbathing in the sun.'} />

          {/* <Title style={{position:(mobile || finished)?'relative':'fixed', left:'50%', top:0, transform:`translate(-50%, -${(mobile || finished)?0:moveTracker>=1?titleHeight:0}px)`, transition:'all 1s ease'}}  */}
          {/* // className={`${(mobile || finished)?`inline-flex flex-col justify-center items-center mx-auto  w-fit transition-all duration-1000 ` */}

          <MerinoQualities titleHeight={titleHeight} qualities={qualities} />
          {/* <Layout> */}
            {/* <section className='flex relative h-[75vh]'>

              <div className='flex flex-1'>

              </div>
              <div className='flex flex-1'>

              </div>

            </section> */}

            {/* <Title text={'Merino'}/> */}
          {/* </Layout> */}
          <Footer noMotion noMargin/>
          <Navbar from='merino' />
          <ShoppingCart />
        </PageWrapper>

      </main>
    </>



  )
}