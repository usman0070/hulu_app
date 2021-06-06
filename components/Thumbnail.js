import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
export default function Thumbnail({ result }) {
  // console.log(result);
  const BASE_URL = "http://image.tmdb.org/t/p/original/";
  return (
    <div className="group cursor-pointer transition duration-200 ease-in p-2 transform sm:hover:scale-105 sm:hover:z-50">
      <Image
        layout="responsive"
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path} `}
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="max-w-md truncate">{result.overview}</p>
        <h1 className="mt-1 text-2xl text-white group-hover:font-bold transition-all duration-100 ease-in-out">
          {result.title || result.original_name}
        </h1>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.release_date}.{""}
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
