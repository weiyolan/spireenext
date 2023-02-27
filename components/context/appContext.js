import React, { createContext, useContext, useEffect, useState } from 'react';

import useWindowSize from '@utils/useWindowSize';

import { useRouter } from 'next/router';
import { useCycle } from 'framer-motion';

const AppContext = createContext();

export function AppWrapper({ children, breakPointSmall, scrolled }) {
  let { width, height } = useWindowSize();
  let { locale } = useRouter();

  const [navIsOpen, toggleNav] = useCycle(false, true);
  let [navLocked, setNavLocked] = useState(false)
  const [cartIsOpen, toggleCart] = useCycle(false, true);
  let [content, setContent] = useState({ sun: 0, moon: 0, support: 0 })
  let [total, setTotal] = useState(0)

  //   Checkout Open?
  //   Order Confirmation Pop Up?

  // const lightboxClick = (event) => {
  //   if (lightbox && event.target === document.getElementById('lightboxBackground')) {
  //     setLightbox(false);
  //   };
  // };

  function handleLightboxes(event) {
    if (navIsOpen && event.target === document.getElementById('navBackground')) {
      toggleNav()
    } else if (cartIsOpen && event.target === document.getElementById('cartBackground')) {
      toggleCart()
    }
    // console.log(event.target)
  };

  let screens = {
    xxl: width >= 1536,
    xl: width >= 1280,
    lg: width >= 1024,
    md: width >= 768,
    sm: width >= 640,
    mobl: width >= 420,
    mobm: width >= 350,
  }

  // ===================== CART LOGIC ========================
  function addOne(item) {
    setContent(contents => {
      // let oldAmount = contents[item.id]
      let copy = { ...contents }
      copy[item.id] += 1
      return copy
    })

    setTotal(old => old + item.price)
  }

  function removeOne(item) {
    setContent(contents => {
      let copy = { ...contents }
      copy[item.id] = Math.max(copy[item.id] - 1, 0)
      return copy
    })
    setTotal(old => Math.max(old - item.price, 0))
  }

  // useEffect(()=>{
  //   let newTotal = 
  // },[content])


  return (
    <AppContext.Provider
      value={{
        width: width,
        height: height,
        screens: screens,
        locale: locale,
        // mobile:width<768,
        // breakPointSmall: breakPointSmall,
        // noBlur: true,
        scrolled: scrolled,
        navIsOpen: navIsOpen,
        toggleNav: toggleNav,
        navLocked: navLocked,
        setNavLocked: setNavLocked,
        cartIsOpen: cartIsOpen,
        toggleCart: toggleCart,
        handleLightboxes: handleLightboxes,

        cart: {
          addOne: addOne,
          removeOne: removeOne,
          total: total,
          content: content
        }
      }}>

      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
