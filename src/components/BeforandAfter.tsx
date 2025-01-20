import { useState, MouseEvent, TouchEvent } from "react";
import { GripVertical } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const BeforeAndAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let clientX: number;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = clientX - rect.left;
    const newPosition = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
  };

  return (
    <div className="bg-black rounded-lg text-[#F3EDD4]">
      <div className="flex flex-col md:flex-row justify-evenly p-5 items-center">
        <div className="space-y-10 mb-5 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-thin">
            Before
            <br /> & After
          </h1>
          <p className="text-lg">
            <span className="font-bold">Only 30 seconds</span> between
            <br />
            these photos. No filters.
          </p>
          <div className="flex items-center justify-between text-black rounded-full p-3 bg-[#f3edd4]">
            <h1 className="text-lg">More</h1>
            <div className="bg-[#45745A] p-3 rounded-full">
              <FaArrowRight className="text-white" />
            </div>
          </div>
        </div>
        <div className="relative w-full max-w-[388px] h-[473px]">
          <div
            className="w-full h-full cursor-ew-resize rounded-xl overflow-hidden"
            onMouseMove={handleMouseMove}
            onTouchMove={handleMouseMove}
          >
            <img
              src="https://krete.club/cdn/shop/t/3/assets/img-after-1.jpg?v=88189690690081641761699280960"
              alt="After"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />

            <div
              className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="https://krete.club/cdn/shop/t/3/assets/img-before-1.jpg?v=17206303134082003521699280958"
                alt="Before"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white"
              style={{ left: `${sliderPosition}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <GripVertical className="text-gray-600" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAndAfter;
