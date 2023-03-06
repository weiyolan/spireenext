import React from 'react'

export default function SubTitleAnimate({text}) {
  return (
    <h2 className={`font-sans indent-1 inline-flex font-semibold tracking-max uppercase 
    text-3xl md:text-5xl text-inherit`}>
          {text}
          </h2>
  )
}
