import React from 'react'
import GetPoint from './GetPoint'
import TextMerino from './TextMerino'
import PathMerino from './PathMerino'
import { useAppContext } from '../context/appContext'

export default function MerinoSkin({ fontSize, title, clicked, handleClick }) {
  const { width } = useAppContext()

  return (
    <svg viewBox="0 0 1147 756" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="2ndSkinPoint">
        <GetPoint handleClick={handleClick} clicked={clicked}>
          <path d="M782.77 337.541C784.853 337.541 786.541 335.853 786.541 333.771C786.541 331.688 784.853 330 782.77 330C780.688 330 779 331.688 779 333.771C779 335.853 780.688 337.541 782.77 337.541Z" fill="#FFFAEA" />
          <path d="M782.535 346.103C789.476 346.103 795.103 340.476 795.103 333.535C795.103 326.594 789.476 320.967 782.535 320.967C775.594 320.967 769.967 326.594 769.967 333.535C769.967 340.476 775.594 346.103 782.535 346.103Z" stroke="#FFFAEA" strokeWidth="1.90136" />
        </GetPoint>
      </g>
      {width > 480 ? <>
        <PathMerino clicked={clicked} d="M1050.5 371.5H855.5L783 334" stroke="url(#paint3_linear_608_13503)" strokeWidth="2.14452" />
        {/* <PathMerino clicked={clicked} d="M1090.5 371.5H855.5L783 334" stroke="url(#paint3_linear_608_13503)" strokeWidth="2.14452" /> */}

        <TextMerino clicked={clicked}
          onClick={() => handleClick(!clicked)}
          id="2ndSkin" fill="#FFFAEA" fontSize={fontSize} fontWeight="300" letterSpacing="0em"><tspan x="899" y="362.866">{title}</tspan></TextMerino>


        <linearGradient id="paint3_linear_608_13503" x1="936.75" y1="371.5" x2="1050.5" y2="371.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" style={{ 'stopColor': '#FFFAEA', 'stopOpacity': 1 }} />
          <stop offset="100%" style={{ 'stopColor': '#FFFAEA', 'stopOpacity': 0 }} />
        </linearGradient></> : <>
        <PathMerino clicked={clicked} d="M987 282.5H843.5L783 334" stroke="url(#paint3_linear_635_13091)" strokeWidth="2.14452" />
        <TextMerino clicked={clicked}
          onClick={() => handleClick(!clicked)} id="2ndSkin" fill="#FFFAEA" fontSize={fontSize} fontWeight="300" letterSpacing="0em">
          <tspan x="850" y="273.866">{title}</tspan></TextMerino>
        <linearGradient id="paint3_linear_635_13091" x1="870" y1="334" x2="987" y2="334" gradientUnits="userSpaceOnUse">
        <stop offset="0%" style={{ 'stopColor': '#FFFAEA', 'stopOpacity': 1 }} />
          <stop offset="100%" style={{ 'stopColor': '#FFFAEA', 'stopOpacity': 0 }} />
        </linearGradient>
      </>}

    </svg>


  )
}
