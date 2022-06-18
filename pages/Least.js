import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function Least() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Jan 13 2020",
    title: "Finding Time to Invest in Yourself",
    description:
      "If you have to work a “normal job,” take on accountability to build your specific knowledge",
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
              The quality of our decisions is paramount in the modern age,
              because we’re all leveraged. You can be leveraged through code,
              community, media, capital, labor and other ways. If you’re smart,
              you leverage every decision you make.
            </p>
            <p>
              If Warren Buffett makes the right decision 85% of the time and his
              competitors get it right 70% of the time, Buffett will win
              everything. That’s a source of his strength: good decision making.
              He makes one or two decisions a year. Most of the time he’s
              sitting around reading books, thinking, reading, playing bridge,
              traveling and golfing.
            </p>
            <p>
              Obviously, hard work is not the solution. Good decision making and
              high leverage is the solution.
            </p>
            <p className="font-bold">A peaceful mind makes better decisions</p>
            <p>
              Having a peaceful mind, being a happier person, relying less on
              momentary pleasure and being calmer will give you the frame of
              mind to make better decisions. Being happy will actually increase
              your effectiveness. As long as the increase in effectiveness is
              higher than the reduction in drive, you’re well off.
            </p>
            <p>
              Ask yourself: Would you rather be the best in the world by working
              the hardest for it or by working the least for it, because you
              worked the most intelligently?
            </p>
            <p>
              Imagine you are the universal god. You are omniscient and
              omnipotent. You could change anything in the universe just by
              pushing a{" "}
              <a
                href="https://en.wikipedia.org/wiki/Butterfly_effect"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                butterfly in one direction
              </a>
              , because you know exactly how the particles will collide from
              there on out.
            </p>
            <p>
              Omniscience is omnipotence.{" "}
              <a
                href="https://en.wikipedia.org/wiki/Scientia_potentia_est"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                Knowledge is power
              </a>
              . We can achieve happiness purely through knowledge, and that
              happiness will improve our decision making. That happiness will
              give us more time to read; make us more knowledgeable about how we
              operate and other people operate; make us more effective; and
              improve our judgment. It should also increase our earnings and the
              returns we need to be financially free.
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
