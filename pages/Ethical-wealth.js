import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function EthicalWealth() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Mar 3 2019",
    title: "Make Abundance for the World",
    description: "Wealth isn't about taking something from somebody else",
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
              I think there is this notion that making money is evil, right?
              It’s rooted all the way back down to “money is the root of all
              evil.” People think that the bankers steal our money. It’s
              somewhat true in that, in a lot of the world, there’s a lot of
              theft going on all the time.
            </p>
            <p>
              The history of the world, in some sense, is this predator/prey
              relationship between makers and takers. There are people who go
              out and create things, and build things, and work hard on things.
            </p>
            <p>
              Then there are people who come along with a sword, or a gun, or
              taxes, or crony capitalism, or Communism, or what have you.
              There’s all these different methods to steal.
            </p>
            <p>
              Even in nature, there are more parasites than there are
              non-parasitical organisms. You have a ton of parasites in you, who
              are living off of you. The better ones are symbiotic, they’re
              giving something back. But there are a lot that are just taking.
              That’s the nature of how any complex system is built.
            </p>
            <p>
              What I am focused on is true wealth creation. It’s not about
              taking money. It’s not about taking something from somebody else.
              It’s from creating abundance.
            </p>
            <p>
              Obviously, there isn’t a finite number of jobs, or finite amount
              of wealth. Otherwise we would still be sitting around in caves,
              figuring out how to divide up pieces of fire wood, and the
              occasional dead deer.
            </p>
            <p>
              Most of the wealth in civilization, in fact all of it, has been
              created. It got created from somewhere. It got created from
              people. It got created from technology. It got created from
              productivity. It got created from hard work. This idea that it’s
              stolen is this horrible zero-sum game that people who are trying
              to gain status play.
            </p>
            <p className="font-bold">Everyone can be rich</p>
            <p>
              But the reality is everyone can be rich. We can see that by
              seeing, that in the First World, everyone is basically richer than
              almost anyone who was alive 200 years ago.
            </p>
            <p>
              200 years ago nobody had antibiotics. Nobody had cars. Nobody had
              electricity. Nobody had the iPhone. All of these things are
              inventions that have made us wealthier as a species.
            </p>
            <p>
              Today, I would rather be a poor person in a First World country,
              than be a rich person in Louis the XIV’s France. I’d rather be a
              poor person today than aristocrat back then. That’s because of
              wealth creation.
            </p>
            <p>
              The engine of technology is science that is applied for the
              purpose of creating abundance. So, I think fundamentally everybody
              can be wealthy.
            </p>
            <p>
              This thought experiment I want you to think through is imagine if
              everybody had the knowledge of a good software engineer and a good
              hardware engineer. If you could go out there, and you could build
              robots, and computers, and bridges, and program them. Let’s say
              every human knew how to do that.
            </p>
            <p>
              What do you think society would look like in 20 years? My guess is
              what would happen is we would build robots, machines, software and
              hardware to do everything. We would all be living in massive
              abundance.
            </p>
            <p>
              We would essentially be retired, in the sense that none of us
              would have to work for any of the basics. We’d even have robotic
              nurses. We’d have machine driven hospitals. We’d have self-driving
              cars. We’d have farms that are 100% automated. We’d have clean
              energy.
            </p>
            <p>
              At that point, we could use technology breakthroughs to get
              everything that we wanted. If anyone is still working at that
              point, they’re working as a form of expressing their creativity.
              They’re working because it’s in them to contribute, and to build
              and design things.
            </p>
            <p>
              I don’t think capitalism is evil. Capitalism is actually good.
              It’s just that it gets hijacked. It gets hijacked by improper
              pricing of externalities. It gets hijacked by improper yields,
              where you have corruption, or you have monopolies.
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
              <Link href="/Ideas">
                <h3 className="text-xl1.5 group-hover:underline">
                  Ideas Are the New Oil
                </h3>
              </Link>
              <p className="font-mono text-gray-400 text-tiny">NOV 9 2009</p>
            </div>
            <div className="space-y-2 cursor-pointer group">
              <Link href="/Luck-destiny">
                <h3 className="text-xl1.5 group-hover:underline">
                  Make Luck Your Destiny
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
