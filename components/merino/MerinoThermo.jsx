import React from 'react'
import GetPoint from './GetPoint'
import TextMerino from './TextMerino'
import PathMerino from './PathMerino'
import { useAppContext } from '../context/appContext'
export default function MerinoThermo({ fontSize, title, clicked, handleClick }) {
const {width} = useAppContext()
  return (
    <svg viewBox="0 0 1147 756" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="ThermoPoint">
        <GetPoint handleClick={handleClick} clicked={clicked}>
          <path d="M756.77 198.541C758.853 198.541 760.541 196.853 760.541 194.771C760.541 192.688 758.853 191 756.77 191C754.688 191 753 192.688 753 194.771C753 196.853 754.688 198.541 756.77 198.541Z" fill="white" />
          <path d="M756.535 207.103C763.476 207.103 769.103 201.476 769.103 194.535C769.103 187.594 763.476 181.967 756.535 181.967C749.594 181.967 743.967 187.594 743.967 194.535C743.967 201.476 749.594 207.103 756.535 207.103Z" stroke="white" strokeWidth="1.90136" />
        </GetPoint>
      </g>

      {width > 480 ? <><PathMerino clicked={clicked} d="M1051.5 103.5L845.461 103.5L757 195.046" stroke="url(#paint2_linear_608_13503)" strokeWidth="2.14452" />

        <TextMerino clicked={clicked}
          onClick={() => handleClick(!clicked)}
          id="Thermo" fill="white" fontFamily="Work Sans" fontSize={fontSize} fontWeight="300" letterSpacing="0em"><tspan x="875" y="93.8664">{title}</tspan></TextMerino>
        <linearGradient id="paint2_linear_608_13503" x1="904.25" y1="103.5" x2="1049.5" y2="103.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 1 }} />
          <stop offset="100%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 0 }} />
        </linearGradient></> :
        <>
          <PathMerino clicked={clicked} d="M992.039 103.5L801.5 103.5L757 195.046" stroke="url(#paint2_linear_635_13091)" strokeWidth="2.14452" />
          <TextMerino clicked={clicked}
            onClick={() => handleClick(!clicked)}
            id="Thermo" fill="white" fontFamily="Work Sans" fontSize={fontSize} fontWeight="300" letterSpacing="0em">
            <tspan x="792" y="93.8664">{title}</tspan></TextMerino>
          <linearGradient id="paint2_linear_635_13091" x1="874.519" y1="103.5" x2="992" y2="103.5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 1 }} />
            <stop offset="100%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 0 }} />
          </linearGradient>

        </>
      }

    </svg>


  )
}
