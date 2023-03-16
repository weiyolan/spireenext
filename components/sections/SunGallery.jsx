import Image from 'next/image'
import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'

export default function SunGallery({className}) {
  return (
    <div className={`flex flex-col justify-center self-center ${className}`}>
      {/* <div className='flex w-2/3 justify-center'> */}
      <Image alt='merino wool base layer - moon model' src='/images/sweaterBlackCut.png' width={461} height={591} className='mx-auto w-2/3' />
      {/* </div> */}
      <div className='flex w-fit mx-auto gap-1 '>
        <BsFillCircleFill className={`fill-white w-3 h-3`}/>
        <BsFillCircleFill className={`fill-white/50 w-3 h-3`}/>
        <BsFillCircleFill className={`fill-white/50 w-3 h-3`}/>
        <BsFillCircleFill className={`fill-white/50 w-3 h-3`}/>
        <BsFillCircleFill className={`fill-white/50 w-3 h-3`}/>
      </div>
    </div>
  )
}
