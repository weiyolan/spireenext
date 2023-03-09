import React from 'react'
import AddSize from './AddSize'
import ArrowLink from './ArrowLink'
import Price from './Price'

export default function SunTitle({ sun }) {
  return (
    <div className={`flex relative lg:absolute w-full mb-6 sm:mb-10 lg:mb-0 flex-col ${sun ? 'items-start text-left ml-0 left-0' : 'items-end text-right mr-0 bottom-0 right-0 '}`}>
      <h3 className='font-quick font-thin lg:font-thin text-6xl sm:text-8xl lg:text-7xl 2xl:text-9xl text-white'>
        {sun ? 'Sun' : 'Moon'}
      </h3>
      <h4 className='font-sans font-extralight text-base mobm:text-xl sm:text-2xl lg:text-xl text-white whitespace-pre-wrap ml-1'>
        {sun ? `Unleash Your Inner Fire\nA burst of energy, confidence, and courage` : `Embrace Your Ethereal Side,\nA touch of mystery, tranquility, and grace`}
      </h4>

      <Price />

      <AddSize sun={sun?true:false}/>

      <ArrowLink className={`${sun?'':'translate-x-4' } lg:pl-0  font-quick fill-white font-medium text-white`} inherit text='Take a closer look' to={sun?'/collection#sun':'/collection#moon'} />

    </div>
  )
}
