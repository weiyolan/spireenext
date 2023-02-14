import React, { useState, useEffect } from "react"
import { useAppContext } from "@context/appContext"
import { Path, TextAnimate } from '@utils/pathUtils'
import { SVGWrapper } from "./contextSVG"
import { usePageContext } from "../context/pageContext"

export default function StoryText({ scrollMin, scrollMax, speed }) {
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


        <TextAnimate at={0.04} fromTop={true} id="DoctorText" fill="white" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="598.521" y="343">As a recent graduate with a </tspan><tspan x="588.688" y="368">doctorate in pharmacy, Astrid </tspan><tspan x="575.338" y="393">has a deep understanding of the </tspan><tspan x="605.631" y="418">body and its needs during </tspan><tspan x="651.031" y="443">physical activity.</tspan></TextAnimate>
        <TextAnimate at={0.175} fromTop={true} id="Mountains" fill="white" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="1194.46" y="213">One day, while on a run in the </tspan><tspan x="1179.61" y="238">mountains, Astrid stumbled upon </tspan><tspan x="1190.7" y="263">a beautiful and delicate flower </tspan><tspan x="1270.74" y="288">called Spir&#xe9;e.</tspan></TextAnimate>
        <TextAnimate at={0.36} fromTop={true} id="Willpower" fill="white" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="629.422" y="714">As she learned more about the </tspan><tspan x="634.92" y="739">flower, she discovered that its </tspan><tspan x="636.873" y="764">name means &#34;willpower&#34; and </tspan><tspan x="709.852" y="789">&#34;persistence.&#34; </tspan></TextAnimate>
        <TextAnimate at={0.42} fromTop={true} id="Inspiration" fill="white" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="243.457" y="750"> She realized that these traits </tspan><tspan x="217.539" y="775">reflected her own mentality during </tspan><tspan x="236.484" y="800">challenging runs and that they </tspan><tspan x="251.66" y="825">could inspire others as well. </tspan></TextAnimate>
        <TextAnimate at={0.53} fromTop={true} id="SpireeText" fill="white" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="237.48" y="990">This led her to create </tspan><tspan x="255.742" y="1015">Spir&#xe9;e, a start-up </tspan><tspan x="215.635" y="1040">dedicated to creating  the </tspan><tspan x="226.709" y="1065">ultimate sportswear for </tspan><tspan x="232.783" y="1090">women made of 100% </tspan><tspan x="276.836" y="1115">Merino wool.</tspan></TextAnimate>
        <TextAnimate at={0.61} fromTop={true} id="SunText" fill="white" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="574.354" y="1099">Spir&#xe9;e&#39;s first clothing </tspan><tspan x="564.891" y="1124">line, the Sun and Moon </tspan><tspan x="575.799" y="1149">series, leverages the </tspan><tspan x="590.633" y="1174">many benefits of </tspan><tspan x="611.199" y="1199">Merino wool,</tspan></TextAnimate>
        <TextAnimate at={0.65} fromTop={true} id="MoonText" fill="white" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="812.066" y="1249">... to provide women </tspan><tspan x="816.91" y="1274">with a comfortable </tspan><tspan x="804.498" y="1299">and effective solution </tspan><tspan x="831.002" y="1324">for their athletic </tspan><tspan x="865.797" y="1349">pursuits.</tspan></TextAnimate>
        <TextAnimate at={0.715} fromTop={true} id="MerinoText" fill="white" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="1199.63" y="1003">The natural softness, </tspan><tspan x="1165.89" y="1028">temperature regulation, and </tspan><tspan x="1156.02" y="1053">anti-odor properties of Merino </tspan><tspan x="1165.17" y="1078">wool will ensure that women </tspan><tspan x="1165.97" y="1103">stay comfortable, no matter </tspan><tspan x="1156.91" y="1128">the weather or the intensity of </tspan><tspan x="1233.1" y="1153">their workout. </tspan></TextAnimate>
        <TextAnimate at={0.75} fromTop={true} id="PassionText" fill="white" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="1076.73" y="1571">Astrid&#39;s passion for </tspan><tspan x="1090.17" y="1596">running and her </tspan><tspan x="1052.12" y="1621">commitment to creating </tspan><tspan x="1054.92" y="1646">a brand that empowers </tspan><tspan x="1048.72" y="1671">women to reach their full </tspan><tspan x="1059.22" y="1696">potential is reflected in </tspan><tspan x="1058.53" y="1721">every aspect of Spir&#xe9;e.</tspan></TextAnimate>
        <TextAnimate at={0.82} fromTop={true} id="REText" fill="white" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="193.391" y="1521">From the playful and vibrant </tspan><tspan x="182.424" y="1546">designs to the precise cuts and </tspan><tspan x="173.312" y="1571">attention to detail, Spir&#xe9;e is more </tspan><tspan x="200.305" y="1596">than just sportswear - it&#39;s a </tspan><tspan x="273.742" y="1621">movement.</tspan></TextAnimate>
        <TextAnimate at={0.9} fromTop={true} id="JoinText1" fill="white" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="276.488" y="1839">So why not join Astrid and Spir&#xe9;e </tspan><tspan x="293.715" y="1864">on this exciting journey? Your </tspan><tspan x="289.184" y="1889">support will help bring the Sun </tspan><tspan x="291.645" y="1914">and Moon series to life, giving </tspan><tspan x="290.697" y="1939">women the tools they need to </tspan><tspan x="296.713" y="1964">push themselves further and </tspan><tspan x="337.992" y="1989">chase their dreams. </tspan></TextAnimate>
        <TextAnimate at={0.93} fromTop={true}  id="Support" fill="white" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="809.889" y="2101">Join Spir&#xe9;e&#x2019;s movement now to be </tspan><tspan x="825.66" y="2126">part of something truly special. </tspan><tspan x="809.723" y="2151">Together, let&#39;s empower women to </tspan><tspan x="882.857" y="2176">reach new heights.</tspan></TextAnimate>

      </svg>

    </SVGWrapper>
  )
}