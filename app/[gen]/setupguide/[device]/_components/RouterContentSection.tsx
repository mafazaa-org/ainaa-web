import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface RouterContentSectionProps {
  gen: string;
  embeddedVideo?: {
    src: string;
    title: string;
  };
}

export default function RouterContentSection({
  gen,
  embeddedVideo,
}: RouterContentSectionProps) {
  return (
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
        {embeddedVideo !== undefined && (
          <div className="flex flex-col items-center gap-8 w-full">
            <div
              className="relative w-full max-w-[1000px] aspect-[5/3] rounded-lg overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(53, 53, 53, 1) 0%, rgba(28, 28, 28, 1) 100%)",
              }}
            >
              <iframe
                {...embeddedVideo}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                id="player"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              ></iframe>
            </div>

            {/* Button below video */}
            <Link
              href={`/${gen}/setupguide/router/step1`}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#E0462D] to-[#A73826] text-white px-6 py-5 rounded-[8px] font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <span>خطوات تفعيل الحمايه</span>
              <ArrowLeft size={24} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

