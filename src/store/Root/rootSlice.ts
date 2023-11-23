import { createSlice } from "@reduxjs/toolkit";
import { HEADING_TABS as HEADING_TAB } from "../../util/constants/HEADING_TAB";

interface rootState {
  // tab label that represents where on the landing page the user is scrolled to
  selectedTab: HEADING_TAB;
}

const initialState = { selectedTab: HEADING_TAB.About } as rootState;

const rootSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSelectedTab(state, action) {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = rootSlice.actions;
export default rootSlice.reducer;
