import logo from "../assets/logo.webp";
import { MapPin, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div>
      <header className="w-screen bg-[#0f1111] text-white h-14">
        <div className="flex justify-evenly items-center h-full px-4">
          <div className="item-style">
            <img src={logo} alt="logo" className="h-6 w-14 object-contain" />
          </div>

          <div className="item-style">
            <span className="text-[#CCCCCC] text-sm mx-6">India</span>
            <div className="flex">
              <MapPin className="text-sm" />
              <p className="font-bold">Update Location</p>
            </div>
          </div>
          <div className="border-none flex items-center justify-between w-[600px] focus-within:outline focus-within:outline-yellow-400 focus-within:outline-2 rounded-lg">
            <select className="h-10 bg-[#E6E6E6] text-black rounded-bl-lg rounded-tl-lg cursor-pointer">
              <option value="">All</option>
            </select>
            <input
              type="text"
              className="outline-none border-none px-1 w-full bg-white text-gray-600 h-10"
              placeholder="Search in Amazon"
            />
            <button
              className="hover:bg-amber-500 bg-[#febd69] h-10 w-[45px] flex items-center justify-center rounded-br-lg rounded-tr-lg px-1 text-black cursor-pointer"
              aria-label="Search"
            >
              <Search />
            </button>
          </div>
          <div className="item-style flex flex-col items-start">
            <span className="text-gray-300 text-sm">Hello,Signin</span>
            <p className="font-bold">Accounts & Lists</p>
          </div>
          <div className="item-style flex flex-col items-start">
            <span className="text-gray-300 text-sm">Return</span>
            <p className="font-bold">& Orders</p>
          </div>
          <div className="flex items-center space-x-1">
            <ShoppingCart className="text-2xl" />
            <p className="font-bold">Cart</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
