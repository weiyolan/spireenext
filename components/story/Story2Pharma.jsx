import React, {useState,useEffect} from "react"
import { useAppContext } from "@context/appContext"
import { Path, TextAnimate} from '@utils/pathUtils'
import { SVGWrapper } from "./contextSVG"
import { usePageContext } from "../context/pageContext"

export default function Story2Pharma({scrollMin,scrollMax, speed}) {
    let [allLengths, setAllLengths] = useState([])
    let [allOffsetLengths, setAllOffsetLengths] = useState([])
    let [allRatios, setAllRatios] = useState([0])
    let [allPrevRatios, setAllPrevRatios] = useState([0])
    let { scrolled, locale } = useAppContext();
    let {svgWidth} = usePageContext()

    let [fakeScroll1,setFakeScroll1] = useState(0)
    // // let [fillStyle1,setFillStyle1] = useState(false)
    // // let [strokeColor1, setStrokeColor1] = useState('#fff')

    // let [fakeScroll2,setFakeScroll2] = useState(0)
    // let [fillStyle2,setFillStyle2] = useState(false)
    // let [strokeColor2, setStrokeColor2] = useState('#fff')

    function handleLength(f, newLength, position) {
      setAllLengths(prevLengths => {
        let copyLengths = [...prevLengths];
        copyLengths[position]=newLength;
        return copyLengths
      })
      setAllOffsetLengths(prevOffsets => {
        let copyOffsetLengths = [...prevOffsets];
          copyOffsetLengths[position] = newLength * f;
          return copyOffsetLengths
      })
    }
  
    useEffect(() => {
      if (allLengths.length > 0) {
        let totOffsetLength = allOffsetLengths.reduce((x, y) => x + y);
        let allRatios = allLengths.map(itemLength => itemLength / totOffsetLength);
        let newPrevRatios = allLengths.map((itemLength, index) => {
          let prevOffsetLength = allOffsetLengths.reduce((acc, y, i) => {
            return (i < index ? acc + y : acc)
          }, 0);
          return prevOffsetLength / totOffsetLength
        })
  
        setAllRatios(allRatios)
        setAllPrevRatios(newPrevRatios)
      }
    }, [allLengths, allOffsetLengths])

    useEffect(()=>{
      let timer = setTimeout(()=>{setFakeScroll1(1)},2000)
        // let timer2 = setTimeout(()=>{setFillStyle(true)},2000)
      // let timer2 = setTimeout(()=>{setFakeScroll2(1)},1200)
      // let timer3 = setTimeout(()=>{setFillStyle2(true);setStrokeColor2('transparent')},3200)
      return ()=>{
        clearTimeout(timer)
        // clearTimeout(timer2)
        // clearTimeout(timer3)
      }
    },[])

    return (
      <SVGWrapper myRatio={allRatios} prevRatio={allPrevRatios} scrollMin={scrollMin} scrollMax={scrollMax} animationSpeed={speed}>
        {/* <div className='fixed w-full top-[140px] left-1/2 -translate-x-1/2'>  */}
  
        {/* <svg alt='Roadmap title' style={{transform: `translate(-50%, ${!fakeScroll?20:-20}px)`, transition:'all 4s ease-out'}}  className='relative w-full px-4 left-1/2' viewBox="0 0 807 160" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
        <svg alt='Story Part 2, a medical staff caduceus illustrating Astrids doctorate in pharmacy' style={{transform: `translate(-50%, ${-0*scrolled}px)`}} viewBox="0 0 1468 2328" fill="none" xmlns="http://www.w3.org/2000/svg"
          className={`absolute ${svgWidth} left-1/2`}>

            <Path drawDuration='1' position={0} scrolled={fakeScroll1} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="fromAstrid1" d="M574 511.623C586.334 521.557 623.44 552.279 669.003 543.413" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <Path drawDuration='0.5' position={0} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="fromAstrid1" d="M574 511.623C586.334 521.557 623.44 552.279 669.003 543.413" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <Path drawDuration='1' position={1} inverse={false} double={1} handleLength={(l,i)=>handleLength(1,l,i)} id="fromAstrid2" d="M669.003 543.413C717.504 533.975 693.503 479.833 747.005 469.402C800.506 458.971 819.507 513.113 874.508 497.715C929.51 482.317 948.5 444.5 948.5 397" stroke="white" stroke-width="2" stroke-linecap="round"/>

            <Path drawDuration='2' animateFill={true} fastErase={true} animateStroke={true} id='Snake' position={5} inverse={false} handleLength={(l,i)=>handleLength(1,l,i)} d="M938.948 349.549C935.312 347.973 931.059 346.183 929.551 342.482C928.337 338.075 933.09 334.469 937.463 334.073C941.158 333.389 944.526 336.798 944.212 340.037C943.076 341.412 941.053 340.022 939.82 339.381C938.471 338.245 936.291 337.59 934.879 339.01C932.937 340.566 934.206 343.327 936.333 344.152C939.269 345.784 942.656 346.575 945.988 347.193C945.854 348.194 944.087 347.827 943.243 348.267C941.781 348.579 940.326 349.116 938.948 349.549ZM939.4 361.476C936.231 360.081 933.279 356.671 935.008 353.336C937.231 349.704 942.099 349.08 946.085 348.147C951.445 347.074 957.285 346.635 961.875 343.615C964.202 342.419 963.881 339.021 961.296 338.307C958.396 337.523 956.581 341.231 953.642 340.514C952.317 339.201 953.781 337.288 954.611 336.041C957.209 332.791 962.438 333.969 965.362 336.22C968.274 338.19 969.041 342.469 966.333 344.866C962.065 348.819 956.112 350.492 950.509 352.173C946.711 353.372 942.11 353.662 939.4 356.705L940.559 356.035C942.004 355.199 944.47 357.921 945.71 358.827C945.173 359.165 944.408 359.073 943.469 359.687C942.039 360.109 940.708 360.925 939.4 361.476ZM941.984 373.165C938.714 371.823 935.47 368.784 936.849 365.203C938.159 361.956 942.086 360.644 945.342 359.568C948.576 358.637 953.214 357.072 956.352 355.923C956.983 355.796 957.289 356.077 957.524 356.446C957.732 356.772 958.023 357.046 958.242 357.57C957.903 355.49 955.237 354.668 953.384 353.932C952.515 353.613 950.668 353.414 951.672 352.352C953.992 351.725 956.261 350.803 958.518 350.145C961.708 351.253 964.155 354.719 962.264 357.749C959.735 361.881 954.356 362.898 949.831 364.189C947.401 364.873 944.875 365.424 942.645 366.575C941.65 367.074 941.652 368.862 942.307 369.229C941.957 368.423 941.991 368.15 942.569 368.205C942.935 368.24 943.589 368.575 944.051 368.692C945.265 369 946.295 370.504 946.311 371.137C944.801 371.668 943.346 372.465 941.984 373.165ZM947.345 395.945C944.345 394.273 941.016 391.065 942.694 387.567C944.967 383.379 951.11 383.185 953.657 379.259C954.51 380.433 954.444 380.105 954.126 378.77C953.879 377.176 951.407 376.2 950.35 375.414C952.124 374.828 953.894 374.308 955.633 373.614C955.741 373.876 956.141 374.436 956.452 374.746C959.075 377.37 957.66 381.651 954.579 383.332C951.627 385.487 947.523 385.832 944.89 388.372C943.313 390.769 945.842 393.341 947.538 394.916C947.505 395.143 947.885 396.069 947.345 395.945ZM944.793 384.465C941.467 383.044 938.233 379.585 939.982 376.057C942.302 372.409 947.093 371.593 950.897 369.825C952.24 369.383 954.049 368.213 955.301 367.831C955.547 368.125 955.193 369.641 955.547 368.125C955.495 366.083 952.793 365.88 951.22 365.203C950.808 363.755 953.023 364.086 953.965 363.533C955.362 363.242 956.658 362.397 958.002 362.192C961.614 364.102 961.725 369.292 958.325 371.435C954.209 374.696 948.355 374.75 943.969 377.532C943.316 378.074 942.944 379.851 943.179 379.933C943.149 379.836 943.362 379.57 943.453 379.42C945.165 380.438 946.106 382.601 946.86 383.392C946.143 383.681 945.51 384.311 944.793 384.465ZM945.472 401.402C944.505 396.916 950.467 395.438 952.318 392.105C953.492 390.448 952.855 388.56 950.969 387.149C950.729 386.97 950.38 386.359 950.257 385.989C950.566 385.816 951.947 385.106 952.518 385.034C952.917 385.214 954.047 386.557 954.675 387.507C956.431 391.033 953.047 394.281 950.025 395.975C947.789 397.179 945.14 398.841 945.504 401.581L945.472 401.402ZM951.866 401.074C952.006 399.512 950.786 398.323 949.799 397.274C949.973 395.891 951.715 398.763 951.446 398.361C952.031 399.335 952.113 400.497 951.898 401.581L951.866 401.074Z" fill="white"/>
            <Path drawDuration='2' animateFill={true} fastErase={true} animateStroke={true} id="Tailstart" position={1} inverse={true} handleLength={(l,i)=>handleLength(1,l,i)} d="M948.309 397.582L949.176 397.151L948.749 405.739L948.309 397.582Z" fill="white"/>
            <Path drawDuration='2' animateFill={true} fastErase={true} animateStroke={true} id='PoleWings' position={6} inverse={false} handleLength={(l,i)=>handleLength(1,l,i)} d="M946.615 347.414L946.356 322.665C944.984 322.818 943.691 323.944 944.033 325.465C944.528 328.056 942.656 331.634 939.656 331.119C940.189 328.17 941.04 325.157 941.512 322.248C940.756 322.117 940.981 323.586 940.64 324.156C939.891 326.49 939.703 329.048 938.542 331.223C937.48 332.997 935.128 334.015 933.162 333.178C934.255 330.58 935.668 328.04 936.894 325.468C937.51 324.088 938.375 322.754 938.818 321.336C938.149 321.002 937.998 322.401 937.572 322.844C935.808 325.989 934.23 329.25 932.341 332.318C930.76 334.329 927.474 334.93 925.455 333.288C929.137 328.853 932.813 324.405 936.543 320.013C935.443 319.77 934.567 321.922 933.568 322.665C930.618 325.812 927.943 329.25 924.817 332.207C922.602 333.719 919.226 333.25 917.594 331.119C923.254 326.83 928.91 322.524 934.537 318.192C933.839 317.599 932.885 319.175 932.083 319.445C927.209 322.86 922.43 326.426 917.486 329.732C914.689 330.946 911.29 329.437 909.929 326.803C917.555 323.149 925.352 319.708 932.987 316.047C932.58 315.414 931.709 316.33 931.114 316.434C924.45 319.206 917.842 322.127 911.156 324.842C907.757 326.102 903.794 323.686 903.212 320.161C905.195 319.424 907.502 319.174 909.606 318.61C917.025 316.968 924.445 315.324 931.857 313.661C931.862 312.775 930.127 313.763 929.435 313.691C921.058 315.253 912.688 316.85 904.31 318.402C900.246 319.031 896.186 315.121 897.141 310.977H934.602C934.8 316.654 940.965 320.723 946.357 319.654C949.834 319.098 953.526 320.534 956.852 318.968C960.073 317.655 962.643 314.523 962.762 310.977H1000.22C1001.18 315.118 997.119 319.031 993.054 318.402C983.902 316.698 974.752 314.974 965.604 313.244C965.039 313.976 966.859 313.805 967.348 314.079C976.26 316.071 985.184 318.018 994.087 320.041C993.817 323.399 990.007 325.91 986.724 324.991C983.448 323.866 980.317 322.322 977.101 321.026C972.93 319.278 968.783 317.47 964.603 315.749C964.074 316.346 965.592 316.467 965.992 316.822C973.112 320.19 980.339 323.404 987.435 326.803C985.874 330.024 981.172 331.336 978.45 328.808C973.323 325.177 968.217 321.515 963.081 317.898C962.843 318.867 965.006 319.579 965.733 320.429C970.408 323.998 975.081 327.574 979.771 331.12C977.676 333.885 972.894 333.683 970.997 330.716C967.712 327.061 964.468 323.365 961.148 319.743C960.559 320.429 962.31 321.379 962.665 322.188C965.745 325.889 968.846 329.573 971.908 333.287C969.396 335.316 965.309 333.892 964.183 330.955C962.388 327.701 960.694 324.382 958.83 321.174C958.164 321.65 959.181 322.526 959.34 323.172C960.954 326.467 962.596 329.748 964.215 333.042C963.089 333.937 961.025 333.395 959.922 332.445C957.694 330.657 957.837 327.538 956.949 325.051C956.636 324.144 956.557 322.837 956.078 322.188C955.454 322.612 956.351 323.86 956.304 324.603C956.763 326.775 957.304 328.948 957.708 331.119C954.732 331.632 952.837 328.093 953.33 325.508C953.674 323.977 952.404 322.814 951.007 322.665L950.749 346.877L950.212 346.928L949.328 347.116C948.502 347.072 947.161 347.721 946.615 347.414Z" fill="white"/>
            <Path drawDuration='2' animateFill={true} fastErase={true} animateStroke={true} id='Tail3' position={5} inverse={false} handleLength={(l,i)=>handleLength(1,l,i)} d="M946.809 353.676C946.844 353.676 946.873 353.663 946.873 353.646L950.555 352.662L950.5 357.575L946.905 358.626H946.809L946.809 353.676Z" fill="white"/>
            <Path drawDuration='2' animateFill={true} fastErase={true} animateStroke={true} id='Tail2' position={4} inverse={false} handleLength={(l,i)=>handleLength(1,l,i)} d="M947.131 370.764L947.025 365.426L950.361 364.589L950.21 369.591L947.131 370.764Z" fill="white"/>
            <Path drawDuration='2' animateFill={true} fastErase={true} animateStroke={true} id='Tail1' position={3} inverse={false} handleLength={(l,i)=>handleLength(1,l,i)} d="M947.609 383.017L947.383 376.47L950.03 375.58L949.776 381.873L947.609 383.017Z" fill="white"/>
            <Path drawDuration='2' animateFill={true} fastErase={true} animateStroke={true} id="Tail0" position={2} inverse={false} handleLength={(l,i)=>handleLength(1,l,i)} d="M949.613 386.297L949.184 394.632L948.126 395.421L947.766 387.012L949.613 386.297Z" fill="white"/>
            <Path drawDuration='2' animateFill={true} fastErase={true} animateStroke={true} id="Head" position={6} inverse={false} handleLength={(l,i)=>handleLength(1,l,i)} d="M956.356 311.996C956.356 313.851 955.547 315.63 954.108 316.942C952.669 318.254 950.717 318.991 948.682 318.991C946.646 318.991 944.694 318.254 943.255 316.942C941.816 315.63 941.008 313.851 941.008 311.996C941.008 310.14 941.816 308.361 943.255 307.049C944.694 305.737 946.646 305 948.682 305C950.717 305 952.669 305.737 954.108 307.049C955.547 308.361 956.356 310.14 956.356 311.996Z" fill="white"/>

        </svg>

        {/* <AnimateIn at={0.11}>
          <h2 >
            {`${locale==='en'?'When we first meet, we define the goals and resources of your project as well as the available time until completion.':"Lors de notre première rencontre, nous définissons les objectifs et les ressources de votre projet, ainsi que le temps disponible jusqu'à son achèvement."}`} 
          </h2>
        </AnimateIn> */}
  
      {/* </div> */}
      </SVGWrapper>
    )
  }