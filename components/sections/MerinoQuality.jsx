import React from 'react'
import { useAppContext } from '../context/appContext'

export default function MerinoQuality({ visible, position, icon }) {
  let { width } = useAppContext()
  //       animate-outlinePulse outline-2 outline outline-white/30 -outline-offset-2 
  let breakPointSmall = 684
  // let position, noBlur, first, icon
  // let position = 'right'
  return (
    <div className={` 
      absolute flex-col duration-500 overflow-hidden
      py-4 px-10 mobl:px-2 md:pl-10 sm:py-6 lg:p-8 
      
      mt-10 mobl:mt-20 xs:mt-28 md:mt-0
      w-full mobl:w-[75vw] md:max-w-[300px]
      
      top-0 md:top-1/2 md:translate-y-[30%] lg:-translate-y-[70%]
      left-1/2 -translate-x-1/2
      xl:min-w-[400px]
      
      text-right lg:text-center
      ${visible ? ` text-white blur-none ` :
        ` blur-sm invisible text-transparent`}`}
    >
      {/* ${position==='left'?'mobl:justify-start':'mobl:justify-end'}  */}
      <h3 className={`duration-500 flex md:whitespace-nowrap font-quick
        text-xl min-[350px]:text-2xl sm:text-4xl justify-end lg:justify-center
        ${visible ? 'font-light ' : `-translate-y-24 font-thin rotate-12`}`}>
        {icon.title}
      </h3>

      {/* MOVEMENT OF LINE UNDER TITLE */}
      {/* ${position==='left'?'translate-x-[50vw] -translate-y-[20vh] -rotate-45':'-translate-x-[50vw] -translate-y-[20vh] rotate-45'} */}
      <div className={`inline-flex border-b duration-500 mb-2 
        ${(visible ? 'border-b-white w-full ' : `w-0  border-b-transparent `)}`}>
      </div>

      <ul className={`font-quick md:select-text text-sm filter-none font-extralight duration-500 ${visible ? '' : 'font-thin'}`
      }>
        {icon.list.map((item) => { return <li className='' key={item}>{item}</li> })}
      </ul>

    </div>
  )
}