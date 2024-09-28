import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  new_playlist: boolean;
}

const initialState: ModalState = { new_playlist: false };

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openNewPlaylistModal: (state, action: PayloadAction<boolean>) => {
      state.new_playlist = action.payload;
    },
  },
});

export const { openNewPlaylistModal } = modalSlice.actions;
export default modalSlice.reducer;
