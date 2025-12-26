import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface RouterHeroSectionProps {
  gen: string;
}

export default function RouterHeroSection({ gen }: RouterHeroSectionProps) {
  return (
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
            href={`/${gen}/setupguide/router/step1`}
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
  );
}

