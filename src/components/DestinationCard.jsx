const DestinationCard = ({ place }) => {
  return (
    <article className="min-w-[260px] overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm sm:min-w-[300px]">
      <img className="h-48 w-full object-cover" src={place.image} alt={place.name} />
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="truncate text-sm font-bold text-[#69756d]">{place.location}</p>
          <p className="shrink-0 rounded-full bg-[#e5f6ed] px-3 py-1 text-sm font-black text-[#007a53]">{place.rating}</p>
        </div>
        <h3 className="mt-3 text-xl font-black leading-tight text-[#101913]">{place.name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-[#526057]">{place.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {place.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#f3f1e9] px-3 py-1 text-xs font-bold text-[#526057]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default DestinationCard
