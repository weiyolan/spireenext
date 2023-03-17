import React from 'react'
import { useAppContext } from '../context/appContext'
import DetailsPath from './DetailsPath'
import DetailsText from './DetailsText'


export default function DetailsSVGPattern({ title, clicked, handleClick }) {

  const { width } = useAppContext()

  return (
    // <svg viewBox="0 0 1147 756" fill="none" xmlns="http://www.w3.org/2000/svg">  
    <g id="Pattern">

      {width > 420 ?
        <>
          <DetailsText onClick={() => handleClick(!clicked)} clicked={clicked} id="text5604" fill="#FFFAEA" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="730" y="169.875">Unique Color Pattern</tspan></DetailsText>
          <DetailsPath clicked={clicked} onClick={() => handleClick(!clicked)} id="path5147-0" d="M723.537 158H656.153L530 216.221" stroke="#FFFAEA" stroke-width="0.989183"/>
        </> :
        <>
          <DetailsText onClick={() => handleClick(!clicked)} clicked={clicked} id="text5604" fill="#FFFAEA" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="730" y="169.875">Unique Color Pattern</tspan></DetailsText>
          <DetailsPath clicked={clicked} onClick={() => handleClick(!clicked)} id="path5147-0" d="M723.537 158H656.153L530 216.221" stroke="#FFFAEA" stroke-width="0.989183"/>

        </>}

    </g>


  )
}
