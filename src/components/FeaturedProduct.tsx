import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProduct = () => {
  return (
    <div className="p-5">
      <div className="space-y-5 sm:space-y-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin leading-tight">
          Featured Product
        </h1>
        <p className="text-sm sm:text-base">
          Krete Products work for everyone, but we have focused our messaging
          <br className="hidden sm:inline" />
          and education to help men start from square 1 when it comes to skin
          care.
        </p>
      </div>
      <div className="pt-5 sm:pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <FeaturedProductCard
          image="https://krete.club/cdn/shop/files/essentials-kit-collection_d8f83c90-210f-4d58-8162-66abaeb63dac_520x.jpg?v=1702711902"
          title="Hydrating Facial Serum"
          description="A concentrated moisturizer with apple stem cell extract."
          rating="4.5"
          review="221"
        />
        <FeaturedProductCard
          image="https://krete.club/cdn/shop/files/eye-stick-collection_d0c973e7-d417-49e0-a2c4-761467263553_520x.jpg?v=1718003982"
          title="Hydrating Facial Serum"
          description="A concentrated moisturizer with apple stem cell extract."
          rating="4.5"
          review="221"
        />
        <FeaturedProductCard
          image="https://krete.club/cdn/shop/files/facial-serum-collection_520x.jpg?v=1677216258"
          title="Hydrating Facial Serum"
          description="A concentrated moisturizer with apple stem cell extract."
          rating="4.5"
          review="221"
        />
      </div>
    </div>
  );
};

export default FeaturedProduct;
