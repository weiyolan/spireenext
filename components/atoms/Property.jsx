import React from 'react'

export default function Property({ text, icon }) {
  return (
    <div className='flex flex-col items-center '>
      <div>
        {icon}
      </div>
      <p className='font-quick font-thin text-xs lg:text-sm whitespace-nowrap'>
        {text}
      </p>

    </div>
  )
}
