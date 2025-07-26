import Image from "next/image";
import { ReactNode } from "react";

export interface HeaderProps {

    title: ReactNode
    subtitle?: ReactNode
    children?: ReactNode
    className?: string
    header?:string
}


export default function MainHeader({ title,header, subtitle, children, className = "" }: HeaderProps) {
    return (
        <header className={`relative  flex items-center justify-center ${className} `}>

            <div className="relative z-10 text-center flex flex-col items-center px-4 mt-16">
                <h3 className="text-lg md:text-[24px] text-white">{header}</h3>
                <h1 className="text-[28px] md:text-[45px]  text-white leading-tight">{title}</h1>
                



                {subtitle && <p className="text-lg md:text-[22px] text-gray-200 font-medium">{subtitle}</p>}

                <div className="pt-6">{children}</div>
            </div>
        </header>
    )

}
