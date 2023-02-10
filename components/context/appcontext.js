import React,{ createContext, useContext, useEffect } from 'react';

import useWindowSize from '@utils/useWindowSize';

import { useRouter } from 'next/router';
import { useCycle } from 'framer-motion';

const AppContext = createContext();

export function AppWrapper({ children, breakPointSmall, scrolled }) {
  let {width} = useWindowSize();
  let {locale} = useRouter();


//   Navbar Open?
//   Shopping Cart Open?
//   Checkout Open?
//   const [isOpen, toggleOpen] = useCycle(false, true);

  let sharedState = {
    width: width, 
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