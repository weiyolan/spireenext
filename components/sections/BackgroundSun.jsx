import Image from "next/image";
import React, { useState, useEffect, useRef } from "react"
import { useAppContext } from "@/components/context/appContext"


export default function BackgroundSun ({src, moves, maxMoves}) {
//   const [myWidth, setMyWidth] = useState(0)
  let {height} = useAppContext()
  let backgroundRef = useRef(null)
  let [position, setPosition] = useState({x:0,y:0})
//   let x var(calc(var(${position.x}, 0) * 1px);)
//   let y calc(var(--posY, 0) * 1px);
//   let x = 50 + '%';
//   let y= 50+ '%';

  useEffect(()=>{

    function handlePosition(e) {
      const { currentTarget: el, clientX: x, clientY: y } = e;
      // console.log(el);
      // console.log(x, y);
      const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();

      // console.log(t, l, w, h)
      // console.log(x-l-w/2)
      setPosition({x: (x-l-w/2)/3, y: (y-t-h/2)/3})
    } 
    
    document.body.addEventListener("pointermove", handlePosition)
    // console.log('go')
      
    // handlePosition()
    
    return ()=>document.body.removeEventListener("pointermove", handlePosition)
  },[])



  return (
    <>
    <div ref={backgroundRef} className={`w-full absolute top-0 -z-10 h-[100vh] overflow-hidden `} style={{
        backgroundImage: `
        linear-gradient(115deg, rgb(211 255 215), rgb(0 0 0)), 
        radial-gradient( 90% 100% at calc( 50% + calc(${position.x} * 1px)) calc( 0% + calc(${position.y} * 1px)), rgb(0 200 200), rgb(022 000 045)),
        radial-gradient(100% 100% at calc( 80% - calc(${position.x} * 1px)) calc( 0% - calc(${position.y} * 1px)), rgb(000 255 255), rgb(036 000 000)), 
        radial-gradient(150% 210% at calc(100% + calc(${position.x} * 1px)) calc( 0% + calc(${position.y} * 1px)), rgb(000 153 255), rgb(184 009 009)), 
        radial-gradient(100% 100% at calc(100% - calc(${position.x} * 1px)) calc(30% - calc(${position.y} * 1px)), rgb(000 077 255), rgb(55 200 255)), 
        linear-gradient(60deg, rgb(255 000 000), rgb(255 92 0))`,
        backgroundBlendMode: `overlay, overlay, difference, difference, difference, normal`
    }} >



        
        {/* {console.log(`translate(-${Y}px,0)`)} */}
        {/* {src&&<Image alt='' fill src={src} className={`object-fill object-center`} sizes="100vw" quality={100}/>} */}
         {/* Empty ALT for purely decorative images */}
      {/* </div> */}
    </div>
    <div className={`w-full absolute top-0 -z-10 h-[100vh] bg-red-800/50 bg-blend-overlay`}> 
            <div style={{backgroundImage: `radial-gradient(circle at 0% 100% , rgb(255 153 000), rgb(184 009 009))`}} className='z-10 w-screen h-screen'  > HELLO </div>
    <Image alt='' src='/images/moon.png' className={`absolute animate-blob -right-80 -top-40 blur-[0]`} width={800} height={800}/>
    </div>
</>
  )
}

