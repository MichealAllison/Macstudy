import React from 'react'

import TopHeader from './TopHeader'
import NavHeader from './NavHeader'

const Header = () => {
  return (
    <header className='w-full bg-white'>
      <TopHeader />
      <div className=''>
        <NavHeader />
      </div>
    </header>
  )
}

export default Header
