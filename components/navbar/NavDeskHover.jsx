import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./NavbarToggle";
import Navigation from "./NavbarNavigation";
import useWindowSize from "./useWindowSize";
import Button from "./Button";
import { useDimensions } from "./useDimension";
import Link from "next/link";
import YW from "../public/images/logo_yw_b.svg";
import ChooseLanguage from "./ChooseLanguage";
import { useRouter } from "next/router";
import { useAppContext } from "./Context";

export default function NavDeskHover ({from, navLight, toggleNavLight}) {
  // const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  // const { width, height } = useDimensions(containerRef);
  // const [state, setState] = useState(false)
  const {width, breakPointSmall, isOpen, toggleOpen} = useAppContext()

  const router = useRouter()
  const { locale } = router    


  let [selectedB,setSelectedB] = useState(from);

  function selectButton (selection) {
    setSelectedB(selection)
    toggleOpen()
  }

  useEffect(()=>{
    setSelectedB(from)
  },[from])

  useEffect(()=>{
  },[navLight])
  // useEffect(()=>{
  //   setState('update')
  // },[])



//  BIG CIRCLE
// const sidebar = {
//   open: {
//     clipPath: `circle(${530 * 2 + 200}px at ${width-40}px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2
//   }
//   },
//   closed: {
//     clipPath: `circle(30px at ${width-40}px 40px)`,
//     transition: {
//       delay: 0.2,
//       type: "spring",
//       stiffness: 400,
//       damping: 40
//   }
//   }
// };

const sidebar = {
  open: {
    y: 0,
    x: 0,
    // opacity:1,
    transition: {
      type: "spring",
      stiffness: 400,
      restDelta: 2,
      damping:40
  }
  },
  closed: {
    // y: -490,
    // x: 160,
    x: width<breakPointSmall?(width - 70):(350-70),
    y: width<breakPointSmall?(-600 + 70):(-510+70),
    // opacity: state?1:0,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40
  }
  }
};


const variants2 = {
  open: {
    display: "block",
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  },
  closed: {
    display: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren"},
  }
};

const variants = {
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




  return (
    
  <motion.nav className={`fixed top-0 right-0 h-0 w-[100%] z-[51] sm:w-[350px]`}
    initial={false}
    animate={isOpen ? "open" : "closed"}
    // custom={height}
    ref={containerRef}
    key={width}
    >
    
    <motion.div className={`bg-white/10 backdrop-blur-md z-[51] absolute top-0 forward fill-mode rounded-b-[40px] rounded-tl-[40px] ${width<breakPointSmall?'h-[600px]':'h-[510px]'} right-0 w-[100%] sm:w-[350px]`} variants={sidebar} />
    {/* <motion.div className={`${isOpen?'bg-white':'bg-white/10'} fixed duration-700 top-0 rounded-b-[30px] rounded-tl-[30px] h-[530px] right-0 w-[100%] sm:w-[40vw]`} variants={sidebar} /> */}
    
    <motion.div 
      variants={variants2}
      className='absolute inline-flex rounded-full w-fit top-[18px] z-[51] left-[18px]'>
      <motion.div variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }} >
        <Link  href={`/`} title='Go to the homepage' onClick={()=>selectButton('Home')}>
        {/* <YW
          width='40'
          className='m-2'
          alt="ywdesign svg-logo"
          onClick={()=>selectButton('Home')}/> */}
        <YW className='w-10 h-10' alt="ywdesign logo" />
        </Link> 
      </motion.div>
    </motion.div>

    <Navigation>
      <Button  mobile={width<breakPointSmall} className='' to="" title="Home" text={home[locale].text} mode={selectedB==='Home'?'selected':'unselected'} handleClick={selectButton}/>
      <Button  mobile={width<breakPointSmall} className='' to="services" title="Services"  text={services[locale].text}  mode={selectedB==='Services'?'selected':'unselected'} handleClick={selectButton}/>
      <Button  mobile={width<breakPointSmall} className='' to="aboutme" title="About Me" text={aboutme[locale].text} mode={selectedB==='About Me'?'selected':'unselected'} handleClick={selectButton}/>
      <Button  mobile={width<breakPointSmall} className='' to="roadmap" title="Roadmap" text={roadmap[locale].text} mode={selectedB==='Roadmap'?'selected':'unselected'}  handleClick={selectButton} />
      <Button  mobile={width<breakPointSmall} className='' to="contact" title="Contact"  text={contact[locale].text}  mode={selectedB==='Contact'?'selected':'unselected'} handleClick={selectButton}/>
      <Button  mobile={width<breakPointSmall} className='' to="contact/#Form" title="Contact" text={quote[locale].text} handleClick={selectButton}  mode={'dark'}/>
      <ChooseLanguage mobile={width<breakPointSmall} toggleOpen={()=>toggleOpen()}/>
    </Navigation>
    
    <MenuToggle open={isOpen} toggle={() => {toggleOpen()}} />
  
  </motion.nav>
  );
};

let home = {en: {text: 'Home'}, fr: {text: 'Accueil'}}
let services = {en: {text: 'Services'}, fr: {text: 'Services'}}
let aboutme = {en: {text: 'About Me'}, fr: {text: 'A Propos'}}
let roadmap = {en: {text: 'Workflow'}, fr: {text: 'Votre Chemin'}}
let contact = {en: {text: 'Contact'}, fr: {text: 'Contact'}}
let quote = {en: {text: 'Ask a Quote'}, fr: {text: 'Demander un Devis'}}