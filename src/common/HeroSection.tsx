import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#232f3e] h-[300px] w-full text-white ">
      <div className="flex justify-evenly px-2 py-2">
        <ul className="space-y-1">
          <p className="font-bold text-lg">Get to Know Us</p>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Amazon</li>
          <li>Investor Relations</li>
          <li>Amazon Devices</li>
          <li>Amazon Science</li>
        </ul>
        <ul className="space-y-1 text-sm text-[#ddd]">
          <p className="font-bold text-lg">Make Money with Us</p>
          <li>Sell products on Amazon</li>
          <li>Sell on Amazon Business</li>
          <li>Sell apps on Amazon</li>
          <li>Become an Affiliate</li>
          <li>Advertise Your Products</li>
          <li>Self-Publish with Us</li>
          <li>Host an Amazon Hub </li>
          <li>›See More Make Money with Us</li>
        </ul>
        <ul className="space-y-1 text-sm text-[#ddd]">
          <p className="font-bold text-lg">Amazon Payment Products</p>
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
          <li>Amazon Currency Converter</li>
        </ul>
        <ul className="space-y-1 text-sm text-[#ddd]">
          <p className="font-bold text-lg">Let Us Help You</p>
          <li> Amazon and COVID-19</li>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Shipping Rates & Policies</li>
          <li>Returns & Replacements</li>
          <li>Manage Your Content and Devices</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
