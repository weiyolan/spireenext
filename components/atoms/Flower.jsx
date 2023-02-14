import React from 'react'
import { Path,AnimateIn,TextAnimate } from '@/utils/pathUtils'
const Flower = ({children, at, pos, handleLength}) => {
    
  return (
    <g>
        <Path strokeColor='#FFC7C7' animateFill={true} strokeWidth='1' position={pos} handleLength={(l, i) => handleLength(1, l, i)} {...children[0].props} />
        <Path strokeColor='#FFC7C7' animateFill={true} strokeWidth='1' position={pos+1} handleLength={(l, i) => handleLength(1, l, i)} {...children[1].props} />
        <Path strokeColor='#FFC7C7' animateFill={true} strokeWidth='1' position={pos+2} handleLength={(l, i) => handleLength(1, l, i)} {...children[2].props} />
        <AnimateIn at={at}>
            {children[3]}
            {children[4]}
            {children[5]}
            {children[6]}
        </AnimateIn>
    </g>
  )
}

export default Flower