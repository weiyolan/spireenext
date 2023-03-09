import React from 'react'
import { usePageContext } from '../context/pageContext'
import Spiree from './Spiree'

export default function SubTitle({ mainTitle, subTitle, left, right, style, className , darkMode:darkModeProp}) {

  const { darkMode: darkModeContext } = usePageContext()

  let darkMode = darkModeProp===undefined?darkModeContext:darkModeProp

  function textStyle() {
    return left ? 'text-left' : right ? 'text-right' : 'text-center'
  }

  return (
    // whitespace-pre-wrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap 

    <div style={style} className={`${style === undefined ? 'relative' : ''} w-full ${textStyle()} ${darkMode ? 'text-white' : 'text-black'} ${className}`}>
      <h2 className={`font-sans font-semibold tracking-max uppercase leading-8 md:leading-10 
      whitespace-pre-wrap ${right?'translate-x-2':''}
      text-2xl mobm:text-4xl sm:text-4xl lg:text-4xl mb-2 sm:mb-2 mt-4 sm:mt-8 `}>
        {mainTitle.split("Spirée").length > 1 ?
          <>
            {mainTitle.split("Spirée")[0]}
            <Spiree />
            {mainTitle.split("Spirée")[1]}
          </>
          : <>
            {mainTitle}
          </>

        }

      </h2>
{/* whitespace-pre-wrap sm:whitespace-nowrap md:whitespace-nowrap */}
      <h3 className='font-quick whitespace-pre-wrap  lg:whitespace-pre-wrap text-sm mobm:text-lg sm:text-lg lg:text-xl'>
        {subTitle}
      </h3>

    </div>


  )
}
