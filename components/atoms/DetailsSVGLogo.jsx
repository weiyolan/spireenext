import React from 'react'
import { useAppContext } from '../context/appContext'
import DetailsPath from './DetailsPath'
import DetailsText from './DetailsText'


export default function DetailsSVGLogo({ title, clicked, handleClick }) {

  const { width } = useAppContext()

  return (
    // <svg viewBox="0 0 1147 756" fill="none" xmlns="http://www.w3.org/2000/svg">  
    <g id="Logo">

      {width > 420 ?
        <>

          <DetailsPath clicked={clicked}
            onClick={() => handleClick(!clicked)} id="path5627_2" d="M793.057 401H725.674L655 441.82" stroke="#FFFAEA" stroke-width="0.989183"/>
          <DetailsText clicked={clicked} onClick={() => handleClick(!clicked)} id="text5604_3" fill="#FFFAEA" style="white-space: pre" font-family="Quicksand" font-size="25" letter-spacing="0em"><tspan x="799" y="411.875">Minimal Logo</tspan></DetailsText>

        </> :
        <>
          <DetailsPath clicked={clicked}
            onClick={() => handleClick(!clicked)} id="path5627_2" d="M793.057 401H725.674L655 441.82" stroke="#FFFAEA" stroke-width="0.989183"/>
          <DetailsText onClick={() => handleClick(!clicked)} clicked={clicked} id="text5604_3" fill="#FFFAEA" style="white-space: pre" font-family="Quicksand" font-size="25" letter-spacing="0em"><tspan x="799" y="411.875">Minimal Logo</tspan></DetailsText>

        </>}

    </g>


  )
}
