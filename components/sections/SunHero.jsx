import Image from 'next/image'
import React from 'react'
import SunSign from '../atoms/SunSign'
import SunTitlePage from '../atoms/SunTitlePage'
import Title from '../atoms/Title'
import { useAppContext } from '../context/appContext'
import { usePageContext } from '../context/pageContext'
import Layout from './Layout'
import SunGallery from './SunGallery'

export default function SunHero({ setSun }) {
  const { width } = useAppContext();
  const { sun } = usePageContext();

  return (<>
    <div role='presentation' className={`absolute w-full h-full transition-all ease-linear duration-[2.5s] ${sun ? 'opacity-100' : 'opacity-0'} bg-gradient-to-br from-[#FD7A2D] via-[#FD7A2D] to-[#FFCA87]`} />
    <div role='presentation' className={`absolute w-full h-full transition-all ease-linear duration-[2.5s] ${sun ? 'opacity-0' : 'opacity-100'} bg-gradient-to-bl from-[#14003D] via-[#14003D] to-[#24006C] `} />

    <div id='hero-banner' className={`w-full pb-[15%] md:pb-[15%] lg:pb-[100px] transition-all`}>
      <div className={`absolute w-[150vw] h-[150vw] duration-[2.5s]  md:w-[60vw] md:h-[60vw] top-0  ${sun ? 'right-0 -translate-y-1/3 translate-x-1/3' : 'right-full translate-y-1/3 md:translate-y-1/4 translate-x-2/3'}`}>
        <Image alt='sun decoration' width={700} height={700} src='/images/sun2.png' priority className={`absolute transition-all duration-[2.5s] w-full ${sun ? 'opacity-100' : 'opacity-0'}`} />
        <Image alt='moon decoration' width={700} height={700} src='/images/moon2.png' priority className={`absolute transition-all duration-[2.5s] w-full ${sun ? 'opacity-0' : 'opacity-20'}`} />
      </div>

      <Layout cardSection className={'relative'}>
        <Title className='mb-4 md:mb-8' mainTitle={'Pro\nSportswear'} subTitle='High performance 100% merino wool base layer for running and mountain sports' />
        <div className={`flex ${sun ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} h-fit mx-auto md:gap-2 xl:gap-12 text-primary justify-center items-start`}>
          <SunGallery className={'flex-1 mb-2 md:mb-0'} />
          {width > 748 && <SunSign handleClick={() => setSun(sun => !sun)} className='w-12 xl:w-20' />}
          <SunTitlePage setSun={setSun} className={'flex-1'} sun={sun} />
        </div>
      </Layout>
    </div>
  </>
  )
}
