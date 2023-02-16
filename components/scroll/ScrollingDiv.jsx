import useDimensions from '@/utils/useDimensions'
import React, { useState, useEffect, useRef } from 'react'
import { useAppContext } from '../context/appContext.js'
import { usePageContext } from '../context/pageContext'

export default function ScrollingDiv ({children, className, style, animationLocation, screenHeight, titleHeight, svgHeight}) {
  const {scrolled} = useAppContext()
  let [moves , setMoves] = useState(0)
  let {moved, setMoved, mobile, finished} = usePageContext();
  // let [moved, setMoved] = useState(false)
  let [maxMoves,setMaxMoves] = useState(undefined)
  let [visibleHeight, setVisibleHeight] = useState(undefined)
  
  let scrollDivRef = useRef(null)
  let [dimensions, setDimensions] = useState({width: undefined, height: undefined , top: undefined, bottom: undefined})
  let print = false;

  const factor=mobile?0.55:0.30
  const moveHeight = visibleHeight*factor
  let footerHeight = 250

  useEffect(()=>{
    if (print) {
    // console.log('maxMoves: '+ maxMoves)
    console.log(titleHeight + ' < ' + animationLocation.top + ' && ' + animationLocation.bottom + ' < ' + screenHeight + ' ==> ' + ((titleHeight<animationLocation.top && animationLocation.bottom<screenHeight)?'OK':'Not allowed!'))
    console.log('moves: '+ moves + ', maxMoves: ' + maxMoves + ' of height ' + (moveHeight))
    console.log('moved: '+ moved)
    console.log('translation: ' + `-${moves>=maxMoves?(svgHeight-visibleHeight)+footerHeight:moves*visibleHeight*factor}px`)
    // console.log(animationLocation)
    // console.log({transform: `translate(-50%,-${moves*visibleHeight*factor }px)`})
    }
  },[moves, moved, maxMoves, animationLocation, titleHeight, svgHeight, visibleHeight])

  useEffect(()=>{
      const { width, height, y} = scrollDivRef.current.getBoundingClientRect();
      setDimensions({ width: width, height: height , top: y, bottom: y + height});
  },[children])

  useEffect(()=>{
    let myVisibleHeight = screenHeight-dimensions.top
    if (myVisibleHeight>0) {
      setVisibleHeight(screenHeight)
      // console.log(myVisibleHeight)
    }
  },[dimensions, screenHeight])

  useEffect(()=>{
      // console.log('svgHeight to scroll ' + (svgHeight-visibleHeight)+ '\nmove Height ' + (visibleHeight*factor))
      // console.log('maxMoves: ' + maxMoves)
      
      // console.log((svgHeight-visibleHeight)/(visibleHeight*factor))
      // console.log(Math.floor((svgHeight-visibleHeight)/(visibleHeight*factor)))
      setMaxMoves(Math.ceil((svgHeight-visibleHeight)/(visibleHeight*factor)))
  },[visibleHeight, svgHeight, maxMoves])

  useEffect(()=>{
    if (animationLocation?.bottom && animationLocation.bottom>(screenHeight)) {
      // console.log('bottom animation: ' + animationLocation.bottom + ' & screenHeight: ' + screenHeight )
      let amount = Math.max(Math.floor((animationLocation.bottom - screenHeight)/(moveHeight)),1)
      print?console.log('===> moves + ' + amount + '!'):''
      setMoves(moves=>Math.min(moves+amount, maxMoves)||0)
      setMoved(true)
    }
    if (animationLocation?.top && animationLocation.top < (titleHeight)) {
      let amount = Math.max(Math.floor((titleHeight-animationLocation.top)/(moveHeight)),1)
      print?console.log('===> moves - ' + amount + '!'):''
      // print?console.log('moves - 1!'):''
      // console.log('top animation: ' + animationLocation.top + ' & maxHeight: ' + titleHeight )
      setMoves(moves=>Math.max(moves-amount,0)||0)
      setMoved(true)
    }

    // console.log('moves: ' + moves + ' & moved: ' + moved + ` ==> translate(-50%,-${moves*visibleHeight*factor}px)`)

  },[animationLocation, setMoves, titleHeight, screenHeight])

  useEffect(()=>{
    let timer;

    if (moved) {
     timer = setTimeout(()=>{
      setMoved(false);
      // console.log('timer removed')
    }, 1000)
    //  console.log('Timer set!')
    }
    // console.log(moves, moved)
    return () => {clearTimeout(timer)}

  },[moved, moves])

  // let Y = 


  // if (width === undefined || height === undefined) {
  //   return <div>Loading...</div>;
  // }
  // transition: `${(scrolled>step1.from && scrolled <step1.to) || (scrolled > step2.from && scrolled < step2.to)?'all 1s ease':'none'
  return (
    
    // transition:scrolled===step1.at || scrolled===step2.at || scrolled===step3.at?'all ease 0.8s':'none'
    // style={{ transform: `translate(-50%, ${-Y}px)`, transition: 'all 1s ease'}}>
    // transform:`translate(-50%,-${moves<totalMoves?moves*visibleHeight*factor:svgHeight-visibleHeight}px)`
      <div id={`${svgHeight}`} ref={scrollDivRef} style={{...style, height: `${svgHeight}px`, transition: `${finished?'none':'all 1s ease'}` , transform: `translate(-50%,-${finished?((svgHeight-visibleHeight)+footerHeight)*scrolled:moves>=maxMoves?((svgHeight-visibleHeight)+footerHeight)*0.97:moves*visibleHeight*factor}px)`}} className={className} >
          {/* {console.log({...style, transform: `translate(-50%,-${moves>maxMoves?svgHeight-visibleHeight:moves*visibleHeight*factor }px)`})} */}
          {/* {console.log({ transform: `translate(-50%, ${-Y}px)`, transition: `${(scrolled>step1.from && scrolled <step1.to) || (scrolled > step2.from && scrolled < step2.to)?'all 1s ease':'none'}`}.transition)} */}
          {children}

      </div>

    )
}
