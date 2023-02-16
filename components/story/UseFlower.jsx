import React from 'react'
import { Path, AnimateIn, TextAnimate } from '@/utils/pathUtils'

export default function UseFlower ({at, pos, useId, handleLength, transform}) {
  
  useId=['#Leaf1', '#Leaf2', '#Leaf3', '#FlowerFill1', '#FlowerFill2', '#FlowerStroke1', '#FlowerStroke2']; 
  
  return (
    
    <g  opacity={1} style={{ transformOrigin: "center", transformBox: 'fill-box'}} transform={transform}>
      {/* {console.log(useId)} */}

        <Path type='use' useId={useId[0]} fastErase={true} strokeColor='#FFC7C7' animateFill={true} strokeWidth='1' position={pos} handleLength={(l, i) => handleLength(1, l, i)} />
        {/* {...children[0].props} */}
        <Path type='use' useId={useId[1]} fastErase={true} strokeColor='#FFC7C7' animateFill={true} strokeWidth='1' position={pos+1} handleLength={(l, i) => handleLength(1, l, i)}/>
        <Path type='use' useId={useId[2]} fastErase={true} strokeColor='#FFC7C7' animateFill={true} strokeWidth='1' position={pos+1} handleLength={(l, i) => handleLength(1, l, i)}/>
        <AnimateIn at={at}>
          <use href={useId[3]}/>
          <use href={useId[4]}/>
          <use href={useId[5]}/>
          <use href={useId[6]}/>
        </AnimateIn>
    </g>
  )
}

// export default UseFlower