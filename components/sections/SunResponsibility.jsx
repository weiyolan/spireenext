import React from 'react'

export default function SunResponsibility({ icon, title, text }) {
  return (
    <div className='flex-1 pb-2 flex flex-col gap-4 '>
      <div className='w-12 h-12 bg-black/30 rounded-lg mx-auto'>{icon}</div>
      <h3 className='text-center font-quick font-normal text-lg'>{title}</h3>
      <p className='text-justify w-[260px] mobm:w-[300px] lg:w-auto'>{text}</p>
    </div>)
}
