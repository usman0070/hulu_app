import Image from "next/image";
import {
  HomeIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  CollectionIcon,
} from "@heroicons/react/outline";
import HeaderItems from "./HeaderItems";

export default function Header() {
  return (
    <header className="flex flex-col mt-5 h-auto sm:-mt-9 sm:justify-between sm:items-center sm:flex-row">
      <div className="flex justify-evenly flex-grow max-w-2xl">
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItems title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItems title="SEARCH" Icon={SearchIcon} />
        <HeaderItems title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image className="object-contain m-0" src="https://links.papareact.com/ua6" width={200} height={200} />
    </header>
  );
}
