export default function AccentTitle ({text,small}) {
  return (
    // select-none
    <div className={`inline-flex text-white font-semibold uppercase tracking-max ${small?'text-sm lg:text-base':'text-base lg:text-lg'} mb-4`}>
      {text}
    </div>)
}
