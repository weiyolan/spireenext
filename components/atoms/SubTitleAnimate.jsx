import React from 'react'

export default function SubTitleAnimate({text}) {
  return (
    <h2 className={`font-sans inline-flex font-bold tracking-max uppercase 
    whitespace-pre  
    text-4xl md:text-5xl text-black`}>
          {text}
          </h2>
  )
}
