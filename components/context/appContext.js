import React, { createContext, useContext, useEffect, useState } from 'react';

import useWindowSize from '@utils/useWindowSize';

import { useRouter } from 'next/router';
import { useCycle } from 'framer-motion';
import useLocalStorage from '@/utils/useLocalStorage';

const AppContext = createContext();

export function AppWrapper({ children, breakPointSmall, scrolled }) {
  let { width, height } = useWindowSize();
  let { locale } = useRouter();

  const [navIsOpen, toggleNav] = useCycle(false, true);
  let [navLocked, setNavLocked] = useState(false)
  const [cartIsOpen, toggleCart] = useCycle(false, true);
  let [content, setContent] = useState([])

  let [supportAmount, setSupportAmount] = useState(0)
  let [oldSupportAmount, setOldSupportAmount] = useState(undefined)

  let [totalPrice, setTotalPrice] = useState(0)

  // {id:'moon', price:99, name: 'Moon Merino Base Layer', description:''}

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
  function addOne(newItem) {
    setContent(oldContent => {
      if (oldContent.find((item) => item.id === newItem.id)) {
        let newContent = oldContent.map((item) => {
          if (item.id === newItem.id) {
            // item.qty += 1
            return { ...item, qty: item.qty + 1 }
          } else {
            return item
          }
        })
        return newContent
      }
      else {
        return [...oldContent, { ...newItem, qty: 1 }]
      }
    })
    setTotalPrice(old => old + newItem.price)
  }

  function removeOne(newItem) {
    setContent(oldContent => {
      let oldQty = oldContent.find((item) => item.id === newItem.id).qty
      if (oldQty > 1) {
        let newContent = oldContent.map((item) => {
          if (item.id === newItem.id) {
            return { ...item, qty: item.qty - 1 }
          } else {
            return item
          }
        })
        return newContent
      } else if (oldQty = 1) {
        let newContent = oldContent.filter((item) => item.id !== newItem.id)
        return newContent
      }
    })
    setTotalPrice(old => Math.max(old - newItem.price, 0))
  }

  function updateSupport(amount) {
    if (oldSupportAmount === undefined) {
      setContent(oldContent => {
        // {id:'moon', price:99, name: 'Moon Merino Base Layer', description:''}
        return [...oldContent, { id: 'support', price: amount+0, name: 'Support', qty:1 }]
      })
      // console.log(amount)
      // console.log(typeof(amount +0 ))
      setTotalPrice(oldTotal => oldTotal + amount)
      setOldSupportAmount(amount+0)
    } else if (amount !== oldSupportAmount) {
      setContent(oldContent => {
        let newContent = oldContent.map((item) => {
          if (item.id === 'support') {
            // item.qty += 1
            return { ...item, price: amount }
          } else {
            return item
          }
        })
        return newContent
      })
      setTotalPrice(oldPrice => (oldPrice + amount - oldSupportAmount));
      setOldSupportAmount(amount)
    }
  }

  // useEffect(()=>{
  //   console.log(totalPrice)
  // },[totalPrice])


// function updateSupport(newAmount) {
//   let diff = newAmount - support;

//   setSupport(oldAmount => {
//     if (oldAmount !== newAmount) {
//       return newAmount
//     }
//   })
//   setTotalPrice(oldPrice => oldPrice + Math.max(diff, -support))
// }
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
        totalPrice: totalPrice,
        content: content,
        updateSupport: updateSupport,
        supportAmount:supportAmount,
        setSupportAmount:setSupportAmount,
      }
    }}>

    {children}
  </AppContext.Provider>
);
}

export function useAppContext() {
  return useContext(AppContext);
}
