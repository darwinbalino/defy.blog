import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function Knowledge() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Mar 15 2021",
    title: "We’re at the Beginning of an Infinity of Knowledge",
    description: "Progress is inevitable as long as we have good explanations",
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
              The difference with{" "}
              <span className="italic">The Beginning of Infinity</span> is
              you’re getting a worldview. You’re not getting the standard take
              from physicists about how to understand quantum theory. You’re not
              getting the standard take of how to understand knowledge from
              philosophers. And you’re certainly not getting the standard take
              of how to understand mathematics from mathematicians. Deutsch is
              an expert in all these areas.
            </p>

            <p>What’s at the core of the worldview?</p>
            <p>
              Deutsch’s worldview is that reality is comprehensible. Problems
              are solvable, or “soluble,” as he writes. It’s a deeply rationally
              optimistic worldview that believes in good scientific explanations
              and progress.
            </p>
            <p>
              Progress is inevitable as long as we have these good explanations.
              Good explanations have tremendous reach. They are acts of
              creativity.
            </p>
            <p>
              Humans are problem solvers and can solve all problems. All sins
              and evil are due to a lack of knowledge. One can be optimistic
              about constant progress. That’s what the title refers to: We’re at
              the beginning of an infinite series of progress.
            </p>
            <p>
              It’s a very optimistic take. It states that we are at home in the
              universe and the universe is ours as a resource to learn about and
              exploit; that material wealth is a set of physical transformations
              that we can affect; that everything that is not forbidden by the
              laws of physics is eventually possible through knowledge and
              knowledge creation.
            </p>
            <p>
              He also writes about how humans are universal explainers, that
              anything that can be known and understood can be known and
              understood by human beings in the computation power of a human
              system.
            </p>
            <p>
              Everything is knowable by humans. We’re at the beginning of an
              infinity of knowledge.
            </p>
            <p>
              We understand things using good explanations and constantly
              replace old theories with better ones. There’s no endpoint in
              sight. There’s no perfection. Every theory can be falsified
              eventually and improved.
            </p>
            <p>
              We are on our way to being able to do everything that is not
              forbidden by the laws of physics.
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
