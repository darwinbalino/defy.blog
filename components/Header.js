import { MenuIcon } from "@heroicons/react/outline";
import React from "react";

const Header = ({ sidebar, setSidebar }) => {
  return (
    <div className="flex items-center justify-between py-5 border-b border-gray-700 md:py-8 md:border-0">
      <div className="flex items-center space-x-5">
        <h1 className="text-xl font-semibold tracking-wide text-red-600 cursor-pointer hover:text-white first-letter:font-mono">
          Defy
        </h1>
        <h1 className="text-gray-400 cursor-pointer text-md hover:text-red-600 first-letter:font-thin">
          NulliusLabs
        </h1>
      </div>
      <div className="hidden space-x-3 text-lg font-light text-gray-300 md:flex">
        <h1 className="cursor-pointer hover:text-red-600">Archive</h1>
        <h1 className="cursor-pointer hover:text-red-600">Twitter</h1>
        <h1 className="cursor-pointer hover:text-red-600">Subscribe</h1>
      </div>
      <div className="md:hidden">
        <MenuIcon
          onClick={() => setSidebar(!sidebar)}
          className="w-6 text-gray-200 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
