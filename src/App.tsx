import './app.scss'
import Aboutsection from './components/Aboutsection/Aboutsection'
import HeroSection from './components/Herosection/HeroSection'
import Price from './components/Price/Price'
import Service from './components/Service/Service'
import Testimonial from './components/Testimonial/Testimonial'
import Work from './components/Work/Work'

function App() {
  return (
    <div>
      <HeroSection />
      <Aboutsection />
      <Service />
      <Work />
      <Price />
      <Testimonial />
    </div>
  )
}

export default App
