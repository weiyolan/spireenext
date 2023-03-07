export default function AccentTitle ({text, small, noMargin, className, style}) {
  return (
    // select-none
    <div style={style} className={`inline-flex text-white font-semibold uppercase tracking-max ${small?'text-sm lg:text-base':'text-base lg:text-lg'} ${noMargin?'':'mb-4 mt-2'} ${className?className:''}`}>
      {text}
    </div>)
}
