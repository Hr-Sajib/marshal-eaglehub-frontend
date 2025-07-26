import { ReactNode } from "react";

type containerProps = {
  children: ReactNode;
};


const Container = ({ children }: containerProps) => {
  return <div className="max-w-[1420px] 2xl:mx-auto mx-4">{children}</div>;

}

export default Container;