import { useNavigate } from 'react-router-dom'
import { moods } from '../data/discoverData'
import DiscoverMoodRail from './DiscoverMoodRail'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section id="discover" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <DiscoverMoodRail
          moods={moods}
          onSelectMood={(moodId) => navigate(`/discover?mood=${moodId}`)}
          selectedMood=""
        />
      </div>
    </section>
  )
}

export default Hero
