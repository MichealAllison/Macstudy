'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'
import { Button } from '@/app/components/ui/button'

const NavHeader = () => {
  return (
    <div className='flex items-center bg-[#01473C] shadow-sm'>
      <div className='container flex items-center justify-between px-4 py-5 lg:px-0'>
        {/* Logo */}
        <Link href='/'>
          <Image src='/logo.svg' alt='logo' width={156} height={29} />
        </Link>

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
    </div>
  )
}

export default NavHeader
