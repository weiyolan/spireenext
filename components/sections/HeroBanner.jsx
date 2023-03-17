import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ESpiree from '../atoms/ESpiree'
import AccentTitle from '../atoms/AccentTitle'
import { usePageContext } from '../context/pageContext'
import Layout from './Layout'
import SpireeLogo from '../atoms/SpireeLogo'
import { useAppContext } from '../context/appContext'

export default function HeroBanner() {
const {height} = useAppContext();
  const { darkMode, normalAttribute } = usePageContext()

  let [visible, setVisible] = useState([1, 0])
  let [loaded, setLoaded] = useState(false)



  function handleVisibility(i) {
    let newVisibility = new Array(visible?.length).fill(0);
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
        let nextItem = currentItem === oldVisible?.length - 1 ? 0 : currentItem + 1;
        // console.log(nextItem)
        return handleVisibility(nextItem)
      }
    })
  }

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 500)
    let interval = setInterval(() => nextVisibility(), 5000)
    return () => { clearTimeout(timer); clearInterval(interval) }
  }, [])

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


  return (



    <div id='hero-banner' style={{}} className='relative h-[100vh] w-full'>
      <div id='hero-background' className='absolute top-0 w-full h-full '>
        <Image alt='' fill src='/images/heroBannerCut2Opt.png' className={`object-cover ${height<650?'object-[-500px_0px]':'object-[-600px_0px]'} mobm:object-[65%_0px] `} sizes="100vw" quality={100} />
      </div>
      <div id='hero-title' className='flex h-[100vh] relative text-center xs:text-left w-full flex-col justify-end xs:justify-center items-start 
      pb-20 mobm:pb-44 xs:pb-36 xs:pl-8 sm:pb-48 md:pl-16 lg:pl-32 lg:pb-20 xl:pl-96'>
        {/* bottom-0 mb-[15rem] mobm:mb-[23rem] mobl:mb-80 xs:top-[30%] xs:m-0 md:top-[35%] lg:top-[33%] xl:top-[50%] xl:-translate-y-[160%] */}
        <div id='hero-mainTitle' className='relative w-full h-[100px] flex items-center xl:h-48'>
          {/*  bottom-0 ranslate-x-20 md:translate-x-28 */}
          <div className={`${'absolute'} ${visible[0] === 1 ? 'opacity-1 delay-100 ' : 'ease-out opacity-0 select-none blur-md -rotate-90 scale-50 translate-x-20 md:translate-x-32 '} flex w-full xs:w-fit transition-all z-[10] duration-1000  flex-col justify-center items-center ${darkMode ? 'text-primary' : normalAttribute}`}>
            <SpireeLogo className={`w-28 md:w-40 transition-all ease-in-out duration-1000`} />
          </div>
          {/* bottom-0 */}
          <div className={`${'absolute'} ${visible[1] === 1 ? 'opacity-1 delay-100' : 'opacity-0 select-none blur-md'}   flex w-full xs:w-fit transition-all duration-1000 flex-col items-center ${darkMode ? 'text-primary' : normalAttribute}`}>
            <h1 className={`font-sans w-full font-semibold tracking-max uppercase
                    whitespace-pre-wrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap 
                    text-5xl sm:text-6xl `}>
              <span className='inline-flex'>
                <>
                  Spir
                  <ESpiree fill='black' className='inline-flex w-7 sm:w-9 mr-1 md:mr-2 lg:mr-2 mb-0.5 sm:mb-0' />
                  <span className=''>
                    e
                  </span>
                </>
              </span>
            </h1>
          </div>
        </div>

        <div id='hero-subTitle' className={`${'relative'} flex justify-center xs:justify-start mobm:mt-2 mb-6 sm:mb-2 md:mb-6 w-full transition-all duration-1000 ${loaded || true ? 'opacity-1 ' : 'opacity-0'}  
            transition-all duration-700 ${darkMode ? 'text-primary' : normalAttribute}`}>
          <h2 className=' xs:backdrop-blur-none w-full xs:w-2/3 font-quick font-medium px-8 xs:px-0 md:font-normal text-lg md:text-2xl 
                                mobl:max-w-[80%] xs:max-w-[95%] md:max-w-lg  '>
            {/* {'Empowering Women to Run Everywhere, with Confidence and Style.'} */}
            {'Empowering women to run everywhere, with confidence and style.'}
          </h2>
        </div>
        <div id='hero-accentTitle' className='hidden mobm:flex mobm:flex-col xs:flex-row xs:gap-8 mx-auto xs:mx-0 items-center xs:justify-center relative sm:whitespace-normal '>
          <AccentTitle text='100% Merino' noMargin className='font-medium  xs:backdrop-blur-none' />
          <AccentTitle text='Pro Women Sportswear' noMargin className='font-medium   xs:backdrop-blur-none' />
        </div>
      </div>

    </div>
  )
}
