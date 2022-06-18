import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function CreativeTechnical() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Mar 28 2019",
    title: "Specific Knowledge Is Highly Creative or Technical",
    description:
      "Specific knowledge is on the bleeding edge of technology, art and communication",
  };
  return (
    <div className="bg-slate">
      <Header />
      <div className="flex md:justify-center">
        <div className="max-w-[830px] px-6 md:mx-10 space-y-6 md:space-y-8 text-lg text-white mt-28 md:mt-14">
          <p className="font-mono text-base">{data.date}</p>
          <h1 className="text-4.5xl font-bold leading-[50px]">{data.title}</h1>
          <h2 className="">{data.description}</h2>
          <div className="w-full h-5 border-t border-b border-gray-400" />
          <div className="space-y-4 text-base md:space-y-7">
            <p>
              To the extent that specific knowledge is taught, it’s on the job.
              It’s through apprenticeships. And that’s why the best businesses,
              the best careers are the apprenticeship or self-taught careers,
              because those are things society still has not figured out how to
              train and automate yet.
            </p>
            <p>
              The classic line here is that Warren Buffett went to Benjamin
              Graham when he got out of school. Benjamin Graham was the author
              of the Intelligent Investor and sort of modernized or created
              value investing as a discipline. And Warren Buffett went to
              Benjamin Graham and offered to work for him for free.
            </p>
            <p>
              And Graham said, “Actually, you’re overpriced, free is
              overpriced.” And Graham was absolutely right. When it comes to a
              very valuable apprenticeship like the type that Graham was going
              to give Buffet, Buffet should have been paying him a lot of money.
              That right there tells you that those are skills worth having.
            </p>
            <p className="font-bold">
              Specific knowledge is often highly creative or technical
            </p>
            <p>
              Specific knowledge also tends to be technical and creative. It’s
              on the bleeding edge of technology, on the bleeding edge of art,
              on the bleeding edge of communication.
            </p>
            <p>
              Even today, for example, there are probably meme lords out there
              on the Internet who can create incredible memes that will spread
              the idea to millions of people. Or are very persuasive – Scott
              Adams is a good example of this. He is essentially becoming one of
              the most credible people in the world by making accurate
              predictions through persuasive arguments and videos.
            </p>
            <p>
              And that is specific knowledge that he has built up over the years
              because he got obsessed with hypnosis when he was young, he
              learned how to communicate through cartooning, he embraced
              Periscope early, so he’s been practicing lots of conversation,
              he’s read all the books on the topic, he’s employed it in his
              everyday life. If you look at his girlfriend, she’s this beautiful
              young Instagram model.
            </p>
            <p>
              That is an example of someone who has built up a specific
              knowledge over the course of his career. It’s highly creative, it
              has elements of being technical in it, and it’s something that is
              never going to be automated.
            </p>
            <p>
              No one’s going to take that away from him, because he’s also
              accountable under one brand as Scott Adams, and he’s operating
              with the leverage of media with Periscope and drawing Dilbert
              cartoons and writing books. He has massive leverage on top of that
              brand and he can build wealth out of it if he wanted to build
              additional wealth beyond what he already has.
            </p>
            <p className="font-bold">
              Specific knowledge is specific to the individual and situation
            </p>
            <p>
              Should it be called unique knowledge or does specific knowledge
              somehow make more sense for it?
            </p>
            <p>
              The problem with unique knowledge is, yes, maybe it’s unique but
              if I learn it from somebody else it’s no longer unique, then we
              both know it. So, it’s not so much that it is unique, it’s that it
              is highly specific to the situation, it’s specific to the
              individual, it’s specific to the problem, and it can only be built
              as part of a larger obsession, interest, and time spent in that
              domain.
            </p>
            <p>
              It can’t just be read straight out of a single book, nor can it be
              taught in a single course, nor can it be programmed into a single
              algorithm.
            </p>
            <p>
              You can’t be too deliberate about assembling specific knowledge
            </p>
            <p>
              Scott Adams wrote blog post on how to build your career by getting
              in, say, the top 25 percentile at three or more things. And by
              doing that, you become the only person in the world who can do
              those three things in the 25th percentile.
            </p>
            <p>
              So, instead of trying to be the best at one thing, he suggests to
              just try to be very, very good at three or more things.
            </p>
            <p>
              But I actually think the best way is just to follow your own
              obsession. And somewhere in the back of your mind, you can realize
              that, actually, this obsession I like and I’ll keep an eye out for
              the commercial aspects of it.
            </p>
            <p>
              I think if you go around trying to build it a little too
              deliberately, if you become too goal-oriented on the money, then
              you won’t pick the right thing. You won’t actually pick the thing
              that you love to do, so you won’t go deep enough into it.
            </p>
            <p>
              Scott Adams’ observation is a good one, predicated on statistics.
              Let’s say there’s 10,000 areas that are valuable to the human race
              today in terms of knowledge to have, and the number one in those
              10,000 slots is taken.
            </p>
            <p>
              Someone else is likely to be the number one in each of those
              10,000, unless you happen to be one of the 10,000 most obsessed
              people in the world that at a given thing.
            </p>
            <p>
              But when you start combining, well, number 3,728 with top-notch
              sales skills and really good writing skills and someone who
              understands accounting and finance really well, when the need for
              that intersection arrives, you’ve expanded enough from 10,000
              through combinatorics to millions or tens of millions. So, it just
              becomes much less competitive.
            </p>
            <p>
              Also, there’s diminishing returns. So, it’s much easier to be top
              5 percentile at three or four things than it is to be literally
              the number one at something.
            </p>
            <p className="font-bold">
              Build specific knowledge where you are a natural
            </p>
            <p>
              I think it’s a very pragmatic approach. But I think it’s important
              that one not start assembling things too deliberately because you
              do want to pick things where you are a natural. Everyone is a
              natural at something.
            </p>
            <p>
              We’re all familiar with that phrase, a natural. “Oh, this person
              is a natural at meeting men or women, this person is a natural
              socialite, this person is a natural programmer, this person is a
              natural reader.” So, whatever you are a natural at, you want to
              double down on that.
            </p>
            <p>
              And then there are probably multiple things you’re natural at
              because personalities and humans are very complex. So, we want to
              be able to take the things that you are natural at and combine
              them so that you automatically, just through sheer interest and
              enjoyment, end up top 25% or top 10% or top 5% at a number of
              things.
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
