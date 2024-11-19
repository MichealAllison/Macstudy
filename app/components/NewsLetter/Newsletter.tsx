import React from 'react'
import Email from './components/Email'

const Newsletter = () => {
  return (
    <div className='mb-10 mt-20 w-auto justify-center justify-items-center bg-[#ECEB9D] px-32 py-20 text-center'>
      <p className='text-base font-semibold text-[#01473c]'>Newsletter</p>
      <p className='text-3xl font-semibold text-[#01473c]'>
        Join Thousands of Educators and Students Today
      </p>
      <Email />
    </div>
  )
}

export default Newsletter
