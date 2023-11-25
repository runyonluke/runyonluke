import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HEADING_TABS as HEADING_TAB } from "../../util/constants/HEADING_TAB";
import { EMPTY_REPOSITORY, Repository } from "../../util/models/Repository";

interface rootState {
  // tab label that represents where on the landing page the user is scrolled to
  selectedTab: HEADING_TAB;
  repository: Repository;
}

const initialState = {
  selectedTab: HEADING_TAB.About,
  repository: EMPTY_REPOSITORY,
} as rootState;

// get the information on the repository
// TODO: temporarily the wrong
export const getRepositoryData = createAsyncThunk(
  "getRepositoryData",
  async () => {
    const response = await fetch(
      `https://api.github.com/repos/runyonluke/javascript-algorithms`
    );
    return await response.json();
  }
);

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setSelectedTab(state, action) {
      state.selectedTab = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getRepositoryData.fulfilled, (state, { payload }) => {
      state.repository = {
        ...payload,
        created_at: new Date(payload.created_at).toLocaleString("en-US", {
          dateStyle: "short",
          timeStyle: "short",
        }),
        updated_at: new Date(payload.updated_at).toLocaleString("en-US", {
          dateStyle: "short",
          timeStyle: "short",
        }),
      };
    });
  },
});

export const { setSelectedTab } = rootSlice.actions;
export default rootSlice.reducer;
