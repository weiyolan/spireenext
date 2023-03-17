import React from 'react'
import AddSun from './AddSun'
import ArrowLink from './ArrowLink'
import Price from './Price'

export default function SunTitle({ sun }) {
  return (
    <div className={`flex relative md:absolute w-full mb-6 sm:mb-10 md:mb-0 flex-col ${sun ? ' z-[5] items-start text-left ml-0 left-0' : 'z-[2] items-end text-right mr-0 bottom-0 right-0 '}`}>
      <h3 className='font-quick font-thin md:font-thin text-6xl sm:text-8xl md:text-5xl lg:text-7xl 2xl:text-9xl text-primary'>
        {sun ? 'Sun' : 'Moon'}
      </h3>
      <h4 className='font-sans font-extralight text-base mobm:text-xl sm:text-2xl md:text-lg lg:text-xl text-primary whitespace-pre-wrap ml-1'>
        {sun ? `Unleash Your Inner Fire\nA burst of energy, confidence, and courage` : `Embrace Your Ethereal Side,\nA touch of mystery, tranquility, and grace`}
      </h4>

      <Price />

      <AddSun sun={sun}/>

      <ArrowLink className={`${sun?' z-[4] ':'translate-x-4' } md:pl-0  z-[2] font-quick fill-primary font-medium text-primary`} inherit text='Take a closer look' to={sun?'/collection#sun':'/collection#moon'} />

    </div>
  )
}
