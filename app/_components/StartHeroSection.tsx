import Image from "next/image";

export default function StartHeroSection() {
  return (
    <section className="bg-white mt-8 lg:mt-0">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[63px] px-4 lg:px-16 pt-10 lg:pt-20 pb-10 lg:pb-10 max-w-screen-2xl mx-auto">
        {/* Right Side - Text Content */}
        <div className="flex flex-col gap-6 w-full lg:w-auto lg:max-w-[869px]">
          {/* Title */}
          <h1 className="font-bold text-right start-hero-title">
            حماية العقل والقلب تبدأ بكلمة &apos;لا&apos;.. احفظ نفسك وأسرتك من خطر
            الإباحية!
          </h1>

          {/* Description */}
          <p className="font-normal text-right start-hero-description">
            العالم الرقمي بقى مفتوح بشكل خطير، والمحتوى الإباحي بيدخل بسهولة
            حتى في بيوت واعية. التأثير ما بس على السلوك، لكن كمان على التركيز،
            العلاقات، ونقاء القلب. تطبيقنا مصمَّم عشان يحميك ويحمي أسرتك بذكاء،
            من غير تعقيد ولا تتبع. فلترة فعّالة، تحكم بسيط، وراحة بال حقيقية.
          </p>
        </div>

        {/* Left Side - Image */}
        <div className="w-full lg:w-auto flex-shrink-0 flex justify-center lg:justify-start">
          <Image
            src="/start/hero-image.png"
            alt="Hero"
            width={380}
            height={440}
            className="w-full max-w-[380px] h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

