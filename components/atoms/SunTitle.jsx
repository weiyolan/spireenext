import React from 'react'
import AddSize from './AddSize'
import ArrowLink from './ArrowLink'
import Price from './Price'

export default function SunTitle({ sun, moon }) {
  return (
    <div className={`flex absolute w-fit flex-col ${sun ? 'items-start text-left ml-12 left-0' : 'items-end text-right mr-12 bottom-0 right-0 mb-12'}`}>
      <h3 className='font-quick font-thin  text-9xl text-white'>
        {sun ? 'Sun' : 'Moon'}
      </h3>
      <h4 className='font-sans  font-extralight text-2xl text-white whitespace-pre ml-2'>
        {sun ? `Unleash Your Inner Fire\nA burst of energy, confidence, and courage` : `Embrace Your Ethereal Side,\nA touch of mystery, tranquility, and grace`}
      </h4>

      <Price />

      <AddSize sun={sun?true:false}/>

      <ArrowLink className='font-quick fill-white font-medium text-white' inherit text='Take a closer look' to={sun?'/collection#sun':'/collection#moon'} />

    </div>
  )
}
