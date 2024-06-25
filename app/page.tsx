import FeedCard from "@/components/FeedCard";
import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButtons {
  title: string;
  icon: React.ReactNode;
}

const TwitterSidebarButtons: TwitterSidebarButtons[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
    // link: "/",
  },
  {
    title: "Explore",
    icon: <BiHash />,
    // link: "/",
  },
  {
    title: "Notifications",
    icon: <BsBell />,
    // link: "/",
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
    // link: "/",
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
    // link: "/",
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
    // link: "/",
  },
  {
    title: "Profile",
    icon: <BiUser />,
    // link: `/${user?.id}`,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
    // link: "/",
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-scren px-56">
      <div className="col-span-3 flex flex-col justify-start pt-5 px-4">
        <div className="text-4xl h-fit w-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all">
          <BsTwitter />
        </div>
        <div className="mt-4 text-xl font-medium pr-5">
          <ul>
            {TwitterSidebarButtons.map((sidebarButtons) => (
              <li key={sidebarButtons.title} className="flex justify-start items-center gap-4 pl-2 pr-5 py-2 rounded-full h-fit w-fit cursor-pointer mt-2 hover:bg-gray-900">
                <span>{sidebarButtons.icon}</span>
                <span>{sidebarButtons.title}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 pr-3">
            <button className="hidden sm:block bg-[#1d9bf0] font-semibold text-lg py-2 px-4 rounded-full w-full">
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-10 sm:col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-y-auto border-gray-600 custom-scrollbar">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
