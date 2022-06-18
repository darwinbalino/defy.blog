import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function Social() {
  const [subscribe, setSubscribe] = useState(false);
  const router = useRouter();
  const data = {
    date: "Dec 6 2021",
    title: "Making Something Social Destroys the Truth of It",
    description: "Science’s biggest breakthroughs came from unpopular people",
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
              Making something social destroys the truth of it because social
              groups need consensus to survive—otherwise they fight and can’t
              get along—and consensus is all about compromise, not
              truth-seeking.
            </p>
            <p>
              Science—at least the natural sciences—was this unique discipline
              where you could have an individual truth-seeking on behalf of the
              rest of society. Other individuals verify that they did, indeed,
              have the best current model of how reality works, and then that
              could be spread out through inventions to the rest of society.
            </p>
            <p>
              But the social sciences are this virus that crept into academia
              and have taken over. Social sciences are completely corrupted.
            </p>
            <p>
              First, they need to appeal to society for funding, so they are
              politically motivated. Then, they themselves are influenced in
              society because the studies and models are used to drive policy.
              So, of course, that ends up corrupted as well. Now even the
              natural sciences are under attack from the social sciences, and
              they’re becoming more and more socialized.
            </p>
            <p>
              The more groupthink you see involved, the farther from the truth
              you actually are. You can have an harmonious society while still
              allowing truth seekers within the society to find truth and to
              find the means to alter and improve reality for the entire group.
            </p>
            <p>
              Historically, most of the scientific breakthroughs didn’t come
              from scientific institutions. The big ones came from individual
              natural philosophers who were very independent thinkers who were
              reviled in their time, often persecuted, who fought against the
              rest of society on the basis of their truths. And it took decades
              or centuries—often after their deaths—before those truths were
              accepted.
            </p>
            <p>
              A lot of these academic theories don’t actually stand up either to
              replication—if you look at what’s going on in psychology—or even
              to reality.
            </p>
            <p>
              <a
                href="https://twitter.com/rorysutherland?lang=en"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                Rory Sutherland
              </a>{" "}
              has this great quote where he said something along the lines of, “
              <a
                href="https://www.irishtimes.com/business/innovation/marketing-and-the-science-of-knowing-what-economists-are-wrong-about-1.3913489"
                className="text-gray-400 underline cursor-pointer hover:text-white"
              >
                Marketing is the science of knowing what economists are wrong
                about.
              </a>
              ” Economists assume perfectly rational behavior, but humans are
              obviously wetware biological creatures, so you can hack around
              that using marketing.
            </p>
            <p>
              Nassim Taleb would go even further and say that they assume false
              rationality. Humans are pricing in the risk of ruin, the risk of
              going to zero, and the academics are making mistakes about ergodic
              reasoning. They’re assuming that what’s good for the ensemble is
              good for the individual, and it’s not.
            </p>
            <p>
              An individual doesn’t want to go to zero—doesn’t want to die—so
              they will not take risks of ruin and they will not take risks of
              bankruptcy; whereas a group should be willing to take a risk of
              bankruptcy because that’s spread out among so many different
              people.
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
