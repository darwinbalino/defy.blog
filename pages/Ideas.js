import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function Ideas() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Nov 17 2021",
    title: "Ideas Are the New Oil",
    description: "All the new fortunes are created with ideas",
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
              Humans have a history of conquest because we fight for the same
              exact resources, but even in human history the first explorers
              were traders. They were going out there to find spices, gold,
              silk, new plants to domesticate, new animals.
            </p>
            <p>
              They weren’t going out there necessarily to conquer the land.
              Eventually they did because of the finite resource dilemma when
              you’re stuck on Earth. But the moment you have the technology to
              get off of the earth, finite resources go away.
            </p>
            <p>
              If you want a resource, then you go find a{" "}
              <a
                href="https://en.wikipedia.org/wiki/Neutron_star"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                neutron star
              </a>{" "}
              or you go find a star system. You don’t go after a little planet.
              There are infinite Kepler planets out there that are going to be
              much closer to them.
            </p>
            <p>It’s ideas and trade that people want.</p>
            <p>
              If you look at modern society—even though I know this is not the
              common belief—we’re becoming less warlike as we become more
              civilized. The reason is that you don’t conquer Russia anymore for
              its natural resources. The wealthiest places in the world now are
              the ones that have the best ideas. Silicon Valley was on top for a
              while as a wealth creation engine because it had the best ideas.
            </p>
            <p>
              The new oil is ideas. It’s all digital. All the new fortunes are
              being created in ideas space.
            </p>
            <p>
              In fact, if you’re starting out today as a young, ambitious
              person, you don’t learn real estate; you don’t learn coal and oil
              mining; you don’t go into the extraction of physical resources to
              create wealth. You go into ideas space. You go into programming,
              books, movies, blogs and podcasts and building robots, which are
              mostly intellectual property underneath.
            </p>
            <p>
              Even as a human civilization, we’re moving away from conquering
              physical resources and moving much more into trading of ideas.
            </p>
            <p>
              The downside scenario for the human species is that too many of
              our larger countries and nation-states believe that they’ve
              achieved maximal ideas and now it’s time to save resources. They
              end up destroying the means of improvement, error correction and
              creativity, and they end up stagnating.
            </p>
            <p>
              Then you have the idea generation coming out of a much smaller set
              of city-states, which then have to defend themselves against these
              massive, more predatory, ossified states.
            </p>
            <p>
              People talk about China being so impressive—“look at their
              rocket,” or “look at their GDP,” or “look at the city that they
              built.” Call me when they invent something new. Call me when they
              come up with some incredible idea that we haven’t had and they
              built some technology that we haven’t had. Because so far it’s all
              imitative. It’s them taking advantage of technology they’ve picked
              up from us that they’re now catching up on. They’re just applying
              scale to it because they have more people.
            </p>
            <p>
              Call me when their GDP per citizen crosses ours. Call me when they
              come up with pharmaceuticals or vaccines or spacecraft or energy
              generators or fusion reactors that we do not know how to build.
              Call me when the authoritarian society figures out top-down how to
              build something brand new, when it’s more creative, when their art
              is better, when their science is better, when their technology is
              better.
            </p>
            <p>
              Call me when that happens over a democratic, free, capitalist
              society, because I’ve never seen a case of that, ever.
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
              <Link href="/Finding-time">
                <h3 className="text-xl1.5 group-hover:underline">
                  Finding Time to Invest in Yourself
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
            <div className="space-y-2 cursor-pointer group">
              <Link href="/Creative-technical">
                <h3 className="text-xl1.5 group-hover:underline">
                  Specific Knowledge Is Highly Creative or Technical
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
