import React from 'react'
import SubTitle from '../atoms/SubTitle'
import { usePageContext } from '../context/pageContext'
import FadeDiv from '../scroll/FadeDiv'
import SunResponsibility from './SunResponsibility'


let responsibilities = [
  { icon: <div></div>, title: 'Planet', text: "Merino wool is a sustainable clothing choice with minimal ecological impact. Its production process uses less energy and water compared to synthetic fibers, and its natural antibacterial properties reduce the need for frequent washing, extending its lifespan. Additionally, merino wool is biodegradable and can be recycled, making it a responsible choice for those who want to reduce their environmental footprint. At Spiree, we take pride in using this eco-friendly fabric for our products, ensuring you stay warm and comfortable while reducing your impact on the planet." },
  { icon: <div></div>, title: 'Non Mulesing', text: "At Spiree, we care deeply about animal welfare, and that's why we make sure that no mulesing is practiced by our suppliers. Mulesing is a painful process that involves removing strips of skin from the sheep's rear end to prevent flystrike. This practice is cruel and unnecessary, and we refuse to support it. By choosing Spiree, you can trust that your sustainable and eco-friendly merino wool garments are not only good for the planet but also for the animals who provide us with this amazing material." },
  { icon: <div></div>, title: 'Health', text: "Merino wool is not only a luxurious and eco-friendly material, but it's also recyclable and compostable! Unlike synthetic materials that pollute the environment, merino wool can be broken down naturally and reused in new products. By choosing merino wool, you're not only making a sustainable choice for yourself but also for the planet. Join us in our mission to create a circular fashion economy and reduce waste by choosing sustainable materials like merino wool." },
]

export default function SunResponsibilities({ className }) {
  const { sun } = usePageContext()
  return (
    <div className={` relative -top-20 md:-top-16  -mb-12 xs:mb-0 2xl:mb-12 2xl:pt-4 2xl:pb-14 p-4 2xl:px-16 rounded-[40px] transition-all duration-[2.5s] ${sun ? 'bg-[#D9698F]' : 'bg-[#228F93]'}  ${className} shadow-2xl shadow-black/30`}>
      <SubTitle className={'mb-4 md:mb-6 2xl:mb-8 '} mainTitle='Global Responsibility' subTitle='Elevate your performance, sustainably.' />

      <FadeDiv className={'w-full'} type='leftRight' amount={3}>
        <div className='flex overflow-x-scroll md:overflow-auto w-full gap-4 mobl:gap-6 px-4 2xl:gap-12 text-primary font-quick'>
          {responsibilities.map((item, i) => <SunResponsibility icon={item.icon} title={item.title} text={item.text} key={i} />)}
        </div>
      </FadeDiv>
    </div>

  )
}
