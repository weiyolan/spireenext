import React, { useRef, useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import { usePageContext } from "../context/pageContext";
import AccentTitle from '../atoms/AccentTitle';
import Button from "../atoms/Button";
import { useAppContext } from "../context/appContext";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

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
  let {cartIsOpen, cart} = useAppContext()
  const { mobile } = usePageContext()
  // const {items} = useAppContext().cart
  // const {total} = useAppContext().cart
  let item1 = {
    name: 'Sun Merino Base Layer',
    details: ' ',
    price: 99,
    image: ' ',
    qty: cart.content.sun,
    size: 'l',
    id:'sun'
  }
  let item2 = {
    name: 'Moon Merino Base Layer',
    details: ' ',
    price: 99,
    image: ' ',
    qty: cart.content.moon,
    size: 'xs',
    id:'moon',
  }
  let item3 = {
    name: 'Support',
    details: ' ',
    price: 15,
    image: ' ',
    qty: cart.content.support,
    size: 'xs',
    id:'support',
  }
  let total = {
    totalPrice:198,
    tva:49.5,
    shipping:0,
  }

  return (
    <motion.div  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      className={`m-0 px-4 z-[51] absolute flex flex-col justify-between text-center w-screen min-[480px]:w-[320px] top-0 right-0 min-[480px]:right-2 min-[480px]:top-2`}
      variants={containerVariants}>

      {/* <div className='grid grid-flow-row gap-4 grid-cols-1 h-full '> */}
      <motion.div className='block mt-4' variants={childVariants}>
        <AccentTitle text='Your Cart' />
      </motion.div>

      <motion.div className='flex flex-col mb-5 p-4 gap-2 bg-black/30 rounded-2xl' style={{ bottom: 0 + 'px' }} variants={childVariants}>
        <CartItem title />
        <CartItem item={item1} />
        <CartItem item={item2}/>
        <CartItem item={item3}/>
      </motion.div>

      <motion.div className='flex flex-col mb-5 p-4 gap-2 bg-black/30 rounded-2xl' style={{ bottom: 0 + 'px' }} variants={childVariants}>
        <CartTotal total={total} />
      </motion.div>

      <motion.div className='block mb-5' style={{ bottom: 0 + 'px' }} variants={childVariants}>
        <Button text='Checkout' />
      </motion.div>

      {/* </div> */}


    </motion.div>
  )
}


