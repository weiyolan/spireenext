import React, { useCallback } from 'react'

export default function DetailsPath({ clicked, ...props }) {

  const getChildProps = useCallback(() => {
    let childProps = { ...props };
    childProps.strokeWidth = childProps['stroke-width'];
    delete childProps.shadowSmall
    delete childProps['stroke-width']
    delete childProps.initialDash
    childProps.strokeWidth = props?.strokeWidth || '2'
    childProps.strokeLinejoin = "round"
    delete childProps['stroke-linejoin']
    childProps.strokeLinecap = "round"
    delete childProps['stroke-linecap']
    childProps.fillRule = childProps['fill-rule']
    delete childProps['fill-rule']
    childProps.clipRule = childProps['clip-rule']
    delete childProps['clip-rule']
    return childProps
  }, [props])

  return (
    <path className={`transition-all duration-500 ${clicked ? 'opacity-100' : 'opacity-80'}`}
      {...getChildProps()} />
  )
}
