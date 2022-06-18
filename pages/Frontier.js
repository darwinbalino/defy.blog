import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function Frontier() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Nov 24 2021",
    title: "Innovation Requires Decentralization and a Frontier",
    description:
      "Technology has swung us towards centralization in the last decade",
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
              Innovation requires a couple of things. One of the things that it
              seems to require is decentralization.
            </p>
            <p>
              I don’t think it’s a coincidence that the Athenian city-states or
              the Italian city-states or even the United States—when it was more
              freeform and less federal government controlled—were hotbeds of
              innovation, because you had lots and lots of competition. People
              could switch from one state to another if their ideas weren’t
              welcome, and there was a robust competition of ideas.
            </p>
            <p>
              The real diversity that matters is the diversity of ideas, not the
              diversity of skin color.
            </p>
            <p>
              You also need a frontier. You need something new to explore—either
              an intellectual frontier or a physical frontier. We’ve occupied
              California. If anything, now California is the institution, the
              establishment. It’s no longer the front of the Wild West. Maybe we
              need one in space. Maybe we need intellectual ones like we have in
              cryptocurrencies.
            </p>
            <p>
              It’s the nature of the Wild West that they’re always filled with
              scammers; they’re always filled with crimes; they’re always filled
              with very strange and odd things, because they tend to attract a
              weird crowd. But at the same time, it is where a lot of the
              innovation is going on.
            </p>
            <p>
              I see a lot of lamenting from old school scientists and
              entrepreneurs. “Where are the new entrepreneurs welcome?” I think
              Paul Graham, the Y Combinator founder, a brilliant guy, tweeted
              something along the lines of, “
              <a
                href="https://twitter.com/paulg/status/1407970152537276418?s=20"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                Steve Jobs… and people like him wouldn’t last a day inside the
                companies they created.
              </a>
              ” He’d be canceled by his own team.
            </p>
            <p>
              But Steve Jobs today would be in crypto. He’d be in crypto with
              all the scammers and all the criminals and all the weirdos, but at
              least there he’d have a space to be weird. He’d have a place to be
              different. He’d have a place to try new things without having to
              constantly answer to someone.
            </p>
            <p>
              There is a pendulum between centralization and decentralization.
            </p>
            <p>
              For example, if you look at the crypto world, centralized finance
              ends up very ossified. You have the government and the regulators
              telling you exactly what you can and can’t do. You get regulatory
              capture, and next thing you know, Wall Street is sucking 20% of
              the profits out of the economy—and crypto can replace that.
            </p>
            <p>
              So you get decentralization pressure where people can do it in a
              freeform, programmatic way. But then you end up with a lot more
              scams, fraud and losses as well.
            </p>
            <p>
              An analogy might be that, in olden times, you worried about
              brigands and robbers in the forest, so you appealed to the king.
              The king builds a nice keep, the king mints the money. But next
              thing you know, the king is debasing the currency and the king is
              throwing people in jail. Then some people run off into the forest
              and they become brigands again because they want their freedom.
              But now, of course, they’re subject to attacks and harassment from
              their peers.
            </p>
            <p>
              So there’s a natural pendulum swing that goes on in history
              between centralization and decentralization, and I think the arc
              of technology actually swung us towards centralization in the last
              decade.
            </p>
            <p>
              I’m a big fan of Amazon, but it’s a very centralized entity. I
              think that there’s a decentralization arc that is taking place
              even in that industry. Things like Shopify are coming up and
              enabling small stores to compete. Local delivery services like
              DoorDash are centralized services, but they’re allowing a
              decentralized army of restaurants and local shops to compete
              against centralized services.
            </p>
            <p>We’re going to see this arc go back and forth.</p>
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
