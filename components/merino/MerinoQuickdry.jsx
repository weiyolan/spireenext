import React from 'react'
import GetPoint from './GetPoint'
import TextMerino from './TextMerino'
import PathMerino from './PathMerino'
import { useAppContext } from '../context/appContext'
export default function MerinoQuickdry({ fontSize, title, clicked, handleClick }) {
  const {width} = useAppContext()
  return (
    <svg viewBox="0 0 1147 756" fill="none" xmlns="http://www.w3.org/2000/svg">

      <g id="QuickdryPoint">
        <GetPoint handleClick={handleClick} clicked={clicked}>
          <path d="M723.77 275.541C725.853 275.541 727.541 273.853 727.541 271.771C727.541 269.688 725.853 268 723.77 268C721.688 268 720 269.688 720 271.771C720 273.853 721.688 275.541 723.77 275.541Z" fill="white" />
          <path d="M723.535 284.103C730.476 284.103 736.103 278.476 736.103 271.535C736.103 264.594 730.476 258.967 723.535 258.967C716.594 258.967 710.967 264.594 710.967 271.535C710.967 278.476 716.594 284.103 723.535 284.103Z" stroke="white" strokeWidth="1.90136" />
        </GetPoint>
      </g>


      {width > 480 ? <>    <g id="QuickdryPath" >
        <PathMerino clicked={clicked} d="M979 203H863.93L724 272.161" stroke="url(#paint1_linear_608_13503)" strokeWidth="2.14452" />
      </g>

        <TextMerino clicked={clicked}
          onClick={() => handleClick(!clicked)}
          id='quickdry' fill="white"
          fontFamily="Work Sans" fontSize={fontSize} fontWeight="300" letterSpacing="0em">
          <tspan x="889" y="192.866">{title}</tspan></TextMerino>

        <linearGradient id="paint1_linear_608_13503" x1="881" y1="203" x2="979" y2="203" gradientUnits="userSpaceOnUse">
          <stop offset="0%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 1 }} />
          <stop offset="100%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 0 }} />
        </linearGradient></> :
        <>

            <PathMerino clicked={clicked} d="M949.5 197H834.43L724 272.161" stroke="url(#paint1_linear_635_13091)" strokeWidth="2.14452" />
          <TextMerino clicked={clicked}
            onClick={() => handleClick(!clicked)} id="Quickdry" fill="white" fontFamily="Work Sans" fontSize={fontSize} fontWeight="300" letterSpacing="0em">
            <tspan x="864" y="187.866">{title}</tspan></TextMerino>
            <linearGradient id="paint1_linear_635_13091" x1="856.5" y1="272.161" x2="951" y2="272.161" gradientUnits="userSpaceOnUse">
            <stop offset="0%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 1 }} />
          <stop offset="100%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 0 }} />
</linearGradient>

        </>
      }

    </svg>


  )
}
