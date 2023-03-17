import React from 'react'
import { useAppContext } from '../context/appContext'
import DetailsPath from './DetailsPath'
import DetailsText from './DetailsText'


export default function DetailsSVGLuxe({ title, clicked, handleClick }) {

  const { width } = useAppContext()

  return (
    // <svg viewBox="0 0 1147 756" fill="none" xmlns="http://www.w3.org/2000/svg">  
    <g>
      {/* <GetPoint handleClick={handleClick} clicked={clicked}>
        <path d="M602.77 236.541C604.853 236.541 606.541 234.853 606.541 232.771C606.541 230.688 604.853 229 602.77 229C600.688 229 599 230.688 599 232.771C599 234.853 600.688 236.541 602.77 236.541Z" fill="#FFFAEA" />
        <path d="M602.535 245.103C609.476 245.103 615.103 239.476 615.103 232.535C615.103 225.594 609.476 219.967 602.535 219.967C595.594 219.967 589.967 225.594 589.967 232.535C589.967 239.476 595.594 245.103 602.535 245.103Z" stroke="#FFFAEA" strokeWidth="1.90136" />
      </GetPoint> */}

      {width > 420 ?
        <>
          <DetailsPath clicked={clicked} onClick={() => handleClick(!clicked)} id="path5147-0_2" d="M135.906 366.5H215.928L352 273.5" stroke="#FFFAEA" stroke-width="0.989183" />
          <DetailsText clicked={clicked}
            onClick={() => handleClick(!clicked)}
            id="text5604_2" fill="#FFFAEA" style="white-space: pre" font-family="Quicksand" letter-spacing="0em"><tspan x="20.2344" y="372.875">{title.split(' ')[0]}</tspan><tspan x="82.1729" y="403.875">{title.split(' ')[0]}</tspan>
          </DetailsText>
        </> :
        <>
          <DetailsPath clicked={clicked} onClick={() => handleClick(!clicked)} id="path5147-0_2" d="M135.906 366.5H215.928L352 273.5" stroke="#FFFAEA" stroke-width="0.989183" />
          <DetailsText clicked={clicked}
            onClick={() => handleClick(!clicked)}
            id="text5604_2" fill="#FFFAEA" style="white-space: pre" font-family="Quicksand" letter-spacing="0em"><tspan x="20.2344" y="372.875">Luxurious&#10;</tspan><tspan x="82.1729" y="403.875">Feel</tspan>
          </DetailsText>
        </>}







      {/* </svg>      */}
    </g>


  )
}
