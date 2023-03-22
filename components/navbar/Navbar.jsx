import React from "react";
import Nav from "./Nav";
import { useAppContext } from "@components/context/appContext";

export default function Navbar ({from}) {
  let {width, mobile, noBlur, navIsOpen, toggleNav} = useAppContext()

  
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


  return (
      // {/* {width>1023? 
      //   <div className={`hidden min-[1023px]:block z-[50] fixed w-full top-0 duration-500 ${show?'':'-translate-y-20'}`}>
      //     <NavDesk from = {from} />
      //   </div> */}
      //   {/* : */}
        <>  
          {/* PLANE TO DETECT CLICKS OUTSIDE MENU */}
          {mobile && navIsOpen && <div id='navBackground' className='z-20 top-0 fixed w-screen h-screen'/>}
          <Nav from = {from} />
          {/* <NavMobile noBlur={noBlur} from = {from} /> */}
        </>
)  

}