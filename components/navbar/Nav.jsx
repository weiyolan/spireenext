import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import { useAppContext } from '../context/appContext';
import { usePageContext } from '../context/pageContext';


import NavbarButton from './NavbarButton'
import SpireeLogo from '@components/atoms/SpireeLogo'
import ChooseLanguage from '@components/navbar/ChooseLanguage'
import MenuToggle from "./NavbarToggle";
import NavbarList from "./NavbarList";

// let borderDebug = 'border border-red-500';

export default function Nav({ from }) {
  let [selectedB, setSelectedB] = useState(from);
  let { locale, width, navIsOpen, toggleNavOpen } = useAppContext()
  let { mobile } = usePageContext()
   let [clicked, setClicked] = useState(false)
  //  let [navWidth, setNavWidth] = useState(false)

  // const containerRef = useRef(null);

  // let [show, setShow] = useState({transform:'translateY(0)'})
  // let [lastTop, setLastTop] = useState(0)

  function selectButton(selection) {
    setSelectedB(selection)
  }

  function handleClick() {
    if (!clicked && navIsOpen) {
      setClicked(true)
    } else if (!clicked && !navIsOpen) {
      setClicked(true)
      toggleNavOpen()
    } else if (clicked) {
      setClicked(false)
    } 
    // When unclicking the hover will take care of the closing 
    // else if (clicked && !navIsOpen) {
    //   setClicked(false)
    // }
  }

  // useEffect(() => {
  //   setSelectedB(from)
  // }, [from])


  const sidebarDesk = {
    open: {
      y: 0, x: 0,
      width: '95%',
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
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const sidebarMob = {
    open: {
      y: 0, x: 0, width: '100%', height: 600, 
      // opacity:1,
      transition: {
        type: "spring",
        stiffness: 400,
        restDelta: 2,
        damping: 40
      }
    },
    closed: {
      y:0,x:0,
      // x: mobile ? (width - 70) : (350 - 70),
      // y: mobile ? (-600 + 70) : (-510 + 70),
      width: 70,
      height: 70,
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
        delay: 0.3
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
  //   let timer = setTimeout(()=>{toggleNavOpen();setLeft(false)},500)
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
      className={`${mobile ? 'fixed top-0 left-0 h-0 z-[51] w-full'
        : 'fixed top-0 left-0 h-0 z-[51] w-[800px] lg:w-[930px]'}`}
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
        className={`${mobile ? ` overflow-hidden z-[51] absolute top-0 left-0 ${navIsOpen?'rounded-none':'rounded-br-[40px]'} `
          : `border ${clicked?' border-white animate-borderPulse':'border-transparent'} overflow-hidden z-[51] absolute top-2 left-2 rounded-full`}`}
        style={{transition:'border-radius 0.5s ease'}}  
        variants={mobile ? sidebarMob : sidebarDesk}
        onMouseEnter={() => { if(!mobile && !clicked){toggleNavOpen()} }}
        onMouseLeave={() => { if(!mobile && !clicked){toggleNavOpen()} }}
      >
        <div className={`transition-all duration-300 ${navIsOpen ? 'opacity-100 delay-[0]' : 'opacity-0 delay-500'} 
        bg-gradient-to-r from-black/30 ${false ? 'to-[#6F3041]/30' : 'to-black/30'} backdrop-blur w-[120%] h-full`} />
      </motion.div>

      {/* =================LOGO================= */}
      <motion.div
        variants={mobile ? logoContainerMob : logoContainerDesk}
        className='rounded-full'>
        <motion.div
          variants={mobile ? logoMob : logoDesk}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`${mobile?'absolute inline-flex rounded-full w-fit top-[18px] z-[51] right-[18px] '
          :'absolute inline-flex rounded-full w-fit z-[51] cursor-pointer'}`}
          onMouseEnter={() => { if(!mobile && !clicked){toggleNavOpen()} }}
          onMouseLeave={() => { if(!mobile && !clicked){toggleNavOpen()} }}
          onClick={() => { if(!mobile) {handleClick()} }}
        >
          {/* <Link className='rounded-full' href={`/`} onClick={() => selectButton('Home')}> */}
            {/* title='Go to the homepage' */}
            <SpireeLogo className='w-10 h-10 rounded-full overflow-visible' />
          {/* </Link> */}
          
        </motion.div>
      </motion.div>

      {/* =================NavButtons================= */}
      <NavbarList  onMouseEnter={() => { if(!mobile && !clicked){toggleNavOpen()} }} onMouseLeave={() => { if(!mobile && !clicked){toggleNavOpen()} }} >
        <NavbarButton className='' to="" text={order[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavbarButton className='' to="services" text={sun[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavbarButton className='' to="services" text={moon[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavbarButton className='' to="about" text={about[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavbarButton className='' to="support" text={support[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavbarButton className='' to="merino" text={merino[locale].text} selectedB={selectedB} handleClick={selectButton} />
        <NavbarButton className='' to="progress" text={progress[locale].text} selectedB={selectedB} handleClick={selectButton} />
        {/* <NavbarButton className='' to="contact/#Form" title="Contact" text={merino[locale].text} handleClick={selectButton} mode={'dark'} /> */}
        {/* <NavbarButton className='' to="contact/#Form" title="Contact" text={progress[locale].text} handleClick={selectButton} mode={'dark'} /> */}
        <ChooseLanguage mobile={mobile} toggleNavOpen={toggleNavOpen} />
      </NavbarList>
      {/* =================Toggle================= */}

      {mobile && <MenuToggle className={`outline-none border-transparent border-2 duration-300 rounded-none 
    focus:outline-none focus-visible:border-white hover:cursor-pointer z-[51] w-fit h-fit top-0 left-0 absolute p-[23px] bg-transparent`}
      open={navIsOpen} toggle={() => {toggleNavOpen()}} />}

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