import React, {useState, useEffect, useRef, useCallback} from "react"
import { useAppContext } from "@components/context/appContext"
// import { Path, TextAnimate} from '@utils/pathUtils'
import { Path} from "@/utils/pathUtils"
import UseFlower from "./UseFlower"
import { SVGWrapper } from "./contextSVG"
import { usePageContext } from "../context/pageContext"
import { useDimensions } from "@/utils/useDimensions"
// import useGoodChildren from "./useGoodChildren"

export default function AnimateSVG({children, scrollMin, scrollMax, speed, alt, setSvgHeight, print}) { 

    let [allLengths, setAllLengths] = useState([])
    let [allOffsetLengths, setAllOffsetLengths] = useState([])
    let [allRatios, setAllRatios] = useState([0])
    let [allPrevRatios, setAllPrevRatios] = useState([0])
    let { scrolled } = useAppContext()
    let [located, setLocated] = useState(false)

    let {svgWidth, viewBox, setAnimationLocation, mobile} = usePageContext()
    // let newChildren = useGoodChildren(children.props.children, handleLength)

    let animationRef = useRef(null)

    let svgRef = useRef(null)

    // const {width, height} = useDimensions(svgRef, true)
  
    const handleLength = useCallback((f, newLength, position) => {
      setAllLengths(prevLengths => {
        let copyLengths = [...prevLengths];
        copyLengths[position]=newLength;
        if (print) {console.log('function called')}

        return copyLengths
      })
      setAllOffsetLengths(prevOffsets => {
        let copyOffsetLengths = [...prevOffsets];
          copyOffsetLengths[position] = newLength * f;
          return copyOffsetLengths
      })

    },[setAllLengths,setAllOffsetLengths])

    useEffect(()=>{
      if (print) {
        // console.log(allLengths)
        // console.log(allOffsetLengths)
      }
    },[print,allLengths,allOffsetLengths, children])

    useEffect(()=>{
      let bbox = svgRef.current.getBoundingClientRect()
      let height = bbox.bottom - bbox.top;
      if (height>=0 && setSvgHeight!==undefined) {
        setSvgHeight(height)
      }
    },[svgWidth, viewBox, children, setSvgHeight])

    // useEffect(()=>{
    //   setMyWidth
    // },[width,height])
    
    // useEffect(()=>{
    //   if (setSvgHeight!==undefined) {
    //     setSvgHeight(height)
    //   }
    //   // console.log('something changed. This is height: ' + height)
    //   // console.log('viewbox: ' + viewBox)
    // },[width, height, svgWidth, viewBox, children, setSvgHeight])

    useEffect(()=>{
      if (scrolled>scrollMin && scrolled < scrollMax && !located) {
        const {top, bottom} = animationRef.current.getBoundingClientRect();
        const {top: svgStart} = svgRef.current.getBoundingClientRect();
        setLocated(true)
        setAnimationLocation({top: top-svgStart, bottom: bottom-svgStart})
      } else if ((scrolled<scrollMin || scrolled > scrollMax) && located) {
        setLocated(false)
      }
    },[scrolled, scrollMin, scrollMax, setLocated])


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
    }, [allLengths, allOffsetLengths, children])

    // Generate children from props with the handleLength function defined here and remove lengthFactor.
    // Pass children to this component nested 1 layer deep in a <></>.
    // useEffect(()=>{
      const newChildren = React.Children.map(children.props.children, child => {
        let newChild;
        if (React.isValidElement(child) && child.type === Path) {
          const {lengthFactor, ...rest} = child.props
          newChild = React.cloneElement(child, {
            ...rest, 
            handleLength: (l,i) => handleLength(lengthFactor===undefined?1:lengthFactor,l,i),
            key: alt[12,13] + `${mobile?'-mobile':'-desk'}` 
          })
        } else if (React.isValidElement(child) && child.type === UseFlower) {
          const props = child.props
          newChild = React.cloneElement(child, {
            ...props, 
            handleLength: handleLength,
            key: alt[12,13] + `${mobile?'-mobile':'-desk'}` 
          })
  
        }
        else {newChild = child}
        return newChild
      })
    // },[children])
    
    


    return (
      <SVGWrapper handleLength={handleLength} myRatio={allRatios} prevRatio={allPrevRatios} scrollMin={scrollMin} scrollMax={scrollMax} animationSpeed={speed}>
        <svg  ref={svgRef} alt={alt} style={{transform: `translate(-50%, ${-0*scrolled}px)`}} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg"
          className={`absolute ${svgWidth} left-1/2`}>
          
          <g ref={animationRef}>
        
        
            {/* {console.log(goodChildren.map(child=>child.type===Path))} */}
            {newChildren}

          </g>
        </svg>
      </SVGWrapper>

)


}