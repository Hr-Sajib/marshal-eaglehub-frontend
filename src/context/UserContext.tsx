"use client";
import LoadingSpinner from "@/component/shared/Loading";
/* eslint-disable @typescript-eslint/no-explicit-any */

import {  getCurrentUser } from "@/services/auth";
import { DecodedUser, TAuthUser } from "@/types/auth/auth.type";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface IUserProviderValues {
  user: DecodedUser | null;
  isLoading: boolean;
  setUser: (user: DecodedUser | null) => Promise<void>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  fetchAndSetUser: () => Promise<void>;
  // fetchMeFromServer: () => Promise<void>;
  fetchMe: TAuthUser | null | undefined;
}

const UserContext = createContext<IUserProviderValues | undefined>(undefined);


const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<DecodedUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [fetchMe, setFetchMe] = useState<TAuthUser | undefined | null>(null);
  const fetchAndSetUser = async () => {
    try {
      setIsLoading(true);
      const currentUser = await getCurrentUser();
      console.log("Current User:", currentUser);
      setUserState(currentUser);
    } catch (error: any) {
      console.error("Error fetching user:", error);
      setUserState(null);
    } finally {
      setIsLoading(false);
      setInitialLoadComplete(true);
    }
  };

  const setUser = async (user: DecodedUser | null) => {
    setUserState(user);
  };

  
  // const fetchMeFromServer = async () => {
  //   try {
  //     setIsLoading(true);
  //     const userInfo = await getMe();
  //     setFetchMe(userInfo?.data);
  //   } catch (error: any) {
  //     console.error("Error fetching Contact:", error);
  //     setUserState(null);
  //   } finally {
  //     setIsLoading(false);
  //     setInitialLoadComplete(true);
  //   }
  // };

  useEffect(() => {
    fetchAndSetUser();
    // fetchMeFromServer();
  }, []);

  // Only render children after initial load is complete
  if (!initialLoadComplete) {
    return <LoadingSpinner />;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        setUser,
        setIsLoading,
        fetchAndSetUser,
        // fetchMeFromServer,
        fetchMe,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default UserProvider;
