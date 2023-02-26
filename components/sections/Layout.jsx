export default function Layout({children}) {
  return (
    <div className={`xl:max-w-6xl mx-auto px-4 sm:px-0 visible`}>
      {children}
    </div>
  )
}
