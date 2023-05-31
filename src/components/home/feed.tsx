import React from "react";

import TweetBox from "./tweetbox";
import Tweet from "./tweet";
import prisma from "@/lib/prisma";

export default async function Feed() {
  const tweets = await prisma.tweet.findMany({
    include: { user: true },
  });

  return (
    <main className="border-r-1 w-100 ml-20 h-screen border sm:ml-64 lg:w-6/12">
      <section className="p-3">
        <h1 className="items-center text-center font-semibold text-black">
          home
        </h1>
      </section>
      <section className="p-4">
        <TweetBox />
      </section>
      <section id="tweets-section">
        {tweets.map((val, index) => (
          <div className="border p-4" key={index}>
            <Tweet tweetText={val.text} user={val.user.name!} />
          </div>
        ))}
      </section>
    </main>
  );
}
