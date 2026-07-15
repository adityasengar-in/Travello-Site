const Landscape = () => {
  return (
    <div className="relative mt-[8vw] overflow-hidden rounded-[18px] sm:mt-[5vw] sm:rounded-[30px]">
      <video
        className="relative block h-[42vh] w-full object-cover sm:h-auto"
        src="/assets/scenic.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}

export default Landscape
