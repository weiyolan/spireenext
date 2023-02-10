import '@/styles/globals.css'
import Head from 'next/head'
import React, {useState} from 'react'
import {Work_Sans, Quicksand} from '@next/font/google'
import {AppWrapper} from '@context/appcontext';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-worksans',
  display:'swap',
})

const quickSand = Quicksand({
  subsets: ['latin'],
  variable:'--font-quicksand',
  display:'swap',
  // weight:[300,400,500,600,700],
})

export default function App({ Component, pageProps }) {
  let [scrolled, setScrolled] = useState(0)
  
  useEffect(()=>{

    function handleScroll () {
      let ratio = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)
      setScrolled(ratio)
    }
    
    let ratio = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)
    setScrolled(ratio)
    
    window.addEventListener('scroll', handleScroll, {passive:true})

    return () => {window.removeEventListener('scroll', handleScroll)}
  },[])

  return (
  <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

      </Head>

      <AppWrapper scrolled={scrolled}>
        
        <div className={`${workSans.variable} ${quickSand.variable} font-sans relative scroll-smooth cursor-default w-full overflow-hidden `}>

          <Component {...pageProps} />

        </div>
      </AppWrapper>

    </>
    )
}
