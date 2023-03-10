import React, { useState, useEffect, useRef } from "react"
import { useAppContext } from "@components/context/appContext.js"
import { Path, TextAnimate } from '@utils/pathUtils'
import { SVGWrapper } from "./contextSVG"
import { usePageContext } from "../context/pageContext"
import AnimateSVG from './AnimateSVG'
import AnimateSVGBanner from "./AnimateSVGBanner"

export default function Story2PharmaBanner({ scrollMin, scrollMax, speed }) {

  let { locale } = useAppContext();

  let [fakeScroll1, setFakeScroll1] = useState(0)

  let { mobile } = usePageContext()
  let fontSize = 24
  // // let [fillStyle1,setFillStyle1] = useState(false)
  // // let [strokeColor1, setStrokeColor1] = useState('#fff')

  // let [fakeScroll2,setFakeScroll2] = useState(0)
  // let [fillStyle2,setFillStyle2] = useState(false)
  // let [strokeColor2, setStrokeColor2] = useState('#fff')

  useEffect(() => {
    let timer = setTimeout(() => { setFakeScroll1(1) }, 2000)
    // let timer2 = setTimeout(()=>{setFillStyle(true)},2000)
    // let timer2 = setTimeout(()=>{setFakeScroll2(1)},1200)
    // let timer3 = setTimeout(()=>{setFillStyle2(true);setStrokeColor2('transparent')},3200)
    return () => {
      clearTimeout(timer)
      // clearTimeout(timer2)
      // clearTimeout(timer3)
    }
  }, [])

  return (
    <AnimateSVGBanner print={false} alt='Story Part 2, a medical staff caduceus illustrating Astrids doctorate in pharmacy'
      scrollMin={scrollMin} scrollMax={scrollMax} speed={speed} fakeScroll={[]}>
      {mobile ? <g id='mobile'>
        <TextAnimate scrolled={fakeScroll1} at={0} fromTop={true} id="Meet Astrid" fill="white" style="white-space: pre" font-family="var(--font-quicksand)" font-size={fontSize} letter-spacing="0em"><tspan x="168.527" y="54.875">Meet Astrid, a driven and sport-</tspan><tspan x="143.441" y="85.875">loving women who&#x2019;s on a mission to </tspan><tspan x="182.504" y="116.875">revolutionize the way women </tspan><tspan x="238.034" y="147.875">experience running.</tspan></TextAnimate>
        <Path drawDuration='1' position={0} scrolled={fakeScroll1} inverse={false} double={1} lengthFactor={1} id="fromAstridMob" myGradient='url(#paint4_linear_635_13091)'
        d="M351.698 797.416C479.229 833.871 431.006 733.407 494.185 690.492C570.998 638.316 714.43 806.968 776.143 547.499C843.901 262.617 970.631 568.967 1081.62 423.834" stroke="white" stroke-width="2" stroke-linecap="round" />
        <linearGradient id="paint4_linear_635_13091" x1="539.997" y1="69" x2="700" y2="69" gradientUnits="userSpaceOnUse">
          <stop offset="0%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 1 }} />
          <stop offset={'100%'} style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 0 }} />
        </linearGradient>
      </g> : <g id='desktop'>
        <TextAnimate scrolled={fakeScroll1} at={0} fromTop={true} id="Meet Astrid" fill="white" style="white-space: pre" font-family="var(--font-quicksand)" font-size={fontSize} letter-spacing="0em"><tspan x="85.6895" y="56">Meet Astrid, a driven and sport-</tspan><tspan x="65.6211" y="81">loving women who&#x2019;s on a mission to </tspan><tspan x="96.8711" y="106">revolutionize the way women </tspan><tspan x="141.295" y="131">experience running.</tspan></TextAnimate>
        <Path drawDuration='1' position={0} scrolled={fakeScroll1} inverse={false} double={1} lengthFactor={1} id="fromAstridTest" myGradient='url(#paint4_linear_635_13091)'
        d="M575 513.718C678.028 597.254 673.054 485.926 748 471.217C839.12 453.334 904.946 664.717 1063.45 450.217C1237.47 214.709 1233.95 546.217 1392.95 456.217" stroke="white" stroke-width="2" stroke-linecap="round" />
        <linearGradient id="paint4_linear_635_13091" x1="1000" y1="69" x2="1390" y2="69" gradientUnits="userSpaceOnUse">
          <stop offset="0%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 1 }} />
          <stop offset={'100%'} style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 0 }} />
        </linearGradient>
      </g>}
    </AnimateSVGBanner>

  )
}