import { FaArrowRight } from "react-icons/fa";
import FormulasCard from "./FormulasCard";

const Formulas = () => {
  return (
    <div className="p-5 flex flex-col lg:flex-row justify-center mx-auto lg:space-x-[150px] space-y-8 lg:space-y-0">
      <div className="w-full lg:w-[450px]">
        <img
          className="w-full rounded-xl"
          src="https://krete.club/cdn/shop/t/3/assets/img-products.jpg?v=112867695550542762511712916184"
          alt="Product"
        />
      </div>
      <div className="max-w-xl space-y-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin leading-tight">
          Our
          <br className="hidden sm:inline" /> Formulas
        </h1>
        <p className="text-sm sm:text-base">
          Every Krete product is 100% Vegan and Leaping Bunny Certified for
          cruelty free formulas and production.
        </p>
        <p className="text-sm sm:text-base">
          We pass the commonly accepted standard for "Clean Formulas" according
          to large retailers and manufactures in the skin care industy.
        </p>
        <h1 className="text-lg sm:text-xl font-bold">Every Krete Product</h1>
        <div className="flex flex-col space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <FormulasCard
              image="https://krete.club/cdn/shop/t/3/assets/icon-time.svg?v=24170020038372745951703400183"
              title="30 Seconds to Use"
            />
            <FormulasCard
              image="https://krete.club/cdn/shop/t/3/assets/icon-vegan-2.svg?v=170302102813926040951703400192"
              title="Vegan"
            />
            <FormulasCard
              image="https://krete.club/cdn/shop/t/3/assets/icon-oilfree.svg?v=66480998931486971081703400188"
              title="Oil Free"
            />
            <FormulasCard
              image="https://krete.club/cdn/shop/t/3/assets/icon-leaping-bunny-2.svg?v=144687757178870716701703400196"
              title="Cruelty Free"
            />
            <FormulasCard
              image="https://krete.club/cdn/shop/t/3/assets/icon-human.svg?v=134450132104018376001703400183"
              title="For all Skin Types"
            />
            <FormulasCard
              image="https://krete.club/cdn/shop/t/3/assets/icon-hourglass.svg?v=72803871233677613891703400300"
              title="Anti-Aging"
            />
            <FormulasCard
              image="https://krete.club/cdn/shop/t/3/assets/icon-usa.svg?v=46834362137662554231703400183"
              title="Formulated and filled in the USA"
            />
            <FormulasCard
              image="https://krete.club/cdn/shop/t/3/assets/icon-recyclable-2.svg?v=68124130092909804911703400197"
              title="Recyclable Packaging"
            />
            <FormulasCard
              image="https://krete.club/cdn/shop/t/3/assets/icon-lab-vessel.svg?v=82262338817553585811703400200"
              title="Cutting Edge Ingredients"
            />
            <FormulasCard
              image="https://krete.club/cdn/shop/t/3/assets/icon-chart.svg?v=80283264512135460181703400192"
              title="Visible Results"
            />
          </div>
          <div className="flex items-center justify-between sm:justify-start space-x-4 sm:space-x-8 bg-[#44755A] p-3 sm:p-5 rounded-full w-full sm:w-max mt-4">
            <h1 className="text-base sm:text-lg text-white">Products</h1>
            <div className="bg-black rounded-full p-2 sm:p-3 text-white">
              <FaArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulas;
