import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React from "react";

const Header = ({ sidebar, setSidebar }) => {
  return (
    <main>
      <header className="flex items-center justify-between py-5 border-b border-gray-700 md:py-8 md:border-0">
        <div className="flex items-center space-x-5">
          <h1 className="font-mono text-xl font-bold tracking-wide text-red-600 cursor-pointer hover:text-white">
            Defy
          </h1>
          <h1 className="font-light text-gray-300 cursor-pointer text-md hover:text-red-600">
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
      </header>
      {/* Sidebar */}
      <div
        className={
          sidebar
            ? "bg-black shadow-2xl space-y-6 w-[355px] absolute inset-y-0 right-0 transform translate-x-full transition md:hidden duration-200 ease-in-out"
            : "bg-black shadow-2xl z-10 space-y-6 w-full absolute inset-y-0 right-0 transform transition duration-200 ease-in-out md:hidden"
        }
      >
        <div className="flex justify-between px-6 py-6">
          <div />
          <XIcon
            onClick={() => setSidebar(!sidebar)}
            className="h-6 text-gray-200 cursor-pointer"
          />
        </div>
        <div className="flex flex-col px-5 space-y-2 font-mono">
          <div
            onClick={() => setSidebar(!sidebar)}
            className="text-lg text-gray-100 cursor-pointer hover:text-red-600"
          >
            Archive
          </div>

          <div
            onClick={() => setSidebar(!sidebar)}
            className="text-lg text-gray-100 cursor-pointer hover:text-red-600"
          >
            Twitter
          </div>
          <div>
            <div
              onClick={() => setSidebar(!sidebar)}
              className="mt-4 text-lg text-gray-100"
            >
              Subscribe
            </div>
            <input
              className="px-3.5 py-2 text-gray-200 placeholder-gray-400 mt-2 bg-black outline-none rounded-l-sm border border-red-600"
              placeholder="email@defy.blog"
            />
            <button className="px-4 py-2 text-gray-200 bg-red-600 border border-red-600 rounded-r-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
