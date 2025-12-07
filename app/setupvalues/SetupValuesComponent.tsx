import Link from "next/link";
import React from "react";
import setupValuesData from "./setupValuesData";
import { ArrowLeft, Check, Shield } from "lucide-react";
import { cn } from "@/utils";
import LinkButton from "../_components/LinkButton";

const SetupValuesComponent = () => {
  const setupLevels = setupValuesData.gen1;

  // Protection Levels Data
  const protectionLevels = [
    {
      type: "high",
      title: "الحماية العالية",
      description:
        "تحجب لك فقط الأساسيات التي قد تُزعجك أو تُعدّ غير مناسبة، مع إبقاء معظم المحتوى متاحاً لتصفحٍ أكثر حرية مثل:",

      button: {
        href: "/gen1/setupguide",
        text: "فعل الحماية العالية",
      },
    },
    {
      type: "low",
      title: "الحماية المنخفضة",
      description:
        "يحظر مواقع الويب الرئيسية الصريحة مع الحفاظ على إمكانية الوصول إلى المحتوى العادي مثل:",
      button: {
        href: "/gen1/setupguide",
        text: "فعل الحماية المنخفضة",
      },
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 bg-white px-4 py-20">
      {/* Header */}
      <div className="mb-6 sm:mb-8 text-center">
        <h1 className="mb-2 font-bold text-2xl sm:text-3xl md:text-4xl">
          مستويات الحماية المتاحة
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          اختر مستوى الحماية الذي يناسب احتياجاتك ويمنحك راحة البال.{" "}
        </p>
      </div>

      {/* Protection Levels Cards */}
      <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-4 md:gap-10 lg:gap-[90px] mx-auto px-6 pt-8 w-full max-w-5xl">
        {protectionLevels.map((level) => (
          <div
            key={level.type}
            className={cn(
              "relative bg-white shadow-md border border-zinc-100 rounded-xl w-full md:min-w-[360px] md:max-w-[30rem] min-h-[35rem] md:min-h-[40rem] max-h-[35rem] md:max-h-[40rem] overflow-hidden",
              {
                "border-2 border-red-500 ": level.type === "high",
              }
            )}
          >
            {/* {level.type === "high" && (
              <p className="left-64 md:left-36 absolute bg-red-500 px-10 py-2.5 rounded-full text-white -translate-y-6">
                مُستَحسَن
              </p>
            )} */}
            <div className="p-2 sm:p-3 md:p-4 text-right">
              <h2 className="flex items-center gap-2 mb-2 sm:mb-3 md:mb-4 font-bold text-2xl sm:text-2xl md:text-3xl">
                <Shield size={24} className="translate-y-1" />
                <span>{level.title}</span>
              </h2>

              {/* Description */}
              <p className="mb-3 text-gray-700 md:text-[20px] text-base sm:text-lg text-right leading-[1.5] md:leading-[30px]">
                {level.description}
              </p>

              {/* Categories */}
              <div className="flex flex-col justify-start gap-6 mb-3">
                {setupLevels[level.type].categories.map((category, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-2 sm:px-3 py-1 font-bold text-red-600 text-base"
                  >
                    <Check size={20} />
                    {category}
                  </span>
                ))}
              </div>
            </div>
            {/* Action Buttons */}
            <div className="bottom-0 md:left-14 lg:left-12 absolute mt-8 sm:mt-10 md:mt-12 mb-4 sm:mb-6 px-6 sm:px-10 md:px-20 py-4 sm:py-6 md:py-8 rounded-[16px] w-full font-medium text-white text-lg sm:text-xl md:text-2xl text-center translate-x-2 md:translate-x-0">
              <LinkButton
                className="min-w-72 md:min-w-80 lg:min-w-96"
                link={level.button.href}
                content={
                  <>
                    <p>{level.button.text}</p>{" "}
                    <ArrowLeft size={20} className="mt-1" />
                  </>
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetupValuesComponent;
