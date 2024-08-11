import { createSlice } from '@reduxjs/toolkit';

const componentsSlice = createSlice({
  name: 'components',
  initialState: {
    activeComponent: 'RegistrationFormV1',
  },
  reducers: {
    setActiveComponent: (state, action) => {
      state.activeComponent = action.payload;
    },
  },
});

export const { setActiveComponent } = componentsSlice.actions;
export default componentsSlice.reducer;
