"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EnterYourNumber from "./EnterYourNumber";

interface DeviceCardData {
  device: "windows" | "router" | "android";
  title: string;
  description: string;
  iconPath: string;
  link: string;
}

const deviceCards: DeviceCardData[] = [
  {
    device: "android",
    title: "حماية أجهزة الاندرويد",
    description:
      "فعِّل الحماية على موبايلك. التطبيق يمنع المواقع الإباحية والضارة وبيشتغل في الخلفية بدون ما يبطئ الجهاز أو يستهلك البطارية.",
    iconPath: "/devices/android.svg",
    link: "/gen1/setupguide/android",
  },
  {
    device: "router",
    title: "حمايه الراوتر",
    description:
      "سيطر على شبكة البيت من المصدر. بمجرد تفعيل الحماية على الراوتر، أي جهاز متصل بالواي فاي  موبايل أو كمبيوتر بيكون محمي تلقائيًا",
    iconPath: "/devices/router.svg",
    link: "/gen1/setupguide/router",
  },
  {
    device: "windows",
    title: "حماية أجهزة الويندوز",
    description:
      "خليك مطمّن على كمبيوترك. النظام يمنع المواقع الإباحية والبرمجيات الضارة في المتصفحات كلها، ويشتغل بهدوء في الخلفية بدون ما يعيق شغلك أو تصفّحك.",
    iconPath: "/devices/windows.svg",
    link: "/gen1/setupguide/windows",
  },
];

export default function StartSecondSection() {
  const router = useRouter();
  const [isRouterModalOpen, setIsRouterModalOpen] = useState(false);

  const handleCardClick = (card: DeviceCardData) => {
    if (card.device === "router") {
      setIsRouterModalOpen(true);
    } else {
      router.push(card.link);
    }
  };

  return (
    <section className="bg-white relative">
      <div className="flex flex-col px-4 lg:px-16 pt-10 lg:pt-10 pb-10 lg:pb-20 max-w-screen-2xl mx-auto gap-12">
        {/* Section Title */}
        <h2 className="font-bold text-right start-section-title">
          قم بتفعيل عينا سلسبيلا مجانا
        </h2>

        {/* Device Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6">
          {deviceCards.map((card) => (
            <div
              key={card.device}
              className="flex flex-col justify-between  bg-white rounded-xl border-t-[5px] border-[#D43820] start-card"
            >
              {/* Card Content */}
              <div className="flex flex-col  w-full gap-4">
                {/* Icon and Title Row */}
                <div className="flex flex-row items-center gap-5">
                  {/* Icon Container */}
                  <div className="flex items-center justify-center rounded-full flex-shrink-0 start-card-icon-container">
                    <div className="w-12 h-12 relative">
                      <Image
                        src={card.iconPath}
                        alt={card.device}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-right start-card-title">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-normal text-right start-card-description">
                  {card.description}
                </p>
              </div>

              {/* Button */}
              <button
                onClick={() => handleCardClick(card)}
                className="w-full flex justify-center items-center gap-3 py-5 px-6 rounded-lg border border-[#D43820] transition-all hover:bg-[#D43820] start-card-button"
              >
                فعل الحماية
              </button>
            </div>
          ))}
        </div>

        {/* Alert Box */}
        <div className="flex flex-row justify-end items-center rounded-lg border border-[#D43820] start-alert-box">
          {/* Alert Icon */}
          <div className="flex-shrink-0 w-10 h-10">
            <Image
              src="/alert-icon.svg"
              alt="Alert"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
          </div>

          {/* Alert Text */}
          <div className="flex-1">
            <p className="font-normal text-right start-alert-text">
              نوصي بتفعيل الحماية على جميع الأجهزة وعدم الاكتفاء بجهاز واحد، فلا
              توجد حماية 100%، ولكنها طبقات متعددة ترفع من مستوى الأمان.
            </p>
          </div>
        </div>
      </div>

      {/* Support Floating Button */}
      <Link
        href="/support"
        className="fixed bottom-8 left-8 z-50 flex items-center justify-center rounded-full transition-all hover:scale-110 shadow-lg start-support-button"
        aria-label="خدمة العملاء"
      >
        <MessageCircle size={32} className="text-white" />
      </Link>

      {/* Router Modal */}
      {isRouterModalOpen && (
        <EnterYourNumber
          isOpen={isRouterModalOpen}
          onClose={() => setIsRouterModalOpen(false)}
        />
      )}
    </section>
  );
}
