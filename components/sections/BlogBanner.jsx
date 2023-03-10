import Image from 'next/image'
import React, { useRef, useState ,useEffect} from 'react'
import Button from '../atoms/Button'
import StayInTouch from '../atoms/StayInTouch'
import SubTitle from '../atoms/SubTitle'
import { useAppContext } from '../context/appContext'
import Footer from './Footer'
import Layout from './Layout'

export default function BlogBanner({setHeight}) {
const {width} = useAppContext()

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
    <div ref={bannerRef}  id='blog-banner' className='relative h-fit lg:h-[65vh] 2xl:h-[65vh] min-[1800px]:h-[50vh] rounded-t-[40px] lg:rounded-t-[60px] -top-48 w-full overflow-hidden '>
      <div className='absolute w-full h-full top-0'>
        <Image alt='' fill src='/images/blogBackground2.png' className={`object-cover object-center`} sizes="100vw" quality={100} />
      </div>
      
      <Layout>

        <div className='flex relative flex-col lg:flex-row mt-12 w-full h-full'>
          <div className='flex text-black flex-col lg:w-1/2 items-center text-center lg:items-start '>
            <SubTitle darkMode={false} left={width>1024} mainTitle={'Our Blog'} subTitle={"Join us on the journey to unleash your inner\nathlete with Spirée's celestial collection."} />
            <Button className='my-8' text='Read our Blog' to='/blog' med />
          </div>
          <div className='flex flex-col lg:w-1/2 items-center text-center lg:items-end '>
            <SubTitle darkMode={false} right={width>1024} mainTitle={'Newsletter'} subTitle={"Want to be the first to know when the\nCelestial Collection is ready for launch?"} />
            <div className='my-8'><StayInTouch /></div>
            {/* <Button className='my-8' text='EXPERIENCE THE STORY' to='/about' med /> */}
          </div>
        </div>

      </Layout>
      <Footer style={{position: ''}} className='lg:absolute lg:bottom-0 ' noMargin />
    </div>

  )
}
