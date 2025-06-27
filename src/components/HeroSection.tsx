const HeroSection = () => {
  return (
    <div
      className='relative h-screen w-full bg-contain bg-center'
      style={{ backgroundImage: `url('https://images.pexels.com/photos/29252520/pexels-photo-29252520.jpeg')` }}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-black/50 to-transparent' />
      <div className='relative z-10 flex h-full flex-col items-center justify-center text-center text-white'>
        <h1 className='text-shadow-md text-5xl font-extrabold md:text-7xl'>Welcome to DevTrack</h1>
        <p className='text-shadow-md mt-4 max-w-xl text-lg text-white/80'>
          Documenting my growth as a developer on the journey to land a top tech job.
        </p>
        <button className='text-shadow-md mt-6 rounded-full border border-white px-6 py-2 text-sm uppercase tracking-wide transition hover:bg-white hover:text-black'>
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
