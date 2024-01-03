import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* util */
import { HEADING_TABS as HEADING_TAB } from "../../util/constants/HEADING_TAB";
import { INITIAL_LINKEDIN } from "../../util/constants/INITIAL_LINKEDIN";
import { EMPTY_REPOSITORY } from "../../util/constants/EMPTY_REPOSITORY";
import { LinkedIn } from "../../util/models/LinkedIn";
import { Repository } from "../../util/models/Repository";

interface RootState {
  // tab label that represents where on the landing page the user is scrolled to
  selectedTab: HEADING_TAB;
  // information about the GitHub that this website is found on
  repository: Repository;
  // personal linked in information
  // to get from LinkedIn API, you have to add website as a company and register the app,
  // which I am not interesting in right now
  linkedIn: LinkedIn;
}

const initialState: RootState = {
  selectedTab: HEADING_TAB.About,
  repository: EMPTY_REPOSITORY,
  linkedIn: INITIAL_LINKEDIN,
};

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
