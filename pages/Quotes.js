import Card from "../components/Card";
import Header from "../components/Header";
import { quotes } from "../quotes";

export default function Quotes() {
  return (
    <div className="bg-slate">
      <Header />
      <div className="flex md:justify-center">
        <div className="max-w-screen-md pb-10 mx-6 my-16 space-y-6 text-base text-white sm:text-lg md:mx-10 ">
          <h1 className="text-4xl font-bold text-white">Quotes</h1>
          <div className="space-y-12 ">
            {quotes.map((post, i) => (
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
  );
}
