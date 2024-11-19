'use client'

import Image from 'next/image'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='container w-full bg-[#ffff] px-4 py-5'>
      <div className='flex flex-col items-center justify-between gap-y-4 sm:flex-row sm:gap-y-0'>
        {/* Contact Information */}
        <div className='flex flex-col items-center gap-3 sm:flex-row sm:gap-x-4'>
          <div className='flex items-center gap-x-2'>
            <Image
              src='/mail.svg'
              alt='Mail icon'
              width={20}
              height={20}
              className='h-5 w-5 sm:h-6 sm:w-6'
            />
            <p className='text-sm sm:text-base'>michealallison@gmail.com</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <Image
              src='/call.svg'
              alt='Call icon'
              width={20}
              height={20}
              className='h-5 w-5 sm:h-6 sm:w-6'
            />
            <p className='text-sm sm:text-base'>+234 813 084 5852</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className='flex items-center space-x-4 sm:space-x-5'>
          <Image
            src='/facebook.svg'
            alt='Facebook icon'
            width={20}
            height={20}
            className='h-5 w-5 sm:h-6 sm:w-6'
          />
          <Image
            src='/linkedin.svg'
            alt='LinkedIn icon'
            width={20}
            height={20}
            className='h-5 w-5 sm:h-6 sm:w-6'
          />
          <Image
            src='/behance.svg'
            alt='Behance icon'
            width={20}
            height={20}
            className='h-5 w-5 sm:h-6 sm:w-6'
          />
          <Image
            src='/twitter.svg'
            alt='Twitter icon'
            width={20}
            height={20}
            className='h-5 w-5 sm:h-6 sm:w-6'
          />
        </div>
      </div>
    </div>
  )
}

export default TopHeader
