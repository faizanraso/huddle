"use client";

import React from "react";
import axios from "axios";
import useSWR from "swr";

import TweetBox from "./tweetbox";
import Tweet from "./tweet";

export default function Feed() {
  const fetcher = async (url: string) => {
    const res = await axios.get(url);
    return res.data;
  };

  const { data, error, isLoading } = useSWR("/api/home", fetcher);
  console.log(data);

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
        {/* loop the following div to display tweets */}
        <div className="border p-4">
          <Tweet />
        </div>
      </section>
    </main>
  );
}
