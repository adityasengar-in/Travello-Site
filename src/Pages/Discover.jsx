import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import DestinationRail from '../components/DestinationRail'
import DiscoverMoodRail from '../components/DiscoverMoodRail'
import { moods } from '../data/discoverData'

const moodPlaces = {
  beach: [
    {
      name: 'Palolem Beach',
      location: 'Goa, India',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'A softer Goa escape with kayaking, beach shacks, and calm water.',
      tags: ['Coast', 'Relaxed', 'Sunset'],
    },
    {
      name: 'Varkala Cliff',
      location: 'Kerala, India',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Clifftop cafes, surf schools, and long Arabian Sea views.',
      tags: ['Surf', 'Cafes', 'Cliffs'],
    },
    {
      name: 'Neil Island',
      location: 'Andaman, India',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Clear water, quiet beaches, and reef-side snorkelling days.',
      tags: ['Island', 'Reef', 'Slow'],
    },
    {
      name: 'Mirissa',
      location: 'Sri Lanka',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'A compact coastal base for whale watching and beach hopping.',
      tags: ['Tropical', 'Food', 'Boats'],
    },
  ],
  mountains: [
    {
      name: 'Manali Valley',
      location: 'Himachal Pradesh, India',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Snow lines, apple orchards, cafes, and day hikes from town.',
      tags: ['Hikes', 'Snow', 'Cafes'],
    },
    {
      name: 'Gulmarg',
      location: 'Kashmir, India',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Meadow views, gondola rides, and winter-ready mountain stays.',
      tags: ['Meadows', 'Ski', 'Views'],
    },
    {
      name: 'Zermatt',
      location: 'Switzerland',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Alpine trains, glacier trails, and Matterhorn-facing hotels.',
      tags: ['Alps', 'Train', 'Premium'],
    },
    {
      name: 'Pokhara',
      location: 'Nepal',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Lakefront mornings and mountain flights near Annapurna routes.',
      tags: ['Lake', 'Treks', 'Budget'],
    },
  ],
  grasslands: [
    {
      name: 'Banni Grasslands',
      location: 'Gujarat, India',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Wide horizons, craft villages, and desert-edge wildlife routes.',
      tags: ['Craft', 'Open sky', 'Wildlife'],
    },
    {
      name: 'Masai Mara',
      location: 'Kenya',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Classic safari landscapes with guided drives and camp stays.',
      tags: ['Safari', 'Camp', 'Wildlife'],
    },
    {
      name: 'Kaziranga',
      location: 'Assam, India',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Elephant grass, river islands, and rhino country day plans.',
      tags: ['Nature', 'River', 'Guide'],
    },
    {
      name: 'Tanzania Savanna',
      location: 'Tanzania',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Big-sky routes built around migration windows and lodge stays.',
      tags: ['Savanna', 'Lodges', 'Seasonal'],
    },
  ],
  heritage: [
    {
      name: 'Jaipur Old City',
      location: 'Rajasthan, India',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Palaces, craft bazaars, food lanes, and guided heritage walks.',
      tags: ['Palaces', 'Markets', 'Food'],
    },
    {
      name: 'Varanasi Ghats',
      location: 'Uttar Pradesh, India',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'River rituals, old alleys, music evenings, and boat rides.',
      tags: ['Spiritual', 'River', 'Walks'],
    },
    {
      name: 'Kyoto Temples',
      location: 'Japan',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Shrines, tea houses, bamboo paths, and refined day routes.',
      tags: ['Temples', 'Tea', 'Gardens'],
    },
    {
      name: 'Rome Historic Core',
      location: 'Italy',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Ruins, piazzas, pasta stops, and museum-heavy walks.',
      tags: ['Museums', 'Food', 'Ancient'],
    },
  ],
  city: [
    {
      name: 'Singapore Marina Bay',
      location: 'Singapore',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Clean transit, skyline hotels, gardens, and late food halls.',
      tags: ['Skyline', 'Transit', 'Food'],
    },
    {
      name: 'Mumbai South',
      location: 'Maharashtra, India',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Art deco walks, sea-facing cafes, museums, and street food.',
      tags: ['Food', 'Museums', 'Sea link'],
    },
    {
      name: 'New York Midtown',
      location: 'United States',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Theater nights, observation decks, park breaks, and museums.',
      tags: ['Theater', 'Museums', 'Walkable'],
    },
    {
      name: 'Dubai Downtown',
      location: 'United Arab Emirates',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop&q=75&ixlib=rb-4.1.0',
      description: 'Towers, shopping, desert add-ons, and polished hotel stays.',
      tags: ['Luxury', 'Shopping', 'Desert'],
    },
  ],
}

const discoverySections = [
  {
    title: 'India trending',
    places: [
      moodPlaces.heritage[0],
      moodPlaces.beach[1],
      moodPlaces.mountains[0],
      moodPlaces.city[1],
    ],
  },
  {
    title: 'World trending',
    places: [
      moodPlaces.city[0],
      moodPlaces.heritage[2],
      moodPlaces.mountains[2],
      moodPlaces.heritage[3],
    ],
  },
  {
    title: 'Hot destinations',
    places: [
      moodPlaces.city[3],
      moodPlaces.beach[3],
      moodPlaces.grasslands[1],
      moodPlaces.city[2],
    ],
  },
  {
    title: 'Seasonal places',
    places: [
      moodPlaces.mountains[1],
      moodPlaces.grasslands[3],
      moodPlaces.beach[2],
      moodPlaces.grasslands[2],
    ],
  },
]

const Discover = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const moodFromUrl = searchParams.get('mood')
  const searchedCity = searchParams.get('city')
  const hasValidMoodParam = moods.some((mood) => mood.id === moodFromUrl)
  const [selectedMoodFallback, setSelectedMoodFallback] = useState('beach')
  const selectedMood = hasValidMoodParam ? moodFromUrl : selectedMoodFallback
  const [isLoadingMoodPlaces, setIsLoadingMoodPlaces] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsLoadingMoodPlaces(false)
    }, 450)

    return () => window.clearTimeout(timeout)
  }, [selectedMood])

  const selectedMoodTitle = useMemo(() => moods.find((mood) => mood.id === selectedMood)?.title ?? 'Mood', [selectedMood])

  const selectMood = (moodId) => {
    if (moodId === selectedMood) {
      return
    }

    setIsLoadingMoodPlaces(true)
    setSelectedMoodFallback(moodId)
    setSearchParams({ mood: moodId })
  }

  return (
    <main className="bg-[#fbfaf4] px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        {searchedCity ? (
          <div className="mb-6 rounded-lg border border-black/10 bg-white px-5 py-4 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#00aa6c]">Search result</p>
            <p className="mt-1 text-2xl font-black text-[#101913]">{searchedCity}</p>
          </div>
        ) : null}
        <DiscoverMoodRail moods={moods} onSelectMood={selectMood} selectedMood={selectedMood} />
        <DestinationRail
          eyebrow="Selected mood"
          isLoading={isLoadingMoodPlaces}
          places={moodPlaces[selectedMood]}
          title={`${selectedMoodTitle} places`}
        />

        <div className="border-t border-black/10 pt-2">
          {discoverySections.map((section) => (
            <DestinationRail key={section.title} places={section.places} title={section.title} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Discover
