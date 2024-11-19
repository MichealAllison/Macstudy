import Image from 'next/image'
import React, { FC } from 'react'

interface FeaturedCardProps {
  imgSrc: string
  tittle: string
  description: string
}

const FeatureCard: FC<FeaturedCardProps> = ({
  imgSrc,
  tittle,
  description
}) => {
  return (
    <div className='max-w-[400px] space-y-2 rounded-md bg-[#fff] p-5 shadow-lg'>
      <div className='mb-5 h-20 max-w-20 place-content-center justify-items-center rounded-full bg-[#D5D42B]'>
        <Image src={imgSrc} alt='icon' width={32} height={32} className='' />
      </div>
      <div className='mb-5'>
        <p className='text-2xl font-semibold text-[#01473c]'>{tittle}</p>
        <Image src='/line.svg' alt='icon' width={50} height={2} />
        <p className='mb-10 mt-4 text-base text-[#6b6b6b]'>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
