import { cn } from "@/utils";
import Link from "next/link";
import BlogCard from "./_components/BlogCard";
import HeroSection from "./_components/HeroSection";
import SetupValuesComponent from "./setupvalues/SetupValuesComponent";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        className="bg-home-hero"
        title="اعطاء ابنك هاتفا، ضمان لتعرضه لموادٍ إباحية!"
        description="تعرف كيف يشاهد الأطفال أفلاما إباحية عن طريق كتابة حرف خاطئ على محرك البحث"
        button1={{
          text: "اقرأ المزيد...",
          href: "/blog",
        }}
        button2={{
          text: "فعل الحماية",
          href: "/gen1/setupguide",
        }}
      />

      <div className="bg-white   py-24">
        <div className="flex flex-col items-center justify-center gap-y-[30px] max-w-5xl mx-auto px-4">
          <h2 className="text-text font-bold text-5xl">أهم مقالاتنا</h2>
          <p className="text-text text-2xl font-bold text-center">
            مقال توعوي للأباء و الأمهات عن ما وصلت إليه الإباحية في هذا الزمن، و
            آخر يساعد الشباب على التعافي بإذن الله
          </p>
        </div>
      </div>
      <div className="  grid lg:grid-cols-2 ">
        <BlogCard
          className="bg-blog-image2 max-lg:bg-right"
          title="أطفالكم في خطر عظيم!"
          description="نداء استغاثة من شاب عن واقع الأجيال الحالية"
        />
        <BlogCard
          className="bg-blog-image1"
          title="أطفئ حريق الإباحية"
          description="دليل الشباب المبتلى عن كيفية الإقلاع عن الإباحية بإذن الله"
        />
      </div>
      <div className="flex items-center justify-center py-24">
        <button className="btn-primary">المزيد من مدونتنا</button>
      </div>
      <HeroSection
        className="bg-home-hero2"
        title="ولدك ليس استثناء، حماية منزلك لم يعد أمرا اختياريا بعد الآن"
        description="« كُلُّكْمْ رَاعٍ، وَكُلُّكُمْ مَسْئوُلٌ عَنْ رَعِيتّهِِ... والرَّجُلُ راعٍ في أهْلِهِ وهو مَسْئُولٌ عن رَعِيَّتِهِ »"
        button1={{
          text: "اقرأ المزيد...",
          href: "/blog",
        }}
        button2={{
          text: "فعل الحماية",
          href: "/gen1/setupguide",
        }}
      />
      <SetupValuesComponent />
      <HeroSection
        className="bg-home-hero3"
        title="اليوم مقطعٌ واحد، و غدا مدمنٌ في سن العشرين"
        description="كلما تعرض الشخص للإباحية في صغره، كان خروجه منها أصعب و أشد!"
        button1={{
          text: "اقرأ المزيد...",
          href: "/blog",
        }}
        button2={{
          text: "فعل الحماية",
          href: "/gen1/setupguide",
        }}
      />
      <div className="bg-white   py-24">
        <div className="flex flex-col items-center justify-center gap-y-[30px] max-w-5xl mx-auto px-4">
          <h2 className="text-text font-bold text-H4 max-w-xl text-center">
            ساهم في تطوير مستقبل أكثر أمانا للإنترنت
          </h2>
          <div>
            <h5 className="text-text  text-H5">المبلغ (جنيه مصري)</h5>
            <input
              name="amount"
              type="number"
              placeholder="أدخل المبلغ هنا"
              className="border p-4 no-arrows rounded-md mt-5 text-paragraph w-full placeholder:text-paragraph placeholder:text-grey "
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-10 mt-24">
            <Link href={"/"} className="btn-primary">
              محفظة
            </Link>
            <Link
              href={"/"}
              className={cn("btn-outline", "!text-text !border-black ")}
            >
              كارت
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
