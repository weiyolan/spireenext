import React, { useState, useEffect, useRef } from 'react'
import { usePageContext } from '../context/pageContext';
import Spiree from './Spiree';
import useDimensions from '@/utils/useDimensions';

const Title = ({ mainTitle, subTitle, setHeight, style, className }) => {
  const { darkMode } = usePageContext()

  const titleRef = useRef(null)

  const { height } = useDimensions(titleRef)

  useEffect(() => {
    if (height>0 && setHeight !==undefined) {
    setHeight(height)
    }
  }, [height])


  // const [dimensions, setDimensions] = useState({width:undefined,height:undefined})

  // useEffect(()=>{

  //   function handleSize() {
  //     let {width, height} = titleRef.current.getBoundingClientRect()

  //     if (dimensions.height === undefined || dimensions.height < 0) {
  //       setDimensions({width:width, height:height})
  //       // setHeight(height)
  //     }
  //   }

  //   window.addEventListener('resize', handleSize)
  //   handleSize()
  //   return window.removeEventListener('resize',handleSize)
  //   // if (height>0) {
  // },[])

  // useEffect(()=>{
  //   if (dimensions.height>0) {
  //     setHeight(dimensions.height)
  //   }
  // },[dimensions])


  // let darkMode=false
  // let heroTitleStyle = 'whitespace-pre-wrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap text-4xl sm:text-6xl mt-12 mb-6 sm:mt-24 sm:mb-12';


  return (
    <div ref={titleRef} style={style} className={`${style === undefined ? 'relative' : ''} text-center  ${className} ${darkMode ? 'text-white' : 'text-black'}`}>
      <h1 className={`font-sans inline-flex font-semibold tracking-max uppercase 
        whitespace-pre-wrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap 
        text-2xl sm:text-3xl lg:text-5xl mb-2 mt-8 md:mt-10 px-4`}>
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

      </h1>

      <h2 className='font-quick whitespace-pre-wrap sm:whitespace-nowrap md:whitespace-nowrap text-md sm:text-lg lg:text-xl'>
        {subTitle}
      </h2>

    </div>
  )
}

export default Title