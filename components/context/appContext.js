import React, { createContext, useContext, useEffect, useState } from 'react';

import useWindowSize from '@utils/useWindowSize';
import { toast } from 'react-hot-toast';
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

  let [content, setContent] = useLocalStorage('content', [])
  let [supportAmount, setSupportAmount] = useLocalStorage('supportAmount', 0)
  let [oldSupportAmount, setOldSupportAmount] = useLocalStorage('oldSupportAmount', undefined)
  let [totalPrice, setTotalPrice] = useLocalStorage('totalPrice', 0)

  // useEffect(()=>{



  // },[content, oldSupportAmount, supportAmount, totalPrice])

  // console.log(localStorage)
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
    // console.log('addOne')
    setContent(oldContent => {
      if (oldContent.find((item) => item.id === newItem.id && item.size === newItem.size)) {
        let newContent = oldContent.map((item) => {
          if (item.id === newItem.id && item.size === newItem.size) {
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
    toast.success(`${newItem.id==='sun'?'Sun model':'Moon model'}, size ${newItem.size.toUpperCase()} added to cart.`, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#FFFAEA',
      },
    })
  }

  function removeOne(newItem) {
    // console.log('removeOne')


    setContent(oldContent => {
      // console.log('oldContent:')
      // console.log(oldContent)
      // console.log(oldQty)
      let oldQty = content.find((item) => item.id === newItem.id && item.size === newItem.size)?.qty

      if (oldQty > 1) {
        let newContent = oldContent.map((item) => {
          if (item.id === newItem.id && item.size === newItem.size) {
            return { ...item, qty: item.qty - 1 }
          } else {
            return item
          }
        })
        return newContent
      } else if (oldQty = 1) {
        let newContent = oldContent.filter((item) => !(item.id === newItem.id && item.size === newItem.size))
        return newContent
      } else return oldContent
    })

    setTotalPrice(old => Math.max(old - newItem.price, 0))
      toast.success(`${newItem.id==='sun'?'Sun model':'Moon model'}, size ${newItem.size.toUpperCase()} removed from cart.`, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#FFFAEA',
        },
      })
    
  }

  function updateSupport(amount) {
    // console.log(amount, typeof amount === 'number')
    let newSupportAmount = typeof amount === 'number' ? amount : supportAmount
    // let update = false;
    // console.log(amount, supportAmount, newSupportAmount)
    // console.log(update)
    if (newSupportAmount < 5) {
      // TOAST WITH MESSAGE THAT MINIMUM SUPPORT IS 5€OTHERWISE TO COSTLY UNFORTUNATELY
      toast.error(`${'Sorry, your amount should be €5 or more.'}`, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#FFFAEA',
        },
      })

      // console.log('less than 5')
      // console.log(content)
      return
    }

    //============== ADD SUPPORT TO BASKET==============
    if (!content.find((item) => item.id === 'support')) {
      // console.log('no support yet')
      // console.log(newSupportAmount, oldSupportAmount)
      setContent(oldContent => {
        // console.log(oldContent)
        // if (!oldContent.find((item) => item.id === 'support')) {
        // console.log('updated content 1')
        // console.log([...oldContent, { id: 'support', price: newSupportAmount, name: 'Support', qty: 1 }])
        return [...oldContent, { id: 'support', price: newSupportAmount, name: 'Support', qty: 1 }]
      })

      toast.success(`${'Support added successfully'}`, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#FFFAEA',
        },
      })
    }
    else if (oldSupportAmount === newSupportAmount) {

      toast.success(`€${newSupportAmount} support already in cart.`, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#FFFAEA',
        },
        icon: '🥳'
      })
    } else {
      //============== CHANGE SUPPORT AMOUNT==============
      // console.log('Yes,  support found in basket')
      setContent(oldContent => {

        let newContent = oldContent.map((item) => {
          if (item.id === 'support') {
            return { ...item, price: newSupportAmount }
          } else {
            return item
          }
        })

        return newContent

      })
      toast.success(`${'Support modified successfully'}`, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#FFFAEA',
        },
      })
    }
    // console.log(update)
    // console.log(update)
    // setTotalPrice(oldPrice => (oldPrice + newSupportAmount - (oldSupportAmount || 0)));
    setOldSupportAmount(newSupportAmount)

  }



  function removeSupport() {
    setContent(oldContent => {
      let newContent = oldContent.filter((item) => item.id !== 'support')
      return newContent
    })
    // setTotalPrice(oldPrice => (oldPrice - (oldSupportAmount || 0)));
    setSupportAmount(0)
    setOldSupportAmount(0)

    toast.success('Support removed successfully.', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#FFFAEA',
      },
    })

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
        mobile: mobile,
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
          oldSupportAmount: oldSupportAmount,
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
