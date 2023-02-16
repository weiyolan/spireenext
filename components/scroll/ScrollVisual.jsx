import React from 'react'
// import { useAppContext } from '@/components/context/appContext'


const ScrollVisual = ({scrolled}) => {
  // const {scrolled} = useAppContext()

  return (
    <div style={{transform: `translate(0, ${98*scrolled}vh`}} className='fixed z-50 bg-white/50  w-1 h-4 top-0 mr-1 right-0 rounded-full '>
      <p style={{fontWeight:'600'}} className='text-transparent block font-sans text-md relative'>{`<3`}</p>
    </div>
  )
}

export default ScrollVisual