import React from 'react'
import { usePageContext } from '../context/pageContext'

export default function SpireeLogo ({className,style,fill}) {
  const{darkMode, normalColor}=usePageContext()
  return (
    <svg alt='Spirée Logo' className={className} style={style} viewBox="0 0 59 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Spiree" d="M53.5856 27.7041L37.5365 0.0561523L23.1675 24.81C20.6085 20.3821 18.016 15.9539 15.3334 12.2663C13.4814 9.7206 11.4937 7.34825 9.2791 5.60589C7.04674 3.84956 4.50925 2.67622 1.6 2.67622H0V9.50744H1.6C2.47281 9.50744 3.64103 9.94733 5.10405 11.1113C6.54653 12.259 8.12593 13.9928 9.78811 16.2776C12.3691 19.8254 14.973 24.3271 17.7046 29.0495C18.5277 30.4725 19.3625 31.9156 20.2116 33.3587L23.186 38.4137L37.5365 13.6922L47.6497 31.1136L47.652 31.1176L50.9538 36.8432H58.8562L53.5856 27.7041Z" fill={fill?fill:darkMode?"#FFFAEA":normalColor}/>
    </svg>
  )
}
