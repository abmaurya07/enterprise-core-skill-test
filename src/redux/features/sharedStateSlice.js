import { createSlice } from '@reduxjs/toolkit';

const sharedStateSlice = createSlice({
  name: 'sharedState',
  initialState: {
    userData: null,
    appSpecificData: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    updateAppData: (state, action) => {
      const { appId, data } = action.payload;
      state.appSpecificData[appId] = data;
    },
  },
});

export const { setUserData, updateAppData } = sharedStateSlice.actions;
export default sharedStateSlice.reducer;
