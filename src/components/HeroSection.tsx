export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/DSC00817.JPG"
          alt="Kids learning with curiosity and engagement"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Centered Content */}
          <div className="space-y-8 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-up text-white drop-shadow-lg">
              Learning That{" "}
              <span className="text-gradient-primary">Takes Flight</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed animate-fade-up drop-shadow-md" style={{ animationDelay: "0.1s" }}>
              Creating impactful learning experiences through hands-on kits, immersive AR/VR, and expert-led workshops for individuals and organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
