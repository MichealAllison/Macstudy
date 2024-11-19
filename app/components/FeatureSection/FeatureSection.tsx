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
    <div className='mt-20 flex justify-center space-x-10'>
      {features.map((feature, index) => (
        <div key={index}>
          <FeatureCard
            imgSrc={feature.imageSrc}
            tittle={feature.title}
            description={feature.description}
          />
        </div>
      ))}
    </div>
  )
}

export default FeatureSection
