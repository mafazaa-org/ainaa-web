"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SupportUs from "./SupportUs";
import Explanation from "./Explanation";
import { FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

// Footer link list component
const FooterLinkList = ({ title, links }) => (
  <div className="w-fit md:w-fit">
    <h3 className="pb-[10px] font-bold text-slate-200 text-3xl leading-normal">
      {title}
    </h3>
    <ul className="flex flex-col gap-2.5">
      {links.map(({ text, clickHandler }, index) => (
        <li key={index}>
          <button
            className="py-[8px] font-semibold md:font-bold text-nav_link hover:text-Red text-lg lg:text-xl leading-normal transition-colors"
            onClick={(e) => {
              e.preventDefault();
              clickHandler();
            }}
          >
            {text}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const router = useRouter();
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isOpenExplanation, setIsOpenExplanation] = useState(false);

  // Footer content data
  const FOOTER_CONTENT = {
    // Logo
    logo: {
      src: "/second-logo.svg",
      alt: "عينا سلسبيلا",
      title: "عَيْنًا سَلْسَبِيلًا",
    },
    // Activation Button
    activationButton: {
      logo: "/logo-small.svg",
      href: "/gen1/setupguide",
      text: "فعّل الحماية",
      clickHandler: () => setIsOpenExplanation(true),
    },
    // Footer Links
    importantLinks: {
      title: "روابط تهمك",
      links: [
        {
          text: "الصفحة الرئيسية",
          clickHandler: () => router.push("/"),
        },

        {
          text: "مستويات الحماية",
          clickHandler: () => router.push("/setupvalues"),
        },
        {
          text: "خدمة العملاء",
          clickHandler: () => router.push("/support"),
        },
        {
          text: "ادعمنا",
          clickHandler: () => setIsSupportOpen(true),
        },
        //Todo remove comments when blog is finished
        // { href: '/blogs', text: 'المدونة' },
      ],
    },
    // About Mafazaa Links
    aboutMafazaa: {
      title: "عن مفازا",
      links: [
        {
          text: "مفازا",
          clickHandler: () => router.push("https://mafazaa.com"),
        },
        {
          text: "انضم إلينا",
          clickHandler: () => router.push("https://mafazaa.com/join"),
        },
        {
          text: "مشاريعنا",
          clickHandler: () => router.push("https://mafazaa.com/#projects"),
        },
        //Todo remove comments when blog is finished
        // { href: '/blogs', text: 'مدونة مفازا' },
      ],
    },
  };

  return (
    <footer className="bg-black">
      <div className="mx-auto py-10 max-w-7xl text-slate-100">
        <div className="mx-auto px-20 py-10">
          <div className="flex md:flex-row flex-col justify-between md:items-center gap-12 md:gap-16 lg:gap-24 2xl:gap-40 xl:gap-32">
            {/* Logo Section */}
            <div className="flex flex-col justify-between items-start gap-4 w-fit md:max-w-[40%] xl:max-w-[50%] lg:-translate-y-16">
              {/* Logo Image */}
              <Image
                src={FOOTER_CONTENT.logo.src}
                alt={FOOTER_CONTENT.logo.alt}
                width={250}
                height={130}
              />
              <p className="font-normal text-lg">
                ملتزمون بتوفير بيئة رقمية أكثر أمانًا للعائلات حول العالم. نوفر
                فلترة متقدمة للمحتوى وتثقيفًا حول السلامة الرقمية لحماية الأطفال
                على الإنترنت.
              </p>

              {/* Social Media */}
              <div className="flex justify-center items-center gap-4 max-w-96">
                <FaSquareWhatsapp size={40} /> <FaLinkedin size={40} />
                <FaFacebookSquare size={40} />
              </div>
            </div>

            {/* Footer List Links */}
            <div className="flex md:flex-row flex-col gap-4 md:gap-16 lg:gap-24">
              <FooterLinkList
                title={FOOTER_CONTENT.importantLinks.title}
                links={FOOTER_CONTENT.importantLinks.links}
              />
              <FooterLinkList
                title={FOOTER_CONTENT.aboutMafazaa.title}
                links={FOOTER_CONTENT.aboutMafazaa.links}
              />
            </div>
          </div>
        </div>

        {/* All Rights */}
        <div className="mx-auto py-6 border-[#566176] border-t max-w-[90%]">
          <p className="font-normal text-lg text-center translate-y-6">
            © {new Date().getFullYear()} جميع الحقوق محفوظة لدى مفازا.
          </p>
        </div>
      </div>

      {/* Support us */}
      <div className="top-0 left-0 z-50 flex justify-center items-center bg-black/50">
        <SupportUs
          close={true}
          isOpen={isSupportOpen}
          onClose={() => setIsSupportOpen(false)}
        />
      </div>

      {/* Explanation Modal */}
      <div className="top-0 left-0 z-50 flex justify-center items-center bg-black/50">
        <Explanation
          isOpen={isOpenExplanation}
          onClose={() => setIsOpenExplanation(false)}
        />
      </div>
    </footer>
  );
};

export default Footer;
