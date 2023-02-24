import React from 'react'
import Button from '../atoms/Button'

export default function SupportCard({ amount, percent, title }) {

  return (
    <div className='flex flex-col flex-1 mx-6 px-8 py-6 bg-black/30 backdrop-blur gap-4 items-center  rounded-3xl shadow-xl 
    font-thin text-center font-quick text-sm whitespace-pre-wrap text-white'>

      <p className='text-xs'>
        {`From `}<span className='font-medium'>€{amount}</span>
        {` support you will receive:`}
      </p>
      <div className='border-y-2 border-white font-sans whitespace-nowrap inline-flex text-white font-semibold uppercase tracking-max text-sm lg:text-base py-1'>
        <p> {title} </p>
      </div>

      <div className='text-sm'>
      <p className=''>
        {amount === 50 && `a limited edition Spirée Headband matching with the Sun and Moon collection, made of 100% merino wool`}
        {amount === 100 && `a limited edition Spirée Headband and Spirée Buff, matching with the Sun and Moon collection, made of 100% merino wool`}
        {amount === 200 && `a limited edition Spirée Headband, Spirée Buff and Spirée Gloves, matching with the Sun and Moon collection made of 100% merino wool`}
      </p>

      <p>
        {`\n${percent}% on your first purchase when the Sun and Moon collection becomes available.`}
      </p>
      </div>
      <Button text='Add To Cart' small/>

    </div>
  )
}

