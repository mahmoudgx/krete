import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { LuShoppingBag } from "react-icons/lu";
import { X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 bg-[#FFFDF3] sticky top-0 z-[99999]">
      <div className="flex justify-between w-full md:w-auto">
        <h1 className="text-3xl font-semibold">Krete</h1>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={30} /> : <HiOutlineMenuAlt1 size={30} />}
        </button>
      </div>
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 text-lg font-medium mt-4 md:mt-0 w-full md:w-auto`}
      >
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
      </ul>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex items-center space-x-2 mt-4 md:mt-0`}
      >
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="/api/placeholder/40/40"
          alt="User profile"
        />
        <div className="flex items-center bg-[#44755a] space-x-2 text-white py-2 px-4 rounded-full">
          <LuShoppingBag />
          <div className="bg-black rounded-full w-6 h-6 p-1 flex items-center justify-center">
            <h1 className="text-white text-xs">2</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
