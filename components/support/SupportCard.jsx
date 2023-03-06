import React from 'react'
import Button from '../atoms/Button'
import { useAppContext } from '../context/appContext'

export default function SupportCard({ amount, percent, title }) {

const {setSupportAmount, updateSupport } = useAppContext().cart

  return (
    <div className='flex flex-col flex-1 max-w-[306px] sm:max-w-none min-[930px]:max-w-[306px] m-4 xs:m-6 sm:m-4 md:m-4 mt-0 px-8 py-6 gap-4 md:mb-8
     bg-black/30 backdrop-blur items-center rounded-3xl shadow-xl shadow-black/20
    font-thin text-center font-quick text-sm whitespace-pre-wrap  text-white'>

      <p className='text-xs'>
        {`From `}<span className='font-medium'>€{amount}</span>
        {` support you will receive:`}
      </p>
      <div className='border-y-2 border-white font-sans whitespace-nowrap inline-flex text-white font-semibold uppercase tracking-max text-sm lg:text-base py-1'>
        <p> {title} </p>
      </div>

      <div className='text-sm'>
      <p className='h-20'>
        {amount === 50 && <>a limited edition <span className='font-semibold'>Spirée Headband</span> matching with the Sun and Moon collection, made of 100% merino wool</>}
        {amount === 100 && <>a limited edition <span className='font-semibold'>Spirée Headband and Spirée Buff</span>, matching with the Sun and Moon collection, made of 100% merino wool</>}
        {amount === 200 && <>a limited edition <span className='font-semibold'>Spirée Headband, Spirée Buff and Spirée Gloves</span>, matching with the Sun and Moon collection made of 100% merino wool</>}
      </p>

      <p className='mt-4'>
        {<> <span className='font-semibold'>{`${percent}%`}</span> on your first purchase when the Sun and Moon collection becomes available. </>}
      </p>
      </div>
      <Button text='Add To Cart' handleClick={()=>{setSupportAmount(+amount); updateSupport(+amount)}} med/>

    </div>
  )
}

