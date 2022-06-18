import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function LuckDestiny() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Mar 7 2019",
    title: "Make Luck Your Destiny",
    description: "Build your character in a way that luck becomes determini",
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
              For the first three kinds of luck, there’s “dumb luck,” or “blind
              luck.” That’s first kind of luck. The second kind of luck there’s
              the cliché that “fortune favors the bold.” That’s a person who
              gets lucky just by stirring the pot and acting. The third kind of
              luck, people say that “chance favors the prepared mind.”
            </p>
            <p>
              But for the fourth kind of luck, there isn’t a common cliché out
              there that matches the unique character of your action, which I
              think is interesting and perhaps an opportunity and it also shows
              that people aren’t necessarily taking advantage of that kind of
              luck the way they should be.
            </p>
            <p>
              I think at that point, it starts becoming so deterministic that it
              stops being luck. So, the definition starts fading from luck to
              more destiny. So, I would characterize that fourth one as you
              build your character in a certain way and then your character
              becomes your destiny.
            </p>
            <p className="font-bold">
              Build your character so opportunity finds you
            </p>
            <p>
              One of the things I think that is important to making money, when
              you want the kind of reputation that makes people do deals through
              you. I use the example of like, if you’re a great diver then
              treasure hunters will come and give you a piece of the treasure
              for your diving skills.
            </p>
            <p>
              If you’re a trusted, reliable, high-integrity, long-term thinking
              deal maker, then when other people want to do deals but they don’t
              know how to do them in a trustworthy manner with strangers, they
              will literally approach you and give you a cut of the deal or
              offer you a unique deal just because of the integrity and
              reputation that you have built up.
            </p>
            <p>
              Warren Buffett, he gets offered deals, and he gets to buy
              companies, and he gets to buy warrants, and bailout banks and do
              things that other people can’t do because of his reputation.
            </p>
            <p>
              But of course that’s fragile. It has accountability on the line,
              it has a strong brand on the line, and as we will talk about
              later, that comes with accountability attached.
            </p>
            <p>
              But I would say your character, your reputation, these are things
              that you can build that then will let you take up advantage of
              opportunities that other people may characterize as lucky but you
              know that it wasn’t luck.
            </p>
            <p className="font-bold">
              You have to be a little eccentric to be out on the frontier by
              yourself
            </p>
            <p>
              This fourth kind of luck can almost come out of eccentric ways
              that you do your things and that eccentricity is not necessarily a
              bad thing in this case. In fact, it’s a good thing.
            </p>
            <p>
              {" "}
              Because the world is a very efficient place, so, everyone has dug
              through all the obvious places to dig and so to find something
              that’s new and novel and uncovered, it helps to be operating on a
              frontier.
            </p>
            <p>
              Where right there you have to be a little eccentric to be out on
              the frontier by yourself, and then you have to be willing to dig
              deeper than other people do, deeper than seems rational just
              because you’re interested.
            </p>
            <p>
              Two quotes that I’ve seen that express this kind of luck is this
              one from Sam Altman where he said, “extreme people get extreme
              results.” And then there’s this other one from Jeffrey Pfeffer,
              who is a professor at Stanford that, “you can’t be normal and
              expect abnormal returns.”
            </p>
            <p>
              And one quote which is the exact opposite of that is, “play stupid
              games win stupid prizes.” A lot of people spend a lot of their
              time playing social games like on Twitter where you’re trying to
              improve your social standing and you basically win stupid social
              prizes which are worthless.
            </p>
            <p>
              By pursuing these kinds of luck especially the last one, basically
              everything but dumb luck, you essentially run out of unluck. So,
              if you just keep stirring the pot and stirring the pot, that alone
              you will run out of unluck.
            </p>
            <p>
              It could just be reversion to the mean. So, then you at least
              neutralized luck so that it’s your own talents that come into
              play.
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
