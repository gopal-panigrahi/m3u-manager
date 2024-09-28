import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./playlist.context";

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
