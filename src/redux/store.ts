import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/api/Auth/auth.slice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { baseApi } from "@/redux/api/baseApi"; // <-- RTK Query api slice import

const persistOption = {
  key: "auth",
  storage,
};

const persistAuth = persistReducer(persistOption, authReducer);

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: persistAuth,
      [baseApi.reducerPath]: baseApi.reducer, // <-- যোগ করা হয়েছে
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware), // <-- যোগ করা হয়েছে
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
