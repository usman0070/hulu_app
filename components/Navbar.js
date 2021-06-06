import requestData from "../utils/request";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav className="relative">
      <div className="flex scrollbar-hide whitespace-nowrap px-10 sm:px-20 space-x-10 sm:space-x-20 overflow-x-scroll  text-2xl">
        {Object.entries(requestData).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            key={key}
            className="cursor-pointer last:pr-24 transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] w-1/12 h-10"></div>
      {/* <div className="absolute top-0 left-0 bg-gradient-to-l from-[#06202A] w-1/12 h-10"></div> */}
    </nav>
  );
}
