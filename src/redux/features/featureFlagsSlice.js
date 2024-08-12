import { createSlice } from '@reduxjs/toolkit';
import featureFlags from '@config/featureFlags.json';

const featureFlagsSlice = createSlice({
  name: 'featureFlags',
  initialState: featureFlags.features,
  reducers: {
    updateFeatureFlags: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateFeatureFlags } = featureFlagsSlice.actions;
export default featureFlagsSlice.reducer;
