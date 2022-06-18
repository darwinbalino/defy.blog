import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { animated, config, useSpring } from "react-spring";
import useStore from "../store";

const Header = () => {
  const router = useRouter();
  const toggleMenu = useStore((state) => state.toggleMenu);
  const menu = useStore((state) => state.menu);
  const animation = useSpring({
    opacity: menu ? 0 : 1,
    config: config.molasses,
  });
  return (
    <main>
      <header className="flex items-center justify-between py-5 mx-6 border-b-2 border-gray-700 md:px-10 md:pt-10 md:border-0">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <h1 className="font-mono text-xl font-bold tracking-wide text-red-600 cursor-pointer hover:text-white">
              Defy
            </h1>
          </Link>
          <a
            href="https://github.com/darwinbalino/darwinbalino"
            className="font-light text-gray-300 cursor-pointer text-md hover:text-red-600"
          >
            NulliusLabs
          </a>
        </div>
        <div className="hidden space-x-3 text-lg font-light text-gray-300 md:flex">
          <Link href="/Archive">
            <h1 className="cursor-pointer hover:text-red-600">Archive</h1>
          </Link>
          <a
            href="https://twitter.com/Defy_dot_Blog"
            className="cursor-pointer hover:text-red-600"
          >
            Twitter
          </a>
          <Link href="/Subscribe">
            <h1 className="cursor-pointer hover:text-red-600">Subscribe</h1>
          </Link>
        </div>
        <div className="md:hidden">
          {menu ? (
            <MenuIcon
              onClick={() => toggleMenu(!menu)}
              className="w-6 text-gray-200 cursor-pointer"
            />
          ) : (
            <XIcon
              onClick={() => toggleMenu(!menu)}
              className="h-6 text-gray-200 cursor-pointer"
            />
          )}
        </div>
      </header>
      {/* Sidebar */}
      <animated.div
        style={animation}
        className={`${menu ? "hidden" : "display"} md:hidden`}
      >
        <div className="flex flex-col h-screen px-5 pt-20 space-y-2 bg-black">
          <Link href="/Archive">
            <div
              onClick={() => toggleMenu(!menu)}
              className="text-lg text-gray-100 cursor-pointer hover:text-red-600"
            >
              Archive
            </div>
          </Link>
          <a
            onClick={() => toggleMenu(!menu)}
            href="https://twitter.com/Defy_dot_Blog"
            className="text-lg text-gray-100 cursor-pointer hover:text-red-600"
          >
            Twitter
          </a>
          <Link href="/Subscribe">
            <div>
              <div
                onClick={() => toggleMenu(!menu)}
                className="mt-4 text-lg text-gray-100"
              >
                Subscribe
              </div>
              <input
                className="px-3.5 py-2 text-gray-200 placeholder-gray-400 mt-2 bg-black outline-none rounded-l-sm border border-red-600"
                placeholder="Email"
              />
              <button
                onClick={() => router.reload(window.location)}
                className="px-4 py-2 text-gray-200 bg-red-600 border border-red-600 rounded-r-sm"
              >
                Subscribe
              </button>
            </div>
          </Link>
        </div>
      </animated.div>
    </main>
  );
};

export default Header;

{
  /* <div
        className={
          sidebar
            ? "bg-black shadow-2xl space-y-6 w-[355px] absolute inset-y-0 right-0 transform translate-x-full transition hidden duration-200 ease-in-out"
            : "bg-black shadow-2xl z-10 space-y-6 w-full absolute inset-y-0 right-0 transform transition duration-200 ease-in-out hidden"
        }
      ></div> */
}
