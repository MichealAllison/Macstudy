import React from 'react'
import Email from './components/Email'

const Newsletter = () => {
  return (
    <div className='mb-10 mt-20 justify-items-center bg-[#ECEB9D] px-6 py-10 text-center sm:px-10 md:py-16 lg:px-32 lg:py-20'>
      <p className='text-sm font-semibold text-[#01473c] sm:text-base'>
        Newsletter
      </p>
      <p className='mt-4 text-xl font-semibold text-[#01473c] sm:text-2xl md:text-3xl'>
        Join Thousands of Educators and Students Today
      </p>
      <div className='mt-8'>
        <Email />
      </div>
    </div>
  )
}

export default Newsletter
