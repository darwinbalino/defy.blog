import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function SpecificKnowledge() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Mar 25 2019",
    title: "Arm Yourself With Specific Knowledge",
    description:
      "Specific knowledge can be found by pursuing your genuine curiosity",
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
              Arm yourself with specific knowledge accountability and leverage.
              If you want to make money you have to get paid at scale. And why
              you, that’s accountability, at scale, that’s leverage, and just
              you getting paid as opposed to somebody else getting paid , that’s
              specific knowledge.
            </p>
            <p>
              Specific knowledge is probably the hardest thing to get across in
              this whole tweetstorm, and it’s probably the thing that people get
              the most confused about.
            </p>
            <p>
              The thing is that we have this idea that everything can be taught,
              everything can be taught in school. And it’s not true that
              everything can be taught. In fact, the most interesting things
              cannot be taught.
            </p>
            <p>
              But everything can be learned. And very often that learning either
              comes from some innate characteristics in your DNA, or it could be
              through your childhood where you learn soft skills which are very,
              very hard to teach later on in life, or it’s something that is
              brand new so nobody else knows how to do it either, or it’s true
              on the job training because you’re pattern matching into highly
              complex environments, basically building judgment in a specific
              domain.
            </p>
            <p>
              Classic example is investing, but it could be in anything. It
              could be in judgment in running a fleet of trucks, it could be
              judgment in weather forecasting.
            </p>
            <p>
              So, specific knowledge is the knowledge that you care about.
              Especially if you’re later in life, let’s say your post 20, 21,
              22, you almost don’t get to choose which specific knowledge you
              have. Rather, you get to look at what you have already built by
              that point in time, and then you can build on top of it.
            </p>
            <p className="font-bold">Specific knowledge can’t be trained</p>
            <p>
              The first thing to notice about specific knowledge is that you
              can’t be trained for it. If you can be trained for it, if you can
              go to a class and learn specific knowledge, then somebody else can
              be trained for it too, and then we can mass-produce and mass-train
              people. Heck, we can even program computers to do it and
              eventually we can program robots to walk around doing it.
            </p>
            <p>
              If that’s the case, then you’re extremely replaceable and all we
              have to pay you is the minimum wage that we have to pay you to get
              you to do it when there are lots of other takers who can be
              trained to do it. So really, your returns just devolve into your
              cost of training plus the return on investment on that training.
            </p>
            <p>
              So, you really want to pick up specific knowledge, you need your
              schooling, you need your training to be able to capitalize on the
              best specific knowledge, but the part of it that you’re going to
              get paid for is the specific knowledge.
            </p>
            <p className="font-bold">
              Specific knowledge is found by pursuing your curiosity
            </p>
            <p>
              For example, someone who goes and gets a degree in psychology and
              then becomes a salesperson. Well if they were already a formidable
              salesperson, a high grade salesmanship to begin with, then the
              psychology degree is leverage, it arms them and they do much
              better at sales.
            </p>
            <p>
              But if they were always an introvert never very good at sales and
              they’re trying to use psychology to learn sales, they’re just not
              going to get that great at it.
            </p>
            <p>
              So, specific knowledge is found much more by pursuing your innate
              talents, your genuine curiosity, and your passion. It’s not by
              going to school for whatever is the hottest job, it’s not for
              going into whatever field investors say is the hottest.
            </p>
            <p>
              Very often specific knowledge is at the edge of knowledge. It’s
              also stuff that’s just being figured out or is really hard to
              figure out.
            </p>
            <p>
              So, if you’re not 100% into it somebody else who is 100% into it
              will outperform you. And they won’t just outperform you by a
              little bit, they’ll outperform you by a lot because now we’re
              operating the domain of ideas, compound interest really applies
              and leverage really applies.
            </p>
            <p>
              So, if you’re operating with 1,000 times leverage and somebody is
              right 80% of the time, and somebody else is right 90% of time, the
              person who’s right 90% of the time will literally get paid
              hundreds of times more by the market because of the leverage and
              because of the compounding factors and being correct. So, you
              really want to make sure you’re good at it so that genuine
              curiosity is very important.
            </p>
            <p className="font-bold">
              Building specific knowledge will feel like play to you
            </p>
            <p>
              So, very often, it’s not something you sit down and then you
              reason about, it’s more found by observation. You almost have to
              look back on your own life and see what you’re actually good at.
            </p>
            <p>
              For example, I wanted to be a scientist and that is where a lot of
              my moral hierarchy comes from. I view scientists sort of at the
              top of the production chain for humanity. And the group of
              scientists who have made real breakthroughs and contributions that
              probably added more to human society, I think, than any single
              other class of human beings.
            </p>
            <p>
              Not to take away anything from art or politics or engineering or
              business, but without the science we’d still be scrambling in the
              dirt fighting with sticks and trying to start fires.
            </p>
            <p>
              My whole value system was built around scientists and I wanted to
              be a great scientist. But when I actually look back at what I was
              uniquely good at and what I ended up spending my time doing, it
              was more around making money, tinkering with technology, and
              selling people on things. Explaining things, talking to people.
            </p>
            <p>
              So, I have some sales skills, which is a form specific knowledge
              that I have. I have some analytical skills around how to make
              money. And I have this ability to absorb data, obsess about it,
              and break it down and that is a specific skill that I have. I also
              just love tinkering with technology. And all of this stuff feels
              like play to me, but it looks like work to others.
            </p>
            <p>
              So, there are other people to whom these things would be hard and
              they say like, “Well, how do I get good at being pithy and selling
              ideas?” Well, if you’re not already good at it or if you’re not
              really into it, maybe it’s not your thing, focus on the thing that
              you are really into.
            </p>
            <p>
              This is ironic, but the first person to actually point out my real
              specific knowledge was my mother. She did it as an aside, talking
              from the kitchen and she said it when I was like 15 or 16 years
              old. I was telling a friend of mine that I want to be an
              astrophysicist and she said, “No, you’re going to go into
              business.”
            </p>
            <p>
              I was like, “What, my mom’s telling me I’m going to be in
              business. I’m going to be an astrophysicist. Mom doesn’t know
              she’s talking about.” But mom knew exactly what she was talking
              about.
            </p>
            <p>
              She’d already observed that every time we walk down the street, I
              would critique the local pizza parlor on why they were selling
              their slices a certain way with certain toppings and why their
              process of ordering was this way when it should have been that
              way.
            </p>
            <p>
              So, she knew that I had more of a business curious mind, but then
              my obsession with science combined to create technology and
              technology businesses where I found myself.
            </p>
            <p>
              So, very often, your specific knowledge is observed and often
              observed by other people who know you well and revealed in
              situations rather than something that you come up with.
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
