import React from 'react'
// import { useAppContext } from '@/components/context/appContext'


const ScrollVisual = ({scrolled}) => {
  // const {scrolled} = useAppContext()

  return (
    <div style={{transform: `translate(0, ${95*scrolled}vh`}} className='fixed z-50 top-0 mr-4 right-0'>
      <p style={{fontWeight:'600'}} className='text-black block font-sans text-md relative'>{scrolled}</p>
    </div>
  )
}

export default ScrollVisual