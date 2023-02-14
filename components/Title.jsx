import React, {useState, useEffect, useRef} from 'react'
import { usePageContext } from './context/pageContext';
import ESpiree from './atoms/ESpiree';
import { useDimensions } from '@/utils/useDimensions';

const Title = ({mainTitle, subTitle, setHeight}) => {
  const {darkMode} = usePageContext()

  const titleRef = useRef(null)

  const {height} = useDimensions(titleRef)

  useEffect(()=>{
    // if (height>0) {
    setHeight(height)
  },[height])
  // let darkMode=false
  // let heroTitleStyle = 'whitespace-pre-wrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap text-4xl sm:text-6xl mt-12 mb-6 sm:mt-24 sm:mb-12';


  return (
    <div ref={titleRef} className={`fixed text-center w-full ${darkMode?'text-white':'text-black'}`}>
        <h1 className='font-sans font-semibold tracking-max uppercase whitespace-pre-wrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap text-4xl sm:text-4xl mt-10 mb-2 sm:mt-6 sm:mb-4'>
          {mainTitle.split("Spirée")[0]} 
          {mainTitle.split("Spirée").length>1 && (<>Spir<ESpiree/><span className='tracking-normal'>e</span></>)} 
          {mainTitle.split("Spirée").length>1 &&  mainTitle.split("Spirée")[1]}
        </h1>

        <h2 className='font-quick font-light whitespace-pre-wrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap text-2xl sm:text-lg mb-6 sm:mb-6'>
    {subTitle}
        </h2>

    </div>
  )
}

export default Title