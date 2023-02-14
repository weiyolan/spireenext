import React from 'react'

const FadeDiv = ({children, className, type, amount}) => {
  let fadeStyleDefault = {
    'maskImage': `linear-gradient(to bottom, transparent, black ${amount}%, black ${100-amount}%, transparent)`,
    'maskSize': '100% 100%',
    'WebkitMaskImage':`linear-gradient(to bottom, transparent, black ${amount}%, black ${100-amount}%, transparent)`,
    'maskPosition': '0 0',
    'maskRepeat': 'no-repeat',
  }

  let fadeStyleTop = {
    'maskImage': `linear-gradient(to bottom, transparent, black ${amount}%, black ${100}%)`,
    'maskSize': '100% 100%',
    'WebkitMaskImage':`linear-gradient(to bottom, transparent, black ${amount}%, black ${100}%)`,
    'maskPosition': '0 0',
    'maskRepeat': 'no-repeat',
  }

  let fadeStyleBottom = {
    'maskImage': `linear-gradient(to bottom,black ${100}%, black ${100-amount}%, transparent)`,
    'maskSize': '100% 100%',
    'WebkitMaskImage':`linear-gradient(to bottom, black ${100}%, black ${100-amount}%, transparent)`,
    'maskPosition': '0 0',
    'maskRepeat': 'no-repeat',
  }

  function getFadeStyle (type) {
    switch (type) {
      case 'top' :
        return fadeStyleTop
    case 'bottom' :
        return fadeStyleBottom
    default: 
      return fadeStyleDefault
    }
  }

  return (
    <div style={getFadeStyle(type)} className={className}>
      {children}
    </div>
  )
}

export default FadeDiv