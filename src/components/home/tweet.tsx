import Image from "next/image";

export default function Tweet(props: {
  user: string;
  tweetText: string;
  image: string;
}) {
  return (
    <div className="flex justify-between p-1">
      <div className="flex items-center justify-center gap-x-3 px-4">
        <Image
          className="rounded-full"
          src={props.image}
          alt="user profile picture"
          width={40}
          height={40}
        />
        <div className="flex w-full flex-col gap-y-0.5">
          <div className="block w-full">
            <p className="px-2.5 text-sm font-medium text-gray-900">
              {props.user}
            </p>
          </div>
          <div className="block w-full resize-none rounded-lg px-2.5 text-sm text-gray-900 ">
            <p>{props.tweetText}</p>
          </div>
        </div>
      </div>
      <div className="flex-coltext-xs flex text-black">
        <button className="text-black">
          {" "}
          <svg
            className="w-5"
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
        </button>
      </div>
    </div>
  );
}
