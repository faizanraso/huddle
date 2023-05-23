import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <aside
      className="border-r-1 fixed left-0 top-0 z-40 h-screen w-20 border px-3 pt-3 sm:w-64"
      aria-label="Sidebar"
    >
      <Link href={"/home"}>
        <span className="p-2 text-3xl">🔵</span>
      </Link>

      <ul className="mt-3 flex flex-col gap-y-2 text-sm text-black">
        <div className="flex flex-row items-center rounded-full p-2 transition duration-200 ease-in-out hover:bg-gray-200 sm:gap-x-2">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7">
            <path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path>
          </svg>
          <li className="text-md hidden font-medium transition-transform sm:inline-block">
            home
          </li>
        </div>
        <div className="flex flex-row items-center rounded-full p-2 transition duration-200 ease-in-out hover:bg-gray-200 sm:gap-x-2">
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
            favourites
          </li>
        </div>
        <div className="flex flex-row items-center rounded-full p-2 transition duration-200 ease-in-out hover:bg-gray-200 sm:gap-x-2">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7">
            <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
          </svg>
          <li className="text-md hidden font-medium transition-transform sm:inline">
            messages
          </li>
        </div>
        <div className="flex flex-row items-center rounded-full p-2 transition duration-200 ease-in-out hover:bg-gray-200 sm:gap-x-2">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7">
            <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
          </svg>
          <li className="text-md hidden font-medium transition-transform sm:inline-block">
            profile
          </li>
        </div>
        <div className="flex flex-row items-center rounded-full p-2 transition duration-200 ease-in-out hover:bg-gray-200 sm:gap-x-2">
          <svg
            strokeWidth="2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7"
          >
            <path
              d="M12 15a3 3 0 100-6 3 3 0 000 6z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.387 2.651-1.098C16.697 18.831 18 20 18 20l2-2-1.484-1.75 1.098-2.652 2.386-.62V11l-2.378-.605z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <li className="text-md hidden font-medium transition-transform sm:inline-block">
            settings
          </li>
        </div>
      </ul>

      <div className="fixed bottom-3 flex flex-row items-center rounded-full px-2 py-2 hover:bg-gray-200 sm:gap-x-2">
        <div className="h-9 w-9 rounded-full bg-blue-500 text-blue-500">.</div>
        <div className="flex flex-row items-center justify-center ">
          <p className="hidden pr-2 text-xs font-medium text-black transition-transform sm:inline">
            Faizan Rasool
          </p>
        </div>
      </div>
    </aside>
  );
}
