import Head from "next/head";
import Card from "../components/Card";
import Header from "../components/Header";
import { posts } from "../posts";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate">
      <Head>
        <title>Defy</title>
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <div className="">
        <Header />
        <div className="flex md:justify-center">
          <div className="max-w-screen-md pb-10 mx-6 my-16 space-y-6 text-base text-white sm:text-lg md:mx-10 ">
            <div className="space-y-12 ">
              {posts.map((post, i) => (
                <Card
                  key={i}
                  slug={post.slug}
                  date={post.date}
                  title={post.title}
                  description={post.description}
                  preview={post.preview}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
