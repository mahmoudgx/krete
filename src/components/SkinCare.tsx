import React from "react";
import ReactPlayer from "react-player";

const SkinCare = () => {
  return (
    <div className="p-5 space-y-6 sm:space-y-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin leading-tight">
        What Is 30-Second
        <br className="hidden sm:inline" /> Skin Care?
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        <div className="w-full aspect-video">
          <ReactPlayer
            url="https://krete.club/cdn/shop/t/3/assets/home-30-sec-vidC.mp4"
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
        </div>
        <div className="space-y-6 sm:space-y-10">
          <h1 className="uppercase text-xs font-bold text-gray-400">
            simpler than you think:
          </h1>
          {[
            "Open your krete product",
            "Use it in 30 seconds or less",
            "Look amazing",
            "Back to the first step next day",
          ].map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center space-x-4 sm:space-x-10">
                <div className="bg-[#F3EDD4] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center border-2 border-black flex-shrink-0">
                  <h1 className="text-lg sm:text-2xl">
                    {String(index + 1).padStart(2, "0")}
                  </h1>
                </div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl">{step}</h1>
              </div>
              {index < 3 && (
                <hr className="border-[1px] ml-14 sm:ml-[90px] border-black" />
              )}
            </React.Fragment>
          ))}
          <p className="text-lg sm:text-xl lg:text-2xl">
            Your skin care routine{" "}
            <span className="font-black">
              should take 30 seconds, not 30 minutes.
            </span>{" "}
            Every Krete product is formulated to deliver noticeable results
            right away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkinCare;
