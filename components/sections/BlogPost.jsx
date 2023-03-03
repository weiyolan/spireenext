import React, { useState, useEffect, useRef } from 'react'
import { PortableText } from '@portabletext/react';
import { motion } from 'framer-motion';
import { usePageContext } from '../context/pageContext';
import { BsFillCircleFill } from 'react-icons/bs'
export default function BlogPost({ style, myKey, visibility, className, post, setPositions }) {

  let [visible, setVisible] = useState(visibility[myKey])
  let [distance, setDistance] = useState(myKey - visibility.indexOf(true))
  let [date, setDate] = useState(new Intl.DateTimeFormat("en-US", { day: 'numeric', month: 'short' }).format(new Date(post.date)))

  let [myPosition, setMyPosition] = useState(0)
  // let [textPosition, setTextPosition] = useState(0)
  // let [datePosition, setDatePosition] = useState(0)

  let percRef = useRef(null)
  let textRef = useRef(null)
  let dateRef = useRef(null)
  const { pageMobile } = usePageContext()

  useEffect(() => {
    function handleSize() {

      const { left: percLeft, right: percRight } = percRef.current.getBoundingClientRect();
      const { left: textLeft } = textRef.current.getBoundingClientRect();
      // const { height: textHeight, left: textLeft, right: textRight } = textRef.current.getBoundingClientRect();
      const { right: dateRight } = dateRef.current.getBoundingClientRect();

      if (percLeft > 0) {
        setMyPosition({ percLeft: percLeft, percRight: percRight, textLeft: textLeft, dateRight: dateRight })
        // setTextPosition({ height: textHeight, left: textLeft, right: textRight })
        // setDatePosition({ right: textRight })
      }
    }

    window.addEventListener("resize", handleSize);
    handleSize()
    return () => window.removeEventListener("resize", handleSize);
    // print && console.log(dimensions?.height === undefined || )

  }, [])

  useEffect(() => {
    if (myPosition.percLeft > 0 && setPositions !== undefined) {
      let { percLeft, percRight, textLeft, dateRight } = myPosition;
      setPositions({ buttonPosition: percRight + (textLeft - percRight) / 2, linePosition: pageMobile ? dateRight + (textLeft - dateRight) / 2 : dateRight + (percLeft - dateRight) / 2 })
    }
  }, [myPosition])

  useEffect(() => {
    setVisible(visibility[myKey])
    setDistance(myKey - visibility.indexOf(true))
  }, [visibility])

  // useEffect(() => {
  //   console.log(visible,distance,myKey,visibility)
  // }, [visible, distance,myKey,visibility])

  // useEffect(()=>{
  // let date = new Date(post.date)
  // setDate(new Intl.DateTimeFormat("en-US", {day:'numeric', month:'long', year: 'numeric'}).format(post.date))
  // let day = date.getDay();
  // let month =
  // },[post])

  let incr = pageMobile ? 40 : 40
  let basePos = pageMobile ? 250 : 170
  let baseNeg = -70

  function getTranslation() {
    if (distance > 0) {
      return (distance - 1) * incr + basePos
    } else {
      return (distance + 1) * incr + baseNeg
    }
  }

  return (
    <div style={{ transform: `translate(0%, calc(-50% + ${visible ? 0 : getTranslation()}px))` }} className='absolute self-center transition-all px-2  sm:px-10 duration-700 flex top-1/2'>

      <div style={{ alignItems: visible ? 'center' : 'start' }}
        className={` mobm:w-1/6 transition-all duration-500 flex mt-2
      text-sm `}>
        <div className='flex flex-col sm:flex-row items-end justify-start'>
          <motion.p layout transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} ref={dateRef} className='whitespace-nowrap sm:mr-4 '>{date}</motion.p>
          <motion.p layout transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} className='sm:w-7' ref={percRef}>{post.completion}%</motion.p>
        </div>

        <motion.div layout transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }} className='flex '>
          {/* <motion.span layout transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className='font-bold mx-auto'> */}
            <BsFillCircleFill className='w-[6px] h-[6px] mx-auto' />
          {/* </motion.span> */}
        </motion.div>

      </div>


      <div name='blogPost' className='flex flex-col w-4/5 mobm:w-5/6 mobm:px-4 sm:ml-20 max-w-xl items-start'>
        <h2 ref={textRef} className={`text-2xl border-b transition-all duration-500 mb-2 ${visible ? 'border-b-black' : 'border-b-transparent'}`}>{post.title}</h2>
        <div className={`transition-all text-sm sm:text-base text-justify duration-500 ${visible ? 'opacity-1 delay-300 block' : 'opacity-0'}`}>
          <PortableText value={post.body} />
        </div>
      </div>

    </div>
  )

  // <div className={`flex w-full ${className}`}>

  //   <div style={{ transform: `translate(-73%, calc(-50% + ${visible ? 0 : getTranslation()}px))` }} className='absolute transition-all duration-700 flex percLeft-[20%] top-1/2'>
  //     <p className='whitespace-nowrap mr-8'>{date}</p>

  //     <p>{post.completion}%</p>
  //   </div>

  //   <div style={{ transform: `translate(0%, calc(-50% + ${visible ? 0 : getTranslation()}px))` }} className='absolute transition-all duration-700 max-w-xl percLeft-[30%] top-1/2'>
  //     <h2 className={`text-2xl border-b transition-all duration-500  ${visible ? 'border-b-black' : 'border-b-transparent'}`}>{post.title}</h2>
  //     <div className={`transition-all duration-500 ${visible ? 'opacity-1 delay-300 block' : 'opacity-0'}`}>
  //       <PortableText value={post.body} />
  //     </div>
  //   </div>
  // </div>)  

}

