import Image from "next/image";

import mockup from "@/../public/mockup.png";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between py-24 px-12 sm:px-24">
        <section className="flex flex-col">
          <div className="py-5 px-1 text-center justify-center items-center my-auto sm:px-5">
            <h1 className="text-black text-xl">
              The social media platform to connect students with alumni 📚{" "}
            </h1>
          </div>
          <div className="mx-auto justify-center items-center px-1 py-4 sm:px-5">
            <Image src={mockup} alt="iPhone mockup image" width={350}/>
          </div>
        </section>
      </main>
    </>
  );
}
