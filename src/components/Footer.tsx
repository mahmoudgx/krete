import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="bg-black py-20 text-[#F3EDD4] p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h1 className="text-white text-4xl lg:text-6xl">Krete</h1>
          </div>
          <div className="text-lg">
            <ul className="space-y-3 lg:space-y-5">
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Help</li>
              <li>Contact</li>
              <li>Account</li>
            </ul>
          </div>
          <div className="text-lg">
            <ul className="space-y-3 lg:space-y-5">
              <li>Shipping & Returns</li>
              <li>Track your order</li>
              <li>Privacy Policy</li>
              <li>Terms & Rights</li>
              <li>Accessibility Statement</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h1 className="uppercase text-sm font-bold">
              We will only send you useful information, like tips and discounts.
            </h1>
            <div className="relative">
              <input
                className="bg-black border-[1px] border-gray-700 rounded-full p-3 lg:p-5 w-full pr-16"
                placeholder="Your email address"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#4C8063] p-2 lg:p-3 rounded-full cursor-pointer">
                <ArrowRight size={20} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-black text-white py-10">
        <h1 className="text-center text-sm lg:text-base">
          All rights reserved. Copyright © 2024 by Krete
        </h1>
      </div>
    </>
  );
};

export default Footer;
