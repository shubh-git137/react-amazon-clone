import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#131A22] h-full text-white text-center w-full p-2">
        <ul className="flex gap-3 justify-center text-[0.8rem]">
          <li>
            <a href="">Conditions of Use</a>
          </li>
          <li>Privacy Notice</li>
          <li>Consumer Health Data Privacy Disclosure</li>
          <li>Your Ads Privacy Choices</li>
        </ul>
        <p className="text-xs">
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </>
  );
};

export default Footer;
