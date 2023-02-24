import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "@components/context/appContext";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    // stroke={`${props.open?'#171B4D':'hsl(236, 0%, 100%)'}`}
    stroke={`${props.open?'#FFF':'hsl(236, 0%, 100%)'}`}
    // stroke="hsl(236, 45%, 20%)"
    strokeLinecap="round"
    {...props}
  />
);

export default function NavToggle ({ open, toggle, className }) {
    const {locale} = useAppContext()
    return (
    <button title={`${locale==='en'?'Menu toggle':'Ouvrir et fermer le menu'}`} 
    className={' ' + className}
    onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
        <Path open={open}
            variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
            }}
        />
        <Path open={open}
            d="M 2 9.423 L 20 9.423"
            variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
        />
        <Path open={open}
            variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
            }}
        />
        </svg>
    </button>
    )
};
