import { Check } from "lucide-react";
import DeviceButtonsSection from "./DeviceButtonsSection";

interface DeviceFeaturesCardProps {
  features: string[];
  downloadLink: string;
}

export default function DeviceFeaturesCard({
  features,
  downloadLink,
}: DeviceFeaturesCardProps) {
  return (
    <section className="w-full py-10">
      <div className="flex flex-col items-center gap-12 px-4 lg:px-[376px] max-w-[1440px] mx-auto">
        <div
          className="w-full rounded-2xl border flex flex-col items-end gap-6 px-4 py-8 md:p-8 lg:p-[32px_24px_32px_40px]"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#CBD5E1",
            borderWidth: "1px",
            boxShadow:
              "0px 3px 8px 0px rgba(0, 0, 0, 0.04), 0px 14px 14px 0px rgba(0, 0, 0, 0.03), 0px 31px 18px 0px rgba(0, 0, 0, 0.02), 0px 55px 22px 0px rgba(0, 0, 0, 0.01), 0px 85px 24px 0px rgba(0, 0, 0, 0)",
          }}
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center  gap-4 w-full">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#BBF7D0" }}
              >
                <Check size={15} className="text-[#052E16]" strokeWidth={3} />
              </div>
              <h3 className="font-bold text-lg md:text-xl lg:text-[22px] text-right text-[#1A1818] leading-[1.563]">
                {feature}
              </h3>
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <DeviceButtonsSection downloadLink={downloadLink} />
      </div>
    </section>
  );
}
