import React from "react";
import Link from "next/link";
import { cn } from "@/utils";

interface ButtonProps {
  link?: string;
  content: string | React.ReactNode;
  className?: string;
}

function LinkButton({ link, content, className }: ButtonProps) {
  return link ? (
    <Link
      href={link}
      className={cn(
        "flex justify-center items-center gap-2 bg-red-600 shadow-lg px-6 py-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 w-fit h-12 font-bold text-white text-sm md:text-lg text-center tracking-wide active:scale-95 transition-all duration-300",
        className
      )}
    >
      {content}
    </Link>
  ) : (
    <button
      disabled
      className={cn(
        "flex justify-center items-center gap-2 bg-red-600 shadow-lg px-6 py-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 w-fit h-12 font-bold text-white text-sm md:text-lg text-center tracking-wide active:scale-95 transition-all duration-300",
        className
      )}
    >
      {content}
    </button>
  );
}

export default LinkButton;
