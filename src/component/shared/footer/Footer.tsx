import Image from "next/image";
import logo from "../../../../public/logo.png"; // your eagle logo

import {  ShieldCheck, Youtube, Globe } from "lucide-react";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="  py-9 text-white border-t border-red-900 px-6 lg:px-0  md:px-12">
      <div className="max-w-[1420px] mx-auto space-y-6">
        {/* Top Row */}
        <div className="md:flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 space-y-3 lg:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" width={178} height={85} />
            {/* <span className="font-bold text-xl">
              <span className="text-white">EGEAL</span>{" "}
              <span className="text-red-600">AI HUB</span>
            </span> */}
          </div>

          {/* Links */}
          <div className="lg:flex space-x-11 space-y-4  text-sm">
            <Link href="#" className="hover:text-red-500 block">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-red-500 block">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-red-500 block">
              Contact Us
            </Link>
          </div>

          {/* Icons */}
          <div className="flex space-x-3 text-white ">
            <button className="p-1 rounded hover:text-red-500">
              <ShieldCheck />
            </button>
            <button className="p-1 rounded hover:text-red-500">
              <Globe />
            </button>
            <button className="p-1 rounded hover:text-red-500">
              <Youtube />
            </button>
          </div>
        </div>

        {/* Language Links */}
        <div className="flex flex-wrap gap-x-6 md:gap-x-11 gap-y-6 text-sm text-white my-6 mt-10">
          {[
            "English",
            "简体中文",
            "한국어",
            "日本語",
            "Português",
            "Español",
            "Deutsch",
            "Français",
            "Tiếng Việt",
          ].map((lang, idx) => (
            <Link key={idx} href="#" className="underline text-sm ">
              {lang}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
