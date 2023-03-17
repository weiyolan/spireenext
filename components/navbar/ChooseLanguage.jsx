import Link from 'next/link'
import { useRouter } from 'next/router'
import{TfiWorld} from 'react-icons/tfi'
import { useAppContext } from '@components/context/appContext'

export default function ChooseLanguage({mobile, toggleNav}) {
  const router = useRouter()
  const { locales, locale : activeLocal } = router
  // const {toggleNav} = useAppContext()

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocal
  )

  return (
    <div 
    // onClick={()=>toggleNav()}
    className={`text-primary text-2xl xs:text-xl sm:text-base text-left font-sans duration-500 
    font-extralight self-center inline-flex border border-transparent 
    focus-within:outline-white hover:border-b-white active:bg-white/20 cursor-pointer select-none px-0 py-0 mx-0 md:mx-4 lg:mx-6 `}>
      {/* <p>Locale switcher:</p> */}

        

        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            
              <Link 
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                key={locale}
                className='focus:outline-none'
              >
                <div className='inline-flex align-middle items-center'>
                  <TfiWorld className='mr-2'/>
                  {locale.toUpperCase()}
                </div>

              </Link>
          )
        })}
    </div>
  )
}
