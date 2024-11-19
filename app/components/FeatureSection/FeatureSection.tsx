import React from 'react'
import FeatureCard from './components/FeatureCard'

const FeatureSection = () => {
  const features = [
    {
      imageSrc: '/graduate.svg',
      title: 'Student Management',
      description: 'Manage student profiles and academic progress with ease.'
    },
    {
      imageSrc: '/bag.svg',
      title: 'Tutor Resources',
      description: 'A library of tools and materials for effective teaching.'
    },
    {
      imageSrc: '/book.svg',
      title: 'Parent Portal',
      description: 'Transparent communication between parents and schools.'
    }
  ]

  return (
    <div className='mt-20 flex flex-col items-center space-y-10 px-4 sm:px-6 md:flex-row md:space-x-6 md:space-y-0 lg:space-x-10'>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          imgSrc={feature.imageSrc}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  )
}

export default FeatureSection
