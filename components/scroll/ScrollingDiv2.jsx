import React, { useState, useEffect } from 'react'
import { useAppContext } from '../context/appContext'


export default function ScrollingDiv2 ({children, className, style}) {
  const {scrolled} = useAppContext()

  let Y = 0

  // let Y = speed*scrolled
  // let Y = speed*scrolled + segment1

  // transition: `${(scrolled>step1.from && scrolled <step1.to) || (scrolled > step2.from && scrolled < step2.to)?'all 1s ease':'none'
  return (
    // transition:scrolled===step1.at || scrolled===step2.at || scrolled===step3.at?'all ease 0.8s':'none'
    // style={{ transform: `translate(-50%, ${-Y}px)`, transition: 'all 1s ease'}}>
      <div style={style} className={className} >
          {/* {console.log({ transform: `translate(-50%, ${-Y}px)`, transition: `${(scrolled>step1.from && scrolled <step1.to) || (scrolled > step2.from && scrolled < step2.to)?'all 1s ease':'none'}`}.transition)} */}
          {children}

      </div>

    )
}
