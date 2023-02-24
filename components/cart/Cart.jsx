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
  let { locale, width, cartIsOpen, toggleCart } = useAppContext()
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
    if (!cartIsOpen) {
      toggleCart()
      // setClicked(true)
    } else if (cartIsOpen) {
      toggleCart()
      // setClicked(false)
    }

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
  //     y: 0, x: 0, width: 400, height: 600,
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
  //     // y: mobile ? (-600 + 70) : (-510 + 70),
  //     width: 70,
  //     height: 70,
  //     // opacity: state?1:0,
  //     transition: {
  //       delay: 0.2,
  //       type: "spring",
  //       stiffness: 400,
  //       damping: 40
  //     }
  //   }
  // };


  const cartLogoDesk = {
    open: {
      // y: 16,
      // x: -16,
      // scale:0.5,
      transition: {
        x: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 20,
      x: -18,
      scale: 1,
      // transition: {
      transition: {
        x: { stiffness: 1000, },
        delay: 0.3
        // staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren",
      }
    }
  };

  const cartLogoContainerDesk = {
    open: {
      y: 0
    },
    closed: {
      y: 0
    }
  };

  const cartLogoMob = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  const cartLogoContainerMob = {
    open: {
      display: "block",
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    },
    closed: {
      display: "none",
      transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" },
    }
  };


  return (
    // =================PARENT ORCHESTRATING MOTION=================
    <motion.div
      className={`${true ? 'fixed top-2 right-2 h-0 z-[51]'
        : ''}`}
      style={{ width: mobile ? '100%' : 320 + 'px' }}
      initial={false}
      animate={cartIsOpen ? "open" : "closed"}
      // custom={height}
      // ref={containerRef}
      key={width}
    >
      {/* =================COLORED MENU BAR=====================*/}
      {/* ${mobile?'h-[600px]':'h-[510px]'} w-[100%] sm:w-[350px] */}
      <motion.div
        className={`${mobile ? ` overflow-hidden z-[51] absolute top-2 right-2 ${cartIsOpen ? 'rounded-none' : 'rounded-br-[40px]'} `
          : `border overflow-hidden z-[51] absolute top-2 right-2 ${cartIsOpen ? 'rounded-3xl' : 'rounded-[40px]'} border-transparent `}`}
        style={{ transition: 'border-radius 0.5s ease' }}
        variants={false ? cartSidebarMob : cartSidebarDesk}
        onMouseEnter={() => { if ((!mobile) && !clicked) { } }}
        onMouseLeave={() => { if ((!mobile) && !clicked) { } }}
      // key={cartDimensions.height}
      // custom={cartDimensions.height}
      >

        <div className={`relative transition-all duration-300 ${cartIsOpen || hover ? 'opacity-100 delay-[0]' : 'opacity-0 delay-200'}  
        bg-gradient-to-r from-black/30 ${false ? 'to-[#6F3041]/30' : 'to-black/30'} backdrop-blur w-[120%] h-[120%]`} />

      </motion.div>



      {/* =================Cart Content================= */}

      <CartContent
        // onMouseEnter={() => { if ((!mobile) && !clicked) { } }}
        // onMouseLeave={() => { if ((!mobile) && !clicked) { } }}
        // setCartDimensions={setCartDimensions}
      />

      {/* =================LOGO================= */}
      <motion.div
        variants={false ? cartLogoContainerMob : cartLogoContainerDesk}
        className='rounded-full'>
        <motion.div
          variants={false ? cartLogoMob : cartLogoDesk}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`${true ? 'absolute flex rounded-full top-[0] z-[51] right-[0] cursor-pointer '
            : ''}`}
          onMouseEnter={() => { if ((!mobile) && !clicked) { setHover(true) } }}
          onMouseLeave={() => { if ((!mobile) && !clicked) { setHover(false) } }}
          onClick={() => { if ((!mobile)) { handleClick() } }}
        >
          <CartIcon className={`${cartIsOpen ? 'w-6' : 'w-9'} transition-all duration-300 rounded-full overflow-visible`} />
        </motion.div>
      </motion.div>

      {/* <NavbarList  onMouseEnter={() => { if((!mobile) && !clicked){toggleCart()} }} onMouseLeave={() => { if((!mobile) && !clicked){toggleCart()} }} > */}
      {/* <NavbarButton className='' to="" text={order[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavbarButton className='' to="services" text={sun[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavbarButton className='' to="services" text={moon[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavbarButton className='' to="about" text={about[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavbarButton className='' to="support" text={support[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavbarButton className='' to="merino" text={merino[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavbarButton className='' to="progress" text={progress[locale].text} selectedB={selectedB} handleClick={selectButton} /> */}
      {/* <NavbarButton className='' to="contact/#Form" title="Contact" text={merino[locale].text} handleClick={selectButton} mode={'dark'} /> */}
      {/* <NavbarButton className='' to="contact/#Form" title="Contact" text={progress[locale].text} handleClick={selectButton} mode={'dark'} /> */}
      {/* <ChooseLanguage mobile={mobile} toggleCart={toggleCart} /> */}
      {/* </NavbarList> */}


      {/* =================Toggle================= */}

      {false && <NavToggle className={`outline-none border-transparent border-2 duration-300 rounded-none 
    focus:outline-none focus-visible:border-white hover:cursor-pointer z-[51] w-fit h-fit top-0 right-0 absolute p-[23px] bg-transparent`}
        open={cartIsOpen} toggle={() => { toggleCart() }} />}

    </motion.div>

  )
}

let order = { en: { text: 'Pre-Order' }, fr: { text: 'Pre-Order' } }
let sun = { en: { text: 'Sun' }, fr: { text: 'Soleil' } }
let moon = { en: { text: 'Moon' }, fr: { text: 'Lune' } }
let about = { en: { text: 'About' }, fr: { text: 'A Propos' } }
let support = { en: { text: 'Support' }, fr: { text: 'Support' } }
let merino = { en: { text: 'Merino' }, fr: { text: 'Merino' } }
let progress = { en: { text: 'Progress' }, fr: { text: 'Progrès' } }