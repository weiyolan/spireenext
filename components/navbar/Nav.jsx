import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import { useAppContext } from '../context/appContext';
import { usePageContext } from '../context/pageContext';


import SpireeLogo from '@components/atoms/SpireeLogo'
import ChooseLanguage from '@components/navbar/ChooseLanguage'

import NavButton from './NavButton'
import NavToggle from "./NavToggle";
import NavList from "./NavList";

// let borderDebug = 'border border-red-500';

export default function Nav({ from }) {
  let [selectedB, setSelectedB] = useState(from);
  let { locale, width, navIsOpen, toggleNav, navLocked, setNavLocked } = useAppContext()
  let { mobile } = usePageContext()
  // let [navLocked, setNavLocked] = useState(false)
  //  let [navWidth, setNavWidth] = useState(false)

  // const containerRef = useRef(null);

  // let [show, setShow] = useState({transform:'translateY(0)'})
  // let [lastTop, setLastTop] = useState(0)

  function selectButton(selection) {

    // if (!navLocked) {
    //   toggleNav()
    // }

    setSelectedB(selection)

  }

  function handleClick() {
    if (!navLocked && navIsOpen) {
      setNavLocked(true)
    } else if (!navLocked && !navIsOpen) {
      setNavLocked(true)
      toggleNav()
    } else if (navLocked) {
      setNavLocked(false)
    }
    // When unclicking the hover will take care of the closing 
    // else if (navLocked && !navIsOpen) {
    //   setNavLocked(false)
    // }
  }

  // useEffect(() => {
  //   setSelectedB(from)
  // }, [from])


  const sidebarDesk = {
    open: {
      y: 0, x: 0,
      width: '100%',
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
      // opacity:0,
      width: 55,
      height: 55,
      // opacity: state?1:0,
      transition: {
        delay: 0.5+0.3,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const sidebarMob = {
    open: {
      y: 0, x: 0, width: '100%', height: '80vh',
      // opacity:1,
      transition: {
        type: "spring",
        stiffness: 400,
        restDelta: 2,
        damping: 40
      }
    },
    closed: {
      y: 0, x: 0,
      // x: mobile ? (width - 70) : (350 - 70),
      // y: mobile ? (-600 + 70) : (-510 + 70),
      width: 17*3,
      height: 17*3,
      // opacity: state?1:0,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };


  const logoDesk = {
    open: {
      y: 16,
      x: 24,
      transition: {
        x: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 16,
      x: 16,
      // transition: {
      transition: {
        x: { stiffness: 1000, },
        delay: 0.5 +0.3
        // staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren",
      }
    }
  };

  const logoContainerDesk = {
    open: {
      y: 0
    },
    closed: {
      y: 0
    }
  };

  const logoMob = {
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

  const logoContainerMob = {
    open: {
      display: "block",
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    },
    closed: {
      display: "none",
      transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" },
    }
  };


  // function handleScroll () {
  //   if(window.scrollY > lastTop){ //if it will be greater than the previous
  //     setShow(false);//set the value to the negetive of height of navbar 
  //   }
  //   else{
  //     setShow(true);
  //   }
  //   setLastTop(window.scrollY); //New Position Stored
  // }


  // useEffect(()=>{
  //   window.addEventListener('scroll', handleScroll, ) //{passive:true}
  //   return () => {window.removeEventListener('scroll', handleScroll)}
  // },[lastTop])

  // useEffect(()=>{
  //   console.log(lastTop)
  // },[lastTop])

  // function handleMouseLeave() {
  //   // if (!left) setLeft(true)
  //   let timer = setTimeout(()=>{toggleNav();setLeft(false)},500)
  //   return timer
  // }

  // useEffect(()=>{
  //   // let timer;

  //   if (left) {

  //   }
  //   return ()=>{clearTimeout(timer)}
  // },[left])
  // const variants2 = {
  //   open: {
  //     display: "block",
  //     transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  //   },
  //   closed: {
  //     display: "none",
  //     transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" },
  //   }
  // };

  // const variants = {
  //   open: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       y: { stiffness: 1000, velocity: -100 }
  //     }
  //   },
  //   closed: {
  //     y: 50,
  //     opacity: 0,
  //     transition: {
  //       y: { stiffness: 1000 }
  //     }
  //   }
  // };

  return (
    // =================PARENT ORCHESTRATING MOTION=================
    <motion.nav
      className={`fixed top-0 left-0 h-0 z-[51] w-full md:w-[800px] lg:w-[900px]`}
      // style={{width: mobile?'100%': navWidth+'px'}}
      initial={false}
      animate={navIsOpen ? "open" : "closed"}
      // custom={height}
      // ref={containerRef}
      key={width}
    >
      {/* =================COLORED MENU BAR=====================*/}
      {/* forward fill-mode */}

      {/* ${mobile?'h-[600px]':'h-[510px]'} w-[100%] sm:w-[350px] */}
      <motion.div
        className={`z-[51] absolute top-0 left-0 min-[480px]:top-2 min-[480px]:left-2 md:border md:rounded-full
           ${navLocked ? ' border-white animate-borderPulse ' : 'border-transparent'} 
           `}
           

        // style={{ transition: 'border-radius 0.5s ease' }}
        variants={mobile ? sidebarMob : sidebarDesk}
        onMouseEnter={() => { if (!mobile && !navLocked) { toggleNav() } }}
        onMouseLeave={() => { if (!mobile && !navLocked) { toggleNav() } }}
      >
        <div style={{transition: `opacity 0.5s ease, border-radius 0.5s ease`,
        transitionDelay: `${navIsOpen?'0s':'1s'}, 0s`}} className={`transition-all after:transition-all duration-500 after:duration-500 after:delay-[0] ${navIsOpen ? 'opacity-100' : 'opacity-0'} 
        bg-gradient-to-r from-black/30 ${true ? 'to-[#6F3041]/30' : 'to-black/30'} backdrop-blur w-[100%] h-full 
        after:w-full after:h-full after:absolute after:top-0 after:left-0  after:shadow-xl 
        rounded-[40px] md:rounded-full after:rounded-[40px] after:md:rounded-full  
        ${navIsOpen ? ' rounded-tl-none after:rounded-tl-none ' : ''}
        `}
        // rounded-[40px] rounded-br-none after:rounded-[40px] after:rounded-br-none
        />
      </motion.div>

      {/* =================LOGO================= */}
      <motion.div
        variants={mobile ? logoContainerMob : logoContainerDesk}
        className='rounded-full'>
        <motion.div
          variants={mobile ? logoMob : logoDesk}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`${mobile ? 'fixed inline-flex rounded-full w-fit top-[calc(80vh-58px)] sm:bottom-[18px] z-[51] right-[18px] '
            : 'absolute inline-flex rounded-full w-fit z-[51] cursor-pointer'}`}
          onMouseEnter={() => { if (!mobile && !navLocked) { toggleNav() } }}
          onMouseLeave={() => { if (!mobile && !navLocked) { toggleNav() } }}
          onClick={() => { if (!mobile) { handleClick() } }}
        >
          {/* <Link className='rounded-full' href={`/`} onClick={() => selectButton('Home')}> */}
          {/* title='Go to the homepage' */}
          <SpireeLogo className='w-10 h-10 rounded-full overflow-visible' />
          {/* </Link> */}

        </motion.div>
      </motion.div>

      {/* =================NavButtons================= */}
      <NavList onMouseEnter={() => { if (!mobile && !navLocked) { toggleNav() } }} onMouseLeave={() => { if (!mobile && !navLocked) { toggleNav() } }} >
        <NavButton className='' to="order" text={order[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavButton className='' to="collection/#sun" text={sun[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavButton className='' to="collection/#moon" text={moon[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavButton className='' to="about" text={about[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavButton className='' to="support" text={support[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavButton className='' to="merino" text={merino[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavButton className='' to="progress" text={progress[locale].text} selectedB={selectedB} handleClick={selectButton} />
        {/* <NavButton className='' to="contact/#Form" title="Contact" text={merino[locale].text} handleClick={selectButton} mode={'dark'} /> */}
        {/* <NavButton className='' to="contact/#Form" title="Contact" text={progress[locale].text} handleClick={selectButton} mode={'dark'} /> */}
        <ChooseLanguage mobile={mobile} toggleNav={toggleNav} />
      </NavList>
      {/* =================Toggle================= */}

      {mobile && <NavToggle className={`outline-none border-transparent border-2 duration-300 rounded-none 
    focus:outline-none focus-visible:border-white hover:cursor-pointer z-[51] w-fit h-fit top-0 left-0 absolute p-[17px] sm:p-[23px] bg-transparent`}
        open={navIsOpen} toggle={() => { toggleNav() }} />}

    </motion.nav>

  )
}

let order = { en: { text: 'Pre-Order' }, fr: { text: 'Pre-Order' } }
let sun = { en: { text: 'Sun' }, fr: { text: 'Soleil' } }
let moon = { en: { text: 'Moon' }, fr: { text: 'Lune' } }
let about = { en: { text: 'About' }, fr: { text: 'A Propos' } }
let support = { en: { text: 'Support' }, fr: { text: 'Support' } }
let merino = { en: { text: 'Merino' }, fr: { text: 'Merino' } }
let progress = { en: { text: 'Progress' }, fr: { text: 'Progrès' } }