import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function Optimism() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "May 24 2021",
    title: "Rational Optimism Is the Way Out",
    description: "Pessimism is self-fulfilling",
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
              Professions in which you get your feedback from other members of
              that profession tend to get corrupted.
            </p>
            <p>
              When you see a journalist writing articles to impress other
              journalists or a restaurant owner trying to impress other foodies
              and restaurant owners, it’s usually not practical or high-quality.
            </p>
            <p>
              The journalist or restaurant owner may receive accolades within
              certain elite circles, but that doesn’t reflect reality.
            </p>
            <p>
              A scientist or an experimentalist gets feedback from Mother
              Nature, and an entrepreneur gets feedback from a free market in
              which people vote with their money and time. Those are much better
              predictors.
            </p>
            <p>
              People who get paid to operate in the real world tend to be
              optimistic. People who operate in ivory towers are incentivized to
              be pessimists.
            </p>
            <p>
              To be an entrepreneur, you need to be optimistic about the fact
              that you’re creating something that other people are going to find
              value in.
            </p>
            <p>
              People who have a pessimistic philosophy tend to have a
              pessimistic psychology as well.
            </p>
            <p>
              If you’re constantly thinking about all the ways in which the
              world is going to wreck and ruin, then this has a day-to-day
              impact on your outlook on everything—the rest of society, your
              family, and your friends—because you think this world is
              condemned.
            </p>
            <p>
              You’re going to feel that weight on your shoulders, and that’s
              going to come through in how you present yourself to the rest of
              the world.
            </p>
            <p>
              We see a lot of this on social media. Entrepreneurs are typically
              too busy to spend a whole lot of time on social media, but you get
              scientists, academics and journalists who are depressed with life
              because they have a pessimistic view of reality. That impacts
              their subjective experience of the world.
            </p>
            <p>
              On the other hand, people who are creating are trying to bring
              something new into existence.
            </p>
            <p>Unfortunately, pessimism is self-fulfilling.</p>
            <p>
              Here we take the stance that all evils are due to lack of
              knowledge. Rational optimism is the way out. The data supports it,
              and history supports it.
            </p>
            <p>
              Through creativity, we can always come up with good explanations
              to improve our lives and everybody else’s lives.
            </p>
            <p>So stay optimistic.</p>
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
              <Link href="/Luck-destiny">
                <h3 className="text-xl1.5 group-hover:underline">
                  Make Luck Your Destiny
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
