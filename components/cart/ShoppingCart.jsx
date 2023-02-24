import React,{useState,useEffect} from "react";
import Cart from "./Cart";
import { useAppContext } from "@components/context/appContext";
import { usePageContext } from "../context/pageContext";

export default function ShoppingCart () {
  let {width, noBlur, cartIsOpen} = useAppContext()
  let {mobile} = usePageContext()

// =================================
  // FOR A NAVBAR THAT DISAPPEARS UP WHEN SCROLLING DOWN
  // let [lastTop, setLastTop] = useState(0)
  // let [show, setShow] = useState(true)

  // useEffect(()=>{
  //   function handleScroll () {
  //     if(window.scrollY > lastTop){ //if it will be greater than the previous
  //       setShow(false);//set the value to the negetive of height of navbar 
  //     }
  //     else{
  //       setShow(true);
  //     }
  //     setLastTop(window.scrollY); //New Position Stored
  //   }

  //   window.addEventListener('scroll', handleScroll, ) //{passive:true}
  //   return () => {window.removeEventListener('scroll', handleScroll)}
  // },[lastTop])
// =================================
// useEffect(()=>{
//   console.log(cartIsOpen)
// })

  return (
      // {/* {width>1023? 
      //   <div className={`hidden min-[1023px]:block z-[50] fixed w-full top-0 duration-500 ${show?'':'-translate-y-20'}`}>
      //     <NavDesk from = {from} />
      //   </div> */}
      //   {/* : */}
        <>  
          {/* PLANE TO DETECT CLICKS OUTSIDE MENU */}
          {cartIsOpen && <div id='cartBackground' className='z-20 fixed top-0 w-screen h-screen'/>}
          {/* {console.log(cartIsOpen)} */}
          <Cart  />
          {/* <NavMobile noBlur={noBlur} from = {from} /> */}
        </>
)  

}