import React, { createContext, useContext } from 'react';

import useWindowSize from '@utils/useWindowSize';

import { useRouter } from 'next/router';
import { useCycle } from 'framer-motion';

const AppContext = createContext();

export function AppWrapper({ children, breakPointSmall, scrolled }) {
  let {width, height} = useWindowSize();
  let {locale} = useRouter();

  let screens = {
    xxl: width>=1536,
    xl: width>=1280,
    lg: width>=1024,
    md: width>=768,
    sm: width>=640,
    mobl: width>=420,
    mobm: width>=350,
  }
//   Navbar Open?
//   Shopping Cart Open?
//   Checkout Open?
//   const [isOpen, toggleOpen] = useCycle(false, true);

  let sharedState = {
    width: width, 
    height: height, 
    screens:screens,
    // mobile:width<768,
    // breakPointSmall: breakPointSmall,
    // noBlur: true,
    scrolled: scrolled,
    // isOpen: isOpen,
    // toggleOpen: toggleOpen,
    locale: locale, 
}

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
