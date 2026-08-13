const Hero = () => {
  const categories = [
    { title: 'Beach breaks', count: '126 places', color: '#f7d36b' },
    { title: 'Food walks', count: '84 trails', color: '#ff8f70' },
    { title: 'Nature stays', count: '52 stays', color: '#8fd7ff' },
    { title: 'Heritage trips', count: '71 routes', color: '#b4df8a' },
  ]

  const recommendations = [
    {
      name: 'Old Goa food and chapel walk',
      location: 'Panaji, India',
      rating: '4.9',
      reviews: '1,248',
      image:
        'https://images.unsplash.com/photo-1558960214-f4283a743867?w=1200&auto=format&fit=crop&q=70&ixlib=rb-4.1.0',
      tags: ['3 hours', 'Local guide', 'Small group'],
    },
    {
      name: 'Munnar tea valley homestay',
      location: 'Kerala, India',
      rating: '4.8',
      reviews: '932',
      image:
        'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&auto=format&fit=crop&q=70&ixlib=rb-4.1.0',
      tags: ['Breakfast', 'Views', 'Free cancel'],
    },
    {
      name: 'Jaipur craft market trail',
      location: 'Rajasthan, India',
      rating: '4.7',
      reviews: '705',
      image:
        'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&auto=format&fit=crop&q=70&ixlib=rb-4.1.0',
      tags: ['Shopping', 'History', 'Half day'],
    },
  ]

  return (
    <section id="discover" className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 border-b border-black/10 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00aa6c]">Explore by interest</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[#101913] sm:text-5xl">
              Choose a trip mood.
            </h2>
          </div>
          <a
            className="w-fit rounded-full border border-black/15 px-5 py-3 text-sm font-black text-[#101913] transition hover:border-[#00aa6c] hover:text-[#007a53]"
            href="#plan"
          >
            Build itinerary
          </a>
        </div>

        {/* <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article key={category.title} className="rounded-lg border border-black/10 bg-[#fbfaf4] p-5">
              <span className="block h-2 w-14 rounded-full" style={{ backgroundColor: category.color }} />
              <h3 className="mt-8 text-2xl font-black text-[#101913]">{category.title}</h3>
              <p className="mt-2 text-sm font-semibold text-[#69756d]">{category.count}</p>
            </article>
          ))}
        </div> */}

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {recommendations.map((item) => (
            <article key={item.name} className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm">
              <img className="h-60 w-full object-cover" src={item.image} alt={item.name} />
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-bold text-[#69756d]">{item.location}</p>
                  <p className="rounded-full bg-[#e5f6ed] px-3 py-1 text-sm font-black text-[#007a53]">{item.rating}</p>
                </div>
                <h3 className="mt-3 text-2xl font-black leading-tight text-[#101913]">{item.name}</h3>
                <p className="mt-2 text-sm font-semibold text-[#69756d]">{item.reviews} traveler reviews</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#f3f1e9] px-3 py-1 text-xs font-bold text-[#526057]">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <div className="mt-5 flex items-end justify-between border-t border-black/10 pt-4"> */}
                  {/* <p className="text-sm font-semibold text-[#69756d]">
                    From <span className="text-xl font-black text-[#101913]">{item.price}</span>
                  </p> */}
                  {/* <button className="rounded-full bg-[#101913] px-4 py-2 text-sm font-black text-white transition hover:bg-[#00aa6c]" type="button">
                    Save
                  </button> */}
                </div>
              {/* </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
