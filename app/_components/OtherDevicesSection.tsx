import { deviceParams } from "@/app/[gen]/setupguide/[device]/deviceData";
import Image from "next/image";
import Link from "next/link";

interface OtherDevicesSectionProps {
  devices: deviceParams[];
  sectionClassName?: string;
  cardClassName?: string;
}

export default function OtherDevicesSection({
  devices,
  sectionClassName = "w-full py-10",
  cardClassName = "rounded-2xl",
}: OtherDevicesSectionProps) {
  if (devices.length === 0) {
    return null;
  }

  const getDeviceName = (device: string) => {
    switch (device) {
      case "windows":
        return "الويندوز";
      case "android":
        return "الاندرويد";
      case "router":
        return "الراوتر";
      default:
        return device;
    }
  };

  const getDeviceDescription = (device: string) => {
    switch (device) {
      case "windows":
        return "خليك مطمّن على كمبيوترك. النظام يمنع المواقع الإباحية والبرمجيات الضارة في المتصفحات كلها، ويشتغل بهدوء في الخلفية بدون ما يعيق شغلك أو تصفّحك.";
      case "android":
        return "فعِّل الحماية على موبايلك. التطبيق يمنع المواقع الإباحية والضارة وبيشتغل في الخلفية بدون ما يبطئ الجهاز أو يستهلك البطارية.";
      case "router":
        return "سيطر على شبكة البيت من المصدر. بمجرد تفعيل الحماية على الراوتر، أي جهاز متصل بالواي فاي موبايل أو كمبيوتر بيكون محمي تلقائيًا";
      default:
        return "";
    }
  };

  return (
    <section className={sectionClassName}>
      <div className="flex flex-col gap-4 max-w-[1435px] mx-auto">
        <div
          className={`flex flex-col gap-11 p-12 lg:p-[48px_128px] ${cardClassName}`}
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
            {devices.map((device) => (
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
                  {getDeviceName(device.device)}
                </h4>

                {/* Description */}
                <p className="font-normal text-base text-[#475569] leading-[1.6] text-center">
                  {getDeviceDescription(device.device)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

