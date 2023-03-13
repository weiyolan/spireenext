import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Button from '../atoms/Button'
import Property from '../atoms/Property'
import SpireeLogo from '../atoms/SpireeLogo'
import SubTitle from '../atoms/SubTitle'
import SunTitle from '../atoms/SunTitle'
import { TiWaves } from 'react-icons/ti'
import { GiFeather, GiSheep } from 'react-icons/gi'
import { BsThermometerSun } from 'react-icons/bs'
import { MdDryCleaning } from 'react-icons/md'
import Layout from './Layout'
import { useAppContext } from '../context/appContext'
import Temp from '../atoms/Temp'

export default function CollectionMerinoBanner({ setHeight, ...props }) {
  const { width } = useAppContext();
  let mobile = width < 821;

  let bannerRef = useRef(null)

  let [dimensions, setDimensions] = useState({ height: undefined })

  useEffect(() => {
    function handleSize() {

      const { height } = bannerRef.current.getBoundingClientRect();
      // console.log(height)
      if (height > 0) {
        // Math.ceil(height + margin);
        setDimensions({ height: height });
        // print && console.log('dimensions setted: ' + 'width: ' + width+' , height: '+ height+ ', top: '+y+', bottom: '+(y + height) )
      }
    }
    window.addEventListener("resize", handleSize);
    handleSize()
    return () => window.removeEventListener("resize", handleSize);
    // print && console.log(dimensions?.height === undefined || )
  }, [props.children])

  useEffect(() => {
    // console.log('changing')
    if (dimensions.height > 0 && setHeight !== undefined) {
      setHeight(dimensions.height)
    }
  }, [dimensions])


  return (
    // h-[310vh]
    <div ref={bannerRef} id='collection-merino-banner' className='relative bg-gradient-to-b from-emerald-600 z-[2] to-indigo-700 h-fit md:h-[180vh] rounded-b-[40px] md:rounded-b-[60px] shadow-2xl shadow-black/30'>
      <div className='absolute w-full h-full overflow-hidden bottom-0 '>
        <div id='backgroundlogo' className='absolute flex items-center w-[150%] left-1/2 -translate-x-[40%] md:left-0 md:translate-x-0 md:w-full md:h-[110vh] translate-y-[8vh] rounded-[60px] bottom-[33%]  md:bottom-0 '>
          <SpireeLogo className='w-11/12 opacity-5' />
        </div>
      </div>
      {/* h-[160vh] */}
      <div id='collection-banner' className='h-fit min-h-fit md:h-[95vh] relative w-full sm:w-11/12 
        2xl:w-10/12 mx-auto -top-16 overflow-hidden rounded-[40px] md:rounded-[60px] shadow-2xl shadow-black/30'>
        <div className='absolute w-full h-full'>
          <Image alt='' fill src={mobile ? '/images/collectionBackground2Mob.png' : '/images/collectionBackground2.png'} priority className={`object-cover object-center`} sizes="90vw" quality={100} />
        </div>

        {/* <div className='absolute w-1/2 h-1/3 overflow-visible'> */}
        {/* </div> */}

        <div className='relative px-4 mobm:px-6 sm:px-12 md:px-10 min-[1800px]::px-24 min-h-fit flex flex-col w-full md:h-full '>
          {/* <div className='relative w-full '> */}
          <div className='relative w-full mt-4 md:mt-0 '>
            <SubTitle className={'md:z-10'} mainTitle={'Our New\nCollection'} subTitle={'High Performance 100% Merino Wool Base\nLayer For Running and Mountain Sports'} />
          </div>

          <div className='flex flex-col md:flex-row h-full md:flex-wrap w-full md:justify-center'>

            <div className='relative md:flex md:w-full  '>
              <div className='absolute w-[150vw] h-[150vw] md:w-[66vw] md:h-[66vw] left-0 bottom-0 translate-y-12 -translate-x-1/2'>
                <Image alt='sun decoration' width={700} height={700} src='/images/sun2.png' className='absolute w-full ' />
              </div>
              <div className='relative md:absolute w-3/5 sm:w-1/2 md:w-1/3 mr-6 ml-auto md:mx-0 md:top-0 md:right-0 md:translate-y-[10%] z-[1] lg:bottom-8 lg:right-2 xl:right-4'>
                <Image alt='merino wool base layer - moon model' src='/images/sweaterBlackCut.png' width={461} height={591}  className='z-[1]'/>
              </div>
              <SunTitle sun />
            </div>

            <div className='md:flex md:w-full relative mb-4 '>
              <div className='absolute w-[150vw] h-[150vw] md:w-[66vw] md:h-[66vw] -rotate-90 right-0 bottom-0 translate-y-1/3 translate-x-1/2'>
                <Image alt='moon decoration' width={700} height={700} src='/images/moon2.png' className='opacity-[0.15] absolute w-full ' />
              </div>
              <div className='relative w-3/5 sm:w-1/2 md:w-1/3 ml-6 mr-auto md:mx-0 md:absolute z-[0] md:bottom-0 md:-translate-y-10 xl:top-0 2xl:top-4 md:left-2 xl:left-4'>
                <Image className='z-[0]' alt='merino wool base layer - sun model' src='/images/sweaterBlackCut.png' width={461} height={591} />
              </div>

              <SunTitle moon />
            </div>
          </div>

          {/* </div> */}
        </div>

      </div>
      {/* h-[calc(150vh+5rem)] */}
      <div id='merino-banner' className='relative md:absolute md:bottom-0 flex items-start md:items-center w-full h-fit md:h-[calc(85vh+5rem)] '>
        <Layout className='relative -translate-y-12 sm:mt-8 md:mt-0 md:translate-y-0'>
          <div className='relative w-full flex flex-wrap md:flex-nowrap'>
            <div id='merino-title' className='w-full  md:w-1/2 flex flex-col justify-center h-full '>
              <div className='mb-8'>
                <SubTitle mainTitle={'Yes, 100%\nMerino'} left subTitle={'High Performance 100% Merino Wool Base Layer For Running and Mountain Sports'} />
              </div>
              <Button className='-translate-x-2 mx-auto md:mx-0' text='Discover Merino' med to='/merino' />
              <p className='mt-8 text-sm mobm:text-base md:text-sm lg:text-base font-extralight md:pr-8 text-justify'>
                {`Merino wool's natural capacities, evolved over thousands of years in Merino sheep living in temperatures from -10°C to +30°C, make it highly versatile, adaptive, soft, lightweight, and comfortable for a wide range of activities.`}
              </p>
              <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-start md:bg-black/20 md:backdrop-blur-sm rounded-3xl md:-translate-x-2 my-8 xs:my-10 md:my-8 w-fit md:p-6 gap-6'>
                <Property text='Odour Resistant' icon={<TiWaves className='fill-white w-8 md:w-12 h-8 md:h-12 rotate-90' />} />
                <Property text='Ultra Soft' icon={<GiFeather className='fill-white w-8 md:w-12 h-8 md:h-12 ' />} />
                <Property text='Thermoregulating' icon={<BsThermometerSun className='fill-white w-8 md:w-12 h-8 md:h-12 ' />} />
                <Property text='Quickdry' icon={<MdDryCleaning className='fill-white w-8 md:w-12 h-8 md:h-12 ' />} />
                <Property text='Natural' icon={<GiSheep className='fill-white w-8 md:w-12 h-8 md:h-12 ' />} />
              </div>
            </div>

            <div id='merino-photographs' className='relative w-full  md:w-1/2 flex flex-col items-center md:items-end md:justify-start lg:justify-center'>
              <div className='relative'>
                <Image alt='Beautiful landscape of very hot climate with Merino sheep in the foreground' width={548 / 1} height={313 / 1} src='/images/merinoSummer.png'
                  className='w-72 mobm:w-96 xs:w-[450px] md:w-80 xl:w-96  min-[1800px]:w-[500px] shadow-2xl shadow-black/50 rounded-t-[20px] md:rounded-t-[40px] translate-x-2 md:translate-x-4 lg:translate-x-10' />
                <Temp from temp='+30°C' />
              </div>

              <div className='relative'>
                <Image alt='Beautiful landscape of very cold climate with Merino sheep in the foreground' width={548 / 1} height={313 / 1} src='/images/merinoWinter.png'
                  className='w-72 mobm:w-96 xs:w-[450px] md:w-80  xl:w-96 min-[1800px]:w-[500px] shadow-2xl shadow-black/50 rounded-b-[20px] md:rounded-b-[40px] -translate-x-2 md:-translate-x-4 lg:-translate-x-10' />
                <Temp temp='-10°C' />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  )
}
