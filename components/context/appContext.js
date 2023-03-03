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
    // console.log(event.target)
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
    console.log('addOne')
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
    console.log('removeOne')
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

  function updateSupport() {
    console.log('updateSupport', supportAmount)
          // console.log(content)
          // console.log(supportAmount, oldSupportAmount)

    setContent(oldContent => {
      //============== NO SUPPORT YET==============
      if (!oldContent.find((item) => item.id === 'support') && supportAmount>=5) {
        // {id:'moon', price:99, name: 'Moon Merino Base Layer', description:''}
        // console.log('updated content 1')
        // console.log([...oldContent, { id: 'support', price: supportAmount, name: 'Support', qty: 1 }])
        return [...oldContent, { id: 'support', price: supportAmount, name: 'Support', qty: 1 }]
      } else if (!oldContent.find((item) => item.id === 'support') && supportAmount<5){
          // TOAST WITH MESSAGE THAT MINIMUM SUPPORT IS 5€OTHERWISE TO COSTLY UNFORTUNATELY
          console.log('less than 5')
          console.log(content)
          return [...oldContent]
      //============== CHANGE SUPPORT AMOUNT==============
      } else if (supportAmount>=5) {
        let newContent = oldContent.map((item) => {
          if (item.id === 'support') {
            return { ...item, price: supportAmount }
          } else {
            return item
          }
        })
        return newContent

      } else if (supportAmount===0) {
        let newContent = oldContent.filter((item) => item.id !== 'support')
        // console.log('updated content 2')
        // console.log(newContent)
        return newContent
      }
    })
    setTotalPrice(oldPrice => (oldPrice + supportAmount - (oldSupportAmount||0)));
    setOldSupportAmount(supportAmount)
  }

  function removeSupport() {
    setContent(oldContent => {
      let newContent = oldContent.filter((item) => item.id !== 'support')
      return newContent
    })
    setTotalPrice(oldPrice => (oldPrice - (oldSupportAmount||0)));
    setOldSupportAmount(0)
    // setSupportAmount(0)
  }

// useEffect(()=>{console.log(supportAmount)},[supportAmount])

// function updateSupport() {
//   console.log(supportAmount, oldSupportAmount)

//   if (oldSupportAmount === undefined) {
//     setContent(oldContent => {
//       // {id:'moon', price:99, name: 'Moon Merino Base Layer', description:''}
//       console.log('updated content')
//       console.log([...oldContent, { id: 'support', price: supportAmount, name: 'Support', qty: 1 }])
//       return [...oldContent, { id: 'support', price: supportAmount, name: 'Support', qty: 1 }]
//     })

//     // console.log(typeof(amount +0 ))
//     setTotalPrice(oldTotal => oldTotal + supportAmount)
//     setOldSupportAmount(supportAmount)
//   } else if (supportAmount !== oldSupportAmount) {
//     setContent(oldContent => {
//       let newContent = oldContent.map((item) => {
//         if (item.id === 'support') {
//           // item.qty += 1


//           return { ...item, price: supportAmount }
//         } else {
//           return item
//         }
//       })
//       console.log('updated content')
//       console.log(newContent)
//       return newContent
//     })
//     setTotalPrice(oldPrice => (oldPrice + supportAmount - oldSupportAmount));
//     setOldSupportAmount(supportAmount)
//   }
// }

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
let mobile = width < 986


return (
  <AppContext.Provider
    value={{
      width: width,
      mobile:mobile,
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
        removeSupport: removeSupport,
        supportAmount: supportAmount,
        setSupportAmount: setSupportAmount,
      }
    }}>

    {children}
  </AppContext.Provider>
);
}

export function useAppContext() {
  return useContext(AppContext);
}
