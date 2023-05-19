import Image from "next/image";

import mockup from "@/../public/mockup.png";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between px-12 py-12 sm:px-24">
        <section className="flex flex-col">
          <div className="my-auto items-center justify-center px-1 py-5 text-center sm:px-5">
            <h1 className="text-4xl font-semibold text-black">
              The social media platform made for{" "}
              <span className="text-blue-700 underline">students.</span>{" "}
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              huddle aims to make it easy for current students to connect with
              alumni and upper years.
            </p>
          </div>
          <div className="mx-auto items-center justify-center px-1 py-4 sm:px-5">
            <Image src={mockup} alt="iPhone mockup image" width={350} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
