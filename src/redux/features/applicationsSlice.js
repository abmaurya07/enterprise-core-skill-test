import { createSlice } from '@reduxjs/toolkit';
import config from '@config/appConfig.json';

const applicationsSlice = createSlice({
  name: 'applications',
  initialState: {
    applications: config.applications,
    activeApp: null,
    appComponents: []
  },
  reducers: {
    setActiveApp: (state, action) => {
      state.activeApp = action.payload;
    },

    setAppComponents: (state, action) => {
      state.appComponents = action.payload;
    },

    setInitialState: (state) => {
      state.activeApp = null;
      state.appComponents = [];
    },
  },
});

export const { setActiveApp, setAppComponents, setInitialState } = applicationsSlice.actions;
export default applicationsSlice.reducer;
