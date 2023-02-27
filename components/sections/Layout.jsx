export default function Layout({children}) {
  return (
    <div className={`max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-0 visible`}>
      {children}
    </div>
  )
}
