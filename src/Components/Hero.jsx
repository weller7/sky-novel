const Hero = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0F172A] text-white font-sans">
        {/* Main Section */}
        <section className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-blue-800 to-gray-800">
          <div className="text-center space-y-4">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-yellow-300 to-amber-300 animate-pulse">
              Under The Same Sky
            </h1>
            <p className="text-2xl text-white">The graphic novel</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
