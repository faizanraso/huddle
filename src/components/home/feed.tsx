import React from "react";
import TweetBox from "./tweetbox";

export default function Feed() {
  return (
    <main className="border-r-1 w-100 ml-20 border sm:ml-64 lg:w-6/12">
      <div className="p-3">
        <h1 className="items-center text-center font-semibold text-black">
          Home
        </h1>
      </div>
      <TweetBox />
    </main>
  );
}
