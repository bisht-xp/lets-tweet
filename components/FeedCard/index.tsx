import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
// import { Tweet } from "@/gql/graphql";
import Link from "next/link";

interface FeedCardProps {
//   data: Tweet;
}

const FeedCard: React.FC<FeedCardProps> = (props) => {
//   const { data } = props;

  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          {/* {data.author?.profileImageURL && ( */}
            <Image
              className="rounded-full"
            //   src={data.author.profileImageURL}
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="user-image"
              height={50}
              width={50}
            />
          {/* )} */}
        </div>
        <div className="col-span-11">
          <h5>
            {/* <Link href={`/${data.author?.id}`}>
              {data.author?.firstName} {data.author?.lastName}
            </Link> */}
            Kamal
          </h5>
          {/* <p>{data.content}</p> */}
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          {/* {data.imageURL && (
            <Image src={data.imageURL} alt="image" width={400} height={400} />
          )} */}
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;