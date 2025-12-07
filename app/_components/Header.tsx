"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import headerLogo from "../../public/header-logo.svg";
import Explanation from "./Explanation";
import SupportUs from "./SupportUs";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpenExplanation, setIsOpenExplanation] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  // Navigation links
  const navLinks = [
    {
      label: "المدونة",
      clickHandler: () => setIsOpenExplanation(true),
    },
    {
      label: "مستويات الحماية",
      href: "/setupvalues",
    },
    {
      label: "ادعمنا",
      // href: "https://mafazaa.com/support_us",
      clickHandler: () => setIsSupportOpen(true),
    },
    { label: "خدمة العملاء", href: "/support" },
  ];

  return (
    <>
      {/* Header */}
      <header className="z-50 fixed bg-white px-4 border border-zinc-200 border-b w-full h-[80px]">
        <div className="flex justify-between items-center mx-auto px-4 max-w-7xl h-full">
          <h1 className="font-extrabold text-white text-2xl md:text-3xl tracking-wide">
            <Link href="/">
              <Image src={headerLogo} alt="logo" />
            </Link>
          </h1>

          {/* Navigation Menu for medium and larger screens */}
          <nav className="hidden md:flex">
            <ul className="flex gap-x-6">
              {navLinks.map(({ label, href, clickHandler }, index) =>
                href ? (
                  <Link
                    key={index}
                    href={href || "#"}
                    className="before:bottom-[-8px] before:left-0 before:absolute relative before:bg-[#da442c] hover:drop-shadow-lg before:w-0 hover:before:w-full before:h-0.5 font-semibold text-black hover:text-[#da442c] text-lg active:scale-95 transition-all before:transition-all duration-300 before:duration-300 cursor-pointer"
                  >
                    {label}
                  </Link>
                ) : (
                  <li
                    key={index}
                    className="before:bottom-[-8px] before:left-0 before:absolute relative before:bg-[#da442c] hover:drop-shadow-lg before:w-0 hover:before:w-full before:h-0.5 font-semibold text-black hover:text-[#da442c] text-lg active:scale-95 transition-all before:transition-all duration-300 before:duration-300 cursor-pointer"
                    onClick={(e) => {
                      if (clickHandler) {
                        e.preventDefault();
                        clickHandler();
                      }
                    }}
                  >
                    {label}
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Burger Menu for mobile screens */}
          <button
            className="md:hidden z-50 p-0 text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav
          className={`absolute md:hidden top-full left-0 w-full bg-white shadow-md transition-transform transform ${
            menuOpen
              ? "scale-y-100 opacity-100 border border-gray-300 border-t"
              : "scale-y-0 opacity-0"
          } origin-top`}
        >
          <ul className="flex flex-col gap-y-3 py-4 text-center">
            {navLinks.map(({ label, href, clickHandler }, index) =>
              href ? (
                <Link
                  key={index}
                  href={href || "#"}
                  className="before:bottom-[-8px] before:left-0 before:absolute relative before:bg-[#da442c] hover:drop-shadow-lg before:w-0 hover:before:w-full before:h-0.5 font-semibold text-black hover:text-[#da442c] text-lg active:scale-95 transition-all before:transition-all duration-300 before:duration-300 cursor-pointer"
                >
                  {label}
                </Link>
              ) : (
                <li
                  key={index}
                  className="before:bottom-0 before:left-0 before:absolute relative before:bg-[#da442c] hover:drop-shadow-lg before:w-0 hover:before:w-full before:h-0.5 font-semibold text-black hover:text-[#da442c] text-lg active:scale-95 transition-all before:transition-all duration-300 before:duration-300 cursor-pointer"
                  onClick={(e) => {
                    if (clickHandler) {
                      e.preventDefault();
                      setMenuOpen(false);
                      clickHandler();
                    }
                  }}
                >
                  {label}
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      {/* Explanation Modal */}
      <div className="top-0 left-0 z-50 flex justify-center items-center bg-black/50">
        <Explanation
          isOpen={isOpenExplanation}
          onClose={() => setIsOpenExplanation(false)}
        />
      </div>

      {/* Support Us Modal */}
      <div className="top-0 left-0 z-50 flex justify-center items-center bg-black/50">
        <SupportUs
          close={true}
          isOpen={isSupportOpen}
          onClose={() => setIsSupportOpen(false)}
        />
      </div>
    </>
  );
}

export default Header;
