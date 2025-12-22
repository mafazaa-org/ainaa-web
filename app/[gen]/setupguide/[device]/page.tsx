import DeviceCard from "@/app/_components/DeviceCard";
import OtherDeviceButton from "@/app/_components/otherDeviceButton";
import { genName } from "@/app/appTypes";
import { downloadAndroid, downloadWindows } from "@/importantLinks";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { deviceName, genParam, gensParams } from "../../genData";
import setupGuideData, { genSetupGuideData } from "../setupGuideData";
import deviceData, { deviceParams } from "./deviceData";

const deviceMessages: Record<string, string> = {
  android: "تحميل برنامج الاندرويد",
  windows: "تحميل برنامج الويندوز",
};

function Page({ params }: { params: { device: deviceName; gen: genName } }) {
  const dev =
    Array.isArray(deviceData[params.gen]) &&
    deviceData[params.gen].find((value) => value.device === params.device);
  if (!dev) {
    return <div>الجهاز غير موجود أو غير مدعوم حالياً.</div>;
  }
  const genGuide: genSetupGuideData = setupGuideData[params.gen];
  // Only Windows and Android should show the download page
  if (dev.device === "windows" || dev.device === "android") {
    return (
      <div className="flex flex-col items-center mt-8">
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-3xl md:text-4xl tracking-widest">
            {deviceMessages[dev.device] ?? "تفعيل الحماية"}
          </h1>
          <h2 className="md:text-xl text-lg break-normal max-w-2xl tracking-widest mt-2 mb-10 text-gray-700 ">
            نوصي بتفعيل الحماية علي جميع الأجهزة وعدم الاكتفاء بجهاز واحد، فلا
            توجد حماية 100%، ولكنها طبقات متعددة ترفع من مستوي الأمان
          </h2>
        </div>
        <div className="flex flex-col lg:mx-0 mx-5">
          <div className="flex flex-col-reverse md:flex-row-reverse  justify-between items-center gap-10">
            <div className="text-right max-w-xl">
              <h1 className="lg:text-3xl text-2xl font-normal text-gray-700 mb-6 leading-relaxed tracking-widest ">
                حماية نفسك و أطفالك و أحبابك <br />
                على بعد خطوات!
              </h1>
              <ul className="text-gray-700 text-lg mb-6 space-y-2 pr-2 font-extrabold   ">
                <li>• حماية الجهاز بالكامل</li>
                <li>• حماية يكاد يستحيل الخروج منها</li>
                <li>
                  • يسمح لك بحجب{" "}
                  {dev.device === "windows" ? "مواقع" : "تطبيقات"} معينة
                </li>
              </ul>
              <div className="flex">
                <Link
                  href={
                    dev.device === "windows"
                      ? downloadWindows
                      : dev.device === "android"
                      ? downloadAndroid
                      : ""
                  }
                  className="text-white py-4 px-14 rounded-xl transition-all duration bg-gradient-to-l
                from-[#E0462D] to-[#A73826]
                hover:from-[#E0462D] hover:to-[#000]
                mb-4 md:mb-0
                "
                >
                  حمل التطبيق
                </Link>
              </div>
            </div>
            <div>
              <div className="relative md:w-[340px] md:h-[340px] w-[160px] h-[160px] flex justify-center items-center transition-all duration-300 group-hover:scale-105">
                <Image
                  src={require(`@/public/devices/orange-${dev.device}.svg`)}
                  alt={dev.device}
                  className="object-contain drop-shadow-md transition-all duration-300 md:ml-24"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
          <div className="flex md:justify-end sm:justify-start mb-4">
            <Link
              href="/support"
              className="text-white py-4 px-8 rounded-xl transition-colors"
              style={{
                background: "linear-gradient(180deg, #E0462D 0%, #A73826 100%)",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              خدمة العملاء
            </Link>
          </div>
          <div className="flex justify-start flex-col">
            <h1 className="text-xl font-bold border-b-2 border-gray-400 w-fit pl-20 pb-2">
              أجهزة أخري
            </h1>
          </div>
          <div className="flex flex-row justify-start pt-4 pb-0">
            {genGuide.devices
              .filter(
                (device) =>
                  !device.soon &&
                  ["windows", "router", "android"].includes(device.device) &&
                  device.device !== dev.device
              )
              .map((device, i, arr) => {
                const borderClass =
                  i !== arr.length - 1
                    ? "pl-6 border-l border-gray-300 h-auto my-auto"
                    : "";
                return (
                  <div key={i} className={borderClass}>
                    <OtherDeviceButton {...device} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
  if (dev.device === "router") {
    const otherDevices = genGuide.devices.filter(
      (device) =>
        !device.soon &&
        ["windows", "android"].includes(device.device) &&
        device.device !== dev.device
    );

    return (
      <div className="flex flex-col">
        {/* Hero Section */}
        <section
          className="w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(252, 248, 247, 1) 0%, rgba(250, 239, 237, 1) 100%)",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[63px] px-4 lg:px-16 py-14 lg:py-20 max-w-screen-2xl mx-auto">
            {/* Right Side - Content */}
            <div className="flex flex-col gap-8 w-full lg:w-auto lg:max-w-[869px]">
              {/* Icon and Title */}
              <div className="flex flex-col gap-3 w-full">
                <div className="w-[72px] h-[72px] rounded-full bg-[#FEE6E2] flex items-center justify-center">
                  <div className="w-12 h-12">
                    <Image
                      src="/devices/router.svg"
                      alt="Router Icon"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h1 className="font-bold text-right start-hero-title">
                  حماية الراوتر
                </h1>
              </div>

              {/* Description */}
              <p className="font-normal text-right start-hero-description text-[#64748B]">
                سيطر على شبكة البيت من المصدر. بمجرد تفعيل الحماية على الراوتر،
                أي جهاز متصل بالواي فاي موبايل أو كمبيوتر بيكون محمي تلقائيًا
              </p>

              {/* Button */}
              <Link
                href="/gen1/setupguide/router/step1"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#E0462D] to-[#A73826] text-white px-6 py-5 rounded-[8px] font-bold text-lg hover:opacity-90 transition-opacity w-fit"
              >
                <span>خطوات تفعيل الحمايه</span>
                <ArrowLeft size={24} />
              </Link>
            </div>

            {/* Left Side - Image */}
            <div className="w-full lg:w-auto flex-shrink-0 flex justify-center lg:justify-start">
              <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px]">
                <Image
                  src="/devices/setupguide-hero.webp"
                  alt="Router"
                  width={440}
                  height={440}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="flex flex-col items-center gap-8 py-20 px-4 lg:px-16">
          <div className="flex flex-col items-center gap-8 max-w-5xl w-full">
            {/* Title and Description */}
            <div className="flex flex-col gap-4 items-center text-center">
              <h2 className="font-bold text-3xl md:text-4xl lg:text-[43px] text-[#1A1818] leading-[1.563]">
                شرح خطوات الراوتر
              </h2>
              <p className="font-normal text-lg md:text-xl lg:text-[22px] text-[#475569] leading-[1.563] max-w-[817px]">
                نوصي بتفعيل الحماية على جميع الأجهزة وعدم الاكتفاء بجهاز واحد، فلا
                توجد حماية 100%، ولكنها طبقات متعددة ترفع من مستوى الأمان.
              </p>
            </div>

            {/* Video Section */}
            {dev.embeddedVideo !== undefined && (
              <div className="flex flex-col items-center gap-8 w-full">
                <div className="relative w-full max-w-[1000px] aspect-[5/3] rounded-lg overflow-hidden" style={{
                  background: "linear-gradient(180deg, rgba(53, 53, 53, 1) 0%, rgba(28, 28, 28, 1) 100%)"
                }}>
                  <iframe
                    {...dev.embeddedVideo}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    id="player"
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Button below video */}
                <Link
                  href="/gen1/setupguide/router/step1"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#E0462D] to-[#A73826] text-white px-6 py-5 rounded-[8px] font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  <span>خطوات تفعيل الحمايه</span>
                  <ArrowLeft size={24} />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Other Devices Section */}
        {otherDevices.length > 0 && (
          <section className="w-full py-10 px-4 lg:px-[155px]">
            <div className="flex flex-col gap-4 max-w-[1435px] mx-auto">
              <div
                className="flex flex-col gap-11 p-12 lg:p-[48px_128px] rounded-[40px]"
                style={{
                  backgroundColor: "#FEE6E2",
                  boxShadow: "0px 4px 12px 0px rgba(94, 16, 3, 0.12)",
                }}
              >
                {/* Title */}
                <h3 className="font-bold text-2xl md:text-3xl text-center text-[#1A1818] leading-[1.667]">
                  تفعيل الحمايه في أجهزة أخرى؟
                </h3>

                {/* Device Cards */}
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-12">
                  {otherDevices.map((device) => (
                    <Link
                      key={device.device}
                      href={`/${device.gen}/setupguide/${device.device}`}
                      className="flex-1 flex flex-col items-center gap-6 p-6 bg-white rounded-xl max-w-[404px] mx-auto hover:shadow-lg transition-shadow"
                    >
                      {/* Icon */}
                      <div className="flex items-center justify-center rounded-full flex-shrink-0 start-card-icon-container">
                        <div className="w-12 h-12 relative">
                          <Image
                            src={`/devices/${device.device}.svg`}
                            alt={device.device}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="font-bold text-xl md:text-[25px] text-[#0F172A] leading-[1.116] text-center">
                        {device.device === "windows"
                          ? "الويندوز"
                          : device.device === "android"
                          ? "الاندرويد"
                          : device.device}
                      </h4>

                      {/* Description */}
                      <p className="font-normal text-base text-[#475569] leading-[1.6] text-center">
                        {device.device === "windows"
                          ? "خليك مطمّن على كمبيوترك. النظام يمنع المواقع الإباحية والبرمجيات الضارة في المتصفحات كلها، ويشتغل بهدوء في الخلفية بدون ما يعيق شغلك أو تصفّحك."
                          : device.device === "android"
                          ? "فعِّل الحماية على موبايلك. التطبيق يمنع المواقع الإباحية والضارة وبيشتغل في الخلفية بدون ما يبطئ الجهاز أو يستهلك البطارية."
                          : ""}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}
export default Page;

export async function generateStaticParams() {
  return gensParams.flatMap((gen: genParam) =>
    deviceData[gen.gen].map((device: deviceParams) => ({
      gen: gen.gen,
      device: device.device,
    }))
  );
}
