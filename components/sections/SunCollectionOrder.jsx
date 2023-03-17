import Image from 'next/image'
import React from 'react'
import MoonLogo from '../atoms/MoonLogo'
import SunLogo from '../atoms/SunLogo'

export default function SunCollectionOrder({ sun }) {
  return (
    <div className='flex-1 flex flex-col items-center'>
      <div className='w-16'>
      {sun ? <SunLogo /> : <MoonLogo />}
      </div>
      <div className='w-1/2 py-4 px-6'>
        {!sun ? <Image alt='merino wool base layer - moon model' src='/images/sweaterBlackCut.png' width={461} height={591} /> :
          <Image className='z-[0]' alt='merino wool base layer - sun model' src='/images/sweaterGreenDetails.png' width={461} height={591} />}
      </div>

      <h3 className='font-sans text-center font-extralight text-base mobm:text-xl sm:text-2xl md:text-lg lg:text-xl text-primary whitespace-pre-wrap ml-1'>
        {sun ? `Unleash Your Inner Fire\nA burst of energy, confidence, and courage` : `Embrace Your Ethereal Side,\nA touch of mystery, tranquility, and grace`}
      </h3>
    </div>
  )
}
