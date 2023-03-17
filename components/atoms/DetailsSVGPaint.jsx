import React from 'react'
import { useAppContext } from '../context/appContext'
import DetailsPath from './DetailsPath'
import DetailsText from './DetailsText'


export default function DetailsSVGPaint({ title, clicked, handleClick }) {

  const { width } = useAppContext()

  return (
    // <svg viewBox="0 0 1147 756" fill="none" xmlns="http://www.w3.org/2000/svg">  
    <g id="Paint">

      {width > 420 ?
        <>

          <DetailsText clicked={clicked} onClick={() => handleClick(!clicked)}id="text5604_2" fill="#FFFAEA" style="white-space: pre" font-family="Quicksand" font-size="25" letter-spacing="0em"><tspan x="95" y="290.875">Quality paint</tspan></DetailsText>
          <DetailsPath clicked={clicked}
            onClick={() => handleClick(!clicked)} id="path5147-0_2" d="M250.417 282.746H330.057L457.806 360.638" stroke="#FFFAEA" stroke-width="0.989183"/>

        </> :
        <>
          <DetailsText clicked={clicked} onClick={() => handleClick(!clicked)} id="text5604_2" fill="#FFFAEA" style="white-space: pre" font-family="Quicksand" font-size="25" letter-spacing="0em"><tspan x="95" y="290.875">Quality paint</tspan></DetailsText>
          <DetailsPath clicked={clicked}
            onClick={() => handleClick(!clicked)} id="path5147-0_2" d="M250.417 282.746H330.057L457.806 360.638" stroke="#FFFAEA" stroke-width="0.989183"/>

        </>}


      {/* </svg>      */}
    </g>


  )
}
