import { createSlice } from '@reduxjs/toolkit';

const featureFlagsSlice = createSlice({
  name: 'featureFlags',
  initialState: {
    registrationFormV2Enabled: false,
  },
  reducers: {
    enableFeature: (state, action) => {
      state[action.payload] = true;
    },
    disableFeature: (state, action) => {
      state[action.payload] = false;
    },
  },
});

export const { enableFeature, disableFeature } = featureFlagsSlice.actions;
export default featureFlagsSlice.reducer;
