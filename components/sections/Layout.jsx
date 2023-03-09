export default function Layout({children, className}) {
  return (
    <div className={`max-w-7xl mx-auto w-full px-4 mobm:px-6 sm:px-12 md:px-24 xl:px-24 2xl:px-0 visible ${className}`}>
      {children}
    </div>
  )
}
