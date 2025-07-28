"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../../../../public/logo.png"; // Place your logo in /public
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { currentUser, logOut } from "@/redux/api/Auth/auth.slice";

type NavLink = {
  label: string;
  href: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const users=useAppSelector(currentUser)
const dispatch=useAppDispatch()
  const handleLogout = () => {
    dispatch(logOut())
    window.location.href = "/login";
  };

  console.log(users)



  const links: NavLink[] = [
    { label: "About", href: "/about" },
    { label: "AI Course", href: "/tool" },
    { label: "Discover", href: "/discover-trending" },
    { label: "AI Bots", href: "/ai-bots" },
    { label: "Make money", href: "/make-maney" },
    { label: "Founder", href: "/founder-dashboard" },
    { label: "Influencer", href: "/influencer-dashboard" },
    { label: "Giveaways", href: "/giveaways" },
  ];

  return (
    <nav className=" text-white  py-9 px-3 lg:px-0 relative z-30">
      <div className="max-w-[1420px] mx-auto  sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 ">
            <Link href={"/"}>
              <Image src={logo} alt="Logo" width={178} height={85} />
            </Link>
            {/* <h1 className="font-bold text-xl">
              <span className="text-white">EGEAL</span>{" "}
              <span className="text-red-600">AI HUB</span>
            </h1> */}
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-14">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block text-sm hover:text-red-500"
              >
                {link.label}
              </Link>
            ))}

            {users ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 px-10 py-3 rounded hover:bg-red-700 text-white transition"
              >
                Logout
              </button>
            ) : (
              <Link
                href={"/login"}
                className="bg-red-600 px-10 py-3 rounded hover:bg-red-700 text-white transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? (
                <X size={30} className="text-primary" />
              ) : (
                <div className="w-12 h-12 flex justify-center items-center rounded-full border-2 border-primary">
                  <Menu size={30} className="text-primary" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden  text-white px-4 pt-2 pb-4 space-y-2">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block text-sm hover:text-red-500"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={"/login"}
            className="bg-red-600 px-10 py-3 mt-6 rounded hover:bg-red-700 text-white   inline-block transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
