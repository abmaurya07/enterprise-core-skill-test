import React from 'react';
import { useDispatch } from 'react-redux';

// App Actions from Redux Store
import { setActiveApp, setAppComponents, setInitialState as setInitialStateOfApplications } from '@store/features/applicationsSlice';

// ViewPanel Action from Redux Store
import { setInitialState as setInitialStateOfViewPanelComponent } from '@store/features/viewPanelComponentSlice';

//Main App Config
import config from '@config/appConfig.json';



// -------------------Application Switcher-------------------
const ApplicationSwitcher = () => {
  const dispatch = useDispatch();

  // Handle Application Change
  const handleAppChange = (event) => {
    const appId = event.target.value;
    if (appId === '') {
      dispatch(setInitialStateOfApplications()); // Reset the state of application when select an application is selected form the dropdown
      return
    }

    const selectedApp = config.applications.find(app => app.id === appId);
    //Dispatch to set active application
    dispatch(setActiveApp(selectedApp));

    // Dispatch to set active components based on the loaded application
    dispatch(setAppComponents(selectedApp.components));

    //Dispatch to reset the the redux state of View Panel Component
    dispatch(setInitialStateOfViewPanelComponent());
  };

  return (
    <div className=" p-6 flex rounded-lg shadow-lg gap-5 items-center">
      <h2 className="text-2xl font-bold mb-0">Select an Application</h2>

      {/* Select Application Dropdown */}
      <select
        onChange={handleAppChange}
        className="p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 appearance-none"
      >
        <option value="">Select an application</option>
        {config.applications.map(app => (
          <option key={app.id} value={app.id}>
            {app.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ApplicationSwitcher;
