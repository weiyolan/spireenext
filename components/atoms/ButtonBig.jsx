import React from 'react'
import Link from "next/link"
import { usePageContext } from '../context/pageContext';
import { useAppContext } from '../context/appContext';
import SpireeLogo from './SpireeLogo';

export default function ButtonBig ({to, text, style, className}){
    let {locale} = useAppContext()
    let {mobile} = usePageContext()

  return (
    <Link style={{...style}} className={`flex flex-row absolute rounded-full bg-black/30 backdrop-blur
    px-4 py-2
    font-sans font-semibold ${mobile?'text-xl':'text-xl'} text-center justify-center items-center self-center whitespace-nowrap select-none uppercase tracking-max
    cursor-pointer ${className}
    outline-none focus-visible:outline-primary border border-solid border-transparent text-white hover:border-white active:bg-black/40`}
      href={`/${to||''}`}
      onClick={()=>handleClick(title)}
      title={`Go to the ${text} page`}>

        {/* <div className=''> */}
            
            {text} 
            <span><SpireeLogo className='w-6 md:w-6 ml-2'/></span>
        
        {/* </div> */}
    </Link>
    )
}
