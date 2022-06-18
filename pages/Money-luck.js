import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function MoneyLuck() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Mar 6 2019",
    title: "Making Money Isn’t About Luck",
    description: "Become the kind of person who makes money",
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
              Obviously, we want to be wealthy, and we want to get there in this
              lifetime without having to rely on luck.
            </p>
            <p>
              A lot of people think making money is about luck. It’s not. It’s
              about becoming the kind of person that makes money.
            </p>
            <p>
              I like to think that if I lost all my money and if you drop me on
              a random street in any English-speaking country, within 5, 10
              years I’d be wealthy again. Because it’s a skill set that I’ve
              developed and I think anyone can develop.
            </p>
            <p>
              In 1,000 parallel universes, you want to be wealthy in 999 of
              them. You don’t want to be wealthy in the 50 of them where you got
              lucky. We want to factor luck out of it.
            </p>
            <p>
              There’s four kinds of luck that we’re talking about. This came
              from a book. Marc Andreessen, wrote a{" "}
              <a
                href="https://pmarchive.com/luck_and_the_entrepreneur.html"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                blog post
              </a>{" "}
              about it.
            </p>
            <p className="font-bold">1. Blind luck</p>
            <p>
              The first kind of luck you might say is blind luck. Where I just
              got lucky because something completely out of my control happened.
              That’s fortune, that’s fate.
            </p>
            <p className="font-bold">2. Luck from hustling</p>
            <p>
              Then there’s luck that comes through persistence, hard work,
              hustle, motion. Which is when you’re running around creating lots
              of opportunities, you’re generating a lot of energy, you’re doing
              a lot of things, lots of things will get stirred up in the dust.
            </p>
            <p>
              It’s almost like mixing a petri dish and seeing what combines. Or
              mixing a bunch of reagents and seeing what combines. You’re
              generating enough force and hustle and energy that luck will find
              you.
            </p>
            <p>
              We, as a group, you could argue, got together because of that.{" "}
              <a
                href="https://www.youtube.com/channel/UCmvhCWvHk3-SJqljh5cCm8A?app=desktop"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                Nenad
              </a>{" "}
              had put up these great videos online, I saw them on Twitter. In
              that sense, he generated his own luck by creating videos until
              people like me keep finding him.
            </p>
            <p className="font-bold">3. Luck from preparation</p>
            <p>
              A third way is that you become very good at spotting luck. If you
              are very skilled in a field, you will notice when a lucky break
              happens in that field. When other people who aren’t attuned to it
              won’t notice. So you become sensitive to luck and that’s through
              skill and knowledge and work.
            </p>
            <p className="font-bold">4. Luck from your unique character</p>
            <p>
              Then the last kind of luck is the weirdest, hardest kind. But
              that’s what we want to talk about. Which is where you build a
              unique character, a unique brand, a unique mindset, where then
              luck finds you.
            </p>
            <p>
              For example, let’s say that you’re the best person in the world at
              deep sea underwater diving. You’re known to take on deep sea
              underwater dives that nobody else will even attempt to dare.
            </p>
            <p>
              Then, by sheer luck, somebody finds a sunken treasure ship off the
              coast. They can’t get it. Well, their luck just became your luck,
              because they’re going to come to you to get that treasure. You’re
              going to get paid for it.
            </p>
            <p>
              Now, that’s an extreme example. The person who got lucky by
              finding the treasure chest, that was blind luck. But them coming
              to you and asking you to extract it and having to give you half,
              that’s not luck.
            </p>
            <p>
              You created your own luck. You put yourself in a position to be
              able to capitalize on that luck. Or to attract that luck when
              nobody else has created that opportunity for themselves. When we
              talk about “without getting lucky,” we want to be deterministic,
              we don’t want to leave it to chance.
            </p>
            <p className="font-bold">
              In 1,000 parallel universes, you want to be wealthy in 999 of them
            </p>
            <p>
              I think some people are going to see that and say, “that sounds
              impossible, it sounds like it’s too good to be true.” No, I don’t
              think it’s impossible. I think that you may have to work a little
              bit harder at it given your starting circumstances. I started as a
              poor kid in India, so if I can make it, anybody can, in that
              sense.
            </p>
            <p>
              Now, obviously, I had all my limbs and I had my mental faculties
              and I did have an education. There are some prerequisites you
              can’t get past. But if you’re listening to this video or podcast,
              you probably have the requisite means at your disposal, which is a
              functioning body and a functioning mind.
            </p>
            <p>
              And I’ve encountered plenty of bad luck along the way. The first
              little fortune that I made, I instantly lost in the stock market.
              The second little fortune that I made, or I should have made, I
              basically got cheated by my business partners. It’s only the third
              time around has been a charm.
            </p>
            <p>
              And, even then, it has been in a slow and steady struggle. I
              haven’t made money in my life in one giant payout. It’s always
              been a whole bunch of small things piling up. It’s more about
              consistently creating wealth by creating businesses, including
              opportunities and creating investments. It hasn’t been a giant
              one-off thing.
            </p>
            <p className="font-bold">
              Wealth stacks up one chip at a time, not all at once
            </p>
            <p>
              My personal wealth has not been generated by one big year. It
              stacks up little bit, chips at a time. More options, more
              businesses, more investments, more things that I can do.
            </p>
            <p>
              Same way that someone like Nenad, illacertus, he’s building his
              brand online. He’s building videos. It’s not like any one video is
              going to suddenly shower him with riches overnight. It’s going to
              be a long lifetime of learning, of reading, of creating that’s
              going to compound.
            </p>
            <p>
              We’re talking about getting wealthy so you can retire, so you have
              your freedom. Not retire in the sense that you don’t do anything.
              But in the sense that you don’t have to be any place you don’t
              want to be, you don’t have to do anything you don’t want to do,
              you can wake up when you want, you can sleep when you want, you
              don’t have a boss. That’s freedom.
            </p>
            <p>
              We’re talking about enough wealth to get to freedom. Especially
              thanks to the Internet these days, though, opportunities are
              massively abundant. I, in fact, have too many ways to make money,
              I don’t have enough time. I have opportunities pouring out of my
              ears and the thing I keep running out of is time.
            </p>
            <p>
              There’s just so many ways to create wealth, to create products, to
              create businesses, to create opportunities, and to, as a
              byproduct, get paid by society that I can’t even handle it all.
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
