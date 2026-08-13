import Landing from '../components/Landing'
import Hero from '../components/Hero'
import PopWindow from '../components/PopWindow'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <>
      <main>
        <Landing />
        <Hero />
        <PopWindow />
        <Slider />
      </main>
      <Footer />
    </>
  )
}

export default Homepage
