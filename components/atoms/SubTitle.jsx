import React from 'react'
import { usePageContext } from '../context/pageContext'

export default function SubTitle({ mainTitle, subTitle, left, right, style, className , darkMode:darkModeProp}) {

  const { darkMode: darkModeContext } = usePageContext()

  let darkMode = darkModeProp===undefined?darkModeContext:darkModeProp

  function textStyle() {
    return left ? 'text-left' : right ? 'text-right' : 'text-center'
  }

  return (
    // whitespace-pre-wrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap 

    <div style={style} className={`${style === undefined ? 'relative' : ''} w-full ${textStyle()} ${darkMode ? 'text-white' : 'text-black'} ${className}`}>
      <h2 className={`font-sans font-semibold tracking-max uppercase leading-loose
      whitespace-pre-wrap
      text-2xl sm:text-3xl lg:text-4xl mb-2 mt-8 `}>
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
      <h3 className='font-quick whitespace-pre-wrap text-md sm:text-lg lg:text-xl'>
        {subTitle}
      </h3>

    </div>


  )
}
