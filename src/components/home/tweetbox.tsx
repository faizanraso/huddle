"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";

import { uniOptions } from "@/utils/unis";
import { programOptions } from "@/utils/programs";

export default function TweetBox() {
  const [tweet, setTweet] = useState<String | null>(null);
  const [selectedUni, setSelectedUni] = useState<String | null>();
  const [selectedProgram, setSelectedProgram] = useState<String | null>();
  const [tweetable, setTweetable] = useState<boolean>(false);

  useEffect(() => {
    if (tweet && selectedProgram && selectedUni) {
      setTweetable(true);
    } else {
      setTweetable(false);
    }
  }, [tweet, selectedProgram, selectedUni]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-x-3 px-4">
        <div className="h-12 w-12 rounded-full bg-blue-500 text-blue-500">
          .
        </div>
        <textarea
          id="tweetbox"
          onChange={(e) => {
            setTweet(e.target.value);
          }}
          rows={4}
          className="block w-10/12 resize-none rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 "
          placeholder="What's up!?"
        />
      </div>
      <div className="ml-3 flex flex-row place-content-between items-center gap-x-4 px-4 pt-5">
        <Select
          className="w-full text-sm text-black"
          defaultValue={selectedUni}
          onChange={(value) => setSelectedUni(value)}
          // @ts-ignore
          options={uniOptions}
          placeholder={"Select a school..."}
        />
        <Select
          className="w-full text-sm text-black"
          defaultValue={selectedProgram}
          onChange={(value) => setSelectedProgram(value)}
          // @ts-ignore
          options={programOptions}
          placeholder={"Select a program..."}
        />

        {tweetable ? (
          <button className="rounded-full bg-sky-500 px-4 py-3 text-xs font-semibold text-white transition duration-100 hover:bg-sky-600">
            Tweet
          </button>
        ) : (
          <button
            disabled
            className="rounded-full bg-sky-700 px-4 py-3 text-xs font-semibold text-white"
          >
            Tweet
          </button>
        )}
      </div>
    </div>
  );
}
