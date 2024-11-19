import React from 'react'
import { Button } from '../ui/button'
import Search from './Search'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='mt-5 flex items-center justify-between'>
      {/* right section */}
      <div className='w-1/2 space-y-6'>
        <p className='text-5xl font-semibold text-[#01473c]'>
          Empowering Education with Technology
        </p>
        <p className='text-base font-normal text-[#000]'>
          Simplifying navigation and resources for schools, students, and
          tutors.
        </p>
        <Search />
        <div className='flex space-x-5'>
          <Button className='bg-[#01473c] px-10 py-4 text-[#fff]'>
            Explore Now
          </Button>
          <Button className='border-2 border-[#01473c] px-10 py-4 text-[#10473c]'>
            Learn Now
          </Button>
        </div>
      </div>

      {/* left section */}
      <div className='w-1/2'>
        <Image src='/heroimage.png' alt='schoolimg' width={617} height={670} />
      </div>
    </div>
  )
}

export default HeroSection
