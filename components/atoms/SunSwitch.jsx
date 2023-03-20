import React from 'react'
import { usePageContext } from '../context/pageContext'

export default function SunSwitch({ handleClick, className }) {
  const {sun, pageMobile} = usePageContext()
  return (
    <div className='fixed top-3.5 right-12 md:top-0  w-6 h-6 md:right-20 md:w-10 md:h-10 md:mt-4 shadow-lg  hover:shadow-xl  rounded-full transition-all duration-300 hover:scale-105 hover:bg-black/30'>
      <svg onClick={handleClick} className={`sticky drop-shadow-2xl top-48 self-start cursor-pointer ${className}`} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"> 
        <path strokeWidth={5}  style={{ transformOrigin: "center", transformBox: 'fill-box'}}  className={`sticky duration-[2.5s]  ${sun ? 'opacity-100 translate-x-[3px] translate-y-[3px]' : 'opacity-0 scale-50'}`} d="M72.5661 37C72.5661 56.6426 56.6426 72.5661 37 72.5661C17.3574 72.5661 1.43395 56.6426 1.43395 37C1.43395 17.3574 17.3574 1.43395 37 1.43395C56.6426 1.43395 72.5661 17.3574 72.5661 37Z" stroke="#FFFAEA" />
        <path stroke="#FFFAEA" strokeWidth={pageMobile?4:3 } style={{ transformOrigin: "center", transformBox: 'fill-box'}}  className={`sticky duration-[2.5s]  ${sun ? 'opacity-0 rotate-90 -translate-y-2 translate-x-4 scale-90' : ' translate-y-[3px] translate-x-[3px] opacity-100'}`} fillRule="evenodd" clipRule="evenodd" d="M48.8877 71.0067C46.8915 71.5626 44.8455 71.9462 42.772 72.1504C37.6836 72.6516 32.5468 72.0607 27.7051 70.4171C22.8635 68.7736 18.4284 66.1154 14.6966 62.6202C10.9648 59.1249 8.0222 54.8733 6.06553 50.1495C4.10886 45.4256 3.18322 40.3385 3.35051 35.2282C3.5178 30.1179 4.77416 25.1023 7.03559 20.5165C9.29702 15.9308 12.5114 11.8807 16.4638 8.63702C18.0744 7.31524 19.7924 6.13979 21.5971 5.12134C23.9309 3.80423 26.4096 2.74972 28.9882 1.98093C29.0053 1.97583 29.0222 1.97034 29.0388 1.96445C29.5397 1.78718 29.8334 1.25604 29.6945 0.737582C29.551 0.201907 28.9999 -0.117305 28.4683 0.0403588C28.4503 0.04568 28.4324 0.0510144 28.4144 0.0563618C25.9517 0.7906 23.5753 1.77165 21.3203 2.98145C21.1481 3.07385 20.9766 3.16758 20.8058 3.26263C18.8287 4.36305 16.9486 5.6412 15.1898 7.0846C11.0164 10.5096 7.62229 14.7862 5.23442 19.6283C2.84655 24.4704 1.51995 29.7665 1.34331 35.1625C1.16666 40.5585 2.14405 45.9301 4.21012 50.918C6.27619 55.9059 9.38333 60.3953 13.3238 64.0859C17.2642 67.7766 21.9472 70.5834 27.0596 72.3188C32.172 74.0543 37.5959 74.6782 42.9688 74.149C45.2331 73.926 47.4663 73.5004 49.6425 72.8805C49.8305 72.8269 50.018 72.7719 50.2051 72.7155C52.6551 71.9764 55.0292 70.9897 57.2898 69.7675C57.3062 69.7586 57.3227 69.7497 57.3391 69.7408C57.8266 69.4763 57.9905 68.8609 57.7132 68.3807C57.4449 67.9158 56.8616 67.748 56.382 67.9768C56.3661 67.9844 56.3503 67.9924 56.3346 68.0009C53.9677 69.2806 51.4693 70.2877 48.8877 71.0067Z" fill="#FFFAEA" />
      </svg>

    </div>
  )
}
