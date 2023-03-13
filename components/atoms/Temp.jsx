import React from 'react'

export default function Temp({from, temp}) {
  return (
<div className={`absolute flex flex-col w-16 sm:w-24 h-16 sm:h-24 justify-center shadow-2xl shadow-black/50 bg-black/20 backdrop-blur text-left rounded-lg sm:rounded-3xl p-2 sm:p-4 top-1/2 -translate-y-1/2 ${!from?'left-72 mobm:left-96 xs:left-[450px] md:left-full -translate-x-full':''}`}>
                  <p className='font-quick font-extralight text-lg sm:text-2xl'>{from?'from':'to'}</p>
                  <p className='font-quick font-normal text-lg sm:text-2xl'>{temp}</p>
                </div>  )
}
