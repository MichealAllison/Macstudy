import React from 'react'
import TestimonialsCard from './components/TestimonialsCard'

const feedback = [
  {
    imgSrc: '/user1.png',
    testimony: 'This service has been a lifesaver for my family!',
    name: 'Gideon',
    title: 'Parent'
  },
  {
    imgSrc: '/user2.png',
    testimony: 'I’m incredibly impressed with the level of care and support.',
    name: 'Martha',
    title: 'Teacher'
  },
  {
    imgSrc: '/user3.png',
    testimony: 'Truly outstanding experience. Highly recommend!',
    name: 'John',
    title: 'Guardian'
  }
]

const Testimonials = () => {
  return (
    <div className='mt-20 px-4 text-center'>
      {/* Section Header */}
      <div className='space-y-4'>
        <p className='text-base font-semibold text-[#01473c]'>Testimonials</p>
        <p className='text-2xl font-semibold text-[#01473c] sm:text-3xl'>
          Every Client Matters
        </p>
        <p className='text-sm text-[#6B6B6B] sm:text-base'>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Cards Container */}
      <div className='mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {feedback.map((item, index) => (
          <TestimonialsCard
            key={index}
            imgSrc={item.imgSrc}
            testimony={item.testimony}
            name={item.name}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
