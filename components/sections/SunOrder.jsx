import Image from 'next/image'
import React from 'react'
import SunLogo from '../atoms/SunLogo'
import MoonLogo from '../atoms/MoonLogo'
import SubTitle from '../atoms/SubTitle'
import { useAppContext } from '../context/appContext'
import FadeDiv from '../scroll/FadeDiv'
import Footer from './Footer'
import Layout from './Layout'
import SunCollectionOrder from './SunCollectionOrder'
import Price from '../atoms/Price'
import AddSize from '../atoms/AddSize'
import AddSunMoon from '../atoms/AddSunMoon'

export default function SunOrder() {

  const { mobile } = useAppContext();

  return (
    <div className='relative w-full mt-12'>
      <div className='absolute w-full h-full'>
        <FadeDiv className={'w-full h-full relative'} amount={20} type='top'>
          <Image alt='' fill src={mobile ? '/images/collectionBackground2Mob.png' : '/images/collectionBackground2.png'} priority className={`object-cover object-center`} sizes="100vw" quality={100} />
        </FadeDiv>
      </div>
      <Layout className='relative pt-10 '>
        <SubTitle mainTitle={'Pre-Order Now'} subTitle='Empowering women to run everywhere, with confidence and style.' />
        <div className='absolute left-1/2 text-center text-primary -translate-x-1/2  w-1/3'>
          <Price/>
          <div className='bg-black/30 flex rounded-full w-full mx-auto justify-between items-center p-2.5 relative backdrop-blur' >
            <AddSunMoon/>
          </div>
        </div>
        <div className='flex justify-center mt-8'>
          <SunCollectionOrder sun />
          <SunCollectionOrder />
        </div>
      </Layout>

      <Footer noMotion />
    </div>
  )
}
