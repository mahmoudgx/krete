import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <div className="p-5 bg-black space-y-10">
      <div>
        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-thin">
          See How We Earned<br></br> These Stars
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
        <TestimonialsCard
          name="Bryan K."
          product="hydrating facial serum"
          rating={4.5}
          description="I'm outdoors a lot and always lookig for ways to help my skin not be chapped and bleeding from the elements. Started using this stuff on my hands and face and it works wonders. it's better than anything else I've tried, and works in much smaller quantities"
        />
        <TestimonialsCard
          name="Pierce J."
          product="Hydrating Body Serum"
          rating={4.5}
          description="Great product and super easy to use. Moistens my skin without making my face break out and smells good too. Will be buying more soon because my girlfriend insists that my Krete is “our” Krete."
        />
        <TestimonialsCard
          name="Mark S."
          product="Hydrating Body Serum"
          rating={4.5}
          description="I used the whole skincare range in the past and I have come back to use the whole range because of the improvement in my overall skin texture and decrease of my fine lines. This is the brand you looking for you."
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 pt-10">
        <div className="grid grid-rows-2 gap-5">
          <img
            className="rounded-xl"
            src="https://krete.club/cdn/shop/t/3/assets/img-deserve-model-1.jpg?v=124316658822668719631699280955"
          />
          <img
            className="rounded-xl"
            src="https://krete.club/cdn/shop/t/3/assets/img-deserve-model-2.jpg?v=32256413133754072961699280954"
          />
        </div>
        <div className="space-y-5">
          <h1 className="text-white text-3xl sm:text-4xl">
            <span className="font-bold">You deserve</span>{" "}
            <span className="text-[#F3EDD4]">to feel this confident!</span>
          </h1>
          <img
            className="rounded-xl"
            src="https://krete.club/cdn/shop/t/3/assets/img-deserve-model-3.jpg?v=125967877219154509431699280957"
          />
        </div>
        <div className="grid grid-rows-2 gap-5">
          <img
            className="rounded-xl"
            src="https://krete.club/cdn/shop/t/3/assets/img-deserve-model-4.jpg?v=59745709647812826001699280962"
          />
          <img
            className="rounded-xl"
            src="https://krete.club/cdn/shop/t/3/assets/img-deserve-model-5.jpg?v=143531519669171536401699280963"
          />
        </div>
        <div className="hidden sm:grid grid-rows-2 gap-5">
          <img
            className="rounded-xl"
            src="https://krete.club/cdn/shop/t/3/assets/img-deserve-model-6.jpg?v=43868854663419627821699280958"
          />
          <img
            className="rounded-xl"
            src="https://krete.club/cdn/shop/t/3/assets/img-deserve-model-7.jpg?v=92518391663494448201699280955"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
