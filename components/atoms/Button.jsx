import React from 'react'
import Link from "next/link"
import { usePageContext } from '../context/pageContext';
import { useAppContext } from '../context/appContext';
import SpireeLogo from './SpireeLogo';

export default function Button({text, className , small, handleClick}) {
  // let {locale} = useAppContext()
  // let { mobile } = usePageContext()

  return (
    
    // px-4 py-2 text-sm md:text-sm
    <div
      className={`inline-flex w-fit relative rounded-full bg-black/30 backdrop-blur
    transition-all text-center
    font-sans font-semibold whitespace-nowrap select-none uppercase tracking-max 
    
    cursor-pointer ${small?'text-xs px-2 py-1':' px-4 py-2'} ${className}
    outline-none focus-visible:outline-white border border-solid border-transparent text-white hover:scale-105 active:scale-95 hover:bg-black/50 hover:shadow-md active:shadow-none active:bg-black/30`}
      onClick={handleClick}
    >
      {/* <div className=''> */}
    <p className='ml-0.5'>
      {text}</p>
      {/* <span><SpireeLogo className='w-6 md:w-6 ml-2'/></span> */}

      {/* </div> */}
    </div>
  )
}
