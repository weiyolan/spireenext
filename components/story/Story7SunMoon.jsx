import React, { useState, useEffect } from "react"
import { useAppContext } from "@context/appContext"
import { Path, TextAnimate } from '@utils/pathUtils'
import { SVGWrapper } from "./contextSVG"
import { usePageContext } from "../context/pageContext"
export default function Story7SunMoon({ scrollMin, scrollMax, speed }) {
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

        <Path position={0} handleLength={(l, i) => handleLength(1.5, l, i)} id="spireeSunConnect" d="M275.5 1214.5C322.5 1289 362 1194 402 1194C442 1194 469.096 1239 516.5 1259.5C563.904 1280 625.049 1286.01 672 1280" stroke="white" stroke-width="2" stroke-linecap="round"/>
        
        <Path position={1} drawDuration={3} strokeWidth={6} inverse={true} handleLength={(l, i) => handleLength(1, l, i)}  id='Sun' d="M669.351 1279.99C592.871 1279.99 530.872 1217.76 530.872 1141C530.872 1064.23 592.871 1002 669.351 1002C745.831 1002 807.83 1064.23 807.83 1141C807.83 1214.97 755.835 1278.51 670.755 1280.1" stroke="white" stroke-width="6" stroke-linecap="round"/>
        
        <Path position={2} drawDuration={3} strokeWidth={6} inverse={true} handleLength={(l, i) => handleLength(1, l, i)}  id="Moon" d="M947.452 1421.47C925.474 1428.93 901.332 1430.94 876.939 1426.2C801.862 1411.62 752.829 1338.66 767.422 1263.24C777.196 1212.73 813.037 1173.92 858.201 1158.19" stroke="white" stroke-width="6" stroke-linecap="round"/>
     

      </svg>

    </SVGWrapper>
  )
}