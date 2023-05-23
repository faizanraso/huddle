"use client";

import React, { useState } from "react";

export default function TweetBox() {
  const [tweet, setTweet] = useState<String>();

  return (
    <div>
      <textarea
        id="tweetbox"
        onChange={(e) => {
          setTweet(e.target.value);
        }}
        rows={4}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
        placeholder="What's up?!"
      ></textarea>
    </div>
  );
}
