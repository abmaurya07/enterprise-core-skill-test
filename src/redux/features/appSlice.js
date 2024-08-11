import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    currentApp: null,
    currentComponent: null,
    appConfig: null,
    menuItems: []
  },
  reducers: {
    setCurrentApp(state, action) {
      state.currentApp = action.payload.currentApp;
      state.appConfig = action.payload.appConfig;
      state.currentComponent = null;
    },
    setComponent(state, action) {
      state.currentComponent = action.payload;
    },
    setMenuItems(state, action) {
      state.menuItems = action.payload;
    }
  }
});

export const { setCurrentApp, setComponent, setMenuItems } = appSlice.actions;
export default appSlice.reducer;