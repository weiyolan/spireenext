import React, { useEffect, useState , useRef} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Background from '@components/context/Background'
import { PageWrapper } from '@/components/context/pageContext'
import { useAppContext } from '@/components/context/appContext'
// import { useDimensions } from '@/utils/useDimensions'

import Title from '@/components/Title'
import Layout from '@/components/atoms/Layout'

import ScrollVisual from '@/components/scroll/ScrollVisual'
import ScrollingDiv from '@/components/scroll/ScrollingDiv'
import FadeDiv from '@/components/scroll/FadeDiv'

// import SpireeStory from '../public/images/spireeStory.svg'
import Story1Astrid from '@/components/story/Story1Astrid'
// import Story2Pharma from '@/components/story/Story2PharmaBackup'
import Story2Pharma from '@/components/story/Story2Pharma'
import Story3Mountain from '@/components/story/Story3Mountain'
import Story4Flowers from '@/components/story/Story4Flowers'
import Story5Meaning from '@/components/story/Story5Meaning'
import Story6Spiree from '@/components/story/Story6Spiree'
import Story7SunMoon from '@/components/story/Story7SunMoon'
import Story8Merino from '@/components/story/Story8Merino'
import Story9Passion from '@/components/story/Story9Passion'
import Story10RE from '@/components/story/Story10RE'
import Story11Women from '@/components/story/Story11Women'
import Story12Support from '@/components/story/Story12Support'
import StoryText from '@/components/story/StoryText'

export default function Home({ }) {

  const { scrolled, width:screenWidth, height:screenHeight, screens } = useAppContext();
  // let svgRef = useRef(null)
  let [svgHeight, setSvgHeight] = useState(undefined)
  let [titleHeight, setTitleHeight] = useState(undefined)
  let [svgViewHeight, setSvgViewHeight] = useState(undefined)
  let [animationLocation, setAnimationLocation] = useState({top:undefined, bottom:undefined})
  // let [moved, setMoved] = useState(false)

  let [finished, setFinished] = useState(false)
  // const {width:svgWidth, height:svgHeight} = useDimensions(svgRef)
  // let [steps, setSteps] = useState([{from:0.45, for:400}, {from: 0.74, for:450}]);
  
  useEffect(()=>{
    if (scrolled >= 0.97) {setFinished(true)}
  },[scrolled])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  // useEffect(()=>{
  //   if (moved) {
  //     setAnimationLocation({top:undefined, bottom:undefined})
  //   }
  // },[moved])

  // useEffect(()=>{
  //   console.log(animationLocation)
  // },[animationLocation])


  useEffect(()=>{
      // console.log('svgViewHeight '+svgViewHeight, 'svgHeight '+svgHeight, 'screenHeight ' + screenHeight )

    if (screenHeight > 0 && titleHeight > 0) {
    setSvgViewHeight(screenHeight-titleHeight)
      // console.log(`h-[${screenHeight-titleHeight}]`)
    }

  },[screenHeight, titleHeight, svgViewHeight])

  // useEffect(()=>{console.log(svgViewHeight)},[svgViewHeight])

 
  let speed = 0
  let heightToScroll = screenWidth<768?'h-[6000px]':'h-[3000px]'


  // let steps = getStepsFromWidth()

  // let step1= {from:0.49, for:350}
  // let step2= {from: 0.74, for:450}

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content=" " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={`w-full ${heightToScroll}`}>
      {/* {screenWidth<768 && <ScrollVisual scrolled={scrolled} />} */}
        {/* {console.log(screenWidth, !screens.md)} */}
        <PageWrapper 
        darkMode={true} 
        svgWidth={'w-11/12 md:w-4/5 xl:w-3/5'} 
        viewBox={screens.md?"0 0 1468 2328":"0 0 701 5205"} 
        finished={finished} 
        mobile={screenWidth<768}
        setAnimationLocation={setAnimationLocation}
        // moved={moved}
        // setMoved={setMoved}
        >
        {/* 1468 */}
          <Background />
          
          <Layout>
          <Title style={{position:'fixed', display:'absolute', left:'-50%', top:0, transform:'translate(50%,0)'}} setHeight={setTitleHeight} mainTitle={'About\nSpirée'} subTitle={'Empowering women to run everywhere, with confidence and style.'} />
          
          <section className='flex w-4/5 mx-auto relative' >
          {/* style={{height: svgViewHeight || '90vh', top: titleHeight||100 }} */}
          {/* ${getStyle('h', svgViewHeight,'px')} ${getStyle('top', titleHeight,'px')}  */}
            <FadeDiv style={{height: svgViewHeight+'px', top: titleHeight+'px'}} className={`fixed md:fixed w-full left-1/2 -translate-x-1/2 `} amount={10} type={``}>
            
              {/* <ScrollingDiv className='fixed w-full top-[40px] left-1/2' 
                speed = {speed}
                step1 = {steps[0]}
                step2 = {steps[1]}> */}
          {/* ${svgHeight?`h-[${svgHeight}px]`:'h-[2438px]'} */}
          {/* h-[2438px] */}

          {/* ${getStyle('h', svgHeight,'px')} */}
              <ScrollingDiv animationLocation={animationLocation} screenHeight={screenHeight} svgHeight={svgHeight} titleHeight={titleHeight}
              className={`absolute flex w-full left-1/2 -translate-x-1/2 
              ${screenHeight>1000?'top-[60px]':'top-6 md:top-[20px]'} 
              `} >
               {/* ${scrolled<steps[0]?.from?'-translate-y-[0]':scrolled<steps[1]?.from?' -translate-y-[500px] ':' -translate-y-[100px] ' } */}
               

                <Story1Astrid setSvgHeight={setSvgHeight} speed={1} scrollMin={0} scrollMax={0} />
                <Story2Pharma speed={1} scrollMin={0} scrollMax={0.10} />
                <Story3Mountain speed={1} scrollMin={0.11} scrollMax={0.2} />
                <Story4Flowers speed={1} scrollMin={0.215} scrollMax={0.35} />
                <Story5Meaning speed={1} scrollMin={0.39} scrollMax={0.42} />
                <Story6Spiree speed={1} scrollMin={0.45} scrollMax={0.53} />
                <Story7SunMoon speed={1} scrollMin={0.55} scrollMax={0.62} />
                <Story8Merino speed={1} scrollMin={0.65} scrollMax={0.70} />
                <Story9Passion speed={1} scrollMin={0.73} scrollMax={0.76} />
                <Story10RE speed={1} scrollMin={0.78} scrollMax={0.82} />
                <Story11Women speed={1} scrollMin={0.84} scrollMax={0.86} />
                <Story12Support speed={1} scrollMin={0.87} scrollMax={0.95} />
                <StoryText/>

              </ScrollingDiv>
            </FadeDiv>

          </section>

          
          </Layout>
        </PageWrapper>
      </main>
    </>
  )
}


export async function getStaticProps() {
  //   const pets = await client.fetch(`*[_type == "post"]`);

  return {
    props: {
      //   pets
    }
  };
}

