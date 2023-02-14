import React, {useState,useEffect,useRef} from "react"
import { useDimensions } from "@/utils/useDimensions"
import { useAppContext } from "@context/appContext"
import { Path, TextAnimate} from '@utils/pathUtils'
import { SVGWrapper } from "./contextSVG"
import { usePageContext } from "../context/pageContext"
// import { PageWrapper } from "@context/pageContext"

export default function Story1Astrid({scrollMin,scrollMax, speed, setSvgHeight}) { 
    let [allLengths, setAllLengths] = useState([])
    let [allOffsetLengths, setAllOffsetLengths] = useState([])
    let [allRatios, setAllRatios] = useState([0])
    let [allPrevRatios, setAllPrevRatios] = useState([0])
    let { scrolled, locale, width:screenWidth } = useAppContext()
    
    let {svgWidth} = usePageContext()

  


    let [fakeScroll1,setFakeScroll1] = useState(0)
    let [fakeScroll2,setFakeScroll2] = useState(0)
    let [animate2,setAnimate2] = useState(false)

    let svgRef = useRef(null)
    const {width:myWidth, height:myHeight} = useDimensions(svgRef,true)
  
    useEffect(()=>{
      setSvgHeight(myHeight)
      // console.log(myWidth,myHeight, screenWidth)
    },[myWidth,myHeight,screenWidth])

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
      let timer = setTimeout(()=>{setFakeScroll1(1)},500)
        // let timer2 = setTimeout(()=>{setFillStyle(true)},2000)
      let timer2 = setTimeout(()=>{setFakeScroll2(1)},1200)
      let timer3 = setTimeout(()=>{setAnimate2(true)},3200)
      return ()=>{
        clearTimeout(timer)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    },[])

    return (
      <SVGWrapper myRatio={allRatios} prevRatio={allPrevRatios} scrollMin={scrollMin} scrollMax={scrollMax}>
        {/* <div className='fixed w-full top-[140px] left-1/2 -translate-x-1/2'>  */}
  
        {/* <svg alt='Roadmap title' style={{transform: `translate(-50%, ${!fakeScroll?20:-20}px)`, transition:'all 4s ease-out'}}  className='relative w-full px-4 left-1/2' viewBox="0 0 807 160" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
        <svg ref={svgRef} alt='Story Part 1, woman Astrid in dynamic running pose' style={{transform: `translate(-50%, ${-0*scrolled}px)`}} viewBox="0 0 1468 2328" fill="none" xmlns="http://www.w3.org/2000/svg"
          className={`absolute ${svgWidth} left-1/2`}>
          <g id="Meet Astrid">
          
            {/* <TextAnimate scrolled={fakeScroll1} at={0} fromTop={true} id="Meet Astrid" fill="white" style="white-space: pre" font-family="Quicksand" font-size="20" letter-spacing="0em"><tspan x="85.6895" y="56">Meet Astrid, a driven and sport-</tspan><tspan x="65.6211" y="81">loving women who&#x2019;s on a mission to </tspan><tspan x="96.8711" y="106">revolutionize the way women </tspan><tspan x="141.295" y="131">experience running.</tspan></TextAnimate> */}

            <Path print={false} scrolled={fakeScroll1} drawDuration='1' position={0} inverse={false} handleLength={(l,i)=>handleLength(1,l,i)} id="toAstrid" d="M231.01 149C231.01 353 71.5 442.5 106.5 554C141.5 665.5 282 632 298.01 554" stroke="white" stroke-width="2" stroke-linecap="round"/>

            <Path print={false} fillColor='#fff' drawDuration='4' scrolled={fakeScroll2} animateStroke={animate2} animateFill={animate2} position={1} inverse={false} double={1} handleLength={(l, i) => handleLength(1, l, i)} id="astrid" d="M403.998 146C388.848 150.003 385.843 168.919 379.249 181.025C377.611 190.573 373.383 202.274 374.535 212.509C374.593 211.824 374.709 211.137 374.896 210.451C376.037 211.101 376.189 214.866 377.67 216.32C379.389 218.814 380.972 221.492 383.836 222.827C383.882 221.02 379.846 219.878 379.692 217.214C379.144 214.036 378.632 210.759 379.031 207.526C378.084 204.713 378.748 201.976 380.284 199.362C380.498 197.234 381.508 197.498 381.274 199.537C381.044 202.124 381.915 204.69 381.659 207.162C384.303 205.692 383.824 211.119 385.158 212.533C385.444 213.216 386.444 218.025 386.682 215.728C385.978 214.302 384.844 208.812 387.653 211.361C390.568 213.403 388.921 216.756 387.082 218.837C386.329 221.551 384.042 223.384 382.529 225.651C382.287 225.874 381.955 226.315 381.549 226.153C380.696 225.518 379.885 224.795 379.132 224.007C379.578 224.556 380.057 225.094 380.578 225.618C377.415 233.818 388.213 223.838 379.621 232.212C370.521 238.296 344.884 252.252 363.237 262.22C374.722 269.331 395.068 264.334 396.508 279.457C396.645 280.897 397.44 282.242 397.211 284.073C398.145 285.832 397.923 287.818 398.262 289.488C400.612 301.063 390.06 310.71 385.998 321.47C382.576 329.707 375.682 336.069 377.459 347.036C378.363 358.004 382.649 369.844 374.366 379.289C367.441 389.939 360.654 402.523 357.016 413.901C358.408 415.263 360.16 413.86 360.789 418.392C363.242 416.422 367.684 422.989 361.806 421.153C361.377 418.044 357.94 420.619 358.734 416.962C351.978 422.229 359.159 414.054 355.079 416.63C352.06 417.024 348.211 427.216 347.345 425.051C344.548 426.483 341.765 428.495 339.079 430.898C341.336 431.701 335.389 432.983 340.113 434.702C342.827 434.539 336.387 437.253 341.948 435.12C344.946 435.281 352.375 429.776 349.179 434.931C348.997 434.918 348.232 440.617 351.015 436.515C350.914 436.047 352.216 438.979 352.879 441.164C350.826 440.701 344.546 450.188 339.485 452.312C332.184 455.947 331.989 438.472 335.458 434.713C339.184 434.566 336.784 434.115 337.785 432.087C330.953 438.595 324.867 447.531 320.991 455.816C312.509 466.874 311.666 487.264 297.931 492.056C286.318 492.753 273.391 490.613 279.622 508.144C284.992 523.026 281.769 544.006 296.23 553.605C308.911 554.916 297.209 537.584 305.3 531.379C315.073 529.229 314.798 514.292 315.022 506.901C324.844 484.756 344.176 468.976 356.429 448.49C374.702 436.739 386.338 417.939 401.107 402.45C408.401 392.557 415.827 382.586 420.339 371.104C435.796 374.807 450.472 382.198 466.01 386.158C473.012 390.352 486.109 390.449 488.328 399.084C486.428 419.204 496.659 437.024 503.364 455.144C499.996 450.334 496.758 441.135 494.926 438.882C487.437 425.972 504.153 459.146 504.042 458.271C510.6 469.392 515.827 482.771 506.913 494.375C499.142 505.986 509.621 513.682 523.144 513.628C540.822 512.407 560.461 525.428 576 511.655C575.913 503.564 564.032 503.791 557.095 499.361C558.379 501.987 551.635 500.971 548.775 498.148C541.822 494.864 536.092 490.021 537.217 484.825C537.424 477.989 549.192 490.131 540.515 481.047C524.64 477.161 526.977 449.404 521.384 435.456C520.923 427.877 515.323 405.596 516.01 425.262C518.721 439.672 524.902 454.401 525.174 468.512C522.605 454.752 515.807 440.963 515.104 427.077C510.183 411.898 507.294 396.183 504.708 380.503C510.452 385.359 506.848 414.993 515.172 404.888C514.271 389.095 514.635 371.449 496.433 365.288C470.781 348.345 510.254 381.27 503.1 378.453C484.179 356.679 457.538 344.485 433.419 329.776C428.193 328.685 426.811 325.561 426.086 322.138C425.854 321.528 425.73 320.881 425.725 320.185C425.016 316.003 424.395 311.859 418.32 310.771C404.232 303.848 433.413 313.945 432.95 321.078C436.683 328.592 433.495 315.162 435.944 326.683C440.639 316.286 432.286 305.424 427.971 296.151C419.604 288.17 427.125 294.062 425.637 288.315C423.902 284.237 423.872 279.864 422.939 277.336C412.412 274.523 437.054 275.321 444.062 277.724C443.942 277.625 443.821 277.515 443.7 277.391L445.863 278.009C445.938 277.666 445.97 277.105 445.972 276.256C445.972 275.233 446.034 274.315 446.105 274.215C446.176 274.115 447.037 273.346 448.018 272.506C450.218 270.625 451.027 269.695 451.271 268.77C451.374 268.378 451.561 267.897 451.686 267.701C451.811 267.505 452.102 266.673 452.332 265.851C452.691 264.57 452.751 263.967 452.751 261.598C452.751 260.081 452.804 258.786 452.87 258.72C464.707 263.131 477.49 270.626 488.948 274.356C490.312 274.798 490.898 274.895 492.119 274.883C493.775 274.865 497.972 274.773 498.35 274.142C504.423 263.99 508.374 250.131 512.908 237.586C513.943 234.722 514.044 234.679 514.347 233.481C514.512 233.316 514.473 233.269 514.171 233.269C513.688 233.269 513.67 232.991 514.136 232.7C514.33 232.579 514.488 232.35 514.488 232.191C514.488 232.032 514.607 231.805 514.753 231.684C514.898 231.564 515.016 231.371 515.016 231.257C515.016 230.913 516.997 227.067 517.46 226.513C517.593 226.354 517.841 226.223 518.011 226.223C518.182 226.223 518.6 225.916 518.939 225.54C519.538 224.878 519.551 224.833 519.374 224.057C519.925 218.507 523.307 210.316 524.356 205.795C524.799 203.883 524.852 203.379 524.761 201.92C524.65 200.15 524.52 199.803 523.969 199.803C522.833 199.803 522.046 200.886 521.731 202.885C521.347 205.322 520.035 208.433 519.392 208.433C519.17 208.433 519.223 207.116 519.51 205.527C519.841 203.699 519.83 202.824 519.432 199.072C519.061 195.584 518.395 193.078 517.721 192.636C517.187 192.286 516.531 192.503 515.88 193.244L515.331 193.87L515.464 195.735C515.752 199.753 515.47 200.036 514.514 196.685C514.027 194.977 513.59 193.818 513.248 193.324C512.961 192.91 512.726 192.527 512.726 192.475C512.726 192.423 512.519 192.109 512.265 191.776C511.882 191.274 511.691 191.172 511.133 191.172C509.858 191.172 509.344 192.673 510.018 194.43C510.516 195.729 510.951 198.115 510.964 199.626C510.973 200.579 511.069 201.283 511.229 201.564C511.564 202.149 511.559 203.051 511.22 203.332C510.704 203.761 510.416 203.155 510.158 201.099C509.332 198.015 508.025 194.38 507.065 191.172C506.613 190.222 506.479 190.121 505.68 190.118C505.172 190.117 504.99 190.226 504.644 190.733C504.027 195.398 507.495 203.223 504.361 208.338C504.048 208.826 503.579 209.603 503.319 210.063C502.882 210.838 502.797 210.899 502.157 210.899C501.491 210.899 501.461 210.873 501.284 210.151C501.183 209.74 500.986 209.006 500.846 208.522C500.706 208.037 500.502 206.969 500.392 206.148C499.993 203.162 498.223 200.815 496.728 201.29C496.209 201.455 495.997 202.17 495.992 203.73C495.992 204.525 495.91 205.666 495.812 206.268C495.615 207.481 495.647 207.67 496.571 210.812C496.912 211.974 497.246 213.281 497.312 213.717C498.781 217.177 501.631 219.191 502.653 223.995C503.036 224.755 503.021 228.388 502.631 229.283C502.468 229.659 502.334 230.127 502.334 230.325C499.926 238.613 494.516 245.542 489.359 253.085L488.493 253.075C487.809 253.067 487.18 252.848 485.512 252.039C477.609 247.644 465.451 244.44 459.023 237.629C458.775 237.362 458.472 237.144 458.348 237.144C458.224 237.144 458.123 237.032 458.123 236.895C458.123 236.803 457.835 236.432 457.427 235.974L456.531 237.856C456.351 231.165 445.018 227.263 437.803 225.781C417.604 219.724 457.018 246.58 438.782 242.667C430.89 237.341 426.333 227.937 418.885 221.997C418.216 227.775 429.026 240.066 422.441 242.257C422.426 241.35 416.695 238.456 413.874 234.414C411.449 230.163 411.292 232.072 409.66 231.689C406.726 228.736 408.106 237.025 402.784 240.318C395.716 243.787 396.998 243.032 390.148 246.362C380.083 250.905 395.787 258.38 400.89 260.093C401.534 259.763 402.193 259.456 402.862 259.162L401.438 260.301C402.034 260.513 402.239 260.483 402.99 260.268C403.641 260.082 404.797 259.982 406.513 259.964L409.067 259.935C412.451 258.811 416.369 255.608 419.498 256.603C420.685 256.985 422.3 256.986 422.722 256.603C423.053 256.305 423.751 256.267 424.339 256.515C428.31 256.925 432.916 257.402 435.664 258.847C437.245 260.487 442.366 262.502 442.717 264.591C440.409 264.946 437.554 261.2 435.99 260.821C434.945 260.596 433.68 259.375 432.934 260.125C432.934 260.273 433.009 260.394 433.101 260.394C434.091 260.803 434.413 261.855 434.415 262.635C430.794 266.522 433.388 262.772 432.978 262.467C432.712 262.515 432.36 262.67 432.197 262.811C431.738 263.211 431.117 262.939 431.223 262.385C431.341 261.762 430.534 260.904 429.473 260.524C428.897 260.317 426.683 260.129 426.344 260.132C425.812 260.135 425.647 260.379 426.08 260.812C427.562 261.157 429.415 260.826 430.115 262.266C429.63 262.646 429.491 262.202 429.064 261.98C427.139 260.589 412.411 262.814 412.548 260.948C412.655 260.841 412.696 260.707 412.64 260.651C411.385 261.324 410.791 260.856 409.832 261.491C411.681 262.862 414.172 262.249 416.149 263.058C417.213 264.325 422.593 263.952 422.717 266.013C422.258 267.488 412.488 265.905 410.479 265.684C410.237 265.292 407.971 265.715 407.217 266.293C405.962 266.908 404.549 266.748 403.488 267.498C402.884 267.935 402.413 267.783 402.559 267.199C402.618 266.965 402.585 266.724 402.486 266.662C402.307 266.552 401.581 267.202 401.581 267.474C400.016 267.869 399.477 266.519 400.95 265.772C401.208 265.086 400.092 264.753 400.217 264.201C401.669 263.068 403.959 263.389 405.056 262.675C405.987 262.281 407.242 261.002 406.993 260.844C406.242 260.436 403.259 260.355 402.638 261.684C402.638 262.243 402.632 262.246 401.85 262.183C401.234 262.134 400.942 262.211 400.51 262.535C399.695 263.145 398.235 264.665 398.235 264.904C397.663 265.993 397.65 268.355 397.185 268.497C396.642 268.049 397.252 265.915 397.696 264.7C398.172 264.192 398.499 263.739 398.719 263.324C399.599 262.768 400.042 261.845 400.728 261.275C400.54 260.966 399.76 261.644 399.049 262.212C399.07 258.473 386.668 258.878 384.856 252.16C375.624 244.707 374.067 242.563 383.565 241.193C387.576 237.627 390.619 235.395 395.396 233.15C394.084 230.458 404.923 227.002 402.286 226.324C398.766 222.549 406.016 225.086 408.627 222.878C410.811 219.928 410.558 215.241 414.283 215.211C421.857 218.112 423.796 226.601 425.04 216.654C425.844 215.344 428.04 213.993 430.52 212.193L429.613 213.588C429.983 213.595 430.115 213.807 430.115 214.298C430.115 214.691 429.977 215.02 429.702 215.279C429.474 215.492 428.949 216.381 428.535 217.253C427.868 218.657 427.772 219.014 427.704 220.373C427.631 221.836 427.858 223.403 428.52 226.016C428.757 226.95 429.618 228.807 430.076 229.372C430.728 230.177 430.658 229.374 429.587 223.758C429.115 221.283 429.14 220.607 429.78 218.456C432.589 209.49 433.845 210.713 440.831 211.574L443.308 211.516C444.711 211.483 445.591 208.525 445.603 207.112C445.149 207.847 444.294 208.683 443.914 207.418C443.75 206.771 444.19 205.983 444.925 205.608C446.785 205.651 446.938 203.506 446.858 202.269C446.427 202.269 446.265 202.014 446.408 201.563C446.484 201.323 446.674 201.212 447.009 201.212C447.764 201.212 448.663 200.511 448.925 199.718C449.127 199.104 449.115 198.979 448.822 198.579C448.307 197.854 446.935 195.94 448.082 195.348C449.211 194.766 452.316 194.262 452.941 193.161C454.294 190.774 450.537 186.995 451.216 184.426C451.24 183.169 451.004 182.794 450.469 183.238C450.181 183.477 450.031 183.265 449.589 181.997C449.184 180.833 449.264 180.034 450.074 177.184C450.246 176.577 450.231 176.472 449.944 176.304C448.687 175.565 446.9 174.361 446.722 174.134C446.601 173.979 446.568 173.739 446.645 173.577C446.174 172.061 448.651 166.486 447.095 165.802C446.111 164.769 447.068 163.284 448.003 163.387C449.097 163.51 449.43 163.079 449.457 161.502C445.352 148.603 422.622 146.905 414.406 149.614C410.788 150.807 410.667 146.896 403.998 146ZM444.062 277.724C444.439 278.034 444.81 278.218 445.187 278.208C444.896 278.04 444.514 277.879 444.062 277.724ZM425.725 320.185C425.836 320.839 425.95 321.493 426.086 322.138C426.893 324.256 429.018 325.938 432.162 327.742C432.352 327.944 433.908 329.351 433.914 328.43C433.61 325.636 427.468 312.614 426.029 318.049C425.815 318.815 425.72 319.521 425.725 320.185ZM557.095 499.361C557.003 499.174 556.874 498.969 556.696 498.743C556.06 498.369 555.505 498.023 555.002 497.697C555.626 498.319 556.327 498.871 557.095 499.361ZM555.002 497.697C554.033 496.731 553.259 495.592 552.777 494.2C552.916 493.642 552.239 492.282 551.279 490.748C552.379 493.105 548.654 493.574 555.002 497.697ZM551.279 490.748C551.162 490.496 550.995 490.225 550.748 489.923C550.933 490.202 551.11 490.477 551.279 490.748ZM550.748 489.923C547.957 485.708 543.775 481.011 548.163 487.658C549.436 488.57 550.245 489.306 550.748 489.923ZM337.785 432.087C338.213 431.68 338.645 431.286 339.079 430.898C338.977 430.862 338.883 430.825 338.746 430.791C338.262 431.286 337.971 431.711 337.785 432.087ZM379.132 224.007C376.355 220.578 375.003 216.664 374.535 212.509C374.176 216.758 376.176 220.91 379.132 224.007ZM405.576 149.025C406.229 148.999 406.48 149.355 405.539 150.408C405.097 150.803 404.624 151.797 403.889 151.366C400.766 150.982 404.14 149.081 405.576 149.025ZM445.119 176.054C446.09 176.168 446.775 178.43 446.254 179.8C445.943 180.618 444.665 180.152 444.665 179.22C444.665 179.083 444.504 178.713 444.308 178.396L443.953 177.82C444.7 177.202 444.669 176.241 445.119 176.054ZM451.481 177.466C451.166 177.404 450.2 179.241 450.388 179.545C450.554 179.813 451.089 179.47 451.648 178.736C452.153 178.074 452.089 177.586 451.481 177.466ZM437.578 180.255C440.325 181.724 442.171 184.311 443.215 182.089C443.408 181.962 443.738 182.043 444.151 182.348C444.801 182.829 445.091 182.813 445.513 182.277L445.859 181.837L445.971 182.285C445.718 185.06 446.15 188.125 444.546 190.55C442.616 192.24 443.977 193.538 443.432 195.223C443.083 194.516 442.045 193.894 442.215 193.148C444.356 189.446 437.485 181.775 437.578 180.255ZM446.971 185.946L447.509 188.16L446.703 191.396C446.976 189.579 447.091 187.763 446.971 185.946ZM378.32 190.125C379.189 190.084 380.382 191.323 380.274 192.576C379.426 195.272 378.389 197.918 377.632 200.652C377.228 202.299 376.525 202.953 376.698 200.686C377.068 197.705 376.747 194.791 377.457 191.856C377.394 190.636 377.799 190.15 378.32 190.125ZM441.148 193.99C441.388 193.99 441.359 194.583 441.107 194.836C440.845 195.097 440.613 195.108 440.613 194.859C440.613 194.558 440.963 193.99 441.148 193.99ZM440.587 196.456C440.635 197.131 440.779 198.099 440.94 198.918C441.102 199.725 441.091 199.905 440.874 200.027C440.448 201.031 440.396 202.338 439.467 202.443C439.254 200.48 439.183 197.871 440.587 196.456ZM406.033 198.631C406.094 198.632 406.172 198.684 406.266 198.819C405.817 199.563 405.767 198.623 406.033 198.631ZM405.152 200.22C406.149 200.174 407.414 200.788 406.259 201.659C405.208 203.386 406.398 202.447 407.169 202.152C407.561 203.253 407.912 204.95 407.86 202.565C407.478 200.166 410.365 200.513 409.481 202.749C409.247 206.147 408.167 209.46 406.806 212.479C404.576 213.432 405.554 209.255 405.092 208.16C404.352 205.01 406.597 207.27 406.841 208.951C407.695 210.677 406.375 206.213 407.748 206.792C406.723 206.197 406.365 202.632 404.677 203.722C403.525 204.5 405.526 202.023 404.579 201.715C403.764 200.691 404.377 200.256 405.152 200.22ZM394.033 200.367C394.092 200.37 394.177 200.434 394.288 200.606C393.924 200.884 393.857 200.357 394.033 200.367ZM389.578 201.26C390.164 201.957 390.262 205.008 390.548 206.529C390.869 209.08 390.169 211.964 390.554 214.211C390.006 214.857 389.749 213.526 389.54 213.244C389.939 209.301 389.14 205.241 389.578 201.26ZM394.31 202.857C394.346 202.861 394.397 202.932 394.464 203.114C394.259 204.1 394.151 202.842 394.31 202.857ZM394.304 204.19C394.469 204.239 394.566 204.631 394.381 205.541C394.459 206.086 393.823 207.759 393.934 206.011C393.573 204.983 394.031 204.11 394.304 204.19ZM412.4 204.567C412.528 204.607 412.603 204.822 412.529 205.351C411.166 205.921 412.016 204.448 412.4 204.567ZM377.299 206.081C377.766 209.255 377.917 212.518 378.909 215.611C379.002 216.761 377.626 214.591 377.543 214.345C376.585 211.953 375.656 207.847 377.299 206.081ZM411.366 206.884C411.734 206.85 412.502 207.783 411.962 208.654C411.785 209.443 411.43 208.413 411.501 208.214C411.066 207.274 411.144 206.905 411.366 206.884ZM442.634 207.112L441.799 210.132L439.751 209.738C441.018 209.302 441.938 208.38 442.634 207.112ZM403.363 207.704C405.092 208.284 402.765 211.974 402.137 213.395L401.907 213.924L401.642 214.209C401.222 212.585 398.867 210.748 400.198 208.679C401.972 208.48 399.442 211.01 400.907 211.618C403.339 213.592 401.04 208.95 402.18 208.541C402.479 210.725 403.382 209.354 403.363 207.704ZM395.236 214.381C396.141 214.418 397.296 215.507 398.472 215.838C400.119 218.556 394.896 217.858 393.672 219.273C393.382 219.547 392.92 219.975 392.482 219.779C393.728 218.657 393.117 217.352 393.925 215.839C394.239 214.715 394.692 214.359 395.236 214.381ZM392.142 214.646C392.389 214.601 392.511 214.874 392.351 215.727C390.089 217.424 390.925 221.081 388.088 222.767C387.416 223.123 386.339 224.868 385.651 223.654C386.506 221.236 388.182 218.216 390.399 216.796C390.456 216.387 391.599 214.745 392.142 214.646ZM395.19 215.32C395.088 215.301 394.958 215.407 394.817 215.754C395.542 216.559 395.495 215.377 395.19 215.32ZM396.046 216.627C396.003 216.626 395.946 216.67 395.874 216.79C396.145 217.486 396.231 216.631 396.046 216.627ZM385.664 224.13C385.878 224.13 385.891 224.378 385.408 225.075L384.852 225.393L384.477 225.558C383.749 225.323 385.193 224.128 385.664 224.13ZM448.079 235.235C450.395 235.23 447.518 245.423 448.334 247.75C445.823 246.752 448.447 239.734 446.743 235.914C447.311 235.444 447.748 235.236 448.079 235.235ZM445.119 238.618C445.282 238.663 445.728 239.603 446.594 242.164L446.741 243.573C445.78 242.749 444.762 238.519 445.119 238.618ZM399.31 265.391L399.256 267.117C399.137 267.207 398.997 267.359 398.852 267.526L399.31 265.391ZM438.182 271.346H439.507L440.851 273.758C440.069 272.802 439.196 271.912 438.182 271.346ZM444.941 283.42C444.795 284.722 441.709 286.28 441.166 287.688C440.761 288.908 440.618 289.767 440.568 290.53C440.906 290.457 440.721 290.661 440.554 290.678C440.486 292.038 440.718 293.111 440.356 295.383C437.953 292.947 440.299 296.692 439.029 301.005L439.093 301.518C441.128 295.683 445.917 290.101 444.941 283.42ZM440.554 290.678C440.554 290.631 440.565 290.578 440.568 290.53C440.521 290.54 440.474 290.55 440.404 290.573C440.424 290.662 440.487 290.685 440.554 290.678ZM422.671 294.619C425.979 294.753 432.702 303.605 432.273 308.701C431.389 309.961 430.241 304.634 429.059 304.553C426.127 301.624 421.06 297.631 421.767 294.872C422.024 294.685 422.329 294.606 422.671 294.619ZM419.249 295.259C419.443 295.244 419.875 295.292 420.661 295.446C422.031 296.566 418.407 295.325 419.249 295.259ZM438.793 302.491C438.536 302.382 437.627 304.574 437.456 307.287C436.798 310.522 438.661 306.467 437.958 306.516C438.839 303.717 438.969 302.566 438.793 302.491ZM400.421 304.815C400.462 304.738 400.277 305.513 399.721 307.682C398.652 316.416 402.142 325.953 408.307 332.351C426.265 350.269 450.087 360.287 471.288 373.559L471.143 373.749C457.563 366.651 444.091 359.288 430.844 351.574C419.785 344.248 407.37 336.777 401.286 324.515C400.386 317.862 398.31 310.76 390.736 317.528C381.144 326.444 392.199 313.044 397.923 313.941C398.147 312.951 400.298 305.046 400.421 304.815ZM427.579 320.889C427.719 320.879 428.217 321.407 429.279 323.02C428.351 322.887 427.312 320.908 427.579 320.889ZM431.646 324.237C431.925 324.309 432.367 324.973 432.731 326.685C431.168 325.638 431.18 324.117 431.646 324.237ZM434.287 328.997C434.213 329.041 434.302 329.329 434.725 330.047C436.193 330.917 434.508 328.864 434.287 328.997ZM436.571 330.947C436.291 330.939 436.489 331.229 437.795 331.903L438.481 332.253L438.672 332.266C438.077 331.458 436.929 330.957 436.571 330.947ZM439.161 332.47C454.421 341.652 471.381 349.558 485.316 361.28C489.892 365.156 485.781 359.283 484.081 358.074C469.919 348.276 454.85 339.524 439.161 332.47ZM491.507 392.41C491.722 392.357 491.655 393.464 491.073 396.512C493.956 395.937 493.731 407.992 495.157 413.184C493.223 414.209 495.284 407.678 492.869 409.336C493.279 406.631 491.717 395.325 490.046 399.607C485.486 410.704 490.665 392.622 491.507 392.41ZM491.972 404.872C492.523 406.342 491.173 405.164 491.972 404.872ZM498.683 422.762C498.936 423.534 498.344 422.839 498.683 422.762ZM523.915 468.064C523.997 468.052 524.113 468.126 524.259 468.302C524.372 468.438 524.409 468.776 524.347 469.087C524.271 469.469 524.324 469.718 524.523 469.917C524.68 470.074 524.808 470.363 524.808 470.561C524.808 470.809 524.889 470.888 525.082 470.814C525.426 470.682 526.05 471.339 526.763 472.586C527.248 473.433 527.345 473.513 527.771 473.414C528.03 473.354 528.388 473.117 528.566 472.886C529.104 472.187 529.573 472.348 530.303 473.481C530.661 474.038 531.084 474.802 531.242 475.181C531.401 475.56 532.038 476.893 532.66 478.145C533.282 479.396 533.791 480.557 533.791 480.724C533.791 480.89 533.879 481.115 533.987 481.223C534.268 481.504 534.02 481.802 533.505 481.802C533.262 481.802 532.915 481.881 532.733 481.978C532.552 482.075 531.785 482.238 531.028 482.34C530.271 482.441 529.533 482.553 529.388 482.588C529.041 482.671 528.683 482.523 528.683 482.297C528.683 482.198 528.448 481.819 528.16 481.455C527.872 481.092 527.686 480.744 527.747 480.683C527.922 480.508 527.255 479.865 526.9 479.865C526.687 479.865 526.614 479.775 526.682 479.599C526.738 479.453 526.655 479.137 526.497 478.896C526.315 478.621 526.251 478.291 526.321 478.015C526.404 477.682 526.362 477.575 526.148 477.575C525.822 477.575 525.806 477.511 526.02 477.088C526.302 476.533 526.534 475.206 526.447 474.649C526.375 474.19 526.426 474.085 526.763 473.996C527.162 473.892 527.163 473.888 526.827 473.517C526.641 473.311 526.229 473.034 525.912 472.901C525.596 472.769 525.336 472.587 525.336 472.495C525.336 472.404 525.138 472.279 524.896 472.218C524.542 472.129 524.455 471.996 524.45 471.539C524.445 471.226 524.29 470.534 524.103 470.001C523.716 468.902 523.668 468.099 523.915 468.064ZM525.234 469.896C525.294 469.914 525.336 470.017 525.336 470.167C525.336 470.592 525.238 470.635 525.098 470.27C525.044 470.128 525.075 469.965 525.168 469.908C525.19 469.894 525.213 469.89 525.234 469.896ZM526.517 480.217C526.716 480.217 526.98 480.339 527.104 480.488C527.518 480.987 527.028 481.145 526.572 480.659C526.169 480.23 526.167 480.217 526.517 480.217ZM525.363 480.261C525.471 480.277 525.593 480.373 525.648 480.536C525.686 480.651 525.593 480.745 525.439 480.745C525.286 480.745 525.16 480.619 525.16 480.466C525.16 480.31 525.255 480.246 525.363 480.261ZM526.911 481.626C527.11 481.626 527.274 481.705 527.274 481.802C527.274 481.899 527.159 481.978 527.02 481.978C526.88 481.978 526.717 481.899 526.657 481.802C526.598 481.705 526.711 481.626 526.911 481.626ZM540.585 485.816L540.427 486.29C540.299 486.675 540.342 486.831 540.655 487.123C540.924 487.373 541.009 487.605 540.938 487.888C540.883 488.112 540.885 488.42 540.943 488.573C541.071 488.905 541.42 488.929 541.883 488.64C542.144 488.477 542.323 488.477 542.681 488.64C543.632 489.074 543.997 488.807 544.005 487.673C544.01 487.183 543.876 487.107 542.679 486.912C542.044 486.809 541.502 486.587 541.142 486.284L540.585 485.816ZM543.982 485.857C543.503 485.857 543.397 486.286 543.77 486.721C544.164 487.182 544.536 487.196 544.536 486.752C544.536 486.178 544.336 485.857 543.982 485.857ZM546.199 489.379C546.048 489.379 545.973 489.458 546.033 489.555C546.093 489.652 546.217 489.731 546.308 489.731C546.399 489.731 546.473 489.652 546.473 489.555C546.473 489.458 546.35 489.379 546.199 489.379ZM541.463 489.829C541.406 489.82 541.36 489.823 541.331 489.84C541.255 489.887 541.311 490.107 541.455 490.328C541.755 490.786 541.652 490.965 541.09 490.965C540.628 490.965 540.392 491.435 540.679 491.78C540.9 492.047 541.219 492.077 542.047 491.911C542.69 491.783 542.769 491.382 542.201 491.131C541.864 490.982 541.893 490.969 542.39 491.046C542.874 491.121 542.966 491.085 542.918 490.836C542.863 490.551 541.865 489.894 541.463 489.829ZM546.89 490.135C546.831 490.106 546.826 490.234 546.826 490.56C546.826 490.866 546.905 491.166 547.002 491.225C547.099 491.285 547.178 491.533 547.178 491.775C547.178 492.017 547.251 492.17 547.342 492.114C547.556 491.982 547.369 490.797 547.063 490.35C546.979 490.228 546.925 490.153 546.89 490.135ZM545.636 492.27C545.599 492.28 545.592 492.356 545.592 492.505C545.592 492.689 545.645 492.893 545.709 492.958C545.889 493.137 546.12 493.097 546.12 492.886C546.12 492.783 546.002 492.579 545.857 492.433C545.74 492.316 545.673 492.26 545.636 492.27ZM547.307 493.458C547.245 493.471 547.235 493.548 547.285 493.677C547.344 493.831 547.469 493.956 547.563 493.956C547.795 493.956 547.65 493.555 547.386 493.467C547.354 493.457 547.328 493.454 547.307 493.458ZM547.949 496.666C547.928 496.666 547.903 496.672 547.879 496.688C547.781 496.748 547.746 496.872 547.802 496.962C547.953 497.207 548.058 497.161 548.058 496.851C548.058 496.738 548.013 496.668 547.949 496.666ZM539.725 498.406C540.141 498.376 540.741 498.568 542.025 499.045C542.824 499.341 543.478 499.541 543.478 499.49C543.478 499.439 543.667 499.6 543.896 499.848C544.125 500.095 544.433 500.296 544.581 500.296C544.875 500.296 545.124 500.761 544.966 501.017C544.821 501.252 544.411 501.213 543.82 500.907C543.313 500.645 543.293 500.65 543.119 501.106C542.95 501.551 542.924 501.561 542.614 501.281C542.307 501.002 542.248 501.007 541.633 501.352C541.263 501.56 540.834 501.673 540.646 501.613C540.463 501.555 539.842 501.628 539.265 501.776H539.27C537.696 502.179 536.668 502.289 536.531 502.066C536.462 501.96 536.461 501.635 536.525 501.344C536.609 500.96 536.82 500.73 537.287 500.511C537.808 500.266 537.943 500.099 537.988 499.636C538.023 499.274 538.138 499.064 538.303 499.064C538.446 499.064 538.791 498.895 539.07 498.689C539.294 498.523 539.478 498.425 539.727 498.406H539.725ZM543.644 501.002C543.747 501.002 543.831 501.081 543.831 501.178C543.831 501.275 543.796 501.354 543.753 501.354C543.71 501.354 543.627 501.275 543.567 501.178C543.507 501.081 543.542 501.002 543.644 501.002ZM535.051 501.887C535.242 501.874 535.386 501.942 535.334 502.102C535.294 502.223 535.034 502.349 534.757 502.382C534.313 502.434 534.279 502.406 534.483 502.161C534.62 501.995 534.859 501.9 535.051 501.887ZM314.597 502.41C315.623 502.41 315.718 502.44 315.573 502.719C315.485 502.888 315.31 503.384 315.184 503.82C315.059 504.256 314.566 505.365 314.087 506.286C312.899 508.571 312.844 508.802 313.369 509.295C313.684 509.591 313.793 509.88 313.793 510.42C313.793 510.819 313.698 511.242 313.582 511.358C313.31 511.63 311.352 511.616 310.887 511.339C310.693 511.223 310.503 511.111 310.465 511.089C310.427 511.068 310.5 510.925 310.626 510.773C310.822 510.537 310.8 510.48 310.475 510.395C310.266 510.34 310.094 510.156 310.094 509.985C310.094 509.815 309.974 509.576 309.829 509.456C309.661 509.316 309.566 508.928 309.566 508.388C309.566 507.922 309.486 507.491 309.39 507.431C309.098 507.251 309.19 506.368 309.593 505.463C309.802 504.995 309.993 504.509 310.018 504.383C310.126 503.851 310.675 503.272 311.162 503.175C311.451 503.117 311.729 503 311.781 502.916C311.833 502.832 312.184 502.762 312.56 502.762C312.936 502.762 313.293 502.683 313.353 502.586C313.412 502.489 313.972 502.41 314.597 502.41ZM312.584 509.158C312.472 509.163 312.343 509.263 312.193 509.456C312.006 509.698 311.701 510.09 311.516 510.327C311.203 510.727 311.2 510.775 311.473 510.982C312.214 511.546 313.204 510.869 313.016 509.927C312.911 509.403 312.771 509.149 312.584 509.158ZM310.744 510.868C310.618 510.869 310.639 510.939 310.798 511.042C311.136 511.26 311.198 511.26 311.063 511.042C311.003 510.945 310.859 510.862 310.744 510.868ZM313.92 514.981C313.964 514.959 313.948 515.093 313.893 515.421C313.838 515.747 313.556 516.337 313.265 516.733C312.834 517.318 312.736 517.625 312.736 518.385C312.736 519.359 312.551 519.676 311.628 520.28C311.225 520.545 311.201 520.658 311.18 522.42C311.16 524.048 311.062 524.767 310.688 526.057C310.519 526.638 309.969 526.379 310.08 525.771C310.096 525.686 309.986 525.481 309.836 525.316C309.688 525.151 309.617 524.962 309.682 524.897C309.861 524.718 309.744 520.842 309.554 520.65C309.452 520.546 309.389 520.912 309.389 521.621C309.389 522.764 308.94 524.362 308.458 524.934C308.269 525.159 307.628 527.135 307.628 527.493C307.628 527.535 307.944 527.446 308.332 527.294C308.719 527.141 309.037 526.957 309.037 526.885C309.037 526.814 309.156 526.71 309.301 526.654C309.481 526.585 309.565 526.664 309.565 526.9C309.565 527.122 309.446 527.246 309.234 527.246C308.884 527.246 308.603 527.879 308.877 528.049C309.176 528.233 309.038 528.771 308.64 528.97C307.877 529.351 306.079 529.308 305.924 528.905C305.865 528.751 305.919 528.195 306.046 527.67C306.172 527.145 306.212 526.656 306.135 526.584C306.057 526.512 305.958 526.555 305.914 526.68C305.87 526.805 305.653 527.121 305.435 527.384C305.216 527.647 304.983 528.153 304.918 528.509C304.852 528.864 304.565 529.617 304.278 530.182C303.992 530.747 303.755 531.305 303.755 531.422C303.755 531.54 303.583 531.794 303.376 531.987C303.113 532.232 302.972 532.623 302.913 533.272C302.866 533.784 302.745 534.306 302.645 534.432C302.545 534.558 302.229 534.827 301.943 535.03L301.423 535.401L301.553 534.632C301.624 534.21 301.746 533.743 301.824 533.594C301.901 533.445 302.06 532.945 302.178 532.482C302.295 532.019 302.46 531.598 302.543 531.547C302.627 531.495 302.696 530.981 302.696 530.406C302.696 529.83 302.767 529.36 302.855 529.36C302.942 529.36 303.095 529.126 303.194 528.84C303.294 528.555 303.702 527.88 304.1 527.34C304.721 526.499 304.809 526.276 304.713 525.766C304.588 525.102 304.933 522.595 305.224 522.05C305.327 521.857 305.392 521.599 305.367 521.479C305.283 521.061 305.691 520.579 306.301 520.378C306.893 520.183 306.906 520.162 306.647 519.766C306.478 519.509 306.422 519.187 306.494 518.898C306.613 518.423 306.908 518.326 307.419 518.595C307.582 518.681 308.211 518.808 308.816 518.877C310.039 519.016 310.255 518.806 309.529 518.185C309.151 517.861 309.15 517.849 309.485 517.718C309.674 517.644 310.034 517.577 310.283 517.57C310.532 517.563 311.102 517.434 311.549 517.281C312.312 517.021 313.096 516.282 313.775 515.181C313.847 515.064 313.895 514.994 313.92 514.981ZM308.868 515.444C309.133 515.444 309.066 515.718 308.729 516.007C308.289 516.385 308.043 516.506 307.935 516.398C307.819 516.281 308.638 515.444 308.868 515.444ZM309.438 527.489C309.457 527.47 309.482 527.495 309.51 527.565C309.561 527.692 309.554 527.845 309.496 527.903C309.437 527.962 309.396 527.858 309.403 527.672C309.408 527.57 309.42 527.507 309.438 527.489ZM289.205 533.287C289.24 533.29 289.272 533.3 289.302 533.318C289.403 533.381 289.486 533.774 289.486 534.193C289.486 534.654 289.589 535.04 289.749 535.173C289.895 535.293 290.014 535.654 290.014 535.975C290.014 536.296 290.091 536.762 290.185 537.01C290.279 537.258 290.401 537.912 290.455 538.463C290.508 539.014 290.664 539.867 290.8 540.357C290.936 540.847 291.1 541.668 291.164 542.18C291.229 542.692 291.444 543.524 291.642 544.029C291.841 544.534 292.039 545.328 292.083 545.792C292.147 546.469 292.255 546.693 292.63 546.924C293.291 547.333 293.537 547.678 293.537 548.197C293.538 548.444 293.778 549.103 294.072 549.66C295.04 551.498 293.804 550.652 292.697 548.72C292.396 548.196 292.006 547.608 291.831 547.414C291.49 547.039 290.761 545.499 290.259 544.096C290.092 543.628 289.778 543.128 289.561 542.986C289.293 542.81 289.138 542.493 289.076 541.989C289.026 541.582 288.85 540.694 288.684 540.016C288.518 539.338 288.37 538.465 288.355 538.077C288.34 537.689 288.255 537.257 288.168 537.116C288.081 536.974 287.954 536.499 287.885 536.059C287.778 535.376 287.821 535.179 288.182 534.7C288.415 534.391 288.605 534.024 288.605 533.884C288.605 533.592 288.96 533.267 289.205 533.287ZM300.796 536.149C300.826 536.164 300.884 536.327 300.947 536.581C301.042 536.963 301.027 537.537 300.909 538.089C300.768 538.746 300.778 539.828 300.946 542.228C301.296 547.207 301.262 549.646 300.825 551.025H300.82C300.573 551.805 300.357 552.189 300.141 552.231C299.877 552.282 299.843 552.211 299.938 551.791C300.283 550.26 300.28 550.221 299.802 549.907C299.55 549.742 299.344 549.449 299.344 549.256C299.344 548.97 299.262 548.925 298.911 549.013C298.55 549.103 298.46 549.046 298.363 548.662C298.3 548.409 298.292 548.031 298.346 547.823C298.4 547.615 298.363 547.291 298.262 547.103C298.137 546.864 298.138 546.703 298.267 546.574C298.371 546.47 298.409 546.077 298.353 545.669C298.273 545.082 298.324 544.885 298.625 544.612C298.976 544.294 299.166 543.501 298.843 543.7C298.759 543.752 298.554 543.645 298.388 543.461C298.135 543.182 298.122 543.061 298.303 542.717C298.566 542.219 298.837 542.02 299.116 542.122C299.248 542.17 299.318 542.006 299.308 541.669C299.299 541.338 299.242 541.224 299.156 541.363C299.081 541.485 299.058 541.648 299.105 541.725C299.153 541.802 299.121 541.865 299.034 541.865C298.947 541.865 298.778 541.652 298.659 541.391C298.467 540.968 298.487 540.88 298.851 540.585C299.129 540.36 299.189 540.226 299.039 540.165C298.663 540.011 298.797 539.588 299.259 539.472C299.699 539.361 299.764 539.195 299.707 538.31C299.69 538.051 299.802 537.646 299.956 537.411C300.11 537.176 300.186 536.853 300.125 536.694C300.044 536.483 300.114 536.405 300.386 536.405C300.59 536.405 300.764 536.307 300.774 536.185C300.774 536.155 300.784 536.144 300.794 536.149H300.796Z" fill="white"/>

            </g>
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