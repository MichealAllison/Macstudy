import React from 'react'
import { Button } from '../ui/button'
import Search from './Search'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='mt-5 flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0'>
      {/* Right section */}
      <div className='w-full justify-items-center space-y-6 text-center lg:w-1/2 lg:text-left'>
        <p className='text-4xl font-semibold text-[#01473c] sm:text-5xl lg:text-5xl'>
          Empowering Education with Technology
        </p>
        <p className='text-sm font-normal text-[#000] sm:text-base'>
          Simplifying navigation and resources for schools, students, and
          tutors.
        </p>
        <div className=''>
          <Search />
        </div>
        <div className='flex flex-col items-center space-y-4 sm:flex-row sm:space-x-5 sm:space-y-0'>
          <Button className='bg-[#01473c] px-8 py-3 text-[#fff] sm:px-10 sm:py-4'>
            Explore Now
          </Button>
          <Button className='border-2 border-[#01473c] px-8 py-3 text-[#10473c] sm:px-10 sm:py-4'>
            Learn Now
          </Button>
        </div>
      </div>

      {/* Left section */}
      <div className='w-full lg:w-1/2'>
        <Image
          src='/heroimage.png'
          alt='schoolimg'
          width={617}
          height={670}
          className='mx-auto w-4/5 sm:w-3/5 lg:w-full'
        />
      </div>
    </div>
  )
}

export default HeroSection
