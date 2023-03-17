import React from 'react'
import Image from 'next/image'

export default function Preview({title,subTitle,src}) {
  return (
    <div className='flex flex-col'>
    <h3 className='font-quick text-8xl text-center text-primary font-light'>{title}</h3>
    <div className='relative h-80 my-6'>
      <Image alt={`Front side of the ${title} model from the Spirée Collection`} className={`object-contain object-center drop-shadow-2xl `} fill src={src} sizes={'30vw'} />
    </div>
    <h4 className='font-sans text-primary text-xl text-center whitespace-pre font-extralight'>{subTitle}</h4>
  </div>
  )
}
