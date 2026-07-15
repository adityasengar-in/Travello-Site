import Landing from '../components/Landing'
import Hero from '../components/Hero'
import PopWindow from '../components/PopWindow'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
      <main className="relative z-10">
        <Landing />
        <Hero />
        <PopWindow />
        <Slider />
      </main>
      <div className="pointer-events-none relative z-10 h-screen" />
      <Footer />
    </>
  )
}

export default Homepage
