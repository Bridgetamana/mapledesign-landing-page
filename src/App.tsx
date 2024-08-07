import './app.scss'
import Aboutsection from './components/Aboutsection/Aboutsection'
import HeroSection from './components/Herosection/HeroSection'
import Price from './components/Price/Price'
import Service from './components/Service/Service'
import Work from './components/Work/Work'

function App() {
  return (
    <div>
      <HeroSection />
      <Aboutsection />
      <Service />
      <Work />
      <Price />
    </div>
  )
}

export default App
