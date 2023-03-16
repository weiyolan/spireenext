import React from 'react'
import AddSize from './AddSize'
import ArrowLink from './ArrowLink'
import Price from './Price'

export default function SunTitlePage({ sun , className}) {
  return (
    <div className={`flex mb-6 sm:mb-10 md:mb-0 flex-col self-center justify-center ${sun ? '  items-start text-left ml-0 left-0' : ' items-end text-right mr-0 bottom-0 right-0 '} ${className}`}>
      <h3 className='font-quick font-thin md:font-thin text-6xl sm:text-8xl md:text-5xl lg:text-7xl 2xl:text-9xl text-white'>
        {sun ? 'Sun' : 'Moon'}
      </h3>
      <h4 className='font-sans font-extralight text-base mobm:text-xl sm:text-2xl md:text-lg lg:text-xl text-white whitespace-pre-wrap ml-1'>
        {sun ? `Unleash Your Inner Fire\nA burst of energy, confidence, and courage` : `Embrace Your Ethereal Side,\nA touch of mystery, tranquility, and grace`}
      </h4>

      <Price />

      <AddSize sun={sun?true:false}/>

      {/* <ArrowLink className={`${sun?' ':'translate-x-4' } md:pl-0  font-quick fill-white font-medium text-white`} inherit text='Take a closer look' to={sun?'/collection#sun':'/collection#moon'} /> */}

    </div>
  )
}
