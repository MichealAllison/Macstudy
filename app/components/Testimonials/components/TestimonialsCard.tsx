'use client'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Image from 'next/image'
import React, { FC } from 'react'

interface TestimonialsCardProps {
  imgSrc: string
  title: string
  name: string
  testimony: string
  initialRating?: number
  maxWidth?: number
}

const TestimonialsCard: FC<TestimonialsCardProps> = ({
  imgSrc,
  testimony,
  name,
  title,
  initialRating = 4,
  maxWidth = 130
}) => {
  return (
    <div className='justify-items-center space-y-3 rounded-md bg-white p-5 shadow-sm'>
      <div className='place-content-center'>
        <Rating style={{ maxWidth }} readOnly value={initialRating} />
      </div>
      <p className='max-w-[250px] text-sm text-[#6b6b6b]'>{testimony}</p>
      <div className='mt-5 flex items-center space-x-2'>
        <Image
          src={imgSrc}
          alt={`${name}'s avatar`}
          width={50}
          height={50}
          className='rounded-full'
        />
        <div className='text-left'>
          <p className='font-semibold text-[#01473c]'>{name}</p>
          <p className='text-sm text-[#6b6b6b]'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCard
