import useDimensions from '@/utils/useDimensions'
import React, { useState, useEffect, useRef } from 'react'
import { useAppContext } from '../context/appContext.js'
import { usePageContext } from '../context/pageContext'

export default function ScrollingDiv ({children, className, style, animationLocation, screenHeight, footerHeight, titleHeight, svgHeight}) {
  const {scrolled} = useAppContext()
  let [moves , setMoves] = useState(0)
  let {mobile, finished} = usePageContext();
  let [maxMoves,setMaxMoves] = useState(undefined)
  let [offset,setOffset] = useState(0)

  // let [moved, setMoved] = useState(false)
  let [visibleHeight, setVisibleHeight] = useState(undefined)
  
  let scrollDivRef = useRef(null)
  let [dimensions, setDimensions] = useState({width: undefined, height: undefined , top: undefined, bottom: undefined})
  let print = true;

  const factor=mobile?0.30:0.40
  const moveHeight = visibleHeight*factor
  // let breakTime = mobile?500:500

  useEffect(()=>{
    if (print) {
    // console.log('maxMoves: '+ maxMoves)
    // console.log(titleHeight + ' < ' + animationLocation.top + ' && ' + animationLocation.bottom + ' < ' + visibleHeight + ' ==> ' + ((titleHeight<animationLocation.top && animationLocation.bottom<visibleHeight)?'OK':'Not allowed!'))
    console.log(animationLocation.bottom + ' < ' + (visibleHeight + moves*moveHeight )  + ' ==> ' + ((animationLocation.bottom < (visibleHeight + moves*moveHeight )  )?'OK':'Not allowed!'))
    // console.log('moves: '+ moves + ', maxMoves: ' + maxMoves + ' of height ' + (moveHeight))
    // console.log('moved: '+ moved)
    // console.log('translation: ' + `-${moves>=maxMoves?(svgHeight-visibleHeight)+footerHeight:moves*visibleHeight*factor}px`)
    // console.log(animationLocation)
    // console.log({transform: `translate(-50%,-${moves*visibleHeight*factor }px)`})
    }
  },[moves, maxMoves, animationLocation, titleHeight, svgHeight, visibleHeight])

  useEffect(()=>{
    // print && console.log(dimensions?.height === undefined || )
    if (dimensions?.height === undefined || dimensions.height <= 0) {
      const { width, height, y} = scrollDivRef.current.getBoundingClientRect();
      setDimensions({ width: width, height: height , top: y, bottom: y + height});
      print && console.log('dimensions setted: ' + 'width: ' + width+', height: '+ height+ ', top: '+y+', bottom: '+(y + height) )
    }
  },[children])

  useEffect(()=>{
    let myVisibleHeight = screenHeight-titleHeight-dimensions.top
    if (myVisibleHeight>0) {
      setVisibleHeight(myVisibleHeight)
      // console.log(myVisibleHeight)
      print && console.log('visibleHeight setted: ' + myVisibleHeight)
    }
  },[dimensions, screenHeight])

  useEffect(()=>{
      // console.log('svgHeight to scroll ' + (svgHeight-visibleHeight)+ '\nmove Height ' + (visibleHeight*factor))
      // console.log('maxMoves: ' + maxMoves)
      
      // console.log((svgHeight-visibleHeight)/(visibleHeight*factor))
      // console.log(Math.floor((svgHeight-visibleHeight)/(visibleHeight*factor)))
      setMaxMoves(Math.ceil((svgHeight-visibleHeight)/moveHeight))
      // print && console.log('maxMoves setted')

  },[visibleHeight, svgHeight])

  useEffect(()=>{
    
      if (animationLocation?.bottom) {
    // if (animationLocation?.bottom) {
      let visibleTop = moves* moveHeight 
      let visibleBottom = moves*moveHeight + visibleHeight
      print && console.log('visibleTop: ' + visibleTop + ', visibleBottom: ' + visibleBottom)

      // // let newVisibleB = newMoves*moveHeight
      // // let newVisibleT = newVisibleB + visibleHeight
      // // let newOffset = animationLocation.top > newVisibleT?0:(newVisibleT-animationLocation.top) // in case top of animation is out of screen.

      if (animationLocation.bottom > visibleBottom || animationLocation.top < visibleTop) {
      // // let newMovesT = Math.max(Math.ceil((animationLocation.top - visibleHeight)/moveHeight),0)
        // print && console.log()
        let newMoves = Math.max(Math.ceil((animationLocation.bottom - visibleHeight)/moveHeight),0) 
        print && console.log('newMoves: ' + newMoves + ', oldMoves: ' + moves + (newMoves !== moves?' => updated':' => NOT updated') )

        if ((newMoves) !== moves) {
          setMoves(newMoves||0)
      }
      // } else if (animationLocation.top < visibleTop) {
      //   newMoves = Math.max(Math.ceil((animationLocation.top - visibleHeight)/moveHeight),0)
      // }

      // CHECK WHEN MOVED if animation top is in the visible zone, and if not correct for the diff which can be calculated.

        // setOffset(newOffset)


    }



    }


  },[animationLocation, visibleHeight])

  // useEffect(()=>{
  //   let timer;

  //   if (1) {
  //    timer = setTimeout(()=>{
  //     // setMoved(false);
  //     // console.log('timer removed')
  //   }, breakTime)
  //   //  console.log('Timer set!')
  //   }
  //   // console.log(moves, moved)
  //   return () => {clearTimeout(timer)}

  // },[])

  // let Y = 


  // if (width === undefined || height === undefined) {
  //   return <div>Loading...</div>;
  // }
  // transition: `${(scrolled>step1.from && scrolled <step1.to) || (scrolled > step2.from && scrolled < step2.to)?'all 1s ease':'none'
  
  // let Y =  finished?0:moves>=maxMoves?((svgHeight-visibleHeight)*0.97)*1:(moves*visibleHeight*factor - offset)
  let Y =  finished?0:moves>=maxMoves?((svgHeight-visibleHeight)*0.97)*1:(moves*visibleHeight*factor)
  // let Y =  0  
  return (
    
    // transition:scrolled===step1.at || scrolled===step2.at || scrolled===step3.at?'all ease 0.8s':'none'
    // style={{ transform: `translate(-50%, ${-Y}px)`, transition: 'all 1s ease'}}>
    // transform:`translate(-50%,-${moves<totalMoves?moves*visibleHeight*factor:svgHeight-visibleHeight}px)`
      <div id={`${svgHeight}`} ref={scrollDivRef} style={{...style, height: `${svgHeight}px`, transition: `${finished?'none':'all 0.7s ease'}` , transform: `translate(-50%,-${Y}px)`}} className={className} >
          {/* {console.log({...style, transform: `translate(-50%,-${moves>maxMoves?svgHeight-visibleHeight:moves*visibleHeight*factor }px)`})} */}
          {/* {console.log({ transform: `translate(-50%, ${-Y}px)`, transition: `${(scrolled>step1.from && scrolled <step1.to) || (scrolled > step2.from && scrolled < step2.to)?'all 1s ease':'none'}`}.transition)} */}
          {children}

      </div>

    )
}
