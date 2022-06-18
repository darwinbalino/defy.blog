import Link from "next/link";
export default function NotFound() {
  return (
    <div className="bg-slate">
      <div className="flex flex-col h-screen max-w-2xl mx-auto pt-60 bg-slate">
        <p className="mx-8 mb-8 text-gray-300">
          Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?
        </p>
        <Link href="/">
          <a className="w-64 p-4 mx-auto font-bold text-center text-gray-300 bg-gray-200 bg-red-800 rounded-md cursor-pointer hover:bg-red-600">
            Return Home
          </a>
        </Link>
      </div>
    </div>
  );
}
