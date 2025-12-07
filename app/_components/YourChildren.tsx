import React from "react";
import LinkButton from "./LinkButton";
import { ArrowLeft } from "lucide-react";

export default function YourChildren() {
  return (
    <section className="bg-black">
      <div className="flex flex-col justify-center items-center gap-10 p-10 sm:p-20 text-slate-200">
        <p className="font-bold text-4xl">طفلك ليس استثناء!</p>
        <p className="font-normal text-2xl">
          حماية منزلك لم تعد خيارًا. كل طفل معرض للخطر، فاتخذ القرار الصحيح
          اليوم.
        </p>
        <LinkButton
          className="min-w-full md:min-w-0"
          link="/gen1/setupguide"
          content={
            <>
              <p>طريقة التفعيل</p> <ArrowLeft size={20} className="mt-1" />
            </>
          }
        />
      </div>
    </section>
  );
}
