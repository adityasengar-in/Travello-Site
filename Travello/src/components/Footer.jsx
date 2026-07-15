const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-0 flex h-screen w-full flex-col justify-end overflow-hidden bg-black px-[4vw] pt-[8vw] text-white sm:px-[2vw] sm:pt-[3vw]">
      <div className="footer-shape-one pointer-events-none absolute left-[-20%] top-[-50%] h-[90%] w-[90%] bg-[#adff2f] blur-[50px]" />
      <div className="footer-shape-two pointer-events-none absolute right-[-27%] top-[-27%] h-[90%] w-[70%] bg-[#adff2f] blur-[50px]" />

      <div className="relative z-10 flex min-h-[20vh] w-full flex-col justify-between gap-6 px-[3vw] py-[8vw] sm:flex-row sm:items-start sm:gap-10 sm:py-[4vw]">
        <div className="flex flex-col text-[8vw] font-semibold leading-none text-black sm:text-[2.2vw]">
          <a href="#discover">Discover</a>
          <a href="#plan">Plan</a>
          <a href="#signin">Sign in</a>
        </div>

        <div id="signin" className="flex flex-col justify-between gap-5 px-[2vw] py-[2vw] text-black sm:gap-[2vw]">
          <h3 className="text-xl font-semibold sm:text-[1.6vw]">Connect with Us</h3>
          <p className="border-b border-black/50 pb-2 text-base sm:text-[1.3vw]">Email Address</p>
        </div>
      </div>

      <h1 className="relative z-10 self-center text-center text-[27vw] font-black leading-none tracking-normal sm:text-[30vw]">
        Travello
      </h1>

      <div className="relative z-10 flex h-[5vh] w-full items-center justify-center border-t border-white/25 text-sm text-white">
        Copyright © Travello
      </div>
    </footer>
  )
}

export default Footer
