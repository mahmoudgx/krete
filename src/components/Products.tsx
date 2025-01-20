import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const Products = () => {
  return (
    <div className="p-5 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-5">
        <div className="border-[1px] border-black p-2 rounded-full">
          <FaArrowDown size={20} />
        </div>
        <h1 className="text-xl md:text-2xl font-medium">
          <span className="text-[#44755A]">Better skin</span> in less time than
          it takes to send a text
        </h1>
      </div>
      <div className="flex items-center justify-between md:justify-start w-full md:w-auto bg-[#44755A] p-4 md:p-5 rounded-full">
        <h1 className="text-base md:text-lg text-white">Check Our Products</h1>
        <div className="bg-black rounded-full p-2 md:p-3 text-white ml-4 md:ml-8">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Products;
