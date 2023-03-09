import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

export default function ArrowLink ({ text, to, ext, inherit, inText, tabIndex , className}) {
  let [hovering, setHovering] = useState(false)

  if (ext) {
    return (
      <div className={`inline-flex w-fit items-center ${inText ? 'mt-0' : `mt-4 ${inherit?'':'ml-5'}`} relative ${className}`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}>

        <Link tabIndex={tabIndex} className={`${inherit ? 'text-inherit' : 'text-white font-light font-sans min-[460px]:whitespace-pre-wrap sm:whitespace-nowrap text-sm'}     cursor-alias`}
          href={to} onFocus={() => { setHovering(true) }} onBlur={() => { setHovering(false) }} rel="noopener noreferrer" target='_blank'>
          <span className='inline-flex items-center'>{text}<Arrow inherit={inherit} hovering={hovering} /></span>
        </Link>
        
      </div>
    )
  }

  return (
    <span className={`inline-flex w-fit ${inText ? 'mt-0' : `mt-4 ${inherit?'':'ml-5'}`} items-center relative ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}>

      <Link tabIndex={tabIndex} className={` ${inherit ? 'text-inherit' : 'text-white font-light font-sans min-[460px]:whitespace-pre-wrap sm:whitespace-nowrap text-sm'}    `}
        href={to} onFocus={() => { setHovering(true) }} onBlur={() => { setHovering(false) }}>
        <span className='inline-flex items-center'>{text} <Arrow inherit={inherit} hovering={hovering}/></span>
      </Link>
      
    </span>
  )
}



function Arrow({ hovering, inherit }) {
  return (
    <span className='block duration-300 relative w-10 h-5 overflow-hidden '>
      <span className={`absolute duration-300 top-1/2 left-0 -translate-y-1/2 ${hovering ? 'translate-x-1/4 scale-125 ' : '-translate-x-[100%] opacity-0'}`}>
        <BsArrowRightShort className={`${inherit ? 'text-inherit fill-inherit text-2xl ' : 'fill-white text-xl'} `} />
      </span>
      <span className={`absolute duration-300 top-1/2 left-0 -translate-y-1/2 ${hovering ? 'translate-x-full scale-105 opacity-0' : ''}`}>
        <BsArrowRightShort className={`${inherit ? 'text-inherit fill-inherit text-2xl  ' : 'fill-white  text-xl'} `} />
      </span>
    </span>
  )
}