import BlogCard from "@/app/_components/BlogCard";
import HeroSection from "@/app/_components/HeroSection";
import { cn } from "@/utils";
import Image from "next/image";

function BlogPage() {
  return (
    <div className="bg-white">
      <HeroSection
        className="bg-blog-image1"
        title="اعطاء ابنك هاتفا، ضمان لتعرضه لموادٍ إباحية!"
        description="تعرف كيف يشاهد الأطفال أفلاما إباحية عن طريق كتابة حرف خاطئ على محرك البحث"
      />
      <div className="flex flex-col gap-y-8 mx-auto mt-24 px-4 max-w-5xl">
        <p className=" ">
          شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب
          شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب
          شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب
          شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب
          شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب
          شرح مكتوب
        </p>
        <a className="px-4 text-Red underline">اضغظ على الرابط</a>
        <Image
          className="brightness-50"
          src="/blog/1.webp"
          alt="blog-image"
          width={1000}
          height={600}
        />
        <p className=" ">
          شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب
          شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب
          شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب
          شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب
          شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب شرح مكتوب
          شرح مكتوب
        </p>
      </div>
      <div className="flex flex-col gap-y-12 mt-48 px-5">
        <h2 className="font-bold text-text text-5xl">مقالات أخرى </h2>
        <div className="gap-x-6 gap-y-12 grid sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <BlogCard
              blogId={index.toString()}
              key={index}
              className="bg-blog-image3"
              title="عنوان المقال هنا"
              description="وصف المقال هنا"
            />
          ))}
        </div>
        <div className="flex justify-center pb-16">
          <button className={cn("btn-outline", " !text-black !border-black ")}>
            المزيد...
          </button>
        </div>
      </div>
      <div className="bg-white py-24 border-dark border-t">
        <div className="flex flex-col justify-center items-center gap-y-[30px] mx-auto px-4 max-w-5xl">
          <h2 className="font-bold text-text text-5xl text-center">
            أهم مقالاتنا{" "}
          </h2>
          <p className="font-bold text-text text-2xl text-center">
            مقال توعوي للأباء و الأمهات عن ما وصلت إليه الإباحية في هذا الزمن، و
            آخر يساعد الشباب على التعافي بإذن الله
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <BlogCard
          isMain
          blogId="1"
          className="bg-blog-image2 max-lg:bg-right"
          title="أطفالكم في خطر عظيم!"
          description="نداء استغاثة من شاب عن واقع الأجيال الحالية"
        />
        <BlogCard
          isMain
          blogId="2"
          className="bg-blog-image1"
          title="أطفئ حريق الإباحية"
          description="دليل الشباب المبتلى عن كيفية الإقلاع عن الإباحية بإذن الله"
        />
      </div>
    </div>
  );
}

export default BlogPage;
