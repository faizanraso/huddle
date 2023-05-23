"use client";

import React, { useState } from "react";
import Select from "react-select";

import { uniOptions } from "@/utils/unis";
import { programOptions } from "@/utils/programs";

export default function TweetBox() {
  const [tweet, setTweet] = useState<String>();
  const [selectedUni, setSelectedUni] = useState<String>();
  const [selectedProgram, setSelectedProgram] = useState<String>();

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
          onChange={(val) => console.log(val)}
          options={uniOptions}
        />
        <Select
          className="w-full text-sm text-black"
          defaultValue={selectedProgram}
          onChange={(val) => console.log(val)}
          options={programOptions}
        />

        <button className="rounded-full bg-blue-400 px-3 py-2 font-medium text-white">
          Tweet
        </button>
      </div>
    </div>
  );
}
