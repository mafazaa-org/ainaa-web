import LinkButton from "@/app/_components/LinkButton";
import { ArrowLeft, Shield } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-[#FCF8F7] to-[#FAEFED]">
      <div className="flex md:flex-row flex-col justify-center items-center gap-6 bg-gradient-to-b from-[#FCF8F7] to-[#FAEFED] mx-auto mt-2 p-10 lg:p-20 max-w-screen-2xl">
        {/* Right Side */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {/* Title */}
          <p className="flex items-center gap-2 bg-red-100 px-4 py-3 rounded-xl w-fit font-normal text-red-500 text-sm">
            <Shield size={16} /> <span>موثوق به من قبل أكثر من 1000 عائلة</span>
          </p>

          {/* Main Text */}
          <div className="space-y-10">
            <h1 className="font-bold text-2xl lg:text-5xl">
              <span> حماية أطفالك من المحتوى</span> <br />
              <span className="block text-red-500 translate-y-4">
                الضار على الإنترنت
              </span>
            </h1>
            <p className="font-normal text-gray-600 text-lg lg:text-xl">
              منصتنا تساعدك على حظر المواقع الإباحية وتوفير بيئة إنترنت أكثر
              أمانًا لعائلتك. تحكم بما يراه أطفالك على الإنترنت.
            </p>
          </div>

          <LinkButton
            link="/gen1/setupguide"
            className="w-fit"
            content={
              <>
                <p>طريقة التفعيل</p> <ArrowLeft size={20} className="mt-1" />
              </>
            }
          />
        </div>

        {/* Left Side */}
        <div>
          <Image
            src={"/home/1.1.svg"}
            alt="children"
            width={500}
            height={430}
            className="md:w-fit md:h-fit"
          />
        </div>
      </div>
    </section>
  );
}
