import { Download, MessageSquareText } from "lucide-react";
import Link from "next/link";

interface DeviceButtonsSectionProps {
  downloadLink: string;
}

export default function DeviceButtonsSection({
  downloadLink,
}: DeviceButtonsSectionProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      {/* Download App Button */}
      <Link
        href={downloadLink}
        className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#E0462D] to-[#A73826] text-white px-6 py-5 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
      >
        <span>تحميل التطبيق</span>
        <Download size={24} className="text-white" strokeWidth={2} />
      </Link>

      {/* Customer Service Button */}
      <Link
        href="/support"
        className="flex items-center justify-center gap-3 border rounded-lg px-6 py-5 bg-white hover:opacity-90 transition-opacity"
        style={{
          borderColor: "#D43820",
          borderWidth: "1px",
        }}
      >
        <span className="font-bold text-lg text-[#E0462D] leading-[1.563]">
          خدمة العملاء
        </span>
        <MessageSquareText
          size={24}
          className="text-[#D43820]"
          strokeWidth={2}
        />
      </Link>
    </div>
  );
}
