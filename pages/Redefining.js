import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function Redefining() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "May 13 2019",
    title: "Keep Redefining What You Do",
    description: "Become the best in the world at what you do",
  };
  return (
    <div className="bg-slate">
      <Header />
      <div className="flex md:justify-center">
        <div className="max-w-[830px] md:mx-10 px-6 space-y-6 md:space-y-8 text-lg text-white mt-28 md:mt-14">
          <p className="font-mono text-base">{data.date}</p>
          <h1 className="text-4.5xl font-bold leading-[50px]">{data.title}</h1>
          <h2 className="">{data.description}</h2>
          <div className="w-full h-5 border-t border-b border-gray-400" />
          <div className="space-y-4 text-base md:space-y-7">
            <p>
              If you really want to get paid in this world, you want to be
              number one at whatever you do. It can be niche—that’s the point.
              You can literally get paid for just being you.
            </p>
            <p>
              Some of the more successful people in the world are that way.
              Oprah gets paid for being Oprah. Joe Rogan gets paid for being Joe
              Rogan. They’re being authentic to themselves.
            </p>
            <p>
              You want to be number one. And you want to keep changing what you
              do until you’re number one. You can’t just pick something
              arbitrary. You can’t say, “I’m going to be the fastest runner in
              the world,” and now you have to beat Usain Bolt. That’s too hard
              of a problem.
            </p>
            <p>
              Keep changing your objective until it arrives at your specific
              knowledge, skill sets, position, capabilities, location and
              interests. Your objective and skills should converge to make you
              number one.
            </p>
            <p>
              When you’re searching for what to do, you have two different foci
              to keep in mind. One is, “I want to be the best at what I do.” The
              second is, “What I do is flexible, so that I’m the best at it.”
            </p>
            <p>
              You want to arrive at a comfortable place where you feel, “This is
              something I can be amazing at, while still being authentic to who
              I am.”
            </p>
            <p>
              It’s going to be a long journey. But now you know how to think
              about it.
            </p>
            <p className="font-bold">Find founder-product-market fit</p>
            <p>
              The most important thing for any company is to find product-market
              fit. But the most important thing for any entrepreneur is to find
              founder-product-market fit, where you are naturally inclined to to
              build the right product for a market. That’s a three-foci problem.
              You have to make all three work at once.
            </p>
            <p>
              If you want to be successful in life, you have to get comfortable
              managing multi-variate problems and multiple-objective functions
              at once. This is one of those cases where you have to map at least
              two or three at once.
            </p>
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
              <Link href="/Finding-time">
                <h3 className="text-xl1.5 group-hover:underline">
                  Finding Time to Invest in Yourself
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
              <Link href="/Creative-technical">
                <h3 className="text-xl1.5 group-hover:underline">
                  Specific Knowledge Is Highly Creative or Technical
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
