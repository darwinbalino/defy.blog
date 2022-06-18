import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Post = ({ slug, title, description, preview, date }) => {
  return (
    <div>
      <div className="space-y-4">
        <Link href={`/${slug}`}>
          <h1 className="text-lg font-extrabold cursor-pointer md:text-2xl hover:text-red-600">
            {title}
          </h1>
        </Link>
        <p className="text-base">{description}</p>
        <p className="text-base leading-loose text-gray-400">{preview}</p>
      </div>
      <Link href={`/${slug}`} passHref>
        <div className="flex items-center space-x-1 text-gray-200 cursor-pointer group">
          <p className="text-tiny group-hover:text-red-600">More</p>
          <ChevronDoubleRightIcon className="h-3 group-hover:text-red-600" />
          {/* <ArrowRightIcon className="h-3 group-hover:text-red-600" /> */}
        </div>
      </Link>
      <p className="mt-4 text-sm text-gray-400">{date}</p>
    </div>
  );
};

export default Post;
