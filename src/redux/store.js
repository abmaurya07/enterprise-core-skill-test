import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './features/menuSlice';
import componentsReducer from './features/componentsSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    components: componentsReducer,
  },
});

export default store;
