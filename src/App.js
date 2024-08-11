import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import Menu from './components/Menu';
import ViewPanel from './components/ViewPanel';
import { setMenuItems } from './redux/features/menuSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Assuming feature flag state comes from an API or environment variables
    const registrationFormV2Enabled = true; // Or false depending on the feature flag
  
    const initialMenu = [
      { name: 'Registration Form V1', component: 'RegistrationFormV1' },
    ];
  
    if (registrationFormV2Enabled) {
      initialMenu.push({ name: 'Registration Form V2', component: 'RegistrationFormV2' });
    }
  
    initialMenu.push({ name: 'Another Component', component: 'AnotherComponent' });
    initialMenu.push({ name: 'Flow Diagram', component: 'FlowDiagram' });
    initialMenu.push({ name: 'External Component', component: 'ExternalComponent' });

    dispatch(setMenuItems(initialMenu));
  }, [dispatch]);

  

  return (
    <div className="App">
      <Menu />
      <ViewPanel />
    </div>
  );
};

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default RootApp;
