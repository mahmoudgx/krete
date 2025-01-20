const BigBanner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        className="w-full h-auto rounded-lg object-cover"
        src="https://krete.club/cdn/shop/t/3/assets/img-parallax-bg.jpg?v=109485674200131194691712918033"
        alt="Background"
      />
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://krete.club/cdn/shop/t/3/assets/img-parallax-objects.webp?v=142206886657383056671712916184"
          alt="Overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[100px] leading-tight sm:leading-none text-center font-thin text-white">
            Simple, Effective
            <br className="hidden sm:inline" /> Skin Care For Men
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BigBanner;
