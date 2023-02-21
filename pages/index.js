import React, { useEffect, useState , useRef} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Background from '@/components/sections/Background'
import { PageWrapper } from '@/components/context/pageContext'
import { useAppContext } from '@/components/context/appContext'
// import { useDimensions } from '@/utils/useDimensions'

import Title from '@/components/sections/Title'
import Layout from '@/components/sections/Layout'
import Footer from '@/components/sections/Footer'

import ButtonBig from '@components/atoms/ButtonBig'

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
import Navbar from '@/components/navbar/Navbar'

export default function Home({ }) {

  const { scrolled, width:screenWidth, height:screenHeight, screens } = useAppContext();
  // let svgRef = useRef(null)
  let [svgHeight, setSvgHeight] = useState(undefined)
  let [svgWidth, setSvgWidth] = useState(undefined)
  let [titleHeight, setTitleHeight] = useState(undefined)
  let [svgViewHeight, setSvgViewHeight] = useState(undefined) //For calculation of FadeDiv
  let [scrollingDivHeight, setScrollingDivHeight] = useState(undefined)
  
  let [footerHeight, setFooterHeight] = useState(undefined)
  let [animationLocation, setAnimationLocation] = useState({top:undefined, bottom:undefined})
  let [textLocation, setTextLocation] = useState({top:undefined, bottom:undefined})

  let [moveTracker,setMoveTracker] = useState(0) //Tracker to move background when animation moves
  let [maxMoveTracker,setMaxMoveTracker] = useState(0) //Tracker to move background when animation moves
  // let [moved, setMoved] = useState(false)

  let [finished, setFinished] = useState(false)
  // const {width:svgWidth, height:svgHeight} = useDimensions(svgRef)
  // let [steps, setSteps] = useState([{from:0.45, for:400}, {from: 0.74, for:450}]);
  
  let mobile = screenWidth<768
  let speed = 0
    // let footerHeight = screenWidth<768?300:250
    // let heightToScroll = finished?`${svgHeight+titleHeight+footerHeight}px`:mobile?svgHeight+titleHeight+footerHeight+'px':'3000px'
    
  let finishingScroll = 1 // Same as ending of animation
  useEffect(()=>{
    if (scrolled >= finishingScroll && !finished) {setFinished(true)}
    // if (scrolled >= 0.97 && !mobile) {setFinished(true)}
  },[scrolled])

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  // useEffect(()=>{
  //  console.log('footerHeight: ' + footerHeight)
  //  console.log('titleHeight: ' + titleHeight)
  //  console.log('svgWidth: ' + svgWidth)
  //  console.log('scrollingDivHeight: ' + scrollingDivHeight)

  // console.log('================')
  // console.log('total: titleH + scrollingDivH + footerH: ' + (titleHeight+scrollingDivHeight+footerHeight) )
  // console.log('max scroll: total - screenHeight: ' + (titleHeight+scrollingDivHeight+footerHeight-screenHeight) )

  // },[footerHeight, titleHeight, scrollingDivHeight, svgHeight, screenHeight])

  // useEffect(()=>{
  //   console.log(animationLocation)
  // },[animationLocation])

  // useEffect(()=>{
  //   console.log(scrolled)
  // })


  useEffect(()=>{
      // console.log('svgViewHeight '+svgViewHeight, 'svgHeight '+svgHeight, 'screenHeight ' + screenHeight )
    
    if (screenHeight > 0 && titleHeight > 0) {
      if ((screenHeight-titleHeight)!==svgViewHeight) {
        setSvgViewHeight(screenHeight-titleHeight)}
      // console.log(`h-[${screenHeight-titleHeight}]`})
    }

  },[screenHeight, titleHeight])

  // useEffect(()=>{console.log(svgViewHeight)},[svgViewHeight])

 


  // let steps = getStepsFromWidth()

  // let step1= {from:0.49, for:350}
  // let step2= {from: 0.74, for:450}
  let heightToScroll = finished?scrollingDivHeight+titleHeight+footerHeight:screenWidth<768?12000:6000

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content=" " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main style={{height: heightToScroll+'px'}} className={`w-full`}>
      {/* {screenWidth<768 && <ScrollVisual scrolled={scrolled} />} */}
        {/* {console.log(screenWidth, !screens.md)} */}

        <PageWrapper 
        darkMode={true} 
        svgWidth={'w-11/12 md:w-4/5 xl:w-3/5'} 
        viewBox={screens.md?"0 0 1468 2322":"0 0 701 5137"} 
        finished={finished} 
        mobile={mobile}
        setAnimationLocation={setAnimationLocation}
        setTextLocation={setTextLocation}
        // moved={moved}
        // setMoved={setMoved}
        >
        {/* 1468 */}
          <Background moves={moveTracker} maxMoves={maxMoveTracker}/>
          
          {/* <Layout> */}
          <Title style={{position: 1<0?(mobile?finished?'relative':'fixed':'fixed'):(finished?'relative':'fixed'), left:'50%', top:0, transform:`translate(-50%, -${finished?0:moveTracker>=1?titleHeight:0}px)`, transition:'all 1s ease'}} 
          className={`${finished?`inline-flex flex-col justify-center items-center mx-auto ${1<0?'bg-black/30 backdrop-blur mt-2 sm:mt-2 rounded-full shadow-sm':''}  w-fit transition-all duration-1000 `
          :'w-full'}`} setHeight={setTitleHeight} mainTitle={'About\nSpirée'} subTitle={'Empowering women to run everywhere,\nwith confidence and style.'} />
          
          <section className='flex w-4/5 mx-auto ' >

            <FadeDiv style={{height: finished?scrollingDivHeight+'px':svgViewHeight+'px', width: screenWidth+'px', top: titleHeight+'px'}} className={`${finished?'absolute':'fixed'} flex left-1/2 -translate-x-1/2 `} amount={1<0?finished?0:mobile?2:10:0} type={1<0?finished?`top`:'both':'none'}>

          {/* style={{height: svgHeight+'px'}} */}
              <ScrollingDiv setMoveTracker={setMoveTracker} setMaxMoveTracker={setMaxMoveTracker} setScrollingDivHeight={setScrollingDivHeight} finishingScroll={finishingScroll} animationLocation={animationLocation} textLocation={textLocation} footerHeight={footerHeight} screenHeight={screenHeight} svgHeight={svgHeight} titleHeight={titleHeight}
              className={`absolute w-full left-1/2 -translate-x-1/2 
              ${screenHeight>1000?'top-[60px]':'top-6 md:top-[20px]'} 
              `} >
               {/* ${scrolled<steps[0]?.from?'-translate-y-[0]':scrolled<steps[1]?.from?' -translate-y-[500px] ':' -translate-y-[100px] ' } */}
               

                <Story1Astrid setSvgHeight={setSvgHeight} setSvgWidth={setSvgWidth} speed={1} scrollMin={0} scrollMax={0} />
                <Story2Pharma speed={1} scrollMin={0} scrollMax={0.10} />
                <Story3Mountain speed={1} scrollMin={0.11} scrollMax={0.2} />
                <Story4Flowers speed={1} scrollMin={0.215} scrollMax={0.35} />
                <Story5Meaning speed={1} scrollMin={0.39} scrollMax={0.42} />
                <Story6Spiree speed={1} scrollMin={0.45} scrollMax={0.53} />
                <Story7SunMoon speed={1} scrollMin={0.55} scrollMax={0.62} />
                <Story8Merino speed={1} scrollMin={0.64} scrollMax={0.70} />
                <Story9Passion speed={1} scrollMin={0.73} scrollMax={0.76} />
                <Story10RE speed={1} scrollMin={0.78} scrollMax={0.82} />
                <Story11Women speed={1} scrollMin={0.83} scrollMax={0.86} />
                <Story12Support speed={1} scrollMin={0.88} scrollMax={1} />
                <StoryText/>

              </ScrollingDiv>
            </FadeDiv>

            <ButtonBig tabIndex={finished?0:-1} className={`${finished?'visible':'invisible'}`} style={{width: `${svgWidth*(mobile?0.487839:0.23276)-12}px`, height:`${svgHeight*(mobile?0.0209414:0.044709)-8}px`, 
            left:'50%', transform:'translate(-50%,0)', top:(titleHeight+scrollingDivHeight-(svgHeight*(mobile?0.0209414:0.044709))+(mobile?3:2))+'px',
            opacity:finished?1:0, transition: 'opacity 1.5s ease, background 0.5s ease, border 0.5s ease' }} text='join'/>

          </section>

          <Footer setFooterHeight={setFooterHeight} noMotion={true} style={{position: finished?'absolute':'fixed', top: finished?titleHeight+scrollingDivHeight:(screenHeight-footerHeight)+'px', opacity:finished?1:scrolled>finishingScroll?1:0, transition: 'opacity 1.5s ease', transitionDelay: '1s'} }/>
          {/* {console.log('footer position from top: '+ (heightToScroll-footerHeight-screenHeight))} */}
          {/* {console.log(heightToScroll)} */}
          {/* {console.log(footerHeight)} */}
{/* titleHeight+svgHeight+'px' */}
          {/* </Layout> */}
      <Navbar/>  
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

