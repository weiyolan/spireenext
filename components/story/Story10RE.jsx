import React, { useState, useEffect } from "react"
import { useAppContext } from "@components/context/appContext.js"
import { Path, TextAnimate } from '@utils/pathUtils'
import { SVGWrapper } from "./contextSVG"
import { usePageContext } from "../context/pageContext"
import AnimateSVG from "./AnimateSVG"

export default function Story10RE({ scrollMin, scrollMax, speed }) {

  let { locale } = useAppContext();
  let { mobile } = usePageContext()
  // let [fakeScroll1,setFakeScroll1] = useState(0)
  // // let [fillStyle1,setFillStyle1] = useState(false)
  // // let [strokeColor1, setStrokeColor1] = useState('#fff')

  // let [fakeScroll2,setFakeScroll2] = useState(0)
  // let [fillStyle2,setFillStyle2] = useState(false)
  // let [strokeColor2, setStrokeColor2] = useState('#fff')


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
    <AnimateSVG alt='Story Part 10, the logo of Run Everywhere' scrollMin={scrollMin} scrollMax={scrollMax} animationSpeed={speed}>

      {mobile ? <g id='mobile'>
        <Path inverse={true} position={0} lengthFactor={1} id="RECircle" d="M145.397 3995.06C130.962 3986.29 113.622 3981 95.5 3981C42.7568 3981 0 4023.76 0 4076.5C0 4129.24 42.7568 4172 95.5 4172C148.243 4172 191 4129.24 191 4076.5C191 4042.01 172.713 4011.78 145.306 3995" stroke="white" stroke-width="2" stroke-linecap="round" />
        <Path animateFill={true} animateStroke={true} position={1} lengthFactor={1} id="RELogo" d="M95.5003 3989C72.2961 3989 50.0362 3998.22 33.6287 4014.63C17.2209 4031.04 8 4053.3 8 4076.5C8 4099.7 17.2209 4121.96 33.6287 4138.37C50.0362 4154.78 72.2961 4164 95.5003 4164C118.704 4164 140.964 4154.78 157.372 4138.37C173.779 4121.96 183 4099.7 183 4076.5C183 4053.3 173.779 4031.04 157.372 4014.63C140.964 3998.22 118.704 3989 95.5003 3989ZM95.5003 4002.52C115.124 4002.52 133.938 4010.31 147.814 4024.19C161.691 4038.06 169.483 4056.88 169.483 4076.5C169.483 4096.12 161.691 4114.94 147.814 4128.81C133.938 4142.69 115.124 4150.48 95.5003 4150.48C75.8761 4150.48 57.0627 4142.69 43.1863 4128.81C29.31 4114.94 21.5168 4096.12 21.5168 4076.5C21.5168 4056.88 29.3097 4038.06 43.1863 4024.19C57.0627 4010.31 75.8761 4002.52 95.5003 4002.52ZM110.544 4044.18H153.059L150.237 4057.29H122.652L120.012 4069.85H143.682L141.133 4081.96H117.463L114.458 4095.71H142.863L140.132 4108.82H96.7965L110.544 4044.18ZM37.9404 4108.82L51.6881 4044.18H79.4547C82.0042 4044.18 84.2502 4044.7 86.192 4045.73C88.1948 4046.76 89.8638 4048.13 91.199 4049.83C92.5952 4051.52 93.6572 4053.47 94.3856 4055.65C95.114 4057.84 95.4783 4060.08 95.4783 4062.39C95.4783 4064.63 95.114 4066.85 94.3856 4069.03C93.7178 4071.22 92.7466 4073.31 91.4719 4075.32C90.258 4077.26 88.7713 4079.05 87.0115 4080.69C85.3122 4082.33 83.4305 4083.69 81.3665 4084.78L89.651 4108.82H72.8089L65.708 4087.97H57.2415L52.8713 4108.82H37.9404ZM72.4447 4074.95C73.3553 4074.95 74.2656 4074.68 75.176 4074.13C76.0864 4073.53 76.9059 4072.74 77.634 4071.77C78.3624 4070.73 78.939 4069.55 79.3638 4068.22C79.8494 4066.88 80.0921 4065.45 80.0921 4063.94C80.0921 4061.93 79.6673 4060.33 78.8176 4059.11C77.968 4057.9 76.9361 4057.29 75.7222 4057.29H63.7962L60.0634 4074.95H72.4447Z" fill="white" />

      </g> : <g id='desktop'>

        <Path inverse={true} position={0} lengthFactor={2} id="RECircle" d="M642.397 1527.06C627.962 1518.29 610.622 1513 592.5 1513C539.757 1513 497 1555.76 497 1608.5C497 1661.24 539.757 1704 592.5 1704C645.243 1704 688 1661.24 688 1608.5C688 1574.01 669.713 1543.78 642.306 1527" stroke="white" stroke-width="2" stroke-linecap="round" />
        <Path animateFill={true} animateStroke={true} position={1} lengthFactor={1} id="RELogo" d="M592.5 1521C569.296 1521 547.036 1530.22 530.629 1546.63C514.221 1563.04 505 1585.3 505 1608.5C505 1631.7 514.221 1653.96 530.629 1670.37C547.036 1686.78 569.296 1696 592.5 1696C615.704 1696 637.964 1686.78 654.372 1670.37C670.779 1653.96 680 1631.7 680 1608.5C680 1585.3 670.779 1563.04 654.372 1546.63C637.964 1530.22 615.704 1521 592.5 1521ZM592.5 1534.52C612.124 1534.52 630.938 1542.31 644.814 1556.19C658.691 1570.06 666.483 1588.88 666.483 1608.5C666.483 1628.12 658.691 1646.94 644.814 1660.81C630.938 1674.69 612.124 1682.48 592.5 1682.48C572.876 1682.48 554.063 1674.69 540.186 1660.81C526.31 1646.94 518.517 1628.12 518.517 1608.5C518.517 1588.88 526.31 1570.06 540.186 1556.19C554.063 1542.31 572.876 1534.52 592.5 1534.52ZM607.544 1576.18H650.059L647.237 1589.29H619.652L617.012 1601.85H640.682L638.133 1613.96H614.463L611.458 1627.71H639.863L637.132 1640.82H593.796L607.544 1576.18ZM534.94 1640.82L548.688 1576.18H576.455C579.004 1576.18 581.25 1576.7 583.192 1577.73C585.195 1578.76 586.864 1580.13 588.199 1581.83C589.595 1583.52 590.657 1585.47 591.386 1587.65C592.114 1589.84 592.478 1592.08 592.478 1594.39C592.478 1596.63 592.114 1598.85 591.386 1601.03C590.718 1603.22 589.747 1605.31 588.472 1607.32C587.258 1609.26 585.771 1611.05 584.011 1612.69C582.312 1614.33 580.431 1615.69 578.367 1616.78L586.651 1640.82H569.809L562.708 1619.97H554.242L549.871 1640.82H534.94ZM569.445 1606.95C570.355 1606.95 571.266 1606.68 572.176 1606.13C573.086 1605.53 573.906 1604.74 574.634 1603.77C575.362 1602.73 575.939 1601.55 576.364 1600.22C576.849 1598.88 577.092 1597.45 577.092 1595.94C577.092 1593.93 576.667 1592.33 575.818 1591.11C574.968 1589.9 573.936 1589.29 572.722 1589.29H560.796L557.063 1606.95H569.445Z" fill="white" />
      </g>}
    </AnimateSVG>
  )
}