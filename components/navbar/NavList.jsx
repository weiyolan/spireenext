import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { useAppContext } from "../context/appContext";

const variants = {
  open: {
    display: "block",
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  },
  closed: {
    display: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" },
  }
};

// const itemIds = [0, 1, 2, 3, 4];

export default function NavList({ children, onMouseEnter, onMouseLeave, setNavWidth }) {

  const { mobile } = useAppContext()

  // =====================CALCULATE WDTH DYNAMICALLY ==========================
  // let [dimensions, setDimensions] = useState({ width: undefined, height: undefined })
  // let listRef = useRef(null)

  // useEffect(() => {

  //   function handleSize() {
  //     if (setNavWidth!==undefined) {
  //       const { width, height } = listRef.current.getBoundingClientRect();
  //       if (height > 0) {
  //         setDimensions({ width: width, height: height });
  //         // console.log('dimensions setted: ' + 'width: ' + width+' , height: '+ height)
  //       }
  //     }
  //   }

  //   window.addEventListener("resize", handleSize);

  //   if (setNavWidth!==undefined) {handleSize()}

  //   return () => window.removeEventListener("resize", handleSize);
  //   // print && console.log(dimensions?.height === undefined || )

  // }, [setNavWidth])
  // 
  // useEffect(() => {
  //   if (dimensions.height > 0 && setNavWidth !== undefined) {
  //     setNavWidth(dimensions.width)
  //   }
  // }, [dimensions])

  return (
    <motion.ul onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      className={`${mobile ? `m-0 p-6 pt-2 pb-0 z-[51] absolute justify-start text-start left-0 top-[40px] w-[200px]`
        : `z-[51] absolute flex flex-row w-full justify-start left-24 top-[22px]`}`}
      variants={variants}>
      {children.map((child, i) => {
        return (
          <NavItem
            className={`${mobile ? `p-0 ml-2 list-none mb-4 flex z-[51] justify-start items-center`
              : `p-0 m-0 list-none inline-flex z-[51] justify-start items-center`}`}
            key={i}>
            {child}
          </NavItem>)
      })}
    </motion.ul>
  )
}


