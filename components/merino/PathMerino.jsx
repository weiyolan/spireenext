import React from 'react'

export default function PathMerino({clicked, ...props}) {
  return (
    <path className={`transition-all duration-500 ${clicked ? 'opacity-1' : 'opacity-0'}`} 
    {...props}/>

  )
}
