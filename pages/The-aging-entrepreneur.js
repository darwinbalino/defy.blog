import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function TheAgingEntreprenur() {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Aug 8 2018",
    title: "The Aging Entrepreneur",
    description: "Can older people be great entrepreneurs?",
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
              Marc Andreesen has a{" "}
              <a
                href="https://a16z.com/author/marc-andreessen/"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                great post
              </a>{" "}
              on this age-old question. In part I, he’s digging through the
              data. Some of his observations are powerful and worth summarizing:
            </p>
            <p>
              "Generally, productivity — output — rises rapidly from the start
              of a career to a peak and then declines gradually until
              retirement.
            </p>
            <p>
              This peak in productivity varies by field, from the late 20s to
              the early 50s, for reasons that are field-specific.
            </p>
            <p>
              Precocity, longevity, and output rate are linked. "Those who are
              precocious also tend to display longevity, and both precocity and
              longevity are positively associated with high output rates per age
              unit." High producers produce highly, systematically, over time.
            </p>
            <p>
              The odds of a hit versus a miss do not increase over time. The
              periods of one’s career with the most hits will also have the most
              misses. So maximizing quantity — taking more swings at the bat —
              is much higher payoff than trying to improve one’s batting
              average.
            </p>
            <p>
              Intelligence, at least as measured by metrics such as IQ, is
              largely irrelevant."
            </p>
            <p>I went through an evolution of sorts on this topic.</p>
            <p>
              I started with a variation of the Beard Hypothesis (enthusiasm
              decreases with age but experience increases, and there’s an
              optimum cross-over point). This is the easiest viewpoint as you
              get older and look back at some of your earlier crazier ideas, but
              notice that that older crowd is very risk-averse. Douglas Adams
              had a great take on it:
            </p>
            <p>
              1. "everything that’s already in the world when you’re born is
              just normal;
            </p>
            <p>
              2. anything that gets invented between then and before you turn
              thirty is incredibly exciting and creative and with any luck you
              can make a career out of it;
            </p>
            <p>
              3. anything that gets invented after you’re thirty is against the
              natural order of things and the beginning of the end of
              civilisation as we know it until it’s been around for about ten
              years when it gradually turns out to be alright really.
            </p>
            <p>
              4. Apply this list to movies, rock music, word processors and
              mobile phones to work out how old you are."
            </p>
            <p className="pt-10">
              I then moved on to Dean Simonton’s observations, beautifully
              covered in Marc’s article. My thinking was driven by books like
              "The Black Swan," "Fooled by Randomness," DeVany’s analysis of
              Hollywood Economics and Home-Run Hitting, and a casual observation
              of how Evolution creates things (massive trial and error).
              Basically, the number of swings at bat, poems attempted, paintings
              painted, etc. determine the success rate. The more you try, the
              more you learn, the faster you iterate, the better you get, and
              the more chances that you have of being productive. Your outcome
              scales more with the number of bets than the size of the bets. As
              the violinist Pablo De Sarasate put it, "For 37 years I’ve
              practiced 14 hours a day, and now they call me a genius. "
            </p>
            <p>
              Now I prefer a slightly different hypothesis. More of the creative
              instinct is driven by the sublimated sex drive and the desire to
              attract a mate than we give it credit for. And more of it is
              squelched by the demands of family than anything else. An extreme
              take on it is presented by{" "}
              <a
                href="https://en.wikipedia.org/wiki/Satoshi_Kanazawa"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                Kanazawa
              </a>
              :
            </p>
            <p>
              "Scientists tend to ‘desist’ from scientific research upon
              marriage, just like criminals desist from crime upon marriage."
            </p>
            <p className="pt-10">Marc asks:</p>
            <p>
              "So here’s my first challenge: to anyone who has an opinion on the
              role of age and entrepreneurship — see if you can fit your opinion
              into this model!"
            </p>
            <p>When you are young, hungry, and single, you have</p>
            <p>1. huge amounts of free time (more swings at the ball)</p>
            <p>2. less to lose (more swings)</p>
            <p>3. enthusiasm (more likely to swing)</p>
            <p>
              4. sublimated sex drive (more likely to swing to stand out from
              your peers).
            </p>
            <p>As you age, you have</p>
            <p>
              1. less free time, more family demands, larger social networks
              (less swings)
            </p>
            <p>
              2. more to lose (public embarrassment in front of an established
              social circle means you don’t want to start anything fresh) (less
              swings)
            </p>
            <p>
              3. experience (if you’re probably going to miss, why bother
              swinging) (less swings)
            </p>
            <p>4. fulfilled sex drive (have sex rather than swing)</p>
            <p className="pt-10">
              "And here’s my second challenge: is entrepreneurship more like
              poetry, pure mathematics, and theoretical physics — which exhibit
              a peak age in one’s late 20s or early 30s — or novel writing,
              history, philosophy, medicine, and general scholarship — which
              exhibit a peak age in one’s late 40s or early 50s? And how, and
              why?"
            </p>
            <p>
              Unfortunately for an aging me, anecdotal evidence aside,
              entrepreneurship favors the young.
            </p>
            <p>
              The difference between poetry, pure math, theoretical physics, and
              novel writing, history, philosophy, medicine, scholarship, is that
              the former set requires huge (multi-year) intense, focused, almost
              isolated blocks of free time, whereas the latter set can be picked
              up and put down and resumed later without too much cost. The first
              set comprises problems that are solved by an emotional state
              (poetry, painting), by loading a very difficult single framework
              into your head (math, physics, coding), and / or competition
              (driven by sex drive and time-sensitive). The latter set are more
              rational, are systems problems rather than point problems, and
              don’t have time-sensitive competition.
            </p>
            <p>
              Modern entrepreneurship, especially web entrepreneurship, is
              extremely competitive / time sensitive, requires enormous amounts
              of iteration even within a single product life-cycle, and often
              requires solving many challenging technical and business problems
              one after the other in a public view (with the opposite sex
              watching). So, it favors the young and single.
            </p>
            <p>
              Which is not to say that one can’t do it if one is older and
              settled down. Mathematician Paul Erdos was famous for his
              prioritizing his work above all else (he remained single, by the
              way). There are many older successful entrepreneurs who spend
              tremendous amounts of time away from their families.
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
              <Link href="/Optimism">
                <h3 className="text-xl1.5 group-hover:underline">
                  Rational Optimism Is the Way Out
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
