import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function Caveman() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = [
    {
      date: "Dec 13 2021",
      title: "To a Caveman Very Few Things Are Resources",
      description: "There was a time when coal wasn’t a resource",
    },
  ];
  return (
    <div className="bg-slate">
      <Header />
      <div className="flex md:justify-center">
        <div className="max-w-[830px] px-6 space-y-6 md:mx-10 md:space-y-8 text-lg text-white mt-28 md:mt-14">
          <p className="font-mono text-base">{data[0].date}</p>
          <h1 className="text-4.5xl font-bold leading-[50px]">
            {data[0].title}
          </h1>
          <h2 className="">{data[0].description}</h2>
          <div className="w-full h-5 border-t border-b border-gray-400" />
          <div className="space-y-4 text-base md:space-y-7">
            <p>
              There was a story about how much supposed waste Amazon produces,
              that Amazon was routinely destroying a whole bunch of products.
            </p>
            <p>
              I thought, “Why are these people inserting their opinion into a
              business that they know absolutely nothing about?” Would they
              prefer Amazon to have the perfect knowledge of precisely how many
              products need to be made? In other words, an epistemologically
              impossible situation to be in. Or would they prefer that Amazon
              made insufficient products, so the people who wanted to purchase
              them weren’t actually able to get ahold of them?
            </p>

            <p>
              What Amazon does, of course, is make slightly more than what they
              need. That’s what happens in any business. They make slightly more
              than what they need now and again.
            </p>
            <p>
              I once had a colleage argue to me that there were too many kinds
              of shoes and it was an example of how capitalism had failed
              because nobody needs this many kinds of sneakers.
            </p>
            <p>
              My question to him was, “When did you know that there were too
              many shoes?” What’s the point in history where we decide there are
              too many shoes? Before we needed more shoes because we needed more
              stretchy shoes, we needed more durable shoes, we needed thicker
              soled shoes, we needed lighter shoes, we needed all kinds of
              amazing shoe innovations.
            </p>
            <p>
              And then at some point, somebody decides, “Actually we have enough
              shoes. Now we need to kill all the other shoe lines.” Where did
              you come up with this idea that you just happened to be born at
              the right time and the right place to identify that yes we have
              enough shoes?
            </p>
            <p>This is a certain parochialism that everyone falls into.</p>
            <p>
              There’s a more macro version of it, which is this “we’re running
              out of resources” philosophy. It starts with this idea that the
              Earth is finite, that there’s this finite set of resources and
              we’re consuming them all. And therefore we’re all going to die if
              we don’t tamp back our consumption.
            </p>
            <p>
              First of all, how did you decide that it was the Earth? How did
              you decide that your town wasn’t running out of resources? Why
              wasn’t the town the actual area that you wanted to save and then
              everything outside of that was foreign and unreachable?
            </p>
            <p>
              Why draw the boundary around the Earth? We could go to the solar
              system. We could go to the galaxy, we could go to the universe. We
              could go to the multiverse. There are a lot of resources out there
              if you know how to harness them.
            </p>
            <p>
              Then, how do you define what a resource is? A resource is just
              something that through knowledge you can convert from one thing to
              another.
            </p>
            <p>
              There was a time when coal wasn’t a resource; iron wasn’t a
              resource. To a caveman very few things are resources—just a few
              edible plants and a few edible animals and that’s it.
            </p>
            <p>
              Domestication, harvesting crops, metallurgy, chemistry, physics,
              developing engines and rockets—all of these are things that are
              taking things that we thought were worthless and turning them into
              resources. Uranium has gone from being completely worthless to
              being an incredible resource.
            </p>
            <p>
              This finite resource model of the world implicitly assumes finite
              knowledge. It says knowledge creation has come to an end. We are
              stuck at this current point, and, therefore, based on the
              knowledge that we have currently, these are all the resources
              available to us. Now we must start conserving.
            </p>
            <p>But knowledge is a thing that we can always create more of.</p>
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
