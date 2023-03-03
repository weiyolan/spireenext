import Image from "next/image"
// import Subtitle from "./Subtitle"
import MerinoQuality from "./MerinoQuality"
import { useState, useEffect, useCallback } from "react"
// import LayoutSection from "./LayoutSection"
// import { motion } from "framer-motion"
import ArrowLink from "@components/atoms/ArrowLink"
import { useAppContext } from "../context/appContext"
// import MerinoText2 from "../merino/MerinoOdour"
import MerinoOdour from "../merino/MerinoOdour"
import MerinoQuickdry from "../merino/MerinoQuickdry"
import MerinoNatural from "../merino/MerinoNatural"
import MerinoSkin from "../merino/MerinoSkin"
import MerinoThermo from "../merino/MerinoThermo"
// import useWindowSize from "./useWindowSize"



export default function MerinoQualities({ name, title, span, text, position, realFirst, first, noBlur, qualities, titleHeight }) {
  // create object with key-value pairs of index-false
  let [visibleItem, setVisibleItem] = useState(new Array(qualities.length).fill(false))
  let [clicked, setClicked] = useState(false)
  //   let window = useAppContext()
  let { locale, width } = useAppContext()

  // {console.log(titleHeight)}

  // let breakPointSmall = 684
  // let [visibleItem, setVisibleItem] = useState(Object.fromEntries(new Array(qualities.length).fill(false).map((val,i)=>[i,val])))
  // let [globalClick,setGlobalClick] = useState(false)
  // let [serviceText,setServiceText] = useState('')

  useEffect(() => {
    handleVisibility(true, Math.floor(Math.random() * qualities.length))
    // console.log('handlevisiblity')
  }, [qualities])

  useEffect(() => {
    let interval = setInterval(() => {
      if (!clicked) { nextVisibility(visibleItem) }
    }, 10000)

    return () => clearInterval(interval)

  }, [visibleItem, clicked])

  function handleVisibility(newVal, i) {
    if (newVal === true) {
      let newVisibility = new Array(qualities.length).fill(false);
      newVisibility[i] = newVal;
      setVisibleItem(newVisibility)
    } else if (newVal === false) {
      randomVisibility(visibleItem)
    }
  }

  function nextVisibility(visibleItems) {
    let currentItem = visibleItems.indexOf(true);
    if (currentItem === -1) {
      handleVisibility(true, 0)
    } else {
      let nextItem = currentItem === visibleItems.length - 1 ? 0 : currentItem + 1;
      handleVisibility(true, nextItem)
    }
  }

  function randomVisibility(visibleItems) {
    let currentItem = visibleItems.indexOf(true);
    let indexes = new Array(visibleItems.length).fill(0).map((val, i) => { return i })
    if (currentItem > -1) {
      indexes.splice(currentItem, 1);
    }
    let newIndex = indexes[Math.floor(Math.random() * indexes.length)];
    handleVisibility(true, newIndex)
  }

  //   let info = (
  //     <div className='cursor-default'>
  //       <Subtitle className=''
  //         name={name}
  //         title={title}
  //         span={span}
  //         text={text}
  //         realFirst={realFirst}
  //         first={window.width < breakPointSmall ? true : first}
  //         position={position}
  //       />
  //       <div className={`flex ${position === 'left' ? '' : 'justify-end'} `}>
  //         <ArrowLink text={`${locale === 'en' ? 'Ask a quote' : 'Demandez un devis'}`} to={'/contact/#Form'} ext={false} />
  //       </div>
  // <div className={`flex mt-8 ${position === 'left' ? '' : 'justify-end'} `}>

  // </div>
  //     </div>
  //   )

  let height = width > 2170 ? 1100 :  width > 1730 ? 900 : width > 1013 ? 720 : width > 648 ? 720 : width>480? 640 : width>420?550:550  // height of photo and svg parent div
  let offset = width>1400?40:width>1013?100:width>900?180:width>768?180:width>648?180:width>550?130:width>480?120:width>420?80:145// md: 768px -> 180
  let svgOffset = width > 2170 ? -110 :width > 1730 ? -55 : width > 1730 ? -55 :width>648?0:width>480?22:52
  let svgWidth = height * 1.069444 //770   // actual width
  // console.log(height)

  let fadeStyle = () => ({
    // 'maskImage': `radial-gradient(circle ${width*0.8+'px'} at 20% 100% , #000000FF 40%, #00000000 80%)`,
    // 'maskImage': `radial-gradient( at 20% 100% , #000000FF 40%, #00000000 80%)`,
    // 'maskSize': '100% 100%',
    'WebkitMaskImage': `radial-gradient(${width<768?'70% 70%':'70% 150%'} at ${width<768?'50% 45%':'20% 100%'} , #000000FF 40%, #00000000 80%)`,
    'maskPosition': '0 0',
    'maskRepeat': 'no-repeat',
  })
  let fontSize = width>480?22:25

  function getSVG(id, title, i) {
    switch (id) {
      case 'Odour': return <MerinoOdour key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Quickdry': return <MerinoQuickdry key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Natural': return <MerinoNatural key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Skin': return <MerinoSkin key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Thermo': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
    }
  }


  return (
    <div  style={{ height: height - (titleHeight || 0) }  } id={name} className={`flex w-full flex-col md:flex-row`}>
      <div style={{ ...fadeStyle(), ...{ height: height } }} className='absolute z-0 top-0 left-0 h-[720px] w-full '>
        {/* <img style={{objectPosition:`-${218}px 0px`}} alt='' src='/images/merinoBackgroundWide.jpg' className={`object-cover h-full object-left-bottom `}/> */}
        <Image style={{ objectPosition: `-${218 + offset}px 0px` }} alt='' fill src='/images/merinoBackgroundWide.jpg' className={`object-cover object-left-bottom `} sizes="100vw" quality={100} />
        {/* <Image alt='' fill src='/images/merinoBackground.jpg' className={`object-cover object-left-bottom `} sizes="100vw" quality={100} /> */}
      </div>
      <div style={{ height: height }} className='absolute z-0 top-0 w-full'>
        {/* <div style={{}} className='z-10 w-screen h-screen'  > HELLO </div> */}
        <div style={{
          transform: `translate(${-offset-svgOffset}px,0px)`,
          height: (svgWidth * 0.65911) + 'px', width: svgWidth + 'px'
        }} className='absolute bottom-0 left-0 ' >
          <svg viewBox="0 0 1147 756" fill="none" xmlns="http://www.w3.org/2000/svg">
            {qualities.map((icon, i) => {
              return (
                getSVG(icon.id, icon.title, i)
              )
            })}
          </svg>
        </div>
      </div>

      <div style={{ height: height - (titleHeight || 0) }}  className={`flex-1`}>
        {/* EMPTY */}
        {/* {window.width < breakPointSmall ? info : position === 'left' ? info : cards} */}
      </div>
      {/* {console.log({height: height-(titleHeight||0)})} */}
      {/* {console.log(height,titleHeight)} */}

      <div style={{ height: height - (titleHeight || 0) }} className='flex-1 relative w-full'>
        {/* {window.width < breakPointSmall ? cards : position === 'left' ? cards : info} */}
          {qualities.map((icon, i) => {
            return (
              <MerinoQuality icon={icon} key={i} position={'right'} visible={visibleItem[i]} />
            )
          })}
      </div>

    </div>
  )
}

// function SvgPoint({ children, clicked, handleClick, fontSize, myKey }) {

//   // function makeNewChildren() {
//   //   let newChildren = React.Children.map(children, child => {
//   //     let newChild;
//   //     if (React.isValidElement(child)) {
//   //       // console.log('fired')

//   //       const {...props} = child.props
//   //       newChild = <Path {...props} handleClick={handleClick} key={myKey} fontSize={fontSize} clicked={clicked}/>
//   //     }
//   //     return newChild
//   //   })

//   //   return newChildren

//   // }
//   // const newChildren = makeNewChildren()


//   return (
//     <svg viewBox="0 0 1147 756" fill="none" xmlns="http://www.w3.org/2000/svg">
//       {children}

//     </svg>)
// }

function ServiceIcon({ icon, clicked, handleClick, noBlur, left, title }) {

  return (
    // <motion.div variants={iconAnimation} initial='hidden' custom={clicked} whileTap='tap' whileInView='visible'
    <div tabIndex={0} title={title}
      className={`flex ${noBlur ? '' : 'backdrop-blur-md'} justify-center select-none cursor-pointer items-center duration-200 bg-white/10 filter 
    ${!left ? 'ml-2 min-[350px]:ml-3 lg:ml-4 ' : ' mr-2 min-[350px]:mr-3 lg:mr-4 '}
      w-9 h-9 sm:mt-2  min-[350px]:w-10 min-[350px]:h-10
      sm:w-10 sm:h-10 md:h-12 md:w-12 rounded-lg md:rounded-xl lg:h-14 lg:w-14
     p-2
    border-2 hover:border-white/30 focus:outline-none outline-none
    `+
        (clicked ? ` border-white/30 focus:border-white/30 focus:animate-none animate-borderPulse shadow-md scale-95 translate-y-1 ` : `border-transparent hover:scale-[1.08] shadow-2xl focus:border-white/30 focus:scale-[1.08] `)}
      onClick={() => handleClick(!clicked)} onKeyDown={(e) => { if (e.code === 'Enter') { handleClick(!clicked) } }}
    >

      {icon}

    </div>
  )
}