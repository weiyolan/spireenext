import '@/styles/globals.css'
import Head from 'next/head'
import {Work_Sans, Quicksand} from '@next/font/google'
// import {AppWrapper} from '../components/Context';

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
  return (
  <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

      </Head>
      {/* <AppWrapper breakPointSmall={640} scrolled={scrolled}> */}
        
        <div className={`${workSans.variable} ${quickSand.variable} font-sans relative scroll-smooth cursor-default w-full overflow-hidden `}>
          {/* <Background scrolled={scrolled}/> */}

          <Component {...pageProps} />

        </div>
      {/* </AppWrapper> */}
    </>
    )
}
