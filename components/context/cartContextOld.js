import React, { createContext, useContext } from 'react';

import useWindowSize from '@utils/useWindowSize';

import { useRouter } from 'next/router';
import { useCycle } from 'framer-motion';

const CartContext = createContext();

export function AppWrapper({ children, breakPointSmall, scrolled }) {
  let {width, height} = useWindowSize();
  let {locale} = useRouter();
  const [navIsOpen, toggleNav] = useCycle(false, true);
  const [cartIsOpen, toggleCart] = useCycle(false, true);

//   Navbar Open?
//   Shopping Cart Open?
//   Checkout Open?
//   const [isOpen, toggleOpen] = useCycle(false, true);

  let sharedState = {
    // width: width, 
    // height: height, 
    // screens: screens,
    // // mobile:width<768,
    // // breakPointSmall: breakPointSmall,
    // // noBlur: true,
    // scrolled: scrolled,
    // navIsOpen: navIsOpen,
    // toggleNav: toggleNav,
    // cartIsOpen: cartIsOpen,
    // toggleCart: toggleCart,
    // locale: locale, 
}

  return (
    <CartContext.Provider value={sharedState}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
