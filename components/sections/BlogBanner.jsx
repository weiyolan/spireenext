import Image from 'next/image'
import React from 'react'
import Button from '../atoms/Button'
import StayInTouch from '../atoms/StayInTouch'
import SubTitle from '../atoms/SubTitle'
import Footer from './Footer'
import Layout from './Layout'

export default function BlogBanner() {
  return (
    <div className='relative min-h-fit xl:h-[75vh] rounded-t-[40px] lg:rounded-t-[60px] -translate-y-48 w-full overflow-hidden '>
      <div className='absolute w-full h-full top-0'>
        <Image alt='' fill src='/images/blogBackground2.png' className={`object-cover object-center`} sizes="100vw" quality={100} />
      </div>
      
      <Layout>

        <div className='flex relative flex-wrap mt-20 w-full h-full'>
          <div className='flex text-black flex-col w-1/2 items-start '>
            <SubTitle darkMode={false} left mainTitle={'Our Blog'} subTitle={"Join us on the journey to unleash your inner\nathlete with Spirée's celestial collection."} />
            <Button className='my-8' text='Read our Blog' to='/blog' med />
          </div>
          <div className='flex flex-col w-1/2 items-end '>
            <SubTitle darkMode={false} right mainTitle={'Newsletter'} subTitle={"Want to be the first to know when the\nCelestial Collection is ready for launch?"} />
            <div className='my-8'><StayInTouch /></div>
            {/* <Button className='my-8' text='EXPERIENCE THE STORY' to='/about' med /> */}
          </div>
        </div>

      </Layout>
      <Footer style={{position: 'absolute'}} className='bottom-0' noMargin />
    </div>

  )
}
