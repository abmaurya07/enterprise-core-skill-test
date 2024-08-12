import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveApp, setAppComponents, setInitialState as setInitialStateOfApplications } from '@store/features/applicationsSlice';
import config from '@config/appConfig.json';
import { setInitialState as setInitialStateOfViewPanelComponent } from '@store/features/viewPanelComponentSlice';

const ApplicationSwitcher = () => {
  const dispatch = useDispatch();

  const handleAppChange = (event) => {
    const appId = event.target.value;
    if (appId === '') {
      dispatch(setInitialStateOfApplications());
      return
    }

    const selectedApp = config.applications.find(app => app.id === appId);
    dispatch(setActiveApp(selectedApp));

    // Dispatch to set active components based on the loaded application
    dispatch(setAppComponents(selectedApp.components));
    dispatch(setInitialStateOfViewPanelComponent());
  };

  return (
    <div className=" p-6 flex rounded-lg shadow-lg gap-5 items-center">
      <h2 className="text-2xl font-bold mb-0">Select an Application</h2>
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
