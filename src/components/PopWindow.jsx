const PopWindow = () => {
  const places = [
    {
      name: 'Explore India',
      image:
        'https://plus.unsplash.com/premium_photo-1712328581716-49b75fdc1faf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWElMjBtYXAlMjBhbmQlMjBpdHMlMjBhdHRyYWN0aW5zfGVufDB8fDB8fHww',
    },
    {
      name: 'Heritage Delhi',
      image:
        'https://images.unsplash.com/photo-1598977054780-2dc700fdc9d3?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaGl8ZW58MHwxfDB8fHww',
    },
    {
      name: 'Royal Jaipur',
      image:
        'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFpcHVyfGVufDB8MXwwfHx8MA%3D%3D',
    },
    {
      name: 'Eternal Agra',
      image:
        'https://images.unsplash.com/photo-1555099101-3766220a07ae?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWdyYXxlbnwwfDF8MHx8fDA%3D',
    },
    {
      name: 'Sacred Varanasi',
      image:
        'https://images.unsplash.com/photo-1705952484283-19c31e37e0e4?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmFyYW5hc2l8ZW58MHwxfDB8fHww',
    },
    {
      name: 'Coastal Goa',
      image:
        'https://images.unsplash.com/photo-1558960214-f4283a743867?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hfGVufDB8MXwwfHx8MA%3D%3D',
    },
    {
      name: 'Serene Kochi',
      image:
        'https://images.unsplash.com/photo-1645680149311-5a00ae5a2b2a?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29jaGl8ZW58MHwxfDB8fHww',
    },
  ]

  return (
    <section id="plan" className="min-h-screen bg-white py-[12vw] sm:py-[4vw]">
      <div className="flex items-center gap-2 px-[4vw] py-[5vw] sm:gap-[0.5vw] sm:px-[2vw] sm:py-[3vw]">
        <span className="h-[15px] w-[15px] rounded-full bg-[#adff2f]" />
        <h5 className="text-sm font-semibold uppercase tracking-normal text-[#071200] sm:text-[1.2vw]">
          Featured Places
        </h5>
      </div>

      <div>
        {places.map((place) => (
          <div
            key={place.name}
            className="group/place relative flex h-[86px] w-full items-center overflow-hidden border-b border-black/35 px-[4vw] sm:h-[110px] sm:px-[2vw]"
          >
            <div className="absolute inset-x-0 top-[-100%] h-full bg-[#adff2f] transition-all duration-300 group-hover/place:top-0" />
            <h2 className="relative z-10 text-[9vw] font-semibold leading-none tracking-normal text-[#071200] sm:text-[3vw]">
              {place.name}
            </h2>
            <img
              className="pointer-events-none fixed left-1/2 top-[18%] z-50 hidden h-[30vw] w-[25vw] rounded-[20px] object-cover opacity-0 transition-opacity duration-200 group-hover/place:opacity-100 sm:group-hover/place:block"
              src={place.image}
              alt=""
            />
          </div>
        ))}
      </div>

      <div className="px-[4vw] py-[6vw] sm:px-[2vw] sm:py-[2vw]">
        <a className="nav-pill inline-block px-[15px] py-[15px]" href="#discover">
          <span>All Places -&gt;</span>
        </a>
      </div>
    </section>
  )
}

export default PopWindow
