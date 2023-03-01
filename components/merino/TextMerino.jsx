import React from 'react'

export default function TextMerino({children, clicked, ...props}) {
  return (
    <text 
    className={`transition-all duration-500 ${clicked ? 'cursor-pointer transition-all opacity-1' : 'select-none cursor-default opacity-0 translate-x-5'}`} 
    style={{ transformOrigin: "center", transformBox: 'fill-box', whiteSpace: "pre" }} 
    {...props}
        >
      {children}
    </text>
  )
}
