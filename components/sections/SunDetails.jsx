import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react'
import AccentTitle from '../atoms/AccentTitle'
import DetailsSVGLuxe from '../atoms/DetailsSVGLuxe';
import SubTitle from '../atoms/SubTitle'
import { useAppContext } from '../context/appContext';
import SunDetailsText from './SunDetailsText'
import DetailsSVGPaint from '../atoms/DetailsSVGPaint';
import DetailsSVGPattern from '../atoms/DetailsSVGPattern';
import DetailsSVGSignatureV from '../atoms/DetailsSVGSignatureV';
import DetailsSVGLogo from '../atoms/DetailsSVGLogo';
import { motion } from 'framer-motion';

let details = [{ id: 'SignatureV', title: 'Signature V Shape', text: "The signature V shape in the back of the Sun and Moon models is more than just a design element, it's a symbol of strength and resilience. Like the celestial bodies they are named after, these leggings are a reminder that we can overcome any challenge and shine our brightest, no matter what the world throws our way.", 
icon: <div className=''></div>, svg: <svg></svg> },
{ id: 'Pattern', title: 'Unique Color Pattern', text: "Spirée's merino wool base layers are not only comfortable, but they are also uniquely stylish, with one-of-a-kind color patterns that you won't find anywhere else, making them the perfect choice for anyone looking to stay warm and fashionable while exploring the great outdoors.", 
icon: <div className=''></div>, svg: <svg></svg> },
{ id: 'Paint', title: 'Quality Paint', text: "Our commitment to quality extends beyond the merino wool fabric itself; we use only the finest and most durable paint on our minimal logo, ensuring it withstands wear and tear while retaining its vibrant color and eco-friendliness.", 
icon: <div className=''></div>, svg: <svg></svg> },
{ id: 'Logo', title: 'Minimal Logo', text: 'Our merino wool base layer is designed to be both functional and stylish, with a small and minimal logo applied on the left sleeve as a subtle reminder that you are wearing a high-quality, sustainably sourced garment that is as comfortable as it is environmentally conscious.', 
icon: <div className=''></div>, svg: <svg></svg> },
]

export default function SunDetails({ title, titleOn, left, className }) {
  let [visibleItem, setVisibleItem] = useState(new Array(details.length).fill(false))
  let [clicked, setClicked] = useState(false)
  //   let window = useAppContext()
  let { locale, width } = useAppContext()

  // {console.log(titleHeight)}

  // let breakPointSmall = 684
  // let [visibleItem, setVisibleItem] = useState(Object.fromEntries(new Array(details.length).fill(false).map((val,i)=>[i,val])))
  // let [globalClick,setGlobalClick] = useState(false)
  // let [serviceText,setServiceText] = useState('')

  useEffect(() => {
    handleVisibility(true, Math.floor(Math.random() * details.length))
    // console.log('handlevisiblity')
  }, [details])

  useEffect(() => {
    let interval = setInterval(() => {
      if (!clicked) { nextVisibility(visibleItem) }
    }, 4000)

    return () => clearInterval(interval)

  }, [visibleItem, clicked])

  function handleVisibility(newVal, i) {
    if (newVal === true) {
      let newVisibility = new Array(details.length).fill(false);
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
  // mainTitle, subTitle, left, right
  let fontSize=25;
  const getSVG = useCallback((id, title, i)=> {
    switch (id) {
      case 'SignatureV': return <DetailsSVGSignatureV left key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Logo': return <DetailsSVGLogo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Pattern': return <DetailsSVGPattern key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Paint': return <DetailsSVGPaint key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      
      case '100Merino': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Luxe': return <DetailsSVGLuxe key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Breathable': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Density': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      
      case 'Flat': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Invisible': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Zipper': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'ZipperFlap': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
    }
  }, [handleVisibility])

  return (
    <div className={`bg-black/30 mb-12 py-8 px-16 rounded-[40px] ${titleOn ? 'pt-4' : ''}  ${className}`}>
      {titleOn && <SubTitle className={`mb-12 sm:w-2/3 xl:w-1/2 ${left ? 'ml-auto' : 'mr-auto'}`} right={left} left={!left} mainTitle='Product Details' subTitle='Discover the technical details of our sustainable and comfortable merino wool products.' />}
      <div className={`flex ${left ? '' : 'flex-row-reverse'} `}>
  {/* ===================DETAILS===================== */}
        <motion.div layout transition={{duration:2}} className='w-2/5'>
          <div className={`flex flex-col  text-primary ${left ? 'items-start' : 'ml-auto items-end'}`}>
            {/* =======DETAILS TITLE======== */}
            <AccentTitle noMargin text={title} />
            {/* =======DETAILS ICONS======== */}
            <motion.div layout transition={{duration:2}} className='flex w-fit gap-2 rounded-2xl p-3 my-6 border-2 border-primary'>
              {details.map((icon, i) => <DetailIcon key={i} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} icon={icon.icon} />)}
            </motion.div>
            {/* =======DETAILS TEXT======== */}
            <motion.div layout transition={{duration:2}} className={`flex w-full relative flex-col text-primary ${left ? 'items-start' : 'ml-auto items-end'}`}>
              {details.map((icon, i) => <SunDetailsText key={i} left={left} title={icon.title} text={icon.text} visible={visibleItem[i]} />)}
            </motion.div>
          </div>
        </motion.div>

  {/* ===================PICTURE===================== */}
        <motion.div layout transition={{duration:2}}  className='w-3/5 relative px-8 my-4'>
          <div className='flex absolute top-0 left-0 w-full h-full'>
            <Image className='object-contain object-center' alt='merino wool base layer - sun model' src='/images/sweaterGreenDetails.png' fill sizes='40vw' />
            {/* width={461 * 0.9} height={591 * 0.9}  */}
          </div>
          <svg className='relative' viewBox="0 0 982 532" fill="none" xmlns="http://www.w3.org/2000/svg">
            {details.map((icon, i) => {
              return (
                getSVG(icon.id, icon.title, i)
              )
            })}
          </svg>
        </motion.div>
      </div>
    </div>
  )
}

function DetailIcon({ icon, clicked, handleClick, title }) {

  return (
    // <motion.div variants={iconAnimation} initial='hidden' custom={clicked} whileTap='tap' whileInView='visible'
    <div tabIndex={0} title={title}
      className={`flex justify-center select-none cursor-pointer items-center duration-200 bg-white/10  
      rounded-lg md:rounded-xl 
      w-9 h-9 mobm:w-10 mobm:h-10
      sm:w-10 sm:h-10 md:h-12 md:w-12 
      border-2 hover:border-primary/30 focus:outline-none outline-none
      ${clicked ? ' border-primary/30 focus:border-primary/30 focus:animate-none animate-borderPulse shadow-md scale-95 translate-y-0.5 '
          : 'border-transparent hover:scale-[1.08] shadow-2xl focus:border-primary/30 focus:scale-[1.08] '}
      `}
      onClick={() => handleClick(!clicked)} onKeyDown={(e) => { if (e.code === 'Enter') { handleClick(!clicked) } }}
    >

      {icon}

    </div>
  )
}