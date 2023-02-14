import React, { useState, useEffect } from "react"
import { useAppContext } from "@context/appContext"
import { Path, TextAnimate } from '@utils/pathUtils'
import { SVGWrapper } from "./contextSVG"
import { usePageContext } from "../context/pageContext"
export default function Story12Support({ scrollMin, scrollMax, speed }) {
  let [allLengths, setAllLengths] = useState([])
  let [allOffsetLengths, setAllOffsetLengths] = useState([])
  let [allRatios, setAllRatios] = useState([0])
  let [allPrevRatios, setAllPrevRatios] = useState([0])
  let { scrolled, locale } = useAppContext();
    let {svgWidth} = usePageContext()
  // let [fakeScroll1,setFakeScroll1] = useState(0)
  // // let [fillStyle1,setFillStyle1] = useState(false)
  // // let [strokeColor1, setStrokeColor1] = useState('#fff')

  // let [fakeScroll2,setFakeScroll2] = useState(0)
  // let [fillStyle2,setFillStyle2] = useState(false)
  // let [strokeColor2, setStrokeColor2] = useState('#fff')

  function handleLength(f, newLength, position) {
    setAllLengths(prevLengths => {
      let copyLengths = [...prevLengths];
      copyLengths[position] = newLength * f;
      return copyLengths
    })
    setAllOffsetLengths(prevOffsets => {
      let copyOffsetLengths = [...prevOffsets];
      copyOffsetLengths[position] = newLength * f;
      return copyOffsetLengths
    })
  }

  // useEffect(() => {
  //   console.log(allLengths)
  //   console.log(allRatios)
  // }, [allLengths, allRatios])

  useEffect(() => {
    if (allLengths.length > 0) {
      let totOffsetLength = allOffsetLengths.reduce((x, y) => x + y);
      let allRatios = allLengths.map(itemLength => itemLength / totOffsetLength);
      let newPrevRatios = allLengths.map((itemLength, index) => {
        let prevOffsetLength = allOffsetLengths.reduce((acc, y, i) => {
          return (i < index ? acc + y : acc)
        }, 0);
        return prevOffsetLength / totOffsetLength
      })

      setAllRatios(allRatios)
      setAllPrevRatios(newPrevRatios)
    }
  }, [allLengths, allOffsetLengths])

  // useEffect(()=>{
  //   let timer = setTimeout(()=>{setFakeScroll1(1)},500)
  //     // let timer2 = setTimeout(()=>{setFillStyle(true)},2000)
  //   let timer2 = setTimeout(()=>{setFakeScroll2(1)},1200)
  //   let timer3 = setTimeout(()=>{setFillStyle2(true);setStrokeColor2('transparent')},3200)
  //   return ()=>{
  //     clearTimeout(timer)
  //     clearTimeout(timer2)
  //     clearTimeout(timer3)
  //   }
  // },[])

  return (
    <SVGWrapper myRatio={allRatios} prevRatio={allPrevRatios} scrollMin={scrollMin} scrollMax={scrollMax} animationSpeed={speed}>
      {/* <div className='fixed w-full top-[140px] left-1/2 -translate-x-1/2'> */}

      {/* <svg alt='Roadmap title' style={{transform: `translate(-50%, ${!fakeScroll?20:-20}px)`, transition:'all 4s ease-out'}}  className='relative w-full px-4 left-1/2' viewBox="0 0 807 160" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
      <svg alt='Story Part 1, girl in dynamic running pose' style={{ transform: `translate(-50%, ${-0 * scrolled}px)` }} viewBox="0 0 1468 2328" fill="none" xmlns="http://www.w3.org/2000/svg"
          className={`absolute ${svgWidth} left-1/2`}>

<Path position={0} handleLength={(l, i) => handleLength(1, l, i)} id="femalePath" d="M90 1889C-10.1117 1888.54 55 2024.5 121.5 2037.5C188 2050.5 265.312 1987.49 285 2047.88C304.688 2108.28 335.944 2120.5 387.5 2106C439.056 2091.5 440.972 2138.38 480 2146.1C515.529 2153.12 543.383 2138.11 576 2157.5C587.927 2164.59 594.186 2181 613 2180.5C632.991 2179.97 639 2158 662.5 2151C679.857 2145.83 694.5 2152 706 2171.5M147 1889C252.271 1895.39 183 1987.5 159.5 2020.5C121.843 2073.38 193.636 2105.04 237 2087.5C354.118 2040.14 329.784 2153.01 387.5 2125.5C434.753 2102.97 431.853 2153.59 464 2157.5C494.538 2161.21 523.5 2142.47 555 2149.09" stroke="white" stroke-width="2" stroke-linecap="round"/>
<Path position={0} handleLength={(l, i) => handleLength(1, l, i)} id="femalePathMiddle" d="M119.5 1917C119.5 1960.9 117.671 1999.29 148.5 2037.5C212.326 2116.61 293.357 2008.4 234 1997C175.139 1985.7 187.325 2081.92 259 2093C291.621 2098.04 312.755 2054.42 348.5 2065.5C401.849 2082.04 363.5 2160 436.5 2146C451.774 2143.07 469.627 2124.36 485 2129C501.22 2133.89 502 2161.5 524.5 2161.5C545.67 2161.5 566.077 2150.57 585.5 2154C602.5 2157 613.054 2176.01 635 2172.5C658.566 2168.73 671.154 2148.23 693.5 2159C714.491 2169.12 715 2212.13 737 2212.13H849.5C879.6 2212.13 904 2236.53 904 2266.63C904 2296.73 879.6 2321.13 849.5 2321.13H617.5C587.401 2321.13 563 2296.73 563 2266.63C563 2236.53 587.401 2212.13 617.5 2212.13H736.5" stroke="white" stroke-width="2" stroke-linecap="round"/>

      </svg>


      {/* </div> */}
    </SVGWrapper>
  )
}