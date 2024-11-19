import React from 'react'

// import Footer from './Footer'
import Header from './Header/components'

type LayoutProps = React.PropsWithChildren

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className=''>{children}</div>
    </div>
  )
}

export default Layout
