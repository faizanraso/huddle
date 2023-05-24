import React from "react";
import TweetBox from "./tweetbox";

export default function Feed() {
  return (
    <main className="border-r-1 w-100 ml-20 h-screen border sm:ml-64 lg:w-6/12">
      <div className="p-3">
        <h1 className="items-center text-center font-semibold text-black">
          home
        </h1>
      </div>
      <div className="p-4">
        <TweetBox />
      </div>
      <div className="">
        <p>Test</p>
      </div>
    </main>
  );
}
