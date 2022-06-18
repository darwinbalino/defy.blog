import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function Pessimism() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "May 17 2021",
    title: "Pessimism Seems Like an Intellectually Serious Position",
    description: "We'e innovated our way out of previous traps",
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
              If you’re an academic, being able to explain all of the problems
              that are out there and how dangerous these problems are and why
              you need funding to look at them in more depth appears to be the
              intellectually serious position; whereas, someone who claims that
              we can solve it sounds a little bit kumbaya.
            </p>
            <p>
              In fact, collaboration, cooperation and resource exploitation are
              the things that will drive this knowledge economy forward so that
              we can solve these problems.
            </p>
            <p>
              It always seems more intellectually serious if you can stand out
              there with a frown on your face in front of a TED Talk audience
              and say, “These are all the ways in which we’re going to die, in
              which the Earth is going to fail, and in which we’re going to come
              to ruin.”
            </p>
            <p className="font-bold">The only way out is through progress.</p>
            <p>
              When I read Deutsch, I realized why Pessimism is an easy trap to
              fall into, but it implies that humans are not creative. Pessimism
              doesn’t acknowledge all the ways that we have innovated our way
              out of previous traps.
            </p>
            <p>
              Entrepreneurs are inherently optimistic because they get rewarded
              for being optimistic. As you were saying, intellectuals get
              rewarded for being pessimistic. So there is incentive bias.
            </p>
            <p>
              If you’re a pessimist, you get your feedback from other people.
              It’s a social act. You’re convincing other people of your
              pessimism. But entrepreneurs get feedback from nature and free
              markets, which I believe are much more realistic feedback
              mechanisms.
            </p>
            <p>
              So far, most of the pessimistic predictions have turned out to be
              false. If you look at the timelines on which the world was
              supposed to end or environmental catastrophes were supposed to
              happen, they’ve been quite wrong.
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
