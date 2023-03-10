import Image from 'next/image'
import React, { useRef, useState,useEffect } from 'react'
import AddSupport from '../atoms/AddSupport'
import Button from '../atoms/Button'
import SubTitle from '../atoms/SubTitle'
import Layout from './Layout'

let joinText = `Join us in bringing the Celestial Sun and Moon series to life by supporting our crowdfunding campaign! For a limited time, donations of €50 or more will receive a special gift package including a limited edition Spirée headband, gloves, and neck warmer.\nHelp us create high-quality, sustainable sportswear while receiving exclusive rewards. Donate now and be a part of our journey!`


export default function SupportBanner({setHeight}) {

  let bannerRef=useRef(null)

  let [dimensions, setDimensions] = useState({ height: undefined })

  useEffect(() => {
    function handleSize() {
      const { height } = bannerRef.current.getBoundingClientRect();
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
  }, [])

  useEffect(() => {
    if (dimensions.height > 0 && setHeight !== undefined) {
      setHeight(dimensions.height)
    }
  }, [dimensions])
  return (
    <div ref={bannerRef}  className='relative h-fit lg:h-[100vh] flex -top-32 w-full overflow-hidden '>

      <div className='absolute w-full h-full top-0'>
        <Image alt='' fill src='/images/supportBackground.jpg' className={`object-cover object-center`} sizes="100vw" quality={100} />
      </div>

      <div className='relative flex flex-col lg:flex-row w-full h-full'>
        <div className='flex w-full flex-1 lg:w-1/2 h-1/2 lg:h-full top-0 pt-[5rem] bg-black/20 backdrop-blur'>
          <Layout className='flex w-full mt-10 pb-8 lg:pb-20 2xl:px-56'>
            <div className='relative flex flex-1 flex-col lg:h-full justify-center  '>
              <div className=''>
                <SubTitle left mainTitle={'Join Us'} subTitle={""} />
              </div>
              <p className='text-justify  font-quick font-light whitespace-pre-wrap my-8'>
                {joinText}
              </p>
              <AddSupport />
              <Button className='my-8 -ml-2' text='See rewards' to='/support' med />
            </div>
          </Layout>
        </div>

        <div className='flex w-full flex-1 lg:w-1/2 h-1/2 lg:h-full justify-center items-center '>
          <div className='pt-[110px] pb-[4rem]'>
            <svg width="0" height="0" >
              <clipPath id="svgClip" clipPathUnits="objectBoundingBox">
                <path id="Spiree" d="M0.91045 0.463896L0.637766 0L0.393629 0.415337C0.35015 0.341042 0.306102 0.266743 0.260522 0.204871C0.229056 0.162157 0.195285 0.122352 0.157657 0.0931172C0.119728 0.0636484 0.0766147 0.0439613 0.0271849 0.0439613H0L0 0.15858H0.0271849C0.0420144 0.15858 0.0618631 0.165961 0.0867207 0.185491C0.111229 0.204747 0.138064 0.233839 0.166305 0.272175C0.210157 0.331701 0.2544 0.407234 0.300811 0.48647C0.314796 0.510347 0.328979 0.53456 0.343407 0.558773L0.393942 0.64359L0.637767 0.228795L0.809595 0.521102L0.809634 0.521169L0.865733 0.617239L1 0.617239L0.91045 0.463896Z" fill="#0E0C0C" />
              </clipPath>
            </svg>
            <Image style={{ clipPath: 'url(#svgClip)' }}
              width={3840 / 2} height={2490 / 2} src='/images/blogBackground2.png' className='w-64 h-[250px] drop-shadow-2xl ' alt='spirée logo' />
          </div>
        </div>
      </div>


    </div>
  )
}
