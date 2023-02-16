export default function Layout({children}) {
  return (
    <div className={`xl:max-w-6xl mx-auto px-4 sm:px-12 lg:px-16 visible`}>
      {children}
    </div>
  )
}
