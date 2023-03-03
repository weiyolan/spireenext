import React, { useState, useEffect, useRef } from 'react'
import { usePageContext } from '../context/pageContext';
import Spiree from '../atoms/Spiree';
import useDimensions from '@/utils/useDimensions';

const TitleMoving = ({ mainTitle, subTitle, setHeight, style, className }) => {
  const { darkMode } = usePageContext()
  // const 
  const titleRef = useRef(null)

  const { height } = useDimensions(titleRef)
  let [lastTop, setLastTop] = useState(0)
  let [show, setShow] = useState(true)

  useEffect(() => {
    if (height>0 && setHeight !==undefined) {
    setHeight(height)
    }
  }, [height])


  
  useEffect(()=>{
    function handleScroll () {
      if(window.scrollY > lastTop){ //if it will be greater than the previous
        setShow(false);//set the value to the negetive of height of navbar 
      }
      else{
        setShow(true);
      }
      setLastTop(window.scrollY); //New Position Stored
    }

    window.addEventListener('scroll', handleScroll, ) //{passive:true}
    return () => {window.removeEventListener('scroll', handleScroll)}
  },[lastTop])

{/* <div className={`fixed z-[50] w-full hidden min-[1023px]:block top-0 duration-500 ${show?'':'-translate-y-20'}`}> */}

  return (
    <div ref={titleRef} style={style} className={`fixed text-center transition-all duration-500 top-0 left-1/2 -translate-x-1/2 ${show?'':'-translate-y-40'} ${className} ${darkMode ? 'text-white' : 'text-black'}`}>
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

      <h2 className='font-quick font-light whitespace-pre-wrap sm:whitespace-nowrap md:whitespace-nowrap text-md sm:text-lg lg:text-xl mb-2 sm:mb-4'>
        {subTitle}
      </h2>

    </div>
  )
}

export default TitleMoving