"use client";

import HeroSection from "./_components/HeroSection";
import OneVideo from "./_components/OneVideo";
import YourChildren from "./_components/YourChildren";
import SetupValuesComponent from "./setupvalues/SetupValuesComponent";
// import { useState } from "react";
// import Explanation from "./_components/Explanation";
// import instapay from "@/public/support_us/instapay.png";
// import visa from "@/public/support_us/visa.png";
// import vodafoneCash from "@/public/support_us/vodafoneCash.png";
// import Image from "next/image";

export default function Home() {
  // const [isOpenExplanation, setIsOpenExplanation] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Your Children */}
      <YourChildren />

      {/* Setup Values */}
      <SetupValuesComponent />

      {/* One video */}
      <OneVideo />

      {/* {
        <form action="/support_us/pay" method="post" className="bg-white py-24">
          <div className="flex flex-col justify-center items-center gap-y-[30px] mx-auto px-4 max-w-5xl">
            <h2 className="max-w-xl font-bold text-H4 text-text text-center">
              ساهم في تطوير مستقبل أكثر أمانا للإنترنت
            </h2>
            <div className="flex flex-col gap-4 w-full">
              <h5 className="text-H5 text-text">المبلغ (جنيه مصري)</h5>
              <input
                type="number"
                name="amount"
                id="amount"
                min="10"
                required
                placeholder="أدخل المبلغ هنا"
                className="p-2 sm:p-3 md:p-4 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="justify-center place-content-center gap-4 sm:gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex justify-center items-center gap-4">
                  <Image src={visa.src} alt="visa" width={80} height={80} />
                </div>

                <button
                  type="submit"
                  name="defaultMethod"
                  value={"card"}
                  className="bg-red-700 p-3 sm:p-4 rounded-md w-full text-white text-sm sm:text-base md:text-lg text-center"
                >
                  كارت فيزا
                </button>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={vodafoneCash.src}
                  alt="vodafoneCash"
                  width={100}
                  height={100}
                />
                <button
                  type="submit"
                  name="defaultMethod"
                  value={"wallet"}
                  className="bg-red-700 p-3 sm:p-4 rounded-md w-full text-white text-sm sm:text-base md:text-lg text-center"
                >
                  المحافظ الإلكترونية (فودافون كاش)
                </button>
              </div>
            </div>
          </div>
        </form>
      } */}

      {/* Modal for Explanation */}
      {/* <div className="top-0 left-0 z-50 flex justify-center items-center bg-black/50">
        <Explanation
          isOpen={isOpenExplanation}
          onClose={() => setIsOpenExplanation(false)}
        />
      </div> */}
    </div>
  );
}
