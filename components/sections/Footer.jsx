import { useState, useEffect, useRef } from "react";
import Link from "next/link"
import AccentTitle from "../atoms/AccentTitle"
import SpireeLogo from "../atoms/SpireeLogo"
import StayInTouch from "../atoms/StayInTouch"
import Image from "next/image";

// import useWindowSize from "@utils/useWindowSize";

import { motion } from 'framer-motion'
import { useAppContext } from "../context/appContext";
import { usePageContext } from "../context/pageContext";
import useDimensions from "@/utils/useDimensions";

const socialList = {
  en: [{ text: 'Instagram', ext: true, link: 'https://www.instagram.com/spiree_officiel/' }, { text: 'Facebook', ext: true, link: 'https://www.facebook.com/groups/runeverywhere.spiree/' }],
  fr: [{ text: 'Instagram', ext: true, link: 'https://www.instagram.com/spiree_officiel/' }, { text: 'Facebook', ext: true, link: '/services/#Website' }]
};
const navigateList = {
  en: [{ text: 'Our Collection', link: '/collection' }, { text: 'Pre-Order Sun & Moon', link: '/collection/#pre-order', disabled: false }, { text: 'About Spirée', link: '/about', disabled: false }],
  fr: [{ text: 'Notre Collection', link: '/collection', disabled: false }, { text: 'Pre-Commander', link: '/collection/#pre-order', disabled: false }, { text: 'A Propos Spirée', link: '/about', disabled: false }]
};
const legalList = {
  en: [{ text: 'Legal Notice', link: '/', disable: true }, { text: 'Terms of Use', link: '/services', disable: true }, { text: 'Cookie Notice', link: '/aboutme', disable: true }],
  fr: [{ text: 'Legal Notice', link: '/', disable: true }, { text: 'Terms of Use', link: '/services', disable: true }, { text: 'Cookie Notice', link: '/aboutme', disable: true }],
};
const contactList = {
  en: [
    // { text: 'Info', ext: false, link: '/contact/#informations' },
    { text: 'hello@spiree.run', ext: true, link: "mailto:contact@ywdesign.co?subject=Website%20Project&body=Hi%20Yolan%2C%0A%0AI%20have%20a%20website%20that%20needs%20an%20update.%0ACould%20we%20talk%20about%20this%20any%20time%20soon%3F%0A%0AThanks%20in%20advance%2C%0A%0A" },
    { text: 'Call', ext: false, link: 'tel:+33659775111' },
    // { text: 'Whatsapp', ext: true, link: 'https://wa.me/32471124525?text=Hi+Yolan%2C+%0D%0AI+got+your+WhatsApp+from+your+website+ywdesign.co.+Are+you+free+to+talk+any+time+soon+about+a+project+I+have+in+mind%3F+%0D%0AThanks%2C%0D%0A' },
  ], fr: [
    // { text: 'Infos', ext: false, link: '/contact/#informations' },
    { text: 'hello@spiree.run', ext: true, link: "mailto:contact@ywdesign.co?subject=Website%20Project&body=Hi%20Yolan%2C%0A%0AI%20have%20a%20website%20that%20needs%20an%20update.%0ACould%20we%20talk%20about%20this%20any%20time%20soon%3F%0A%0AThanks%20in%20advance%2C%0A%0A" },
    { text: 'Appeler', ext: false, link: 'tel:+33659775111' },
    // { text: 'Whatsapp', ext: true, link: 'https://wa.me/32471124525?text=Hi+Yolan%2C+%0D%0AI+got+your+WhatsApp+from+your+website+ywdesign.co.+Are+you+free+to+talk+any+time+soon+about+a+project+I+have+in+mind%3F+%0D%0AThanks%2C%0D%0A' },
  ]
};

const financialInfo = {
  en: [
    '2023 SPIRÉE, Inc. All rights reserved.',
    // 'VAT: BE0794.586.584',
    // 'legal address: Hof Savelkoul 40, 2640 Mortsel, Antwerp, Belgium',
    // 'tel: +33638565302', 
    // 'email: contact@ywdesign.co', 
  ],
  fr: [
    '2023 SPIRÉE, Inc. All rights reserved.',
    // 'TVA: BE0794.586.584',
    // 'adresse juridique: Hof Savelkoul 40, 2640 Mortsel, Antwerp, Belgique',
    // 'tel: +33638565302', 
    // 'email: contact@ywdesign.co', 
  ]
};


export default function Footer({ style, noMotion, setFooterHeight }) {
  let { width, scrolled, locale } = useAppContext();
  let { mobile } = usePageContext();
  let breakPointSmall = 640;

  let footerRef = useRef(null)

  let [dimensions, setDimensions] = useState({ width: undefined, height: undefined })



  useEffect(() => {

    function handleSize() {
      const { width, y } = footerRef.current.getBoundingClientRect();
      const height = footerRef.current.offsetHeight;
      let styles = window.getComputedStyle(footerRef.current);
      let margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);
      if (height > 0) {


        // Math.ceil(height + margin);

        setDimensions({ width: width, height: Math.ceil(height + margin), normalHeight: height, top: y, bottom: y + height });
        // print && console.log('dimensions setted: ' + 'width: ' + width+' , height: '+ height+ ', top: '+y+', bottom: '+(y + height) )
      }
    }

    window.addEventListener("resize", handleSize);

    handleSize()

    return () => window.removeEventListener("resize", handleSize);
    // print && console.log(dimensions?.height === undefined || )

  }, [mobile, setFooterHeight])



  useEffect(() => {
    if (dimensions.height > 0 && setFooterHeight !== undefined) {
      setFooterHeight(dimensions.height)
    }
  }, [dimensions])

  function getContent() {
    return (
      <>
        <div className='flex flex-col sm:flex-row items-center sm:items-start justify-between max-w-6xl mx-auto'>


          <Links title='Navigate' list={navigateList[locale]} />
          <Links title='Socials' list={socialList[locale]} />

          <div className='flex flex-col items-center sm:items-start'>
            <AccentTitle text='Stay In Touch' />
            <StayInTouch />
          </div>

          {/* {(!mobile || (mobile && setFooterHeight === undefined)) && */}
          {/* <div className="mb-4 w-full sm:w-fit">
                <div className='mx-auto w-fit text-center'>
                  <Link href='/' title='Go to homepage'>
                    <SpireeLogo className='w-8 sm:w-14' alt='Spiree logo in white' />
                  </Link>
                </div><p className='text-white text-center text-xs font-extralight' ><br /></p>
              </div> */}

          {(!mobile || (mobile && setFooterHeight === undefined)) && <Links title='Contact' list={contactList[locale]} />}
          {(!mobile || (mobile && setFooterHeight === undefined)) && <Links title='Legal' list={legalList[locale]} />}

        </div>

        <div role='presentation' className='w-full text-xs text-center mt-2 text-white font-thin'>
          <ul role='presentation' className='inline-flex flex-wrap justify-center'>
            {financialInfo[locale].map((val, i) => { return (<li role='presentation' className={`${i === 0 ? '' : 'pl-1'}`} key={val}>{`${i === 0 ? '' : '∘ '}${val}`}</li>) })}
          </ul>
        </div>


      </>

    )
  }

  // let [style,setStyle] = useState({transform: 'translateY(100%) ', opacity:0 })
  // let [appeared,setAppeared] = useState(false)

  // useEffect(()=>{console.log(breakPointSmall)})

  // useEffect(()=>{

  //   if (!appeared && scrolled>0.85) {
  //     setStyle({transform: 'translateY(0) ', opacity:1})
  //     setAppeared(true)
  //   } else if (appeared && scrolled<0.85) {
  //     setStyle({transform: 'translateY(100%) ', opacity:0})
  //     setAppeared(false)
  //   }


  // },[appeared, scrolled]) 

  if (noMotion) {
    return (
      <section
        ref={footerRef}
        style={{ ...style }}
        className={`${style?.position === undefined ? 'relative' : ''} backdrop-blur bg-black/20 mt-4 md:mt-10 px-4 pt-4 pb-2 lg:pt-8 w-full`}>

        {getContent()}

      </section>)
  }

  return (
    <motion.section ref={footerRef}
      initial={{ y: `${width < breakPointSmall ? 100 : 200}` }}
      whileInView={{ y: 0, transition: { type: 'spring', stiffness: 200, damping: 25 } }}
      viewport={{ once: true }}

      className={`${style?.position === undefined && 'relative'} backdrop-blur bg-black/20 mt-4 md:mt-10 pb-2 sm:p-8 lg:p-8 bottom-0 w-full`}>

      {getContent()}

    </motion.section>
  )
}

function Links({ title, list }) {
  return (
    // <div className={`${position === 'center' ? 'text-center ' : position === 'left' ? 'text-left ' : 'text-right '}  align-start px-0`}>
    <div className={`text-center sm:text-left `}>
      <AccentTitle text={title} />
      <List list={list} />
    </div>
  )
}

function List({ list }) {

  return (
    <ul className='font-quick '>
      {list.map((item, i) => {
        if (item.ext) {
          return (
            <li key={i}
              className={`text-white font-light whitespace-nowrap 
            my-1 first:mt-0
            text-sm sm:text-sm  `} >
              <Link href={item.link} target='_blank' className='focus:outline-none cursor-alias focus-within:scale-110 duration-200 border border-transparent focus-within:border-b-white hover:border-b-white ' rel="noopener noreferrer" >
                {item.text}


              </Link>
            </li>
          )
        }
        else {
          return (
            <li key={i}
              className={`${item.disabled ? 'text-primary/90' : 'text-white'} font-light whitespace-nowrap 
          my-1  first:mt-0
          text-sm sm:text-sm `} >
              {item.disabled ? item.text :
                <Link className='focus:outline-none focus-within:scale-110 duration-200 border border-transparent focus-within:border-b-white hover:border-b-white  ' href={item.link}>
                  {item.text}
                </Link>}
            </li>)
        }
      })}
    </ul>

  )
}

