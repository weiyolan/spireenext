import React from 'react'
import { Path, AnimateIn, TextAnimate } from '@/utils/pathUtils'
import { usePageContext } from '../context/pageContext';
import { useAppContext } from '../context/appContext';

export default function UseFlower ({at, pos, useId, handleLength, lengthFactor, transform}) {
  let {mobile, finished} = usePageContext();
  let {scrolled} = useAppContext();

  useId=['#Leaf1', '#Leaf2', '#Leaf3', '#FlowerFill1', '#FlowerFill2', '#FlowerStroke1', '#FlowerStroke2']; 
  
  return (
    
    <g  opacity={1} style={{ transformOrigin: "center", transformBox: 'fill-box'}} transform={transform}>
      {/* {console.log(useId)} */}

        <Path key={at +mobile?'-mobile1':'-desktop1' } type='use' useId={useId[0]} fastErase={true} opacity={finished?1:scrolled<at?0:1} strokeColor={`#FFC7C7`} animateFill={true} strokeWidth='1' position={pos} handleLength={(l, i) => handleLength(1, l, i)} />
        {/* {...children[0].props} */}
        <Path key={at +mobile?'-mobile2':'-desktop2' } type='use' useId={useId[1]} fastErase={true} opacity={finished?1:scrolled<at?0:1} strokeColor={`#FFC7C7`} animateFill={true} strokeWidth='1' position={pos+1} handleLength={(l, i) => handleLength(lengthFactor===undefined?1:lengthFactor, l, i)}/>
        <Path key={at + mobile?'-mobile3':'-desktop3'} type='use' useId={useId[2]} fastErase={true} opacity={finished?1:scrolled<at?0:1} strokeColor={`#FFC7C7`} animateFill={true} strokeWidth='1' position={pos+1} handleLength={(l, i) => handleLength(lengthFactor===undefined?1:lengthFactor, l, i)}/>
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