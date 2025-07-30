import { cn } from "@/utils";
import Link from "next/link";

const HeroSection = ({
  className,
  title,
  description,
  button1,
  button2,
}: {
  className: string;
  title: string;
  description: string;
  button1: {
    text: string;
    href: string;
  };
  button2: {
    text: string;
    href: string;
  };
}) => {
  return (
    <div
      className={cn(
        `relative flex items-center justify-center bg-cover bg-center bg-no-repeat min-h-[calc(100vh-60px)] py-10`,
        className
      )}
    >
      <div className="bg-red-gradient h-full w-full absolute top-0 left-0 " />
      <div className="bg-dark-gradient h-full w-full absolute top-0 left-0 " />
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center text-center text-white relative z-10 h-full w-full">
        <h1 className="text-H1 font-bold text-white">{title}</h1>
        <p className="text-paragraph mt-4">{description}</p>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mt-24">
          <Link href={button1.href} className="btn-primary">
            {button1.text}
          </Link>
          <Link href={button2.href} className="btn-outline">
            {button2.text}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
