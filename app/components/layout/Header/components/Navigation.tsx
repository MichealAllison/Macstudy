import React from 'react'
import Link from 'next/link'

import { NavLinkType } from '../types'

const routes = [
  { title: 'Home', href: '/' },
  { title: 'Student', href: '/' },
  { title: 'Tutor', href: '/' },
  { title: 'Pricing', href: '/' },
  { title: 'Contact', href: '/' },
  { title: 'About', href: '/' },
  { title: 'Help', href: '/' }
] satisfies NavLinkType[]

const Navigation = () => {
  return (
    <nav className='w-full px-4 md:px-8 lg:px-12'>
      <ul className='flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-x-6 md:space-y-0'>
        {/* Navigation Links */}
        <ul className='flex flex-col items-center space-y-2 md:flex-row md:space-x-5 md:space-y-0'>
          {routes.map(route => (
            <li
              key={route.title}
              className='w-full text-center md:w-auto md:text-left'
            >
              <Link
                href={route.href}
                className='text-base leading-6 text-[#fff] transition-colors hover:text-[#D5D42B]'
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}

export default Navigation
