import Image from 'next/image'
import React from 'react'
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

export default function CollectionMerinoBanner() {
  const { width } = useAppContext();
  let mobile = width < 821;

  return (
    // h-[310vh]
    <div id='collection-merino-banner' className='relative bg-gradient-to-b from-emerald-600 z-[2] to-indigo-700 h-fit lg:h-[180vh] rounded-b-[40px] lg:rounded-b-[60px] shadow-2xl shadow-black/30'>
      <div className='absolute w-full h-full overflow-hidden bottom-0 '>
        <div id='backgroundlogo' className='absolute flex items-center w-[150%] left-1/2 -translate-x-[40%] lg:left-0 lg:translate-x-0 lg:w-full lg:h-[110vh] translate-y-[8vh] rounded-[60px] bottom-[33%]  lg:bottom-0 '>
          <SpireeLogo className='w-11/12 opacity-5' />
        </div>
      </div>
      {/* h-[160vh] */}
      <div id='collection-banner' className='h-fit min-h-fit lg:h-[95vh] relative w-full sm:w-11/12 
        2xl:w-10/12 mx-auto -translate-y-20 overflow-hidden rounded-[40px] lg:rounded-[60px] shadow-2xl shadow-black/30'>
        <div className='absolute w-full h-full'>
          <Image alt='' fill src={mobile ? '/images/collectionBackground2Mob.png' : '/images/collectionBackground2.png'} priority className={`object-cover object-center`} sizes="90vw" quality={100} />
        </div>

        <div className='relative px-4 mobm:px-6 sm:px-12 lg:px-10 2xl:px-24 min-h-fit flex flex-col w-full lg:h-[70%] xl:h-[75%] lg:flex-row lg:flex-wrap lg:justify-center'>
          {/* <div className='relative w-full '> */}
          <div className='mb-4 w-full mt-4'>
            <SubTitle className={'lg:z-10'} mainTitle={'Our New\nCollection'} subTitle='High Performance 100% Merino Wool Base Layer For Running and Mountain Sports' />
          </div>

          <div className='lg:flex lg:flex-row-reverse lg:w-1/2 lg:h-full relative'>
            <div className='relative w-3/5 sm:w-1/2 lg:w-2/5 mr-6 ml-auto lg:mx-0 lg:absolute lg:bottom-0 lg:right-2 xl:right-4'>
              <Image alt='merino wool base layer - sun model' src='/images/sweaterBlackCut.png' width={461} height={591} />
            </div>

            <SunTitle sun />
          </div>

          <div className='lg:flex lg:flex-row-reverse lg:w-1/2 lg:h-full relative'>
            <div className='relative w-3/5 sm:w-1/2 lg:w-2/5 ml-6 mr-auto lg:mx-0 lg:absolute lg:-top-4 xl:top-0 2xl:top-4 lg:left-2 xl:left-4'>
              <Image alt='merino wool base layer - sun model' src='/images/sweaterBlackCut.png' width={461} height={591} />
            </div>
            <SunTitle moon />
          </div>

          {/* </div> */}
        </div>

      </div>
      {/* h-[calc(150vh+5rem)] */}
      <div id='merino-banner' className='relative lg:absolute lg:bottom-0 flex items-start lg:items-center w-full h-fit lg:h-[calc(85vh+5rem)] '>
        <Layout className='relative -translate-y-12 sm:mt-8 lg:mt-0 lg:translate-y-0'>
          <div className='relative w-full flex flex-wrap lg:flex-nowrap'>
            <div id='merino-title' className='w-full lg:w-1/2 flex flex-col justify-center h-full '>
              <div className='mb-8'>
                <SubTitle mainTitle={'Yes, We Go\n100% Merino'} left subTitle={'High Performance 100% Merino Wool Base Layer For Running and Mountain Sports'} />
              </div>
              <Button className='-translate-x-2 mx-auto lg:mx-0' text='Discover Merino' med to='/merino' />
              <p className='mt-8 text-sm mobm:text-base lg:text-base font-extralight lg:pr-8 text-justify'>
                {`Merino wool's natural capacities, evolved over thousands of years in Merino sheep living in temperatures from -10°C to +30°C, make it highly versatile, adaptive, soft, lightweight, and comfortable for a wide range of activities.`}
              </p>
              <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-start lg:bg-black/20 lg:backdrop-blur-sm rounded-3xl lg:-translate-x-2 my-8 xs:my-10 lg:my-8 w-fit lg:p-6 gap-6'>
                <Property text='Odour Resistant' icon={<TiWaves className='fill-white w-8 lg:w-12 h-8 lg:h-12 rotate-90' />} />
                <Property text='Ultra Soft' icon={<GiFeather className='fill-white w-8 lg:w-12 h-8 lg:h-12 ' />} />
                <Property text='Thermoregulating' icon={<BsThermometerSun className='fill-white w-8 lg:w-12 h-8 lg:h-12 ' />} />
                <Property text='Quickdry' icon={<MdDryCleaning className='fill-white w-8 lg:w-12 h-8 lg:h-12 ' />} />
                <Property text='Natural' icon={<GiSheep className='fill-white w-8 lg:w-12 h-8 lg:h-12 ' />} />
              </div>
            </div>

            <div id='merino-photographs' className='relative w-full lg:w-1/2 flex flex-col items-center lg:items-end lg:justify-center'>
              <div className='relative'>
                <Image alt='Beautiful landscape of very hot climate with Merino sheep in the foreground' width={548 / 1} height={313 / 1} src='/images/merinoSummer.png'
                  className='w-72 mobm:w-96 xs:w-[450px] min-[1800px]:w-[500px] shadow-2xl shadow-black/50 rounded-t-[20px] lg:rounded-t-[40px] translate-x-2 lg:translate-x-10' />
                <Temp from temp='+30°C' />
              </div>

              <div className='relative'>
                <Image alt='Beautiful landscape of very cold climate with Merino sheep in the foreground' width={548 / 1} height={313 / 1} src='/images/merinoWinter.png'
                  className='w-72 mobm:w-96 xs:w-[450px] min-[1800px]:w-[500px] shadow-2xl shadow-black/50 rounded-b-[20px] lg:rounded-b-[40px] -translate-x-2 lg:-translate-x-10' />
                <Temp temp='-10°C' />

              </div>

            </div>
          </div>
        </Layout>
      </div>
    </div>
  )
}
