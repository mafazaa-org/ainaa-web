import Link from "next/link";
import React from "react";
import setupValuesData from "./setupValuesData";

const SetupValuesComponent = () => {
  const setupLevels = setupValuesData.gen1;
  const redColor = "#e0472c";

  const protectionLevels = [
    {
      type: "low",
      title: "الحماية المنخفضة",
      description:
        "تحجب لك فقط الأساسيات التي قد تزعجك أو تعد غير مناسبة، مع إبقاء معظم المحتوى متاحًا لتصفح أكثر حرية مثل:",
    },
    {
      type: "high",
      title: "الحماية العالية",
      description:
        "توفر لك حماية شاملة من معظم أنواع المحتوى غير المرغوب فيه، مما يضمن تجربة تصفح أكثر أمانًا وراحة مثل:",
    },
  ];

  const renderDNSInfo = (level) => (
    <div className="mt-4 text-right">
      {["primary DNS", "secondary DNS", "Dns-Over-Https"].map(
        (label, index) => (
          <React.Fragment key={index}>
            <p className="text-red-500 font-semibold text-[18px]">{label}</p>
            <p className="mb-2 text-[18px] font-[600]">
              {label === "Dns-Over-Https"
                ? `${setupLevels[level].subdomain}.mafazaa.com`
                : setupLevels[level][label.split(" ")[0].toLowerCase()]}
            </p>
          </React.Fragment>
        )
      )}
    </div>
  );

  return (
    <div
      className="my-[70px] flex flex-col gap-10
       items-center px-4 bg-bg-cover bg-center bg-no-repeat"
      dir="rtl"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold  mb-2">مستويات الحماية</h1>
        <p className="text-xl text-gray-700">تفصيل مستويات الحماية المتاحة</p>
      </div>

      {/* Protection Levels Cards */}
      <div className="flex flex-col items-center  md:flex-row md:items-start justify-center gap-[90px] w-full max-w-5xl mx-auto px-4 ">
        {protectionLevels.map((level) => (
          <div
            key={level.type}
            className="border-[4px] border-[#353535] rounded-3xl overflow-hidden bg-white shadow-md px-[30px] py-[40px] md:w-[380px]"
          >
            <div className="p-4 text-right">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: redColor }}
              >
                {level.title}
              </h2>
              <p className="text-right text-gray-700 mb-12 text-[20px] leading-[30px]">
                {level.description}
              </p>

              {/* Categories */}
              <div className="flex flex-wrap justify-start gap-[25px] mb-12">
                {setupLevels[level.type].categories.map((category, i) => (
                  <span
                    key={i}
                    className="bg-[rgba(255,240,238,1)] text-[#E0462D] px-3 py-1 rounded-[8px] 
                    text-[17px] font-[700]"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {renderDNSInfo(level.type)}
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      {[
        {
          href: "/gen1/setupguide",
          text: "فعل الحماية الآن",
          className:
            "mt-12 mb-6 text-white py-8 px-20 rounded-[16px] text-2xl font-medium transition-colors bg-gradient-to-r from-[#E0462D] to-[#A73826]",
        },
        // {
        //   href: '/support',
        //   text: 'خدمة العملاء',
        //   className:
        //     'absolute left-8 top-1/3 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg transition-colors',
        // },
      ].map((button, index) => (
        <div
          key={index}
          className={index === 0 ? "mt-12 mb-6" : "absolute left-0 top-0"}
        >
          <Link
            href={button.href}
            className={button.className}
            style={{ backgroundColor: redColor }}
          >
            {button.text}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SetupValuesComponent;
