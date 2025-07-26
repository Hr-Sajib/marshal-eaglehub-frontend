import React from 'react'

type MyComponentProps = {
  children: React.ReactNode;
  className?: string;
};


export const LeftBorder: React.FC<MyComponentProps> = ({ children,className="md:bg-gradient-to-r"  }) => {
    return (
        <div className={`relative `}>
            {/* Light glow layers - multiple layers for realistic light effect */}
            <div className={`absolute inset-0  from-blue-500 via-transparent to-transparent rounded-3xl blur-md opacity-60 ${className}`}></div>


            {/* Main border */}
            <div className={`absolute inset-0  from-blue-600 via-transparent to-transparent rounded-3xl ${className}`}></div>

            {/* Main content container */}
            <div className="relative bg-transparent p-[4px]">
                <div className="bg-black rounded-2xl  ">
                    <div>
                        {children}

                    </div>
                    
                </div>
            </div>
        </div>
    )
}
