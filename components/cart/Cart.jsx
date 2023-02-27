import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import { useAppContext } from '../context/appContext';
import { usePageContext } from '../context/pageContext';


// import NavbarButton from './NavbarButton'
// import SpireeLogo from '@components/atoms/SpireeLogo'
import CartIcon from './CartIcon';
import CartContent from './CartContent';
// import ChooseLanguage from '@components/navbar/ChooseLanguage'
import NavToggle from "./NavToggle";
// import NavbarList from "./NavbarList";

// let borderDebug = 'border border-red-500';

export default function Cart({ from }) {
  let { locale, width, cartIsOpen, toggleCart, navIsOpen,toggleNav } = useAppContext()
  let { mobile } = usePageContext()
  let [clicked, setClicked] = useState(false)
  let [hover, setHover] = useState(false)

  // Not possible to calculate because Display: 'none' on content elements initially.
  // let [cartDimensions, setCartDimensions] = useState({ width: undefined, height: undefined })


  // let [show, setShow] = useState({transform:'translateY(0)'})
  // let [lastTop, setLastTop] = useState(0)

  // function handleClick() {
  //   if (!clicked && cartIsOpen) {
  //     setClicked(true)

  //   } else if (!clicked && !cartIsOpen) {
  //     setClicked(true)
  //     toggleCart()
  //   } else if (clicked) {
  //     setClicked(false)
  //     // toggleCart()
  //   }


  function handleClick() {

    if (navIsOpen) {
      toggleNav()
    }
    
    toggleCart()
      // setClicked(true)
  

    // When unclicking the hover will take care of the closing 
    // else if (clicked && !cartIsOpen) {
    //   setClicked(false)
    // }
  }



  const cartSidebarDesk ={
    open: {
      y: 0, x: 0,
      width: '100%',
      height: 520,
      // opacity:1,
      transition: {
        type: "spring",
        stiffness: 400,
        restDelta: 2,
        damping: 40
      }
    },
    closed: {
      // y: -490,
      // x: 160,
      x: 0,
      y: 0,
      // opacity:1,
      width: 55,
      height: 55,
      // opacity: state?1:0,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  // const cartSidebarMob = {
  //   open: {
  //     y: 0, x: 0, width: '100%', height: '100vh',
  //     // opacity:1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 400,
  //       restDelta: 2,
  //       damping: 40
  //     }
  //   },
  //   closed: {
  //     y: 0, x: 0,
  //     // x: mobile ? (width - 70) : (350 - 70),
  //     // y: obile ? (-600 + 70) : (-510 + 70),
  //     width:17*3 ,
  //     height:17*3 ,
  //     // opacity: state?1:0,
  //     transition: {
  //       delay: 0.2,
  //       type: "spring",
  //       stiffness: 400,
  //       damping: 40
  //     }
  //   }
  // };


  const cartLogo = {
    open: {
      // y: 16,
      // x: -16,
      // scale:0.5,
      transition: {
        x: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      scale: 1,
      // transition: {
      transition: {
        x: { stiffness: 1000, },
        delay: 0.3
        // staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren",
      }
    }
  };




  return (
    // =================PARENT ORCHESTRATING MOTION=================
    <motion.div
      className={`fixed top-0 right-0 sm:top-0 sm:right-2 h-0 z-[51] w-full min-[480px]:w-[320px]
        `}
      initial={false}
      animate={cartIsOpen ? "open" : "closed"}
      // custom={height}
      // ref={containerRef}
      key={width}
    >
      {/* =================COLORED MENU BAR=====================*/}
      {/* ${mobile?'h-[600px]':'h-[510px]'} w-[100%] sm:w-[350px] */}
      <motion.div
        className={`z-[51] absolute top-0 right-0 min-[480px]:top-2 min-[480px]:right-2`}
        // style={{ transition: 'border-radius 0.5s ease' }}
        variants={cartSidebarDesk}
        onMouseEnter={() => { if ((!mobile) && !clicked) { } }}
        onMouseLeave={() => { if ((!mobile) && !clicked) { } }}
      // key={cartDimensions.height}
      // custom={cartDimensions.height}
      >
        <div style={{transition: `opacity 0.5s ease, border-radius 0.5s ease`,
        transitionDelay: `${cartIsOpen?'0s':hover?'0s':'0.5s'}, 0s`}} className={`transition-all after:transition-all duration-500 after:duration-500 after:delay-[0] ${cartIsOpen || hover ? 'opacity-100' : 'opacity-0'} 
        bg-gradient-to-r from-black/30 ${true ? 'to-[#6F3041]/30' : 'to-black/30'} backdrop-blur w-[100%] h-full 
        after:w-full after:h-full after:absolute after:top-0 after:right-0 after:shadow-xl 
        rounded-[40px] after:rounded-[40px]  
        ${cartIsOpen ? ' rounded-tr-none after:rounded-tr-none' : ' '}`}
        />

      </motion.div>



      {/* =================Cart Content================= */}

      <CartContent
        // onMouseEnter={() => { if ((!mobile) && !clicked) { } }}
        // onMouseLeave={() => { if ((!mobile) && !clicked) { } }}
        // setCartDimensions={setCartDimensions}
      />

      {/* =================LOGO================= */}
 
        <motion.div
          variants={cartLogo}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`${true ? 'absolute flex sm:rounded-full top-[0] z-[51] right-[0] cursor-pointer '
            : ''}`}
          onMouseEnter={() => { if ((!mobile) && !clicked) { setHover(true) } }}
          onMouseLeave={() => { if ((!mobile) && !clicked) { setHover(false) } }}
          onClick={handleClick}
        >
          <CartIcon className={`${cartIsOpen ? 'w-6' : 'w-6 sm:w-9'} m-[15px] sm:m-[17px] transition-all duration-300 sm:rounded-full overflow-visible`} />
        </motion.div>
 

      {/* =================Toggle================= */}

      {false && <NavToggle className={`outline-none border-transparent border-2 duration-300 rounded-none 
    focus:outline-none focus-visible:border-white hover:cursor-pointer z-[51] w-fit h-fit top-0 right-0 absolute p-[23px] bg-transparent`}
        open={cartIsOpen} toggle={() => { toggleCart() }} />}

    </motion.div>

  )
}
