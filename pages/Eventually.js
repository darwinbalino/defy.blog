import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function Eventually() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "May 19 2019",
    title: "Eventually You Will Get What You Deserve",
    description: "On a long enough timescale, you will get paid",
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
              This one is a glib way of saying, “It takes time.” Once you have
              all of the pieces in place, there’s still an indeterminate amount
              of time you have to put in. And if you’re counting, you’ll run out
              of patience before it arrives.
            </p>
            <p>
              You have to make sure you give these things time. Life is long.
            </p>
            <p>
              Charlie Munger had a line on this. Somebody asked him about making
              money. He said what the questioner actually was asking was, “
              <a
                href="https://www.azquotes.com/quote/922567"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                How can I become like you, except faster?
              </a>
              ”
            </p>
            <p>
              Everybody wants it immediately. But the world is an efficient
              place. Immediate doesn’t work. You have to put in the time. You
              have to put in the hours. You have to put yourself in that
              position with specific knowledge, accountability, leverage and an
              authentic skill-set in order to be the best in the world at what
              you do.
            </p>
            <p>
              And then you have to enjoy it and keep doing it and doing it and
              doing it. Don’t keep track. Don’t keep count. Because if you do,
              you will run out of time.
            </p>
            <p>
              Looking back on my career, the people who I identified as
              brilliant and hardworking two decades ago are all successful now,
              almost without exception. On a long enough timescale, you will get
              paid.
            </p>
            <p>
              But it can easily be 10 or 20 years. Sometimes it’s five. If it’s
              five, or three, and it’s a friend of yours who got there, it can
              drive you insane. But those are exceptions. And for every winner,
              there are multiple failures.
            </p>
            <p>
              One thing that’s important in entrepreneurship: You just have to
              be right once. You get many, many shots on goal. You can take a
              shot on goal every three to five years, maybe every 10 at the
              slowest. Or once every year at the fastest, depending on how
              you’re iterating with startups. But you only have to be right
              once.
            </p>
            <p className="font-bold">
              What are you really good at, that the market values?
            </p>
            <p>
              Your eventual outcome will be equal to something like the
              distinctiveness of your specific knowledge; times how much
              leverage you can apply to that knowledge; times how often your
              judgment is correct; times how singularly accountable you are for
              the outcome; times how much society values what you’re doing. Then
              you compound that with how long you can keep doing it and how long
              you can keep improving it through reading and learning.
            </p>
            <p>
              That said, people try to apply mathematics to what is really
              philosophy. I’ve seen this happen, where I say one thing and then
              I say another thing that seems contradictory if you treat it as
              math. But it’s obviously in a different context.
            </p>
            <p>
              People will say, “You say, ‘
              <a
                href="https://www.google.com/search?q=desire+is+suffering&rlz=1C1CHBF_enUS795US795&oq=Desire+is+suffering&aqs=chrome.0.0j69i59l2j0l3.1077j0j7&sourceid=chrome&ie=UTF-8"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                Desire is suffering
              </a>
              .’ ” You know, the Buddhist saying. “And then you ‘All greatness
              comes from suffering.’ So does that mean all greatness comes from
              desire?” This isn’t math. You can’t just carry variables around
              and form absolute logical outputs. You have to know when to apply
              things.
            </p>
            <p>One can’t get too analytical about it.</p>
            <p>
              It’s what a physicist would call “false precision.” When you take
              two made-up estimates and multiply them together, you get four
              degrees of precision. Those decimal points don’t actually count.
              You don’t have that data. You don’t have that knowledge. The more
              estimated variables you have, the greater the error in the model.
            </p>
            <p>
              Adding more complexity to your decision-making process gets you a
              worse answer. You’re better off picking the single biggest thing
              or two. Ask yourself: What am I really good at, according to
              observation and people I trust, that the market values?
            </p>
            <p>
              Those two variables alone are probably good enough. If you’re good
              at it, you’ll keep it up. You’ll develop the judgment. If you’re
              good at it and you like to do it, eventually people will give you
              the resources and you won’t be afraid to take on accountability.
              So the other pieces will fall into place.
            </p>
            <p>
              Product-market fit is inevitable if you’re doing something you
              love and the market wants it.
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
