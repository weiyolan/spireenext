import React from 'react'
import SubTitle from '../atoms/SubTitle'
import { useAppContext } from '../context/appContext'
import { usePageContext } from '../context/pageContext'
import FadeDiv from '../scroll/FadeDiv'
import SunResponsibility from './SunResponsibility'




export default function SunResponsibilities({ className, responsibilities }) {
  const { sun,pageMobile } = usePageContext()
  const {locale} = useAppContext();
  return (
    <div className={` relative -top-20 md:-top-16  -mb-12 xs:mb-0 2xl:mb-12 2xl:pt-4 2xl:pb-14 p-4 2xl:px-16 rounded-[40px] transition-all duration-[2.5s] ${sun ? 'bg-[#D9698F]' : 'bg-[#228F93]'}  ${className} shadow-2xl shadow-black/30`}>
      <SubTitle className={'mb-4 md:mb-6 2xl:mb-8 '} mainTitle='Global Responsibility' subTitle='Elevate your performance, sustainably.' />

      <FadeDiv className={'w-full'} type='leftRight' amount={pageMobile?3:0}>
        <div className='flex overflow-x-scroll md:overflow-auto w-full gap-4 mobl:gap-6 px-4 2xl:gap-12 text-primary font-quick'>
          {responsibilities.map((item, i) => <SunResponsibility icon={<div></div>} title={item.title[locale]} text={item.text[locale]} key={i} />)}
        </div>
      </FadeDiv>
    </div>

  )
}
