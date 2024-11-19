'use client'

import React from 'react'

const MainFooter = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 gap-8 px-6 text-gray-700 md:grid-cols-5'>
      {/* Company Info */}
      <div>
        <h3 className='mb-4 font-semibold'>Company Info</h3>
        <ul className='space-y-2'>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              About Us
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              Carrier
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              We are hiring
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              Blog
            </a>
          </li>
        </ul>
      </div>

      {/* Legal */}
      <div>
        <h3 className='mb-4 font-semibold'>Legal</h3>
        <ul className='space-y-2'>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              About Us
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              Carrier
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              We are hiring
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              Blog
            </a>
          </li>
        </ul>
      </div>

      {/* Features */}
      <div>
        <h3 className='mb-4 font-semibold'>Features</h3>
        <ul className='space-y-2'>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              Business Marketing
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              User Analytic
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              Live Chat
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              Unlimited Support
            </a>
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className='mb-4 font-semibold'>Resources</h3>
        <ul className='space-y-2'>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              iOS & Android
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              Watch a Demo
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              Customers
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-[#346c63]'>
              API
            </a>
          </li>
        </ul>
      </div>

      {/* Get In Touch */}
      <div>
        <h3 className='mb-4 font-semibold'>Get In Touch</h3>
        <ul className='space-y-2'>
          <li className='flex items-center gap-2'>
            <span className='text-[#01473c]'>📞</span>
            (480) 555-0103
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-[#01473c]'>📍</span>
            4517 Washington Ave. Manchester, Kentucky 39495
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-[#01473c]'>✉️</span>
            <a
              href='mailto:debra.holt@example.com'
              className='hover:text-[#346c63]'
            >
              debra.holt@example.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainFooter
