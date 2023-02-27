import React from 'react'
import ESpiree from './ESpiree'

export default function Spiree() {
  return (
    <span className='ml-4 inline-flex'>
      <>
        Spir
        <ESpiree className='inline-flex w-4 mr-1 sm:w-5 md:w-6 lg:w-8 lg:mr-2 mb-0.5 sm:mb-0' />
        <span className='tracking-normal'>
          e
        </span>
      </>
    </span>
  )
}

