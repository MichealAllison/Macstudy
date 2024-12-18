import FeatureSection from './components/FeatureSection/FeatureSection'
import HeroSection from './components/HeroSection/HeroSection'
import Newsletter from './components/NewsLetter/Newsletter'
import Testimonials from './components/Testimonials/Testimonials'

export default function page() {
  return (
    <div className='container'>
      <HeroSection />
      <FeatureSection />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
