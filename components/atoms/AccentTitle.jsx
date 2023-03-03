export default function AccentTitle ({text,small}) {
  return (
    // select-none
    <div className={`inline-flex mt-2   text-white font-semibold uppercase tracking-max ${small?'text-sm lg:text-base':'text-base lg:text-lg'} xs:mb-2`}>
      {text}
    </div>)
}
