import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div className="p-5">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin leading-tight">
          Find A Product
          <br className="sm:hidden" /> By Your Skin Issue
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-6 sm:pt-8 lg:pt-10">
        <ProductCard
          image="https://krete.club/cdn/shop/t/3/assets/img-home-dryskin-man-light.jpg?v=681970874329122231713255290"
          title="Dry Skin"
        />
        <ProductCard
          image="https://krete.club/cdn/shop/t/3/assets/img-home-redness-man-light.jpg?v=125170324240065743891706677083"
          title="Under-Eye Bags"
        />
        <ProductCard
          image="https://krete.club/cdn/shop/t/3/assets/img-home-eyebags-man-light.jpg?v=20759607969485428081706677088"
          title="Redness"
        />
        <ProductCard
          image="https://krete.club/cdn/shop/t/3/assets/img-home-wrinkles-man-light.jpg?v=44021862822899171011706677083"
          title="Wrinkles"
        />
      </div>
    </div>
  );
};

export default Product;
