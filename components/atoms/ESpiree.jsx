import React from 'react'
import { usePageContext } from '../context/pageContext'

const ESpiree = ({className, fill, ...props}) => {
    const {darkMode} = usePageContext()

  return (
    <span  className='inline-flex w-fit' {...props}  >
        <svg className={className} viewBox="0 0 39 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="ESpiree" d="M27.8972 6.07723L0.249268 22.1264L25.0031 36.4953C20.5752 39.0544 16.147 41.6468 12.4594 44.3295C9.91372 46.1815 7.54137 48.1692 5.799 50.3838C4.04268 52.6161 2.86934 55.1536 2.86934 58.0629V59.6629H9.70056V58.0629C9.70056 57.1901 10.1405 56.0218 11.3044 54.5588C12.4521 53.1163 14.1859 51.5369 16.4707 49.8748C20.0185 47.2938 24.5202 44.6899 29.2426 41.9583C30.6656 41.1352 32.1088 40.3004 33.5518 39.4512L38.6069 36.4769L13.8853 22.1263L31.3067 12.0132L31.3107 12.0109L37.0363 8.7091V0.806641L27.8972 6.07723Z" fill={darkMode?fill?fill:'white':'black'}/>
        </svg>
    </span>
  )
}

export default ESpiree