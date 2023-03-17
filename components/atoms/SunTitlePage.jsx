import React from 'react'
import AddSize from './AddSize'
import AddSun from './AddSun'
import ArrowLink from './ArrowLink'
import Price from './Price'
import { motion } from 'framer-motion'

export default function SunTitlePage({ sun , className}) {
  return (
    // transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" },

    <motion.div layout transition={{duration:2, staggerChildren: 0.05}} className={`flex mb-6 sm:mb-10 md:mb-0 flex-col self-center justify-center ${sun ? '  items-start text-left ml-0 left-0' : ' items-end text-right mr-0 bottom-0 right-0 '} ${className}`}>
      <motion.h3 layout transition={{duration:0.5}} className='font-quick font-thin md:font-thin text-6xl sm:text-8xl md:text-5xl lg:text-7xl 2xl:text-9xl text-primary'>
        {sun ? 'Sun' : 'Moon'}
      </motion.h3>
      <motion.h4 layout transition={{duration:0.5}} className='font-sans font-extralight text-base mobm:text-xl sm:text-2xl md:text-lg lg:text-xl text-primary whitespace-pre-wrap ml-1'>
        {sun ? `Unleash Your Inner Fire\nA burst of energy, confidence, and courage` : `Embrace Your Ethereal Side,\nA touch of mystery, tranquility, and grace`}
      </motion.h4>

      <Price />

      <AddSun sun={sun}/>

      {/* <ArrowLink className={`${sun?' ':'translate-x-4' } md:pl-0  font-quick fill-primary font-medium text-primary`} inherit text='Take a closer look' to={sun?'/collection#sun':'/collection#moon'} /> */}

    </motion.div>
  )
}
