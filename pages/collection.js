import React, {  useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import BackgroundSun from '@/components/sections/BackgroundSun'
// import BackgroundMoon from '@/components/sections/BackgroundMoon'
import { PageWrapper } from '@/components/context/pageContext'
import { useAppContext } from '@/components/context/appContext'
// import { useDimensions } from '@/utils/useDimensions'

// import Title from '@/components/atoms/Title'
import Layout from '@/components/sections/Layout'
// import Footer from '@/components/sections/Footer'

import Navbar from '@/components/navbar/Navbar'
import ShoppingCart from '@/components/cart/ShoppingCart'
// import SunTitle from '@/components/atoms/SunTitle'
// import SunGallery from '@/components/sections/SunGallery'
// import SunSign from '@/components/atoms/SunSign'
// import SunTitlePage from '@/components/atoms/SunTitlePage'
import FadeDiv from '@/components/scroll/FadeDiv'
import SunDetails from '@/components/sections/SunDetails'
import SunResponsibilities from '@/components/sections/SunResponsibilities'
// import SubTitle from '@/components/atoms/SubTitle'
// import AccentTitle from '@/components/atoms/AccentTitle'
import SunCare from '@/components/sections/SunCare'
import SunOrder from '@/components/sections/SunOrder'
import SunSwitch from '@/components/atoms/SunSwitch'
import SunHero from '@/components/sections/SunHero'

import {client} from '@lib/sanity'


let responsibilities = [
  { icon: <div></div>, title: 'Planet', text: "Merino wool is a sustainable clothing choice with minimal ecological impact. Its production process uses less energy and water compared to synthetic fibers, and its natural antibacterial properties reduce the need for frequent washing, extending its lifespan. Additionally, merino wool is biodegradable and can be recycled, making it a responsible choice for those who want to reduce their environmental footprint. At Spiree, we take pride in using this eco-friendly fabric for our products, ensuring you stay warm and comfortable while reducing your impact on the planet." },
  { icon: <div></div>, title: 'Non Mulesing', text: "At Spiree, we care deeply about animal welfare, and that's why we make sure that no mulesing is practiced by our suppliers. Mulesing is a painful process that involves removing strips of skin from the sheep's rear end to prevent flystrike. This practice is cruel and unnecessary, and we refuse to support it. By choosing Spiree, you can trust that your sustainable and eco-friendly merino wool garments are not only good for the planet but also for the animals who provide us with this amazing material." },
  { icon: <div></div>, title: 'Health', text: "Merino wool is not only a luxurious and eco-friendly material, but it's also recyclable and compostable! Unlike synthetic materials that pollute the environment, merino wool can be broken down naturally and reused in new products. By choosing merino wool, you're not only making a sustainable choice for yourself but also for the planet. Join us in our mission to create a circular fashion economy and reduce waste by choosing sustainable materials like merino wool." },
]

export default function Collection({responsibilities}) {

  const { scrolled, width, height, handleLightboxes } = useAppContext();
  let [front, setFront] = useState(true)
  let pageMobile = width < 768
  let [sun, setSun] = useState(true)

  let scale1 = front ? 0.75 : 1;
  let scale2 = front ? 1 : 0.75;
  let shirtWidth = 340;

  function handleClick() {
    setFront(oldFront => !oldFront)
  }

  

  return (

    <>
      <Head>
        <title>{"Sun & Moon Merino Wool Base Layer | Spirée | High Performance"}</title>
        <meta name="description" content="Discover Spiree's 100% merino wool base layers for running and mountain sports. Our sustainable and comfortable products will help you stay warm, fashionable and eco-friendly while exploring the great outdoors. Pre-order now!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`w-full`} onClick={handleLightboxes}>

        <PageWrapper
          darkMode={true}
          pageMobile={pageMobile}
          sun={sun}
        >
          {/* <BackgroundSun /> */}
          <div id='part1' className={`relative `}>
            <div role='presentation' className={`absolute w-full h-full bg-gradient-to-b transition-all ease-linear duration-[2.5s] ${sun ? 'opacity-100' : 'opacity-0'} from-[#FF514C] to-[#FFB961]`} />
            <div role='presentation' className={`absolute w-full h-full bg-gradient-to-b transition-all ease-linear duration-[2.5s] ${sun ? 'opacity-0' : 'opacity-100'}  from-[#30005F] to-[#A850B4]`} />

            <div className={`absolute w-[100vw] h-[100vw] ease-linear duration-[2.5s] top-0 ${sun ? 'left-0 opacity-100' : 'opacity-0'} translate-y-1/3 -translate-x-1/3`}>
              <Image alt='' role='presentation' width={2000} height={2000} src='/images/collectionSunBackground.svg' className={`relative w-full ${sun ? '' : ''}`} />
            </div>

            <div className={`absolute w-[70vw] h-[70vw] ease-linear duration-[2.5s] top-0 ${sun ? 'opacity-0' : 'left-0 opacity-30'} translate-y-[100vh] translate-x-[5vw] `}>
              <Image alt='' role='presentation' width={2000} height={2000} src='/images/collectionMoonBackground.svg' className={`relative w-full ${sun ? '' : ''}`} />
            </div>

            <FadeDiv amount={pageMobile ? 10 : 15} type='bottom' className='w-full relative mb-0 '>
              <SunHero setSun={setSun} />
            </FadeDiv>

            <Layout cardSection className={'relative pb-20'}>
              <SunDetails left={sun} title='Design' titleOn className='' />
              <SunDetails left={!sun} title='Material' className='' />
              <SunDetails left={sun} title='Finish' className='' />
            </Layout>
          </div>

          <div id='part2' className=' relative'>
            <div role='presentation' className={`absolute w-full h-full bg-gradient-to-b transition-all ease-linear duration-[2.5s] ${sun ? 'opacity-100' : 'opacity-0'} from-[#FFB2CE] to-[#FC5753]`} />
            <div role='presentation' className={`absolute w-full h-full bg-gradient-to-b transition-all ease-linear duration-[2.5s] ${sun ? 'opacity-0' : 'opacity-100'}  from-[#1F999E] to-[#360856]`} />

            <div className={`absolute w-[66vw] h-[66vw] ease-linear duration-[2.5s] top-0 right-0  ${sun ? ' opacity-100 translate-x-1/3 translate-y-12' : 'opacity-0 -translate-x-64'}  `}>
              <Image alt='' role='presentation' width={2000} height={2000} src='/images/collectionSunBackground.svg' className={`relative w-full ${sun ? '' : ''}`} />
            </div>
            <div className={`absolute w-[30vw] h-[30vw] ease-linear duration-[2.5s] top-1/4 left-0  ${sun ? 'opacity-0 rotate-180 translate-x-[80vw]' : 'translate-x-1/3 opacity-30'}  `}>
              <Image alt='' role='presentation' width={2000} height={2000} src='/images/collectionMoonBackground.svg' className={`relative w-full ${sun ? '' : ''}`} />
            </div>

            {/* <FadeDiv className={'w-full'} type='leftRight' amount={}> */}
              <Layout cardSection >
                <SunResponsibilities responsibilities={responsibilities}/>
 {/* {                console.log(responsibilities)} */}
              </Layout>
            {/* </FadeDiv> */}
            <Layout >
              <SunCare />

            </Layout>

            <SunOrder />

          </div>

          <SunSwitch handleClick={() => setSun(sun => !sun)} />
          <Navbar key='collection' from='collection' />
          <ShoppingCart />
          {/* <Footer noMotion /> */}
        </PageWrapper>

      </main>
    </>



  )
}

export async function getStaticProps() {
  const responsibilities = await client.fetch(`*[_type == "responsibility"]`);
  // const products = await client.fetch(`*[_type == "product"]`);
    // console.log(responsibilities)
  return {
    props: {
      responsibilities
    }
  };
}