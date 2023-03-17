import React from 'react'
import AccentTitle from '../atoms/AccentTitle'
import SubTitle from '../atoms/SubTitle'


let washing = [
  "Machine wash on a gentle cycle with cold water and similar colors.",
  "Use a mild detergent specifically designed for wool and avoid enzyme washing powder.",
  " Avoid fabric softeners and bleach.",
  "  Lay flat to dry, do not tumble dry or wring and twist.",
  "  Do not dry clean.",
  "  Store your merino wool base layer clean and dry, away from direct sunlight and heat sources."]


let guidelines = [
  { icon: <div></div>, text: 'Do Not Bleach' },
  { icon: <div></div>, text: 'Do Not Rumble Dry' },
  { icon: <div></div>, text: 'Do Not Dry Clean' },
  { icon: <div></div>, text: '    30 Normal' },
  { icon: <div></div>, text: 'Iron Max Heat 110°C' },
]
export default function SunCare() {
  return (

    <div className='relative px-16'>
      <SubTitle left mainTitle={'Care'} subTitle='Maximizing the Longevity of Your Merino Wool Base Layer: Washing Tips and Tricks' className={'mb-4'} />
      <p className='mb-12 text-primary font-light font-quick '>Merino wool is an incredibly durable material that requires minimal washing due to its natural antibacterial properties. However, when it comes time to give your base layer a refresh, it's important to take proper care in washing to ensure its longevity. With the right techniques, your merino wool base layer can continue to provide you with warmth, comfort, and odor resistance for years to come.</p>
      <div className='flex gap-24'>
        <div className='inline-flex flex-col '>
          <AccentTitle text='Washing' />
          <ul className='text-primary font-light font-quick pl-4 border-l border-l-white'>
            {washing.map((item, i) => (
              <li className='mb-2' key={i}>
                {item}
              </li>))}
          </ul>
        </div>

        <div className='inline-flex flex-col '>
          <AccentTitle text='Guidelines' />
          <ul className='text-primary font-light font-quick pl-4 border-l border-l-white'>
            {guidelines.map((item, i) => (
              <li className='mb-4' key={i}>
                {item.text}
              </li>))}
          </ul>
        </div>
      </div>
    </div>

  )
}
