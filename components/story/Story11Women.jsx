import React, { useState, useEffect } from "react"
import { useAppContext } from "@context/appContext"
import { Path, TextAnimate } from '@utils/pathUtils'
import { SVGWrapper } from "./contextSVG"
import { usePageContext } from "../context/pageContext"
export default function Story11Women({ scrollMin, scrollMax, speed }) {
  let [allLengths, setAllLengths] = useState([])
  let [allOffsetLengths, setAllOffsetLengths] = useState([])
  let [allRatios, setAllRatios] = useState([0])
  let [allPrevRatios, setAllPrevRatios] = useState([0])
  let { scrolled, locale } = useAppContext();
  let { svgWidth } = usePageContext()
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
      <svg alt='Story Part 11, the sign of women' style={{ transform: `translate(-50%, ${-0 * scrolled}px)` }} viewBox="0 0 1468 2328" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={`absolute ${svgWidth} left-1/2`}>


        <Path position={0} handleLength={(l, i) => handleLength(1, l, i)}  id="tofemalePath" d="M541 1689C452 1826 118.5 1496.4 118.5 1730" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <Path position={1} animateFill={true} animateStroke={true} handleLength={(l, i) => handleLength(1, l, i)}  id="femaleSign" fill-rule="evenodd" clip-rule="evenodd" d="M127.439 1860.52C159.87 1856.61 185 1828.99 185 1795.5C185 1759.33 155.675 1730 119.5 1730C83.3253 1730 54 1759.33 54 1795.5C54 1828.99 79.1302 1856.61 111.561 1860.52V1880.85H89.7273V1896.73H111.561V1917.97H127.439V1896.73H147.367V1880.85H127.439V1860.52ZM119.5 1847.75C90.6404 1847.75 67.2451 1824.36 67.2451 1795.5C67.2451 1766.64 90.6404 1743.25 119.5 1743.25C148.36 1743.25 171.755 1766.64 171.755 1795.5C171.755 1824.36 148.36 1847.75 119.5 1847.75Z" fill="white"/>


      </svg>

    </SVGWrapper>
  )
}