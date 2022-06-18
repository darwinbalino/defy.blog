import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function LongTerm() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Mar 19 2019",
    title: "Play Long-term Games With Long-term People",
    description:
      "All returns in life come from compound interest in long-term games",
  };
  return (
    <div className="bg-slate">
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <div className="flex md:justify-center">
        <div className="max-w-[830px] md:mx-10 px-6 space-y-6 md:space-y-8 text-lg text-white mt-28 md:mt-14">
          <p className="font-mono text-base">{data.date}</p>
          <h1 className="text-4.5xl font-bold leading-[50px]">{data.title}</h1>
          <h2 className="">{data.description}</h2>
          <div className="w-full h-5 border-t border-b border-gray-400" />
          <div className="space-y-4 text-base md:space-y-7">
            <p>
              Nivi: Talk a little bit about what industries you should think
              about working in. What kind of job you should have? And who you
              might want to work with? So, you said, “One should pick an
              industry where you can play long-term games with long-term
              people.” Why?
            </p>
            <p>
              Naval: Yeah, this is an insight into what makes Silicon Valley
              work, and what makes high trust societies work. Essentially, all
              the benefits in life come from compound interests. Whether it’s in
              relationships, or making money, or in learning.
            </p>
            <p>
              So, compound interest is a marvelous force, where if you start out
              with 1x what you have, and then if you increase 20% a year for 30
              years, it’s not that you got 30 years times 20% added on. It was
              compounding, so it just grew, and grew, and grew until you
              suddenly got a massive amount of whatever it is. Whether it’s
              goodwill, or love, or relationships, or money. So, I think
              compound interest is a very important force.
            </p>
            <p>
              You have to be able to play a long-term game. And long-term games
              are good not just for compound interest, they’re also good for
              trust. If you look at prisoner’s dilemma type games, a solution to
              prisoner’s dilemma is tit-for-tat, which is I’m just going do to
              you what you did last time to me, with some forgiveness in case
              there was a mistake made. But that only works in an iterated
              prisoner’s dilemma, in another words if we play a game multiple
              times.
            </p>
            <p>
              So, if you’re in a situation, like for example you’re in Silicon
              Valley, where people are doing business with each other, and they
              know each other, they trust each other. Then they do right by each
              other because they know this person will be around for the next
              game.
            </p>
            <p>
              Now of course that doesn’t always work because you can make so
              much money in one move in Silicon Valley, sometimes people betray
              each other because they’re just like, “I’m going to get rich
              enough off this that I don’t care.” So, there can be exceptions to
              all these circumstances.
            </p>
            <p>
              But essentially if you want to be successful, you have to work
              with other people. And you have to figure out who can you trust,
              and who can you trust over a long, long period of time, that you
              can just keep playing the game with them, so that compound
              interest, and high trust will make it easier to play the game, and
              will let you collect the major rewards, which are usually at the
              end of the cycle.
            </p>
            <p>
              So, for example, Warren Buffett has done really well as an
              investor in the U.S. stock market, but the biggest reason he could
              do that was because the U.S. stock market has been stable, and
              around, and didn’t get for example seized by the government during
              a bad administration. Or the U.S. didn’t plunge into some war. The
              underlying platform didn’t get destroyed. So, in his case, he was
              playing a longterm game. And the trust came from the U.S. stock
              market’s stability.
            </p>
            <p>When you switch industries, you’re starting over from scratch</p>
            <p>
              In Silicon Valley, the trust comes from the network of people in
              the small geographic area, that you figure out over time who you
              can work with, and who you can’t.
            </p>
            <p>
              If you keep switching locations, you keep switching groups… let’s
              say you started out in the woodworking industry, and you built up
              a network there. And you’re working hard, you’re trying to build a
              product in the woodworking industry. And then suddenly another
              industry comes along that’s adjacent but different, but you don’t
              really know anybody in it, and you want to dive in, and make money
              there.
            </p>
            <p>
              If you keep hopping from industry to … “No, actually I need to
              open a line of electric car stations for electric car refueling.”
              That might make sense. That might be the best opportunity. But
              every time you reset, every time you wander out of where you built
              your network, you’re going to be starting from scratch. You’re not
              going to know who to trust. They’re not going to know to trust
              you.
            </p>
            <p>
              There are also industries in which people are transient by
              definition. They’re always coming in and going out. Politics is an
              example of that, right? In politics new people are being elected.
              You see in politics that when you have a lot of old-timers, like
              the Senate, people who have been around for a long time, and
              they’ve been career politicians.
            </p>
            <p>
              There’s a lot of downside to career politicians like corruption.
              But an upside is they actually get deals done with each other
              because they know the other person is going to be in the same
              position ten years from now, and they’re going to have to keep
              dealing with them, so they might as well learn how to cooperate.
            </p>
            <p>
              Whereas every time you get a new incoming freshman class in the
              House of Representatives, which turns over every two years with a
              big wave election. Nothing gets done because of a lot fighting.
              “Because I just got here, I don’t know you, I don’t know if you’re
              going to be around, why should I work with you rather than just
              try to do whatever I think is right?”
            </p>
            <p>
              So, it’s important to pick an industry where you can play
              long-term games, and with long-term people. So, those people have
              to signal that they’re going to be around for a long time. That
              they’re ethical. And their ethics are visible through their
              actions.
            </p>
            <p>Long-term players make each other rich</p>
            <p>
              Nivi: In a long-term game, it seems that everybody is making each
              other rich. And in a short-term game, it seems like everybody is
              making themselves rich.
            </p>
            <p>
              Naval: I think that is a brilliant formulation. In a longterm
              game, it’s positive sum. We’re all baking the pie together. We’re
              trying to make it as big as possible. And in a short term game,
              we’re cutting up the pie.
            </p>
            <p>
              Now this is not to excuse the socialists, right? The socialists
              are the people who are not involved in baking the pie, who show up
              at the end, and say, “I want a slice, or I want the whole pie.”
              They show up with the guns.
            </p>
            <p>
              But I think a good leader doesn’t take credit. A good leader
              basically tries to inspire people, so the team gets the job done.
              And then things get divided up according to fairness, and who
              contributed how much, or as close to it as possible, and took a
              risk, as opposed to just whoever has the longest knife… the
              sharpest knife at the end.
            </p>
            <p>Returns come from compound interest in iterated games</p>
            <p>
              Nivi: So, these next two tweets are, “Play iterated games. All
              returns in life, whether in wealth, relationships, or knowledge
              come from compound interest.”
            </p>
            <p>
              Naval: When you have been doing business with somebody, you’ve
              been friends with somebody for ten years, twenty years, thirty
              years, it just gets better and better because you trust them so
              easily. The friction goes down, you can do bigger, and bigger
              things together.
            </p>
            <p>
              For example, the simplest one is getting married to someone, and
              having kids, and raising children. That’s compound interest,
              right? Investing in those relationships. Those relationships end
              up being invaluable compared to more casual relationships.
            </p>
            <p>
              It’s true in health and fitness. You know, the fitter you are, the
              easier it is to stay fit. Whereas the more you deteriorate your
              body, the harder it is to come back, and claw your way back to a
              baseline. It requires heroic acts.
            </p>
            <p>
              <p>
                Nivi: Regarding c<p></p>
              </p>
              ompound interest, I think I saw retweet something a while back.
              Maybe it was from Ed Latimore. It went something along the lines
              of, “Get some traction. Get purchase, and don’t lose it”
              [correction: the tweet is by @mmay3r]. So, the idea was to gain
              some initial traction, and never fall back, just keep ratcheting
              up, and up. Naval: I don’t remember it exactly. But I think that
              was right. Yes, it was like, “Get traction, and don’t let go.” It
              was a good one, yes.
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
