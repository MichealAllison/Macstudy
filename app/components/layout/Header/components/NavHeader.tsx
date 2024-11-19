'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'
import { Button } from '@/app/components/ui/button'

const NavHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='flex items-center bg-[#01473C] shadow-sm'>
      <div className='container flex items-center justify-between px-4 py-5 lg:px-0'>
        {/* Logo */}
        <Link href='/'>
          <Image src='/logo.svg' alt='logo' width={156} height={29} />
        </Link>

        {/* Hamburger Menu (Mobile/Tablet) */}
        <div className='flex lg:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            {menuOpen ? (
              <Image
                src='/close.svg'
                alt='Close icon'
                width={24}
                height={24}
                className='z-50'
              />
            ) : (
              <Image src='/menu.svg' alt='Menu icon' width={24} height={24} />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex'>
          <Navigation />
        </div>

        {/* Desktop Buttons */}
        <div className='hidden space-x-2 lg:flex'>
          <Button className='font-poppins border-2 border-[#D5D42B] text-[#D5D42B]'>
            Login
          </Button>
          <Button className='font-poppins bg-[#D5D42B] text-white'>
            Sign up
          </Button>
        </div>
      </div>

      {/* Mobile/Tablet Navigation */}
      {menuOpen && (
        <div className='absolute left-0 top-0 z-20 h-screen w-full bg-[#01473C] lg:hidden'>
          <div className='flex flex-col items-center space-y-6 pt-24 text-white'>
            <Navigation />
            <Button className='w-3/4 border-2 border-[#D5D42B] text-[#D5D42B]'>
              Login
            </Button>
            <Button className='w-3/4 bg-[#D5D42B] text-white'>Sign up</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavHeader
