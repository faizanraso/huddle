import Image from "next/image";

import mockup from "@/../public/mockup.png";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between py-12 px-12 sm:px-24">
        <section className="flex flex-col">
          <div className="py-5 px-1 text-center justify-center items-center my-auto sm:px-5">
            <h1 className="text-black text-4xl font-semibold">
              The social media platform made for{" "}
              <span className="text-blue-700 underline">students.</span>{" "}
            </h1>
            <p className="text-gray-500 text-sm mt-2">
              huddle aims to connect current students with alumni and upper
              years in the same program and university.
            </p>
          </div>
          <div className="mx-auto justify-center items-center px-1 py-4 sm:px-5">
            <Image src={mockup} alt="iPhone mockup image" width={350} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
