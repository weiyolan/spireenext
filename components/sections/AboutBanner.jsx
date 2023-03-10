import Image from 'next/image'
import React from 'react'
import Button from '../atoms/Button'
import SubTitle from '../atoms/SubTitle'
import Story1Astrid from '../story/Story1Astrid'
import Story2PharmaBanner from '../story/Story2PharmaBanner'
import Layout from './Layout'

export default function AboutBanner() {
  return (
    <div id='about-banner' className='relative h-fit min-h-[100vh] lg:h-[100vh] -translate-y-16 w-full z-[1] rounded-b-[40px] lg:rounded-b-[60px] overflow-hidden shadow-2xl shadow-black/30 
    pt-20 lg:pt-[140px] '>

      <div className='absolute w-full h-full top-0'>
        <Image alt='' fill src='/images/aboutBanner.png' className={`object-cover object-left-bottom`} sizes="100vw" quality={100} />
      </div>

      <div className='flex h-full items-center'>
        <Layout>
          <div className='flex flex-col items-end xl:mb-96'>
            <SubTitle right mainTitle={'Meet Astrid'} subTitle={"Meet Astrid and discover the inspiration\nbehind Spirée's mission to empower runners."} />
            <Button className='my-4 sm:my-8' text='EXPERIENCE THE STORY' to='/about' med />
          </div>
        </Layout>
      </div>
      <div className='absolute w-full h-4/5 flex items-center bottom-0 right-0 lg:top-1/2 sm:-translate-y-[calc(50%)] sm:translate-x-64 sm:w-full sm:h-full'>
        <Story1Astrid banner speed={1} scrollMin={0} scrollMax={0} />
        <Story2PharmaBanner speed={1} scrollMin={0} scrollMax={0} />
      </div>

    </div>
  )
}
