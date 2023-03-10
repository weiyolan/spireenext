import React from 'react'
import GetPoint from './GetPoint'
import TextMerino from './TextMerino'
import PathMerino from './PathMerino'
import { useAppContext } from '../context/appContext'

export default function MerinoNatural({ fontSize, title, clicked, handleClick }) {
  let x1 = 520.627
  let x2 = 399
  const { width } = useAppContext()

  // let [myState,setMyState] = useState(clicked)

  // useEffect(() => {
  //   if 

  //   return () => {
  //     second
  //   }
  // }, [clicked])


  return (
    // <svg viewBox="0 0 1147 756" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <g id="NaturalPoint">

        <GetPoint handleClick={handleClick} clicked={clicked}>
          {/* <path d="M641.774 164.716C643.857 164.716 645.545 163.028 645.545 160.946C645.545 158.863 643.857 157.175 641.774 157.175C639.692 157.175 638.004 158.863 638.004 160.946C638.004 163.028 639.692 164.716 641.774 164.716Z" fill="transparent" /> */}
          <path d="M641.774 164.716C643.857 164.716 645.545 163.028 645.545 160.946C645.545 158.863 643.857 157.175 641.774 157.175C639.692 157.175 638.004 158.863 638.004 160.946C638.004 163.028 639.692 164.716 641.774 164.716Z" fill="white" />
          <path d="M641.535 173.103C648.476 173.103 654.103 167.476 654.103 160.535C654.103 153.594 648.476 147.967 641.535 147.967C634.594 147.967 628.967 153.594 628.967 160.535C628.967 167.476 634.594 173.103 641.535 173.103Z" stroke="white" strokeWidth="1.90136" />
        </GetPoint>
      </g>
      {width > 480 ? <><PathMerino clicked={clicked} d="M399 69H522.26L642.255 161.083" stroke="url(#paint4_linear_608_13503)" strokeWidth="2.14452" />

        <TextMerino clicked={clicked}
          onClick={() => handleClick(!clicked)}
          id="Natural" fill="white"  fontSize={fontSize} fontWeight="300" letterSpacing="0em">
          <tspan x="399" y="58.8664">{title}</tspan></TextMerino>
        <linearGradient id="paint4_linear_608_13503" x1={`${x1}`} y1="69" x2={`${x2}`} y2="69" gradientUnits="userSpaceOnUse">
          <stop offset="0%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 1 }} />
          <stop offset={'100%'} style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 0 }} />

        </linearGradient></> : <>
        <PathMerino clicked={clicked} d="M437.74 69 H561L642.255 161.083" stroke="url(#paint4_linear_635_13091)" strokeWidth="2.14452" />
        <TextMerino clicked={clicked}
          onClick={() => handleClick(!clicked)} id="Natural" fill="white"  fontSize={fontSize} fontWeight="300" letterSpacing="0em">
          <tspan x="438" y="58.8664">Natural</tspan></TextMerino>

        <linearGradient id="paint4_linear_635_13091" x1="539.997" y1="69" x2="438" y2="69" gradientUnits="userSpaceOnUse">
          <stop offset="0%" style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 1 }} />
          <stop offset={'100%'} style={{ 'stopColor': '#FFFFFF', 'stopOpacity': 0 }} />
        </linearGradient></>}

    </g>
    // </svg>


  )
}
