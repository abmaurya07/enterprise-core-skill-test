import { createSlice } from '@reduxjs/toolkit';

const viewPanelComponentSlice = createSlice({
  name: 'viewPanelComponent',
  initialState: {
    name: null,
    version: null,
  },
  reducers: {
    setViewPanelComponent: (state, action) => {
      const {name, version} = action.payload
      state.name = name;
      state.version = version;

    },

    setInitialState: (state) => {
      state.name = null;
      state.version = null;
    },
  },
});

export const { setViewPanelComponent, setInitialState } = viewPanelComponentSlice.actions;
export default viewPanelComponentSlice.reducer;
