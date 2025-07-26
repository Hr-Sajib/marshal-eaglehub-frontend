"use client";

import UserProvider from "@/context/UserContext";
import StoreProvider from "./StoreProvider";
// import StoreProvider from "./StoreProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
     <StoreProvider>
      <UserProvider>{children}</UserProvider>
    </StoreProvider>
  );
};

export default Provider;
