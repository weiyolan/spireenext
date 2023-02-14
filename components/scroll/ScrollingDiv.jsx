import React, { useState, useEffect } from 'react'
import { useAppContext } from '../context/appContext'


const ScrollingDiv = ({children, className, speed, step1, step2}) => {
  const {scrolled} = useAppContext()
  let [segment1, setSegment1] = useState(0)
  let [segment2, setSegment2] = useState(0)

  // let speed = 550
  // let step1 = {from:0.81, to:1,for:250}

  // let speed = 0
  // let step1 = {from:0.49, for:400}
  // let step2 = {from: 0.74, for:400}


  // let speed = 200
  // let step1 = {from:0.50, to:0.55,for:300}
  // let step2 = {from: 0.80, to:1, for:300}

  function biasScroll(scrollMin,scrollMax) {
    return (Math.min(Math.max(scrolled-scrollMin,0)/(scrollMax-scrollMin),1))
  }

  // function handleLinearStep (step,setStep) {
  //   if (scrolled < step.from) {
  //     setStep(0)
  //   }
  //   else if (scrolled > step.from) {
  //     let linearMove = step.for*biasScroll(step.from, step.to)
  //     setStep(linearMove)
  //   }
  // }

  function handleStep (step,setStep) {
    if (scrolled < step.from) {
      setStep(0)
    }
    else if (scrolled > step.from) {
      // let linearMove = step.for*biasScroll(step.from, step.to)
      setStep(step.for)
    }
  }

  useEffect(()=>{
    // Linear
    // handleLinearStep(step1,setSegment1)
    // handleLinearStep(step2,setSegment2)

    // ABRUPT
    handleStep(step1,setSegment1)
    handleStep(step2,setSegment2)
  },[scrolled])

  // let Y = speed*scrolled
  // let Y = speed*scrolled + segment1
  let Y = speed*scrolled + segment1 + segment2


  // transition: `${(scrolled>step1.from && scrolled <step1.to) || (scrolled > step2.from && scrolled < step2.to)?'all 1s ease':'none'
  return (
    // transition:scrolled===step1.at || scrolled===step2.at || scrolled===step3.at?'all ease 0.8s':'none'
      <div className={className} style={{ transform: `translate(-50%, ${-Y}px)`, transition: 'all 1s ease'}}>
          {/* {console.log({ transform: `translate(-50%, ${-Y}px)`, transition: `${(scrolled>step1.from && scrolled <step1.to) || (scrolled > step2.from && scrolled < step2.to)?'all 1s ease':'none'}`}.transition)} */}
          {children}

      </div>

    )
}

export default ScrollingDiv