import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react'
import AccentTitle from '../atoms/AccentTitle'
import DetailsLuxe from '../atoms/DetailsLuxe';
import DetailsSignatureV from '../atoms/DetailsSignatureV';
import SubTitle from '../atoms/SubTitle'
import { useAppContext } from '../context/appContext';
import SunDetailsText from './SunDetailsText'


let details = [{ id: 'SignatureV', title: 'Signature V Shape', text: "The signature V shape in the back of the Sun and Moon models is more than just a design element, it's a symbol of strength and resilience. Like the celestial bodies they are named after, these leggings are a reminder that we can overcome any challenge and shine our brightest, no matter what the world throws our way.", icon: <div className=''></div>, svg: <svg></svg> },
{ id: 'Logo', title: 'Minimal Logo', text: 'Our merino wool base layer is designed to be both functional and stylish, with a small and minimal logo applied on the left sleeve as a subtle reminder that you are wearing a high-quality, sustainably sourced garment that is as comfortable as it is environmentally conscious.', icon: <div className='w-12 h-12 rounded-xl bg-white/50'></div>, svg: <svg></svg> },
{ id: 'Pattern', title: 'Unique Color Pattern', text: "", icon: <div className='w-12 h-12 rounded-xl bg-white/50'></div>, svg: <svg></svg> },
{ id: 'Paint', title: 'Quality Paint', text: "", icon: <div className='w-12 h-12 rounded-xl bg-white/50'></div>, svg: <svg></svg> }];


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
      case 'SignatureV': return <DetailsSignatureV key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Logo': return <MerinoQuickdry key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Pattern': return <MerinoNatural key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Paint': return <MerinoSkin key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case '100Merino': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Luxe': return <DetailsLuxe key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Breathable': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Density': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Flat': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Invisible': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'Zipper': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
      case 'ZipperFlap': return <MerinoThermo key={i} title={title} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} fontSize={fontSize} />
    }
  }, [handleVisibility])

  return (
    <div className={`bg-black/30 mb-12 p-12 rounded-[40px] ${titleOn ? 'pt-4' : ''}  ${className}`}>
      {titleOn && <SubTitle className={`mb-12 sm:w-2/3 xl:w-1/2 ${left ? 'ml-auto' : 'mr-auto'}`} right={left} left={!left} mainTitle='Product Details' subTitle='Discover the technical details of our sustainable and comfortable merino wool products.' />}
      <div className={`flex ${left ? '' : 'flex-row-reverse'} `}>
  {/* ===================DETAILS===================== */}
        <div className='w-2/5'>
          <div className={`flex flex-col  text-white ${left ? 'items-start' : 'ml-auto items-end'}`}>
            {/* =======DETAILS TITLE======== */}
            <AccentTitle noMargin text={title} />
            {/* =======DETAILS ICONS======== */}
            <div className='flex w-fit gap-2 rounded-2xl p-3 my-6 border-2 border-white'>
              {details.map((icon, i) => <DetailIcon key={i} clicked={visibleItem[i]} handleClick={(newVal) => { handleVisibility(newVal, i); setClicked(true) }} icon={icon.icon} />)}
            </div>
            {/* =======DETAILS TEXT======== */}
            <div className={`flex w-full relative flex-col text-white ${left ? 'items-start' : 'ml-auto items-end'}`}>
              {details.map((icon, i) => <SunDetailsText key={i} left={left} title={icon.title} text={icon.text} visible={visibleItem[i]} />)}
            </div>
          </div>
        </div>

  {/* ===================PICTURE===================== */}
        <div className='w-3/5 relative'>
          <div className='flex absolute top-0 left-0 w-full h-full'>
            <Image className='object-contain object-center' alt='merino wool base layer - sun model' src='/images/sweaterGreenDetails.png' fill sizes='40vw' />
            {/* width={461 * 0.9} height={591 * 0.9}  */}
          </div>
          <svg className='relative' viewBox="0 0 837 532" fill="none" xmlns="http://www.w3.org/2000/svg">
            {details.map((icon, i) => {
              return (
                getSVG(icon.id, icon.title, i)
              )
            })}
          </svg>
        </div>
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
      border-2 hover:border-white/30 focus:outline-none outline-none
      ${clicked ? ' border-white/30 focus:border-white/30 focus:animate-none animate-borderPulse shadow-md scale-95 translate-y-1 '
          : 'border-transparent hover:scale-[1.08] shadow-2xl focus:border-white/30 focus:scale-[1.08] '}
      `}
      onClick={() => handleClick(!clicked)} onKeyDown={(e) => { if (e.code === 'Enter') { handleClick(!clicked) } }}
    >

      {icon}

    </div>
  )
}