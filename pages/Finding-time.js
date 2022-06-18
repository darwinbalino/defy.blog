import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/Header";

export default function () {
  const router = useRouter();
  const [subscribe, setSubscribe] = useState(false);
  const data = {
    date: "Jan 13 2020",
    title: "Finding Time to Invest in Yourself",
    description:
      "If you have to work a “normal job,” take on accountability to build your specific knowledge",
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
              “How do I find the time to start investing in myself? I have a
              job.”
            </p>
            <p className="font-bold">
              You will have to rent your time to get started.
            </p>
            <p>
              But, this is only acceptable when you are learning and saving.
              Preferably in a business where society does not yet know how to
              train people and apprenticeship is the only model.
            </p>
            <p>
              Try to learn something that people haven’t quite figured out how
              to teach yet. That can happen if you’re working in a new and
              quickly expanding field. It’s also common in fields that are
              circumstantial—where the details matter and it’s always moving.
              Investing is one of those fields; so is entrepreneurship.
            </p>
            <p>
              Chief of Staff for a founder is one of the most coveted jobs for
              young people starting out in Silicon Valley. The brightest kids
              will follow an entrepreneur around and do whatever he or she needs
              them to do.
            </p>
            <p>
              In many cases, the person is way overqualified. Someone with
              multiple graduate degrees might be running the CEO’s laundry
              because that’s the most important thing at the moment.
            </p>
            <p>
              At the same time, that person gets to attend the most important
              meetings. They are privy to all the stress and theatrics, the
              fundraising decks and the innovation—knowledge that can only come
              from being in the room.
            </p>
            <p>
              Coming out of college, Warren Buffett wanted to work for Benjamin
              Graham to learn to be a value investor. Buffett offered to work
              for free, and Graham responded, “You’re overpriced.” What that
              means is you have to make sacrifices to take on an apprenticeship.
            </p>
            <p className="font-bold">
              Find the part of the job with the steepest learning curve
            </p>
            <p>
              If you can’t learn in an apprenticeship model because you need to
              make money, try to be innovative in the context of your job. Take
              on new challenges and responsibilities. Find the part of the job
              with the steepest learning curve.
            </p>
            <p>
              You want to avoid repetitive drudgery—that’s just biding time
              until your job is automated away.
            </p>
            <p>
              If you’re a barista at the coffee shop, figure out how to make
              connections with the customers. Figure out how to innovate the
              service you offer and delight the customer. Managers, founders and
              owners will take notice.
            </p>
            <p className="font-bold">Develop a founder mentality</p>
            <p>
              The hardest thing for any founder is finding employees with a
              founder mentality. This is a fancy way of saying they care enough.
            </p>
            <p>
              People will say, “Well, I’m not the founder. I’m not being paid
              enough to care.” Actually, you are: The knowledge and skills you
              gain by developing a founder mentality set you up to be a founder
              down the line; that’s your compensation.
            </p>
            <p>
              You can get a lot out of almost any position. You just have to put
              a lot into it.
            </p>
            <p className="font-bold">
              Accountability is something you can take on immediately
            </p>

            <p>
              Judgment takes experience. It takes a lot of time to build up. You
              have to put yourself in positions where you can exercise judgment.
              That’ll come from taking on accountability.
            </p>
            <p>
              Leverage is something that society gives you after you’ve
              demonstrated judgment. You can get it faster by learning
              high-leverage skills like coding or working with the media. These
              are permissionless leverage. This is why I encourage people to
              learn to code or produce media, even if it’s just nights and
              weekends.
            </p>
            <p>
              So, judgment and leverage tend to come later. Accountability is
              something you can take on immediately. You can say, “Hey, I’ll
              take charge of this thing that nobody wants to take charge of.”
              When you take on accountability, you’re also publicly putting your
              neck on the chopping block—so you have to deliver.
            </p>
            <p>
              You build specific knowledge by taking accountability for things
              that other people don’t know how to do. Perhaps they’re things you
              enjoy doing or are naturally inclined towards doing anyway.
            </p>
            <p>
              If you work in a factory, the hardest thing may be raising capital
              to keep the factory running. Maybe that’s what the owner is always
              stressed out about.
            </p>
            <p>
              You might notice this and think, “I’m good at balancing my
              checkbook and have a good head for numbers; but I haven’t raised
              money before.” You offer to help and become the owner’s sidekick
              solving their fundraising problem. If you have a natural aptitude
              and take on accountability, you can put yourself in a position to
              learn quickly. Before long, you’ll become the heir apparent.
            </p>
            <p>
              Early on, find things that interest you and allow you to take on
              accountability. Don’t worry about short-term compensation.
              Compensation comes when you’re tired of waiting for it and have
              given up on it. This is the way the whole system works.
            </p>
            <p>
              If you take on accountability and solve problems on the edge of
              knowledge that others can’t solve, people will line up behind you.
              The leverage will come.
            </p>
            <p className="font-bold">
              Specific knowledge can be timely or timeless
            </p>
            <p>
              There are two forms of specific knowledge: timely and timeless.
            </p>
            <p>
              If you become a world-class expert in machine learning just as it
              takes off and you got there through genuine intellectual interest,
              you’re going to do really well. But 20 years from now, machine
              learning may be second hat; the world may have moved on to
              something else. That’s timely knowledge.
            </p>
            <p>
              If you’re good at persuading people, it’s probably a skill you
              picked up early on in life. It’s always going to apply, because
              persuading people is always going to be valuable. That’s timeless
              knowledge.
            </p>
            <p>
              Now, persuasion is a generic skill—it’s probably not enough to
              build a career on. You need to combine it in a skill stack, as
              Scott Adams writes. You might combine persuasion with accounting
              and an understanding of semiconductor production lines. Now you
              can become the best semiconductor salesperson and, later on, the
              best semiconductor company CEO.
            </p>
            <p>
              Timeless specific knowledge usually can’t be taught, and it sticks
              with you forever. Timely specific knowledge comes and goes; but it
              tends to have a fairly long shelf life.
            </p>
            <p>
              Technology is a good place to find those timely skills sets. If
              you can bring in a more generic specialized knowledge skill set
              from the outside, then you’ve got gold.
            </p>
            <p className="font-bold">
              Technology is an intellectual frontier for gaining specific
              knowledge
            </p>
            <p>
              The technology industry is a great place to acquire specific
              knowledge. The frontier is always moving forward. If you are
              genuinely intellectually curious, you will acquire the knowledge
              ahead of others.
            </p>
            <p>
              Danny Hillis famously said technology is everything that doesn’t
              work yet. Technology is around us everywhere. The spoon was
              technology once; fire was technology once. When we figured out how
              to make them work, they disappeared in the background and became
              part of our everyday lives.
            </p>
            <p>
              Technology is, by definition, the intellectual frontier. It’s
              taking things from science and culture that we have not figured
              out how to mass produce or create efficiently and figuring out how
              to commercialize it and make it available to everybody.
            </p>
            <p>
              Technology will always be a great field where you can pick up
              specific knowledge that is valuable to society.
            </p>
            <p className="font-bold">
              If you don’t have accountability, do something different
            </p>
            <p>
              Companies don’t know how to measure outputs, so they measure
              inputs instead. Work in a way that your outputs are visible and
              measurable. If you don’t have accountability, do something
              different.
            </p>
            <p>
              The entire structure of rewarding people comes from the
              agricultural and industrial ages, when inputs and outputs matched
              up closely. The amount of hours you put into doing something was a
              reliable proxy for what kind of output you’d get.
            </p>
            <p>
              Today, it’s extremely nonlinear. One good investment decision can
              make a company $10 million or $100 million. One good product
              feature can be the difference between product-market fit and
              complete failure.
            </p>
            <p>
              As a result, judgment and accountability matter much more. Often
              the best engineers aren’t the hardest workers. Sometimes they
              don’t work very hard at all, but they dependably ship that one
              critical product at just the right time. It’s similar to the
              salesperson who closes the huge deal that makes the company’s
              numbers for the quarter.
            </p>
            <p>
              People need to be able to tell what role you had in the company’s
              success. That doesn’t mean stomping all over your team—people are
              extremely sensitive to others taking too much credit. You always
              want to be giving out credit. Smart people will know who was
              responsible.
            </p>
            <p>
              Some jobs are too removed from the customer for this type of
              accountability. You’re just a cog in a machine.
            </p>
            <p>
              Consulting is a good example. As a consultant, your ideas are
              delivered through someone else within the organization. You may
              not have visibility to the top people; you may be hidden behind a
              screen. That’s a trade-off you’re making in exchange for your
              independence.
            </p>
            <p className="font-bold">
              You’ll develop thick-skin if you take on accountability
            </p>
            <p>
              When you have accountability, you get a lot more credit when
              things go right. Of course, the downside is you get hurt a lot
              more when things go wrong. When you stick your neck out, you have
              to be willing to be blamed, sacrificed and even attacked.
            </p>
            <p>
              If you’re the kind of person who thrives in a high-accountability
              environment, you’re going to end up thick-skinned over time.
              You’re going to get hurt a lot. People are going to attack you if
              you fail.
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
              <Link href="/Eventually">
                <h3 className="text-xl1.5 group-hover:underline">
                  Eventually You Will Get What You Deserve
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
