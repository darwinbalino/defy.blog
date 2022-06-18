import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function Churchill() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = [
    {
      date: "Feb 8 2018",
      title: "Churchill on Persistence",
    },
  ];
  return (
    <div className="min-h-screen bg-slate">
      <Header />
      <div className="flex md:justify-center">
        <div className="max-w-[830px] px-6 space-y-6 md:mx-10 md:space-y-8 text-lg text-white mt-28 md:mt-14">
          <p className="font-mono text-base">{data[0].date}</p>
          <h1 className="text-4.5xl font-bold leading-[50px]">
            {data[0].title}
          </h1>
          <div className="w-full h-5 border-t border-b border-gray-400" />
          <div className="space-y-4 text-base md:space-y-7">
            <p>When going through hell, keep going</p>
            <p>– Winston Churchill</p>
          </div>
          {!subscribe ? (
            <h1
              onClick={() => setSubscribe(!subscribe)}
              className="text-red-600 cursor-pointer hover:text-white"
            >
              Subscribe to Defy.Blog
            </h1>
          ) : (
            <form>
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
            </form>
          )}
          <p className="pt-8">Related</p>
          <div className="space-y-5 md:space-y-0 pb-36 md:pb-44 md:flex md:space-x-[22px]">
            <div className="space-y-2 cursor-pointer group">
              <Link href="/Frontier">
                <h3 className="text-xl1.5 group-hover:underline">
                  Innovation Requires Decentralization and a Frontier
                </h3>
              </Link>
              <p className="font-mono text-gray-400 text-tiny">NOV 9 2009</p>
            </div>
            <div className="space-y-2 cursor-pointer group">
              <Link href="/Ideas">
                <h3 className="text-xl1.5 group-hover:underline">
                  Ideas Are the New Oil
                </h3>
              </Link>
              <p className="font-mono text-gray-400 text-tiny">NOV 9 2009</p>
            </div>
            <div className="space-y-2 cursor-pointer group">
              <Link href="/Specific-knowledge">
                <h3 className="text-xl1.5 group-hover:underline">
                  Arm Yourself With Specific Knowledge
                </h3>
              </Link>
              <p className="font-mono text-gray-400 text-tiny">NOV 9 2009</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
