import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Item {
  id: string;
  name: string;
}

export interface PlaylistState {
  items: Item[];
}

const initialState: PlaylistState = { items: [] };

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addPlaylist: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removePlaylist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addPlaylist, removePlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
