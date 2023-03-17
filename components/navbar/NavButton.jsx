import Link from "next/link"
// import { useRouter } from "next/router"
import { motion } from "framer-motion";
import { useAppContext } from "../context/appContext";
import { usePageContext } from "../context/pageContext";


export default function NavButton({ to, text, selectedB, handleClick }) {
  const { locale } = useAppContext();
  const {mobile} = usePageContext()
  // let variants = {
  //   open: {
  //     y: 0,
  //   },
  //   closed: {
  //     y: 0,
  //   }
  // }

  return (
    // ${locale === 'en' ? 'md:mx-4 lg:mx-6' : 'md:mx-0 lg:mx-2'}
    <Link className={`${selectedB === to ? 'font-normal border-b-white hover:border-b-white/20 ' :' font-extralight hover:border-b-white' } 
        border border-solid border-transparent text-primary active:font-medium text-2xl md:text-base
        flex px-0 py-0 mx-0 md:mx-4 lg:mx-6 
        font-sans textcenter self-center whitespace-nowrap
        duration-500 cursor-pointer select-none 
        outline-none focus-visible:outline-primary  `}
      href={`/${to}`}
      onClick={() => handleClick(to)}
    // title={`Go to the ${text} page`}
    >

      <motion.div
      // variants={variants}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.95 }}
      >{text}
      </motion.div>
    </Link >
  )


}
