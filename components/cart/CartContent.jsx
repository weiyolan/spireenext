import React, { useRef, useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import { usePageContext } from "../context/pageContext";
import AccentTitle from '../atoms/AccentTitle';
import Button from "../atoms/Button";
import { useAppContext } from "../context/appContext";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import getStripe from "@/lib/getStripe";
import ArrowLink from "../atoms/ArrowLink";

const containerVariants = {
  open: {
    display: "block",
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  },
  closed: {
    display: "none",
    transition: { staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" },
  }
};

const childVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100, staggerChildren: 0.1, delayChildren: 0.05 }
    }
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, staggerChildren: 0.05, staggerDirection: -1, when: "afterChildren" }
    }
  }
};


// const itemIds = [0, 1, 2, 3, 4];

export default function CartContent({ onMouseEnter, onMouseLeave }) {
  // Dimensions caluclation is not possible on mount because intially display is none
  // let [dimensions, setDimensions] = useState({width:undefined,height:undefined})
  let { cartIsOpen, cart, width , toggleCart} = useAppContext()
  const { mobile } = usePageContext()
  // const {items} = useAppContext().cart
  // const {total} = useAppContext().cart
  // let item1 = {
  //   name: 'Sun Merino Base Layer',
  //   details: ' ',
  //   price: 99,
  //   image: ' ',
  //   qty: cart.content.sun,
  //   size: 'l',
  //   id: 'sun'
  // }
  // let item2 = {
  //   name: 'Moon Merino Base Layer',
  //   details: ' ',
  //   price: 99,
  //   image: ' ',
  //   qty: cart.content.moon,
  //   size: 'xs',
  //   id: 'moon',
  // }
  // let item3 = {
  //   name: 'Support',
  //   details: ' ',
  //   price: 15,
  //   image: ' ',
  //   qty: cart.content.support,
  //   size: 'xs',
  //   id: 'support',
  // }


  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({content:cart.content}),
    });

    if (response.statusCode === 500) return;
    const data = await response.json();
    // console.log(data)
    stripe.redirectToCheckout({ sessionId: data.id });

  }

  return (
    <motion.div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      className={`m-0 px-4 z-[51] absolute flex flex-col justify-between text-center w-screen min-[480px]:w-[320px] top-0 right-0 min-[480px]:right-2 min-[480px]:top-2`}
      variants={containerVariants}>

      {/* <div className='grid grid-flow-row gap-4 grid-cols-1 h-full '> */}


      {/*  ====================== CART WITH MIN 1 ITEM ====================== */}
      {cart.content.length >= 1 &&
        <>
          <motion.div className='block mt-4' variants={childVariants}>
            <AccentTitle text='Your Cart' />
          </motion.div>

          <motion.div className='flex flex-col mb-5 p-4 gap-2 bg-black/30 rounded-2xl' style={{ bottom: 0 + 'px' }} variants={childVariants}>
            <CartItem title />
            {
              cart.content.map((item) => {
                // console.log(item)
                return <CartItem key={item.id} item={item} />
              })
            }
          </motion.div>

          {/* <motion.div className='flex flex-col mb-5 p-4 gap-2 bg-black/30 rounded-2xl' style={{ bottom: 0 + 'px' }} variants={childVariants}> */}
            <CartTotal />
          {/* </motion.div> */}

          <motion.div className='block mb-5' style={{ bottom: 0 + 'px' }} variants={childVariants}>
            <Button text='To Checkout' handleClick={handleCheckout} />
          </motion.div>
        </>
      }
      {/*  ====================== EMPTY CART ====================== */}
      {cart.content.length < 1 && 
      <>
        <motion.div className='flex flex-col justify-center items-center mt-12 mb-12' variants={childVariants}>
          <svg className={`w-20 mb-4`}
            alt='shopping cart icon' viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path stroke={"white"} strokeWidth={0} className={`transition-all duration-500 ${cartIsOpen ? 'delay-[0]' : 'delay-300'}`} d="M27.2487 9.75566C27.2832 8.47754 27.0592 7.20562 26.5903 6.01611C26.1214 4.8266 25.4172 3.74398 24.52 2.83312C23.6227 1.92226 22.5508 1.2019 21.3684 0.715193C20.1861 0.22849 18.9177 -0.0145372 17.6392 0.000672219C16.3607 0.0158817 15.0984 0.289015 13.928 0.803707C12.7576 1.3184 11.7031 2.06406 10.8277 2.99601C9.95237 3.92796 9.27414 5.02702 8.83368 6.22735C8.39322 7.42768 8.1996 8.70456 8.2644 9.98151L10.5643 9.86479C10.5152 8.89738 10.6619 7.93003 10.9956 7.02067C11.3293 6.11132 11.8431 5.27868 12.5063 4.57264C13.1695 3.8666 13.9683 3.3017 14.855 2.91177C15.7417 2.52185 16.698 2.31492 17.6666 2.3034C18.6352 2.29188 19.5961 2.47599 20.4918 2.84472C21.3875 3.21344 22.1996 3.75918 22.8794 4.44924C23.5592 5.1393 24.0926 5.95948 24.4479 6.86064C24.8031 7.7618 24.9728 8.72539 24.9467 9.69369L27.2487 9.75566Z" fill={"white"} />
            <path stroke={"white"} strokeWidth={0} className={`transition-all duration-500 ${cartIsOpen ? 'delay-[0]' : 'delay-300'}`} fillRule="evenodd" clipRule="evenodd" d="M30.3056 12.7513C29.3168 11.2027 27.837 10.3147 25.5518 10.5125L25.4972 10.5172H9.53162L9.5057 10.5162C7.27343 10.4249 5.74574 11.4736 4.70753 13.1683C3.63185 14.9242 3.11498 17.353 3.11537 19.7478C3.11582 22.5384 3.95351 24.9581 5.52569 26.6668C7.08192 28.3581 9.4727 29.4788 12.8461 29.4788H22.1538C25.7928 29.4788 28.1652 28.3303 29.6455 26.657C31.1497 24.9566 31.8846 22.542 31.8846 19.748C31.8846 16.8628 31.356 14.3964 30.3056 12.7513ZM32.4451 11.3852C33.8656 13.6099 34.4231 16.6332 34.4231 19.748C34.4231 22.9539 33.581 26.0394 31.5468 28.3389C29.4885 30.6657 26.361 32.0172 22.1538 32.0172H12.8461C8.87338 32.0172 5.76465 30.6755 3.65767 28.3856C1.56664 26.113 0.577435 23.0327 0.576905 19.7482C0.57647 17.0554 1.14692 14.1211 2.54296 11.8422C3.97258 9.50859 6.29228 7.85369 9.58256 7.97877H25.3894C28.6146 7.71767 30.9716 9.07735 32.4451 11.3852Z" fill={"white"} />
          </svg>
          <h3 className='font-quick text-white  '>{`Your Cart\nIs Empty`}</h3>

        </motion.div>

        <motion.div className='block mb-5' style={{ bottom: 0 + 'px' }} variants={childVariants}>
          <Button med text='Visit collection' to='/order' handleClick={()=>{if(width<648){toggleCart()}}} />
          {/* <ArrowLink tabIndex={0} text='SEE OUR COLLECTION' to='collection'/> */}
        </motion.div>

        <motion.div className='block mb-5' style={{ bottom: 0 + 'px' }} variants={childVariants}>
          <Button med text='Add Support' to='/support'  handleClick={()=>{if(width<648){toggleCart()}}}/>
        </motion.div>

      </>

      }


      {/* </div> */}


    </motion.div>
  )
}


