import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* util */
import { HEADING_TABS as HEADING_TAB } from "../../util/constants/HEADING_TAB";
import { INITIAL_LINKEDIN } from "../../util/constants/INITIAL_LINKEDIN";
import { EMPTY_REPOSITORY } from "../../util/constants/EMPTY_REPOSITORY";
import { LinkedIn } from "../../util/models/LinkedIn";
import { Repository } from "../../util/models/Repository";
import emailjs from "@emailjs/browser";

interface RootState {
  // tab label that represents where on the landing page the user is scrolled to
  selectedTab: HEADING_TAB;
  // information about the GitHub that this website is found on
  repository: Repository;
  // personal linked in information
  // to get from LinkedIn API, you have to add website as a company and register the app,
  // which I am not interesting in right now
  linkedIn: LinkedIn;
  // whether the user has submitted a contact form
  isContacted: boolean;
}

const initialState: RootState = {
  selectedTab: HEADING_TAB.About,
  repository: EMPTY_REPOSITORY,
  linkedIn: INITIAL_LINKEDIN,
  isContacted: false,
};

// get the information on the repository
// TODO: temporarily the wrong
export const getRepositoryData = createAsyncThunk(
  "getRepositoryData",
  async () => {
    const response = await fetch(
      `https://api.github.com/repos/runyonluke/runyonluke`
    );
    return await response.json();
  }
);

// fires when the user clicks the contact button
export const sendContactForm = createAsyncThunk(
  "sendContactForm",
  (form: string | HTMLFormElement) => {
    // I researched online and there are no security concerns with posting the below keys and IDs
    // my emailjs' identifier
    const PUBLIC_KEY = "VWe3picoHpE4tkDxN";
    // what is sent in the form
    const TEMPLATE_ID = "contact_form";
    // who sends the form
    const SERVICE_ID = "gmail_service";
    // email js sends handles all the logic for sending emails so I don't have to use an API
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
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
    builder
      .addCase(getRepositoryData.fulfilled, (state, { payload }) => {
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
      })
      .addCase(sendContactForm.pending, (state) => {
        state.isContacted = true;
      })
      .addCase(sendContactForm.rejected, (state) => {
        state.isContacted = false;
      });
  },
});

export const { setSelectedTab } = rootSlice.actions;
export default rootSlice.reducer;
