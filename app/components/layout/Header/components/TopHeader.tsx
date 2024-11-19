'use client'

import Image from 'next/image'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='container flex w-full items-center justify-between bg-[#ffff] px-4 py-5'>
      <div className='flex gap-x-3 sm:gap-x-4'>
        <div className='flex'>
          <Image
            src='/mail.svg'
            alt='Cart icon'
            width={20}
            height={20}
            className='h-5 w-5 sm:h-6 sm:w-6'
          />
          <p>michealallison@gmail.com</p>
        </div>
        <div className='flex'>
          <Image
            src='/call.svg'
            alt='Download icon'
            width={20}
            height={20}
            className='h-5 w-5 sm:h-6 sm:w-6'
          />
          <p>+234 813 084 5852</p>
        </div>
      </div>
      <div className='flex items-center space-x-5'>
        <Image
          src='/facebook.svg'
          alt='Download icon'
          width={20}
          height={20}
          className='h-5 w-5 sm:h-6 sm:w-6'
        />
        <Image
          src='/linkedin.svg'
          alt='Download icon'
          width={20}
          height={20}
          className='h-5 w-5 sm:h-6 sm:w-6'
        />
        <Image
          src='/behance.svg'
          alt='Download icon'
          width={20}
          height={20}
          className='h-5 w-5 sm:h-6 sm:w-6'
        />
        <Image
          src='/twitter.svg'
          alt='Download icon'
          width={20}
          height={20}
          className='h-5 w-5 sm:h-6 sm:w-6'
        />
      </div>
    </div>
  )
}

export default TopHeader
