import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header aria-label="Page Header">
      <div className="mx-auto max-w-screen-xl px-8 py-4 sm:px-16">
        <div className="flex items-center justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
              🔵 huddle
            </h1>
          </div>

          <div className="mt-0 flex flex-row gap-4 sm:items-center">
            <Link
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-4 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
              type="button"
              href={"https://github.com/faizanraso/huddle"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </Link>

            <Link
              className="inline-flex gap-1.5 rounded-lg bg-blue-600 px-4 py-3 text-xs font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring"
              type="button"
              href={"/api/auth/signin"}
            >
              Get Started
              <svg
                className="rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
