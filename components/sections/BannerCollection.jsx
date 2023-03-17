import Image from 'next/image'
import React from 'react'
import SubTitle from '../atoms/SubTitle'
import SunTitle from '../atoms/SunTitle'
import { useAppContext } from '../context/appContext'

export default function BannerCollection() {

  const {mobile} = useAppContext()
  return (
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
            <Image className='z-[0]' alt='merino wool base layer - sun model' src='/images/sweaterGreenDetails.png' width={461} height={591} />
          </div>

          <SunTitle moon />
        </div>
      </div>

      {/* </div> */}
    </div>

  </div>
)
}
