import Link from "next/link"
// import { useRouter } from "next/router"
import { motion } from "framer-motion";
import { useAppContext } from "../context/appContext";
import { usePageContext } from "../context/pageContext";


export default function NavbarButton({ to, text, selectedB, handleClick, darkMode }) {
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
    <Link className={`${selectedB === to ? 'border-b-white font-normal ' : ' hover:border-b-white '}
        border border-solid border-transparent text-white active:font-medium
        flex px-0 py-0 mx-0 md:mx-4 lg:mx-6 
        font-sans  ${mobile ? 'text-lg font-thin' : 'text-base font-extralight'} textcenter self-center whitespace-nowrap
        duration-500 cursor-pointer select-none 
        outline-none focus-visible:outline-primary  `}
      href={`/${to}`}
      onClick={() => handleClick(title)}
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
