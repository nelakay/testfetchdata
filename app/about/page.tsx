import Image from "next/image";
import { Nothing_You_Could_Do } from "@next/font/google";
import Script from "next/script";

const handwritten = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default async function About() {
  return (
    <div className="body flex flex-col items-center pt-6 justify-center bg-[url('https://images.pexels.com/photos/2099737/pexels-photo-2099737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-blend-overlay bg-fixed">
      <Image
        src="/fav.png"
        alt="Logo"
        width="100"
        height="100"
        className="cursor-pointer pb-8"
      />
      <h1 className="font-serif text-xl mb-6">About</h1>
      <p className="font-serif text-4xl mb-6">Testing Project</p>
      {/* <div className="my-8">
        <p className={`${handwritten.className} text-2xl`}>
          Life is about experiences...
        </p>
        <p className={`${handwritten.className} text-3xl`}>
          ...we curate the best
        </p>
      </div> */}

      <div className="flex flex-row space-x-4">
      </div>
      <>
        <Script
          async
          data-uid="adeb884d55"
          src="https://armcandy.ck.page/adeb884d55/index.js"
        ></Script>
      </>

      <div className="grid grid-cols-3 gap-3 w-full my-12">
        <div className="h-40 bg-conversly_color"></div>
        <div className="h-40 bg-conversly_color"></div>
        <div className="h-40 bg-conversly_color"></div>
        <div className="h-40 bg-conversly_color"></div>
        <div className="h-40 bg-conversly_color"></div>
        <div className="h-40 bg-conversly_color"></div>
      </div>
    </div>
  );
}
