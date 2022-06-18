import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function Understand() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Mar 22 2021",
    title: "Humans Are Unique in Our Ability to Understand Things",
    description: "Knowledge is in the observer, not the observed",
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
              The value is in the knowledge, and the knowledge is inside the
              observer and the creator, in other words, a human. It’s not inside
              the thing itself. For example, oil is useless unless you know how
              to refine it, burn it, and use it for combustion. Information is
              useless unless there’s a brain there to receive it.
            </p>
            <p>
              There could be a signal broadcasting English into outer space, but
              if there isn’t a creature capable of understanding what that
              language is, how it works, and who’s conveying it, then it’s just
              modulated electromagnetic frequencies that don’t mean anything. So
              a lot of the information—a lot of the value—is within a particular
              knowledge-bearing entity.
            </p>
            <p>
              As the reach of science grows, we have gotten to a very reductive
              science where we break things down to smaller and smaller pieces.
              Then we try and explain things on the basis of that. There is a
              counter-trend in science,{" "}
              <a
                href="https://en.wikipedia.org/wiki/Complex_system"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                complexity theory
              </a>
              , where we talk about emergent properties and higher-level
              systems. They’re looking at systems as they operate chaotically
              and unpredictably at a micro-level; but at a macro-level we can
              make certain statements about them that do have explanatory power.
            </p>
            <p>Humans are unique in our capability to understand things.</p>
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
              <Link href="/Knowledge">
                <h3 className="text-xl1.5 group-hover:underline">
                  We’re at the Beginning of an Infinity of Knowledge
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
