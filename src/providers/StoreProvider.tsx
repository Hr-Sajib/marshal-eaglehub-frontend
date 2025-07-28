"use client";
import StickyChatButton from "@/component/shared/chatStickyBtn";
import LoadingSpinner from "@/component/shared/Loading";
import { AppStore, makeStore } from "@/redux/store";
import { usePathname } from "next/navigation";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  const persistStores = persistStore(storeRef.current);

  const pathname = usePathname();

  const isChatRoute = pathname?.includes("/chat-box");
  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={<LoadingSpinner />} persistor={persistStores}>
        {" "}
        {children}
        {!isChatRoute && <StickyChatButton />}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
