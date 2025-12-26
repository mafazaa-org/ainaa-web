import Image from "next/image";

interface DeviceHeroSectionProps {
  deviceIcon: string;
  title: string;
  description: string;
}

export default function DeviceHeroSection({
  deviceIcon,
  title,
  description,
}: DeviceHeroSectionProps) {
  return (
    <section className="w-full pt-20 pb-10">
      <div className="flex flex-col items-center gap-6 px-4 max-w-screen-2xl mx-auto w-full">
        {/* Device Icon */}
        <div className="flex items-center justify-center rounded-full flex-shrink-0 start-card-icon-container">
          <div className="w-12 h-12 relative">
            <Image
              src={deviceIcon}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-bold text-3xl md:text-4xl lg:text-[53px] text-[#1A1818] text-center leading-[1.563]">
          {title}
        </h1>

        {/* Description */}
        <p className="font-normal text-lg md:text-xl lg:text-[22px] text-[#515151] text-center leading-[1.563] max-w-[786px]">
          {description}
        </p>
      </div>
    </section>
  );
}

