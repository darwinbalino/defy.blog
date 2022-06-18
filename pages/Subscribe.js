import { useRouter } from "next/router";
import Header from "../components/Header";

export default function Subscribe() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-slate">
      <Header />
      <div className="flex md:justify-center">
        <div className="max-w-screen-md pb-10 mx-6 my-16 space-y-4 text-base text-white sm:text-lg md:mx-10 ">
          <h1 className="text-5xl font-semibold text-white">Subscribe</h1>
          <h3>Get the blog in your inbox.</h3>
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
        </div>
      </div>
    </div>
  );
}
