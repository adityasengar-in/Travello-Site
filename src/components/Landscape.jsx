const Landscape = () => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-black/10 bg-[#d8e7d2] shadow-sm">
      <video
        className="relative block h-full min-h-[360px] w-full object-cover sm:min-h-[520px]"
        src="/assets/scenic.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/75">Featured route</p>
          <h2 className="mt-1 text-2xl font-black sm:text-4xl">Mountain View slow travel</h2>
        </div>
        <div className="rounded-lg bg-white/95 px-4 py-3 text-[#101913] shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5c6a60]">Best window</p>
          <p className="text-sm font-black">Feb - May</p>
        </div>
      </div>
    </div>
  )
}

export default Landscape
