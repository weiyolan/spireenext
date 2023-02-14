import React, { useState, useEffect } from "react"
import { useAppContext } from "@context/appContext"
import { Path, TextAnimate } from '@utils/pathUtils'
import { SVGWrapper } from "./contextSVG"
import { usePageContext } from "../context/pageContext"
export default function Story6Spiree({ scrollMin, scrollMax, speed }) {
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
        <svg alt='Story Part 6, the logo of Spirée' style={{ transform: `translate(-50%, ${-0 * scrolled}px)` }} viewBox="0 0 1468 2328" fill="none" xmlns="http://www.w3.org/2000/svg"
          className={`absolute ${svgWidth} left-1/2`}>
          
          <Path drawDuration='1' position={0} handleLength={(l, i) => handleLength(1, l, i)} id="toSpireePath" d="M343.5 843C287.99 938.5 80.5098 924 34.01 896.5C-30.9772 858.066 11.51 800.961 64.5 843C139.5 902.5 -49.5003 1038.22 53.9998 1090" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <Path animateFill={true} animateStroke={true} drawDuration='1' position={1} handleLength={(l, i) => handleLength(1, l, i)} id="Spiree" fill-rule="evenodd" clip-rule="evenodd" d="M258.61 1184.87L198.144 1081.41L141.702 1177.99L141.218 1177.15C130.478 1158.68 119.703 1140.15 108.54 1124.91C94.2755 1105.43 78.0707 1088.7 57 1088.7H53.6744V1109.52H57C61.3892 1109.52 66.6227 1111.69 72.613 1116.42C78.5615 1121.12 84.9427 1128.11 91.5582 1137.14C101.794 1151.12 112.131 1168.87 122.876 1187.32L122.877 1187.32C126.097 1192.85 129.353 1198.44 132.653 1204.01L141.763 1219.39L198.144 1122.92L240.432 1195.28L252.556 1216.16H276.777L258.61 1184.87Z" fill="white"/>
    
        </svg>

    </SVGWrapper>
  )
}