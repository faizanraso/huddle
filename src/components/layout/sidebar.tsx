"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar(props: { name: string; image: string }) {
  return (
    <aside
      className="border-r-1 fixed left-0 top-0 z-40 h-screen w-20 border px-3 pt-3 sm:w-64"
      aria-label="Sidebar"
    >
      <Link href={"/home"}>
        <span className="p-2 text-3xl">🔵</span>
      </Link>

      <ul className="mt-3 flex flex-col gap-y-2 text-sm text-black">
        <Link href={"/home"}>
          <div className="flex w-fit flex-row items-center rounded-full p-2 transition duration-200 ease-in-out hover:bg-gray-200 sm:gap-x-2">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7">
              <path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path>
            </svg>
            <li className="text-md hidden font-medium transition-transform sm:inline-block">
              home &nbsp;
            </li>
          </div>
        </Link>
        <Link href={"/favourites"}>
          <div className="flex w-fit flex-row items-center rounded-full p-2 transition duration-200 ease-in-out hover:bg-gray-200 sm:gap-x-2">
            <svg
              className="w-7"
              strokeWidth="2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M22 8.862a5.95 5.95 0 01-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 018.08 0l.266.274.265-.274A5.612 5.612 0 0116.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0122 8.862z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinejoin="round"
              ></path>
            </svg>

            <li className="text-md hidden font-medium transition-transform sm:inline-block">
              favourites &nbsp;
            </li>
          </div>
        </Link>
        <Link href={"/messages"}>
          <div className="flex w-fit flex-row items-center rounded-full p-2 transition duration-200 ease-in-out hover:bg-gray-200 sm:gap-x-2">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7">
              <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
            </svg>
            <li className="text-md hidden font-medium transition-transform sm:inline">
              messages &nbsp;
            </li>
          </div>
        </Link>
        <Link href={"/profile"}>
          <div className="flex w-fit flex-row items-center rounded-full p-2 transition duration-200 ease-in-out hover:bg-gray-200 sm:gap-x-2">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7">
              <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
            </svg>
            <li className="text-md hidden font-medium transition-transform sm:inline-block">
              profile &nbsp;
            </li>
          </div>
        </Link>
        <button onClick={() => signOut()}>
          <div className="flex w-fit flex-row items-center rounded-full p-2 transition duration-200 ease-in-out hover:bg-gray-200 sm:gap-x-2">
            <svg
              strokeWidth="2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#D32F2F"
              className="w-7"
            >
              <path
                d="M12 7v10M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                stroke="#D32F2F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <li className="text-md hidden font-medium text-red-700 transition-transform sm:inline-block">
              sign out &nbsp;
            </li>
          </div>
        </button>
      </ul>

      <div className="fixed bottom-3 flex flex-row items-center rounded-full px-2 py-2 hover:bg-gray-200 sm:gap-x-2">
        <Image
          className="rounded-full"
          src={props.image}
          width={40}
          height={40}
          alt="user profile image"
        />
        <div className="hidden flex-row items-center justify-between sm:flex">
          <div className="px-1">
            <p className=" pr-1 text-xs font-medium text-black transition-transform ">
              {props.name}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
