import React, {useState, useEffect, useRef} from 'react'
import { usePageContext } from '../context/pageContext';
import ESpiree from '../atoms/ESpiree';
import useDimensions from '@/utils/useDimensions';

const Title = ({mainTitle, subTitle, setHeight, style, className}) => {
  const {darkMode} = usePageContext()

  const titleRef = useRef(null)

  const {height} = useDimensions(titleRef)

  useEffect(()=>{
    // if (height>0) {
    setHeight(height)
  },[height])


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
    <div ref={titleRef} style={style} className={`${style===undefined?'relative':'px-4'} text-center ${className} ${darkMode?'text-white':'text-black'}`}>
        <h1 className={`font-sans inline-flex font-semibold tracking-max uppercase 
        whitespace-nowrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap 
        text-2xl sm:text-3xl lg:text-4xl mb-2 mt-4`}>
          {mainTitle.split("Spirée")[0]} 
          {mainTitle.split("Spirée").length>1 && (<>Spir<ESpiree className='inline-flex w-4 mr-1 sm:w-5 lg:w-6 mb-0.5 sm:mb-0'/><span className='tracking-normal'>e</span></>)} 
          {mainTitle.split("Spirée").length>1 &&  mainTitle.split("Spirée")[1]}
        </h1>

        <h2 className='font-quick font-light whitespace-pre-wrap min-[445px]:whitespace-nowrap sm:whitespace-pre-wrap md:whitespace-nowrap text-md sm:text-lg mb-2 sm:mb-4'>
    {subTitle}
        </h2>

    </div>
  )
}

export default Title