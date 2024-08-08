import './app.scss'
import Aboutsection from './components/Aboutsection/Aboutsection'
import Contact from './components/Contact/Contact'
import Faq from './components/FAQ/Faq'
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
      <Faq />
      <Contact />
    </div>
  )
}

export default App
