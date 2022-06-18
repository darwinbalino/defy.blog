import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function DoAnimalsLaugh() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Nov 29 2018",
    title: "Do Animals Laugh?",
  };
  return (
    <div className="bg-slate">
      <Header />
      <div className="flex md:justify-center">
        <div className="max-w-[830px] md:mx-10 px-6 space-y-6 md:space-y-8 text-lg text-white mt-28 md:mt-14">
          <p className="font-mono text-base">{data.date}</p>
          <h1 className="text-4.5xl font-bold leading-[50px]">{data.title}</h1>
          <div className="w-full h-5 border-t border-b border-gray-400" />
          <div className="space-y-4 text-base md:space-y-7">
            <p>
              Almost everything that women like in men seems to have some
              reproductive fitness signaling value. What about humor? Note that
              it’s not enough to say that “humor is a stress reliever.” The
              question is, why would it relieve stress?
            </p>
            <p>The best guesses that I have:</p>
            <p>
              1. Humor signals contextual intelligence in quick, bite-size
              forms. You have to know about the local social environment and be
              intelligent to be spontaneously funny.
            </p>
            <p>
              2. Humor is the mechanism via which the brain can engage in some
              self-observation (nearly impossible for the brain to do otherwise)
              by noticing how much of our environment is actually predictive
              guesses based on pattern matching. Obviously false pattern matches
              (which a lot of humor is based on) show that we can be wrong about
              serious things, and so we take them, well, less seriously. This
              can reduce stress.
            </p>
            <p>
              3. To make jokes, you must play with patterns and make them
              incomplete on purpose. To do so, you have to be able to complete
              patterns as well – the ability to reason. Therefore a humorous
              animal is a reasoning animal. Do non-human animals laugh and joke
              around?
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
              <Link href="/Optimism">
                <h3 className="text-xl1.5 group-hover:underline">
                  Rational Optimism Is the Way Out
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
