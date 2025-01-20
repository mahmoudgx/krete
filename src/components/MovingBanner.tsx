const MovingBanner = () => {
  const bannerItems = [
    {
      icon: "https://krete.club/cdn/shop/t/3/assets/icon-usa-green.svg?v=171786050015671774361703400196",
      text: "Formulated and filled in the USA",
    },
    {
      icon: "https://krete.club/cdn/shop/t/3/assets/icon-trust-green.svg?v=171786050015671774361703400196",
      text: "Trusted by thousands of men across the country!",
    },
    {
      icon: "https://krete.club/cdn/shop/t/3/assets/icon-truck-green.svg?v=171786050015671774361703400196",
      text: "Free Shipping on all Orders",
    },
    {
      icon: "https://krete.club/cdn/shop/t/3/assets/icon-smiley-green.svg?v=171786050015671774361703400196",
      text: "Satisfaction Guaranteed",
    },
  ];

  return (
    <div className="p-5 overflow-hidden">
      <div className="bg-[#F3EDD4] rounded-xl overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...bannerItems, ...bannerItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-8 py-5 flex-shrink-0"
            >
              <img src={item.icon} alt="" className="w-6 h-6" />
              <h1 className="text-xl">{item.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovingBanner;
