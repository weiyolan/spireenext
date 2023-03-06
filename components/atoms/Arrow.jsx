import React,{useState} from 'react'

export default function Arrow({ up, left, right, className , handleClick, disable}) {

  let [hovering, setHovering] = useState(false)


    return (
      <svg transform={`${left?'rotate(-90)':right?'rotate(90)':up?'':'rotate(180)'}`} style={{ transformOrigin: "center", transformBox: 'fill-box'}} key={`${left?'arrowLeft':right?'arrowRight':up?'arrowUp':'arrowDown'}`}  onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} onClick={handleClick} className={'transition-all duration-500 ' + className} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path key={`${left?'arrowLeft':right?'arrowRight':up?'arrowUp':'arrowDown'}`} className={'transition-all duration-500 '} d={(hovering && !disable)?"M0 19H0.45815C2.01418 19 3.38958 18.3861 4.63096 17.4275C5.8673 16.4728 6.99243 15.1598 8.06006 13.7194C9.68526 11.5267 11.2554 8.86673 12.8257 6.20635C12.8838 6.10792 12.9419 6.00949 13 5.91108C13.0581 6.0095 13.1162 6.10794 13.1743 6.20638C14.7447 8.86675 16.3147 11.5267 17.9399 13.7194C19.0076 15.1598 20.1327 16.4728 21.369 17.4275C22.6104 18.3861 23.9858 19 25.5418 19L26 19V16.0338H25.5418C24.8832 16.0338 24.102 15.713 23.2122 15.0182C22.3284 14.3281 21.3818 13.3031 20.4015 11.9805C18.8853 9.93488 17.3541 7.33663 15.7637 4.63773C15.2873 3.82932 14.8055 3.01187 14.3173 2.19755L13 -2.10953e-07L11.6827 2.19752C11.1945 3.01186 10.7127 3.82932 10.2363 4.63774C8.64588 7.33664 7.11474 9.93488 5.59854 11.9805C4.61827 13.3031 3.67159 14.3281 2.78781 15.0182C1.89805 15.713 1.11685 16.0338 0.45815 16.0338H0L0 19Z":"M23.4345 18.6635L22.1058 16.3814L22.1048 16.3798L12.648 -1.09444e-06L3.00698 16.6988L0.136801 21.7026L3.93221 21.7026L5.86037 18.3408L12.648 6.5847L21.3763 21.7024L25.167 21.7024L23.4345 18.6635Z"} fill="black" />
      </svg>
    )
  // } else {
  //   return (
  //     <svg transform={`${right?'rotate(-90)':''}`} style={{ transformOrigin: "center", transformBox: 'fill-box'}} key='arrowD' onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} onClick={handleClick} className={'transition-all duration-500 ' + className} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <path key='arrowDown' className={'transition-all duration-500 '} d={(hovering && !disable)?"M0 3H0.45815C2.01418 3 3.38958 3.61388 4.63096 4.57249C5.8673 5.52721 6.99243 6.84019 8.06006 8.28062C9.68526 10.4733 11.2554 13.1333 12.8257 15.7937C12.8838 15.8921 12.9419 15.9905 13 16.0889C13.0581 15.9905 13.1162 15.8921 13.1743 15.7936C14.7447 13.1332 16.3147 10.4733 17.9399 8.28062C19.0076 6.84019 20.1327 5.52721 21.369 4.57249C22.6104 3.61388 23.9858 3 25.5418 3H26V5.96624H25.5418C24.8832 5.96624 24.102 6.28699 23.2122 6.9818C22.3284 7.67193 21.3818 8.69694 20.4015 10.0195C18.8853 12.0651 17.3541 14.6634 15.7637 17.3623C15.2873 18.1707 14.8055 18.9881 14.3173 19.8025L13 22L11.6827 19.8025C11.1945 18.9881 10.7127 18.1707 10.2363 17.3623C8.64588 14.6634 7.11474 12.0651 5.59854 10.0195C4.61827 8.69695 3.67159 7.67193 2.78781 6.9818C1.89805 6.28699 1.11685 5.96624 0.45815 5.96624H0L0 3Z":"M1.86925 3.03966L3.198 5.3217L3.19892 5.32329L12.6557 21.7031L22.2968 5.0043L25.167 0.000484467H21.3716L19.4434 3.36228L12.6557 15.1184L3.92744 0.000762939H0.13678L1.86925 3.03966Z"} fill="black" />
      
  //     </svg>)

  // }
}
