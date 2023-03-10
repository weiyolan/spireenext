import * as React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../context/appContext";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
const deskVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: {
      delay: 0.5,
      x: { stiffness: 1000 }
    }
  }
};

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export default function NavItem ({ children, className }) {

  const {mobile} = useAppContext();
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li className={className}
      variants={mobile?variants:deskVariants}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.95 }}
    >
      {children}
      {/* <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} /> */}
    </motion.li>
  );
};
