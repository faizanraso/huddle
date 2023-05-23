"use client";

import React, { useState } from "react";

export default function TweetBox() {
  const [tweet, setTweet] = useState<String>();

  return (
    <div className="flex items-center justify-center gap-x-3 px-4">
      <div className="h-12 w-12 rounded-full bg-blue-500 text-blue-500">.</div>
      <textarea
        id="tweetbox"
        onChange={(e) => {
          setTweet(e.target.value);
        }}
        rows={4}
        className="block w-10/12 resize-none rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 "
        placeholder="What's up?!"
      />
    </div>
  );
}
