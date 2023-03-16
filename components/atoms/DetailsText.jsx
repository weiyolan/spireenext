import React, { useCallback } from 'react'

export default function DetailsText({ children, clicked, ...props }) {

  const getTextProps = useCallback((props) => {
    let newProps = { ...props }
    newProps.fontFamily = newProps['font-family']
    newProps.fontSize = newProps['font-size']
    newProps.letterSpacing = newProps['letter-spacing']
    newProps.fontWeight = newProps['font-weight']
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
    // newProps.fill = '#171B4D'
    newProps.fill = 'white'
    // console.log(newProps)
    return newProps
  }, [])


  return (
    <text
      className={`font-sans transition-all duration-500  cursor-pointer
    ${clicked ? ' transition-all' : 'select-none cursor-default translate-x-5'}`}
      style={{ transformOrigin: "center", transformBox: 'fill-box', whiteSpace: "pre" }}
      {...getTextProps()}
    >
      {children}
    </text>
  )
}
