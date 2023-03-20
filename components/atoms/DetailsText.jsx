import React, { useCallback } from 'react'

export default function DetailsText({ children, left, clicked, ...props }) {

  const getTextProps = useCallback((props) => {
    let newProps = { ...props }
    // newProps.fontFamily = 'newProps['font-family']'
    // newProps.fontSize = newProps['font-size']
    newProps.fontSize =25
    newProps.letterSpacing = newProps['letter-spacing']
    newProps.fontWeight = 300 
    // delete newProps['xml:space']
    delete newProps['font-family']
    delete newProps['font-size']
    delete newProps['letter-spacing']
    delete newProps['font-weight']
    delete newProps.children
    delete newProps.at
    delete newProps.print
    delete newProps.fromTop
    delete newProps.transform
    delete newProps.style
    // newProps.fill = '#171B4D'
    // newProps.fill = 'white'
    // console.log(newProps)
    return newProps
  }, [])


  return (
    <text
      className={`transition-all duration-200  cursor-pointer font-quick text-end 
    ${clicked ? '  scale-105 underline   ' : ' '}`}
      style={{ transformOrigin: "center", transformBox: 'fill-box', whiteSpace: "pre" }}
      {...getTextProps(props)}
    >
      {children}
    </text>
  )
}
