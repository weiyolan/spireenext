import React, { useEffect, useState , useRef} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import BackgroundMoving from '@/components/sections/BackgroundMoving'
import { PageWrapper } from '@/components/context/pageContext'
import { useAppContext } from '@/components/context/appContext'
// import { useDimensions } from '@/utils/useDimensions'

import Title from '@/components/atoms/Title'
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
import ShoppingCart from '@/components/cart/ShoppingCart'

export default function Home({ }) {

  const { scrolled, width:screenWidth, height:screenHeight, screens, handleLightboxes } = useAppContext();
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

  // let [mobile, setMobile] = useState(false)

  // useEffect(()=>{
  //   if (screenWidth<768 && !mobile) {
  //     setMobile(true)
  //   } else if (screenWidth>768 && mobile) {setMobile(false)}
  // },[screenWidth])

    // let footerHeight = screenWidth<768?300:250
    // let heightToScroll = finished?`${svgHeight+titleHeight+footerHeight}px`:mobile?svgHeight+titleHeight+footerHeight+'px':'3000px'
    
  let finishingScroll = mobile?0.95:0.995 // Same as ending of animation
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
  let heightToScroll = (mobile || finished)?scrollingDivHeight+titleHeight+footerHeight:6000
  // let heightToScroll = finished?scrollingDivHeight+titleHeight+footerHeight:screenWidth<768?12000:6000

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content=" " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main style={{height: heightToScroll+'px'}} className={`w-full`} onClick={handleLightboxes}>
      {/* {screenWidth<768 && <ScrollVisual scrolled={scrolled} />} */}
        {/* {console.log(screenWidth, !screens.md)} */}

        <PageWrapper 
        darkMode={true} 
        viewBox={mobile?"0 0 701 5157":"0 0 1468 2342"} 
        // svgWidth={""} 
        finished={finished} 
        mobile={mobile}
        setAnimationLocation={setAnimationLocation}
        setTextLocation={setTextLocation}
        // moved={moved}
        // setMoved={setMoved}
        >
        {/* 1468 */}
          <BackgroundMoving src={'/images/StoryBackground5.png'} moves={moveTracker} maxMoves={maxMoveTracker}/>
          
          {/* <Layout> */}
          <Title style={{position:(mobile || finished)?'relative':'fixed', left:'50%', top:0, transform:`translate(-50%, -${(mobile || finished)?0:moveTracker>=1?titleHeight:0}px)`, transition:'all 1s ease'}} 
          className={`${(mobile || finished)?`inline-flex flex-col justify-center items-center mx-auto  w-fit transition-all duration-1000 `
          :'w-full'}`} setHeight={setTitleHeight} mainTitle={'About\nSpirée'} subTitle={'Empowering women to run everywhere,\nwith confidence and style.'} />
          
          <section className='flex w-4/5 mx-auto ' >

            <FadeDiv style={{height: (mobile || finished)?scrollingDivHeight+'px':svgViewHeight+'px', width: screenWidth+'px', top: titleHeight+'px'}} className={`${(mobile || finished)?'absolute':'fixed'} flex left-1/2 -translate-x-1/2 `} amount={false?(finished?0:mobile?2:10):0} type={false?(finished?`top`:'both'):'none'}>

          {/* style={{height: svgHeight+'px'}} */}
              <ScrollingDiv setMoveTracker={setMoveTracker} setMaxMoveTracker={setMaxMoveTracker} setScrollingDivHeight={setScrollingDivHeight} finishingScroll={finishingScroll} animationLocation={animationLocation} textLocation={textLocation} footerHeight={footerHeight} screenHeight={screenHeight} svgHeight={svgHeight} titleHeight={titleHeight}
              className={`absolute w-full left-1/2 -translate-x-1/2 ${screenHeight>1000?'top-[60px]':'top-6 md:top-[20px]'}`} >
              
               {/* ${scrolled<steps[0]?.from?'-translate-y-[0]':scrolled<steps[1]?.from?' -translate-y-[500px] ':' -translate-y-[100px] ' } */}
               

                <Story1Astrid setSvgHeight={setSvgHeight} setSvgWidth={setSvgWidth} speed={1} scrollMin={0} scrollMax={0} />
                <Story2Pharma speed={1} scrollMin={mobile? 0:0} scrollMax={mobile? 0.05:0.10} />
                <Story3Mountain speed={1} scrollMin={mobile? 0.055:0.11} scrollMax={mobile? 0.11:0.2} />
                <Story4Flowers speed={1} scrollMin={mobile? 0.115:0.215} scrollMax={mobile? 0.2:0.35} />
                <Story5Meaning speed={1} scrollMin={mobile? 0.22:0.39} scrollMax={mobile? 0.28:0.42} />
                <Story6Spiree speed={1} scrollMin={mobile? 0.29:0.45} scrollMax={mobile? 0.35:0.53} />
                <Story7SunMoon speed={1} scrollMin={mobile? 0.36:0.55} scrollMax={mobile? 0.42:0.62} />
                <Story8Merino speed={1} scrollMin={mobile? 0.48:0.64} scrollMax={mobile? 0.53:0.70} />
                <Story9Passion speed={1} scrollMin={mobile? 0.55:0.73} scrollMax={mobile? 0.63:0.76} />
                <Story10RE speed={1} scrollMin={mobile? 0.64:0.78} scrollMax={mobile? 0.7:0.82} />
                <Story11Women speed={1} scrollMin={mobile? 0.71:0.83} scrollMax={mobile? 0.8:0.86} />
                <Story12Support speed={1} scrollMin={mobile? 0.81:0.88} scrollMax={mobile? 0.9:0.995} />
                <StoryText/>

              </ScrollingDiv>
            </FadeDiv>

            <ButtonBig tabIndex={finished?0:mobile?(scrolled>0.92?0:-1):-1} 
            className={`${finished?'visible ':mobile?(scrolled>0.92?'visible ':'invisble'):'invisible'}`} 
            style={{width: `${svgWidth*(mobile?0.487839:0.23276)-12}px`, height:`${svgHeight*(mobile?0.02113222179:0.0465414175)-8}px`, 
            left:'50%', transform:'translate(-50%,0)', top:(titleHeight+scrollingDivHeight-(svgHeight*(mobile?0.025009693679:0.0550811272))+(mobile?4:4))+'px',
            opacity:finished?1:mobile?(scrolled>0.92?1:0):0, transition: 'opacity 1.5s ease, background 0.5s ease, border 0.5s ease' }} text='join' to='support'/>
{/* svgHeight*(mobile?0.0209414:0.044709))+(mobile?3.5:2) */}
          </section>

          <Footer setFooterHeight={setFooterHeight} noMotion={true} style={{position: (mobile || finished)?'absolute':'fixed', top: (mobile || finished)?(titleHeight+scrollingDivHeight || 0):(screenHeight-footerHeight)+'px', opacity:finished?1:scrolled>finishingScroll?1:0, transition: 'opacity 1.5s ease', transitionDelay: '1s'} }/>
          {/* {console.log('footer position from top: '+ (heightToScroll-footerHeight-screenHeight))} */}
          {/* {console.log(heightToScroll)} */}
          {/* {console.log(footerHeight)} */}
{/* titleHeight+svgHeight+'px' */}
          {/* </Layout> */}
        <Navbar from='about'/>  
        <ShoppingCart/>  
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

