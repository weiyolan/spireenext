import React from 'react'
import { usePageContext } from '../context/pageContext'
import Spiree from './Spiree'
import { motion } from 'framer-motion'
export default function SubTitle({ mainTitle, subTitle, left, right, style, className , darkMode:darkModeProp}) {

  const { darkMode: darkModeContext } = usePageContext()

  let darkMode = darkModeProp===undefined?darkModeContext:darkModeProp

  function textStyle() {
    return left ? 'text-left' : right ? 'text-right' : 'text-center'
  }

  return (
    // whitespace-pre-wrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap 

    <motion.div layout transition={{duration:2}}  style={style} className={`${style === undefined ? 'relative' : ''} w-full ${textStyle()} ${darkMode ? 'text-primary' : 'text-black'} ${className}`}>
      <motion.h2 layout transition={{duration:2}} className={`font-sans font-semibold tracking-max uppercase leading-8 md:leading-10 
      whitespace-pre-wrap md:whitespace-nowrap ${right?'translate-x-2':''}
      text-xl mobm:text-2xl sm:text-2xl lg:text-2xl mb-2 sm:mb-2 mt-4 sm:mt-8 `}>
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

      </motion.h2>
{/* whitespace-pre-wrap sm:whitespace-nowrap md:whitespace-nowrap */}
      <div className='font-quick whitespace-pre-wrap  text-sm mobm:text-lg sm:text-lg lg:text-xl'>
        {subTitle}
      </div>

    </motion.div>


  )
}
