import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function () {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Dec 3 2021",
    title: "Free Markets Provide the Best Feedback",
    description: "The alternative is feedback from whomever has the most guns",
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
              Marc Andreessen summarizes this nicely as “
              <a
                href="https://tim.blog/2018/01/01/the-tim-ferriss-show-transcripts-marc-andreessen/"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                strong opinions, loosely held
              </a>
              .”
            </p>
            <p>
              As a society, if you’re truth-seeking, you want to have strong
              opinions but very loosely held. You want to try them, see if they
              work, and then error-correct if they don’t.
            </p>
            <p>
              But instead what we get is either strong opinions strongly
              held—which is the intolerant minority—or we get weak opinions
              loosely held—which is this compromised model where no one really
              takes the blame, no one gets credit, no one gets to try the way
              that they want to, and everybody can then fall back on, “Real
              communism hasn’t been tried.” Although, in that case, real
              communism has been tried; it just hasn’t worked out well.
            </p>
            <p>
              As a digression, one of the common critiques I hear people say is,
              “We need to move to a post-capitalist world. Capitalism isn’t
              working.” OK, what is your alternative? Usually this is where
              people start fumbling because there aren’t a lot of choices.
            </p>
            <p>
              When you’re trying to figure out how to divvy up credit, divvy up
              resources and reward people for their work, you have two choices:
              feedback from free markets and reality—and the best model for that
              is money—or feedback from people, which is where communism ends
              up, which is a group of people who decide that you did the best
              work.
            </p>
            <p>
              Now, who decides you did the best work? Someone has to be in
              charge of doing that, and invariably that ends up being the
              biggest thug.
            </p>
            <p>
              I don’t think that it’s an accident that every communist country
              degenerates into a dictatorship. Communism never seems to actually
              be run by a distributed majority of the people. It always ends up
              being run by a bunch of people who are taking charge.
            </p>
            <p>
              It’s just human nature that if I get to decide who gets the gold,
              it’s going to go to my friends, family and the people that I like.
              And that’s invariably what ends up happening.
            </p>
            <p>
              Either you need an objective function to carve it up—and money is
              the known objective function—or it becomes all subjective. And if
              it’s subjective, then who’s to say you’re carving it up instead of
              me? We’re just going to decide based on who has more physical
              force, who has more guns.
            </p>
            <p>
              What we say on the side of free markets is that we’ve extracted
              coercion out of that decision-making process. No one is forced
              into purchasing a service or undertaking an agreement.
            </p>
            <p>
              The only time that force is applied is when the government gets
              involved. The people at the top then say, “This is the best
              decision and you will have to agree with it; otherwise, there’s
              going to be a man with a badge and a gun turning up at your door.”
            </p>
            <p>
              When it comes to the free market, it's the individual that gets to
              decide without being coerced. Now, I could be wrong, but why
              shouldn’t they try and make mistakes? It’s the only way to make
              progress.
            </p>
            <p>
              The only way to error-correct is to actually try something else.
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
