import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Button from '../atoms/Button'
import SubTitle from '../atoms/SubTitle'
import { useAppContext } from '../context/appContext'
import Story1Astrid from '../story/Story1Astrid'
import Story2PharmaBanner from '../story/Story2PharmaBanner'
import Layout from './Layout'

export default function AboutBanner({setHeight, ...props}) {
  const {width} = useAppContext();

  let bannerRef = useRef(null)


  let [dimensions, setDimensions] = useState({ height: undefined })
  let [svgHeight, setSvgHeight] = useState({ height: undefined })

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
  }, [props.children,svgHeight])

  // console.log(dimensions.height)

  useEffect(() => {
    if (dimensions.height > 0 && setHeight !== undefined) {
      setHeight(dimensions.height)
    }
  }, [dimensions])

  return (
    <div   id='about-banner' className='relative h-fit lg:h-[100vh] -top-16 w-full z-[1] rounded-b-[40px] lg:rounded-b-[60px] overflow-hidden shadow-2xl shadow-black/30 
    pt-20 lg:pt-[4rem] '>

      <div ref={bannerRef} className='absolute w-full h-full top-0'>
        <Image alt='' fill src='/images/aboutBanner.png' className={`object-cover object-[-250px_100%] lg:object-left-bottom`} sizes="100vw" quality={100} />
      </div>

      <div className='relative z-10 flex h-fit md:h-full items-center'>
        <Layout className='h-fit'>
          <div className='flex flex-col items-end mt-10 xl:-translate-y-1/2'>
            <SubTitle right mainTitle={'Meet Astrid'} subTitle={"Meet Astrid and discover the inspiration\nbehind Spirée's mission to empower runners."} />
            <Button className='my-4 md:my-8' text='Watch The Story' to='/about' med />
          </div>
        </Layout>
      </div>

      <div className='relative xl:absolute xl:top-1/3 xl:translate-y-1/4 min-[1900px]:top-1/4 w-full h-[fit] lg:h-[52vh]'>
        {/* x701 y868 1:1.238*/}
        <div style={{height: `${width<480?(width*1.24*1+ 20)+'px':width<640?(width*1.24*8/12+ 30)+'px':width<768?(width*1.24*5/6+ 40)+'px':width<1024?'100%':'100%'}`}} className='relative w-full md:h-full flex md:-translate-y-[calc(50%)] mobm:translate-x-12  md:translate-x-96 lg:translate-y-0 lg:translate-x-80' >
          <Story1Astrid banner setSvgHeight={setSvgHeight} setSvgWidth={()=>{}} speed={1} scrollMin={0} scrollMax={0} />
          <Story2PharmaBanner speed={1} scrollMin={0} scrollMax={0} />
        </div>
      </div>

    </div>
  )
}
