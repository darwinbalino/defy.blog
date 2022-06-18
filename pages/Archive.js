import Link from "next/link";
import Header from "../components/Header";
import { posts } from "../posts";

export default function Archive() {
  return (
    <div className="min-h-screen bg-slate">
      <Header />
      <div className="flex md:justify-center">
        <div className="max-w-[830px] px-6 space-y-6 md:space-y-8 text-lg text-white mt-20 md:mt-14">
          <h3 className="text-3.5xl font-bold md:text-3xl">Archive</h3>
          <div className="pt-4 space-y-4">
            {posts.map((post, i) => (
              <Link href={`/${post.slug}`}>
                <h1 className="text-sm font-semibold cursor-pointer md:text-lg hover:text-red-600">
                  {post.title}
                </h1>
              </Link>
            ))}
          </div>
          <Link href="/Quotes">
            <h3 className="pb-32 text-sm font-semibold cursor-pointer md:text-lg hover:text-red-600">
              Quotes
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
