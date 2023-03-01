import React from 'react'
import GetPoint from './GetPoint'
import TextMerino from './TextMerino'
import PathMerino from './PathMerino'
import { useAppContext } from '../context/appContext'
export default function MerinoOdour({ fontSize, title, clicked, handleClick }) {

  const { width } = useAppContext()

  return (
    // <svg viewBox="0 0 1147 756" fill="none" xmlns="http://www.w3.org/2000/svg">  
    <g>

      {/* <g id="OdourPoint" fill='transparent'
      className='cursor-pointer transition-all'
        tabIndex={0}
        onClick={() => handleClick(!clicked)}
        onKeyDown={(e) => { if (e.code === 'Enter') { handleClick(!clicked) } }}
      >
      </g> */}

      <GetPoint handleClick={handleClick} clicked={clicked}>
        <path d="M602.77 236.541C604.853 236.541 606.541 234.853 606.541 232.771C606.541 230.688 604.853 229 602.77 229C600.688 229 599 230.688 599 232.771C599 234.853 600.688 236.541 602.77 236.541Z" fill="white" />
        <path d="M602.535 245.103C609.476 245.103 615.103 239.476 615.103 232.535C615.103 225.594 609.476 219.967 602.535 219.967C595.594 219.967 589.967 225.594 589.967 232.535C589.967 239.476 595.594 245.103 602.535 245.103Z" stroke="white" strokeWidth="1.90136" />
      </GetPoint>

      {width > 420 ? <><PathMerino clicked={clicked} d={`${"M291 306.5 H472 L603 233"}`} stroke="url(#paint0_linear_608_13503)" strokeWidth="2.14452" />
        <TextMerino clicked={clicked}
          onClick={() => handleClick(!clicked)}
          id="Odour" fill="white" fontFamily="Work Sans" fontSize={fontSize} fontWeight="300" letterSpacing="0em"><tspan x="289" y="298.866">{title}</tspan></TextMerino>
        <linearGradient id="paint0_linear_608_13503" x1="447" y1="306.5" x2="291" y2="306.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 1 }} />
          <stop offset="100%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 0 }} />
        </linearGradient>
      </> :
        <>
          <PathMerino clicked={clicked} d="M402 308H564L603 233" stroke="url(#paint0_linear_635_13091)" strokeWidth="2.14452" />
          <TextMerino clicked={clicked}
            onClick={() => handleClick(!clicked)} 
            id="Odour" fill="white" fontFamily="Work Sans" fontSize={fontSize} fontWeight="300" letterSpacing="0em">
              <tspan x="400" y="335">{title}</tspan></TextMerino>

          <linearGradient id="paint0_linear_635_13091" x1="566" y1="307" x2="402" y2="307" gradientUnits="userSpaceOnUse">
            <stop offset="0%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 1 }} />
            <stop offset="100%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 0 }} />
          </linearGradient>

        </>}







      {/* </svg>      */}
    </g>


  )
}
