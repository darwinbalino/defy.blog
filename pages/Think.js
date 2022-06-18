import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function Think() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Mar 3 2021",
    title: "This Book Changed the Way I Think",
    description: "David Deutsch’s book expanded my repertoire of reasoning",
  };
  return (
    <div className="bg-slate">
      <Header />
      <div className="flex md:justify-center">
        <div className="max-w-[830px] md:mx-10 px-6 space-y-6 md:space-y-8 text-lg md:mx-10 text-white mt-28 md:mt-14">
          <p className="font-mono text-base">{data.date}</p>
          <h1 className="text-4.5xl font-bold leading-[50px]">{data.title}</h1>
          <h2 className="">{data.description}</h2>
          <div className="w-full h-5 border-t border-b border-gray-400" />
          <div className="space-y-4 text-base md:space-y-7">
            <p>
              I was pleasantly surprised a couple of years back when I opened an
              old book that I’d read a decade ago called{" "}
              <a
                href="https://www.amazon.com/Beginning-Infinity-Explanations-Transform-World/dp/0143121359"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                The Beginning of Infinity
              </a>{" "}
              by{" "}
              <a
                href="https://twitter.com/DavidDeutschOxf?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                David Deutsch
              </a>
              .
            </p>
            <p>
              Sometimes you read a book and it makes a difference right away.
              Sometimes you read a book and you don’t understand it; then you
              read it at the right time and it makes a difference.
            </p>
            <p>
              This time I went through it much more meticulously than I had in
              the past. Rather than reading it to say I was done reading it, I
              read it to understand the concepts and stopped at every point
              where something was new. It started re-forming my worldview. It
              changed the way that I think.
            </p>
            <p>
              I credit this book as being the only book in the last
              decade—except maybe a few of Nassim Taleb’s works and maybe one or
              two other scattered books—that made me smarter. They literally
              expanded the way that I think. They expanded not just the
              repertoire of my knowledge but the repertoire of my reasoning.
            </p>
            <p>
              People throw around the phrase “
              <a
                href="https://fs.blog/mental-models/"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                mental models
              </a>
              ” a lot. Most mental models aren’t worth reading or thinking about
              or listening to because they’re trivial. But the concepts that
              came out of The Beginning of Infinity are transformational because
              they very convincingly change the way that you look at what is
              true and what is not.
            </p>
            <p>
              <a
                href="https://plato.stanford.edu/entries/popper/"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                Karl Popper
              </a>{" "}
              laid out the theory of what is scientific and what is not; what is
              a good explanation and what is not.
            </p>
            <p>
              Deutsch dramatically expands on that in The Beginning of Infinity.
              The wide-ranging nature that he covers is incredible. He covers
              epistemology—which is the theory of knowledge—quantum mechanics,
              multiverse theory, infinity, mathematics, the reach of what is
              knowable and what is not knowable, universal explanations, the
              theory of computation, what is beauty, what systems of politics
              work better, how to raise your children, and more.
            </p>
            <p>These are all-encompassing, long-range philosophical ideas.</p>
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
              <Link href="/Understand">
                <h3 className="text-xl1.5 group-hover:underline">
                  Humans Are Unique in Our Ability to Understand Things
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
