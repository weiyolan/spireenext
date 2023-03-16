import React from 'react'
import AccentTitle from '../atoms/AccentTitle'

export default function SunDetailsText({ left, title, visible, text }) {
  //     py-4 px-10 mobl:px-2 md:pl-10 sm:py-6 lg:p-8 
  // mt-10 mobl:mt-20 xs:mt-28 md:mt-0
  // w-full mobl:w-[75vw] md:max-w-[300px]
  // bottom-0 md:top-1/2 md:translate-y-[30%] lg:-translate-y-[70%]
  //       left-1/2 -translate-x-1/2
  //       xl:min-w-[400px]

  //       text-right lg:text-center
  return (
    <div className={`absolute flex flex-col text-white duration-500 overflow-hidden
      ${left ? 'items-start mr-auto' : 'ml-auto items-end'}
      ${visible ? ` text-white blur-none ` : ` blur-sm invisible text-transparent`}
        `}>

      <h4 className='font-quick font-medium text-lg mb-2  duration-500'>
        {title}
      </h4>

      <p className='font-quick text-justify font-light duration-500'>
        {text}
      </p>
    </div>
  )
}
