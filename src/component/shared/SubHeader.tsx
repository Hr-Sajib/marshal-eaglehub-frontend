import Image from "next/image";
import { ReactNode } from "react";

export interface HeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function SubHeader({
  title,
  subtitle,
  children,
  className = "",
}: HeaderProps) {
  return (
    <header
      className={`relative  flex items-center justify-center ${className} `}
    >
      <div className="relative z-10 text-center flex flex-col items-center px-4">
        <h1 className="text-[28px] md:text-[35px]  text-white leading-tight">
          {title}
        </h1>
        <div className="">
          <Image src={"/line.svg"} alt="Line" width={533} height={1} />
        </div>

        {subtitle && (
          <p className="text-sm md:text-[22px] text-gray-200 font-medium">
            {subtitle}
          </p>
        )}

        <div className="pt-4">{children}</div>
      </div>
    </header>
  );
}
