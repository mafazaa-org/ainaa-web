import { deviceName } from "@/app/[gen]/genData";
import DeviceCard from "@/app/_components/DeviceCard";
import { genName } from "@/app/appTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import stepData, { Step, stepName } from "./stepData";

const StepPage = ({
  params,
}: {
  params: { step: stepName; gen: genName; device: deviceName };
}) => {
  const devSteps = (stepData.gen1 as any)?.[params.device];

  if (!devSteps) {
    return (
      <p className="text-red-500 text-center font-bold text-lg">
        ⚠️ لا توجد بيانات لهذا الجهاز.
      </p>
    );
  }

  const totalSteps = Object.keys(devSteps).length;
  const currentStep = Number(params.step.replace("step", ""));
  const isLastStep = currentStep === totalSteps;
  const substeps: Step[] = devSteps[params.step] || [];

  return (
    <div
      className="flex flex-col items-center justify-center mb-10 mx-auto gap-8 px-4"
      dir="rtl"
    >
      <DeviceCard device={params.device} gen={params.gen} />

      <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700 bg-teal-100 px-6 py-3 rounded-lg shadow-md">
        {isLastStep ? "طرق دعمنا" : `الخطوة ${currentStep}`}
      </h2>

      <ol className="w-full max-w-5xl space-y-4">
        {substeps?.map((step, index) => (
          <li key={index}>
            {step.type === "text" ? (
              <div className="w-full p-4 text-teal-700 border border-teal-300 rounded-lg bg-teal-50 shadow-md">
                <h3 className="font-semibold">
                  {index + 1}.{" "}
                  {step.data?.toString().split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
              </div>
            ) : step.type === "link" ? (
              <div className="w-full p-4 text-teal-700 border border-teal-300 rounded-lg bg-teal-50 shadow-md">
                <Link
                  href={(step.data as any).href}
                  target="_blank"
                  className="underline text-teal-900 hover:text-teal-600"
                >
                  {index + 1}. {(step.data as any).text}
                </Link>
              </div>
            ) : (
              <Image
                alt="screenshot"
                src={`/setupguide/${params.gen}/${params.device}/${params.step}_${step.data}.png`}
                width={600}
                height={400}
                className="rounded-lg shadow-lg border border-gray-200 mx-auto bg-cover w-full"
              />
            )}
          </li>
        ))}
      </ol>

      <div className="flex justify-between w-full max-w-5xl gap-6">
        {currentStep > 1 ? (
          <Link
            href={`/${params.gen}/setupguide/${params.device}/step${
              currentStep - 1
            }`}
            className="flex-1 flex items-center justify-center px-4 py-3 text-white text-sm md:text-xl font-medium bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 rounded-lg shadow-md transition-all duration-300"
          >
            ➡️ السابق
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {!isLastStep ? (
          <Link
            href={`/${params.gen}/setupguide/${params.device}/step${
              currentStep + 1
            }`}
            className="flex-1 flex items-center justify-center px-4 py-3 text-white text-sm md:text-xl font-medium bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 rounded-lg shadow-md transition-all duration-300"
          >
            التالي ⬅️
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
};

export default StepPage;

export function generateStaticParams() {
  return Object.keys(stepData.gen1).flatMap((device) => {
    const steps = Object.keys(stepData.gen1[device as deviceName] || {});

    if (steps.length < 15) {
      for (let i = steps.length + 1; i <= 15; i++) {
        steps.push(`step${i}`);
      }
    }

    return steps.map((step) => ({
      gen: "gen1",
      device,
      step,
    }));
  });
}
