import Image from 'next/image'
import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function SunGallery({className}) {
  return (
    <motion.div layout transition={{duration:2}} className={`flex flex-col justify-center self-center ${className}`}>
      {/* <div className='flex w-2/3 justify-center'> */}
      <Image alt='merino wool base layer - moon model' src='/images/sweaterBlackCut.png' width={461} height={591} className='mx-auto w-2/3' />
      {/* </div> */}
      <div className='flex w-fit mx-auto gap-1 '>
        <BsFillCircleFill className={`fill-primary w-1.5 md:w-2 h-1.5 md:h-2`}/>
        <BsFillCircleFill className={`fill-primary/50 w-1.5 md:w-2 h-1.5 md:h-2`}/>
        <BsFillCircleFill className={`fill-primary/50 w-1.5 md:w-2 h-1.5 md:h-2`}/>
        <BsFillCircleFill className={`fill-primary/50 w-1.5 md:w-2 h-1.5 md:h-2`}/>
        <BsFillCircleFill className={`fill-primary/50 w-1.5 md:w-2 h-1.5 md:h-2`}/>
      </div>
    </motion.div>
  )
}
