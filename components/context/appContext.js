import React, { createContext, useContext } from 'react';

import useWindowSize from '@utils/useWindowSize';

import { useRouter } from 'next/router';
import { useCycle } from 'framer-motion';

const AppContext = createContext();

export function AppWrapper({ children, breakPointSmall, scrolled }) {
  let { width, height } = useWindowSize();
  let { locale } = useRouter();

  const [navIsOpen, toggleNav] = useCycle(false, true);
  const [cartIsOpen, toggleCart] = useCycle(false, true);
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
  function addOne () {
    
  }



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
        cartIsOpen: cartIsOpen,
        toggleCart: toggleCart,
        handleLightboxes:handleLightboxes,

        cart: {}
      }}>

      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
