import { configureStore } from '@reduxjs/toolkit';
import applicationsReducer from './features/applicationsSlice';
import viewPanelComponentReducer from './features/viewPanelComponentSlice';
import sharedStateReducer from './features/sharedStateSlice';
import featureFlagsReducer  from './features/featureFlagsSlice';

const store = configureStore({
  reducer: {
    applications: applicationsReducer,
    viewPanelComponent: viewPanelComponentReducer,
    sharedState: sharedStateReducer,
    featureFlags: featureFlagsReducer 
  },
});

export default store;
