import React, { useState, useEffect } from "react"
import { useAppContext } from "@context/appContext"
import { Path, TextAnimate } from '@utils/pathUtils'
import { SVGWrapper } from "./contextSVG"
import { usePageContext } from "../context/pageContext"
export default function Story10RE({ scrollMin, scrollMax, speed }) {
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
          
          <Path inverse={true} position={0} handleLength={(l, i) => handleLength(2, l, i)}  id="RECircle" d="M642.397 1527.06C627.962 1518.29 610.622 1513 592.5 1513C539.757 1513 497 1555.76 497 1608.5C497 1661.24 539.757 1704 592.5 1704C645.243 1704 688 1661.24 688 1608.5C688 1574.01 669.713 1543.78 642.306 1527" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <Path animateFill={true} animateStroke={true} position={1} handleLength={(l, i) => handleLength(0.7, l, i)} id="RELogo"  d="M592.5 1521C569.296 1521 547.036 1530.22 530.629 1546.63C514.221 1563.04 505 1585.3 505 1608.5C505 1631.7 514.221 1653.96 530.629 1670.37C547.036 1686.78 569.296 1696 592.5 1696C615.704 1696 637.964 1686.78 654.372 1670.37C670.779 1653.96 680 1631.7 680 1608.5C680 1585.3 670.779 1563.04 654.372 1546.63C637.964 1530.22 615.704 1521 592.5 1521ZM592.5 1534.52C612.124 1534.52 630.938 1542.31 644.814 1556.19C658.691 1570.06 666.483 1588.88 666.483 1608.5C666.483 1628.12 658.691 1646.94 644.814 1660.81C630.938 1674.69 612.124 1682.48 592.5 1682.48C572.876 1682.48 554.063 1674.69 540.186 1660.81C526.31 1646.94 518.517 1628.12 518.517 1608.5C518.517 1588.88 526.31 1570.06 540.186 1556.19C554.063 1542.31 572.876 1534.52 592.5 1534.52ZM607.544 1576.18H650.059L647.237 1589.29H619.652L617.012 1601.85H640.682L638.133 1613.96H614.463L611.458 1627.71H639.863L637.132 1640.82H593.796L607.544 1576.18ZM534.94 1640.82L548.688 1576.18H576.455C579.004 1576.18 581.25 1576.7 583.192 1577.73C585.195 1578.76 586.864 1580.13 588.199 1581.83C589.595 1583.52 590.657 1585.47 591.386 1587.65C592.114 1589.84 592.478 1592.08 592.478 1594.39C592.478 1596.63 592.114 1598.85 591.386 1601.03C590.718 1603.22 589.747 1605.31 588.472 1607.32C587.258 1609.26 585.771 1611.05 584.011 1612.69C582.312 1614.33 580.431 1615.69 578.367 1616.78L586.651 1640.82H569.809L562.708 1619.97H554.242L549.871 1640.82H534.94ZM569.445 1606.95C570.355 1606.95 571.266 1606.68 572.176 1606.13C573.086 1605.53 573.906 1604.74 574.634 1603.77C575.362 1602.73 575.939 1601.55 576.364 1600.22C576.849 1598.88 577.092 1597.45 577.092 1595.94C577.092 1593.93 576.667 1592.33 575.818 1591.11C574.968 1589.9 573.936 1589.29 572.722 1589.29H560.796L557.063 1606.95H569.445Z" fill="white"/>
              


      </svg>

      {/* <AnimateIn at={0.11}>
          <h2 >
            {`${locale==='en'?'When we first meet, we define the goals and resources of your project as well as the available time until completion.':"Lors de notre première rencontre, nous définissons les objectifs et les ressources de votre projet, ainsi que le temps disponible jusqu'à son achèvement."}`} 
          </h2>
        </AnimateIn> */}

      {/* </div> */}
    </SVGWrapper>
  )
}